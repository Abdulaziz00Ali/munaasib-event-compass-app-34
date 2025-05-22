
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import BookingCard from '@/components/ui/BookingCard';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Define booking type for better type safety
type Booking = {
  id: string;
  title: string;
  venue: string;
  date: string;
  time: string;
  location: string;
  image: string;
  status: 'confirmed' | 'pending' | 'cancelled';
};

const DEFAULT_UPCOMING_BOOKINGS: Booking[] = [
  {
    id: '1',
    title: 'حفل زفاف تقليدي',
    venue: 'قصر الأفراح',
    date: '25 رمضان',
    time: '7:00 مساءً',
    location: 'الرياض، حي النرجس',
    image: 'https://source.unsplash.com/featured/?wedding,hall',
    status: 'confirmed',
  },
  {
    id: '2',
    title: 'حفل عيد ميلاد',
    venue: 'دار المناسبات',
    date: '1 شوال',
    time: '5:30 مساءً',
    location: 'الرياض، حي الملقا',
    image: 'https://source.unsplash.com/featured/?birthday,party',
    status: 'pending',
  },
  {
    id: '3',
    title: 'مؤتمر أعمال',
    venue: 'فندق الأصالة',
    date: '3 شوال',
    time: '9:00 صباحاً',
    location: 'الرياض، حي العليا',
    image: 'https://source.unsplash.com/featured/?conference,business',
    status: 'confirmed',
  },
];

const DEFAULT_PAST_BOOKINGS: Booking[] = [
  {
    id: '4',
    title: 'اجتماع عمل',
    venue: 'مركز الأعمال',
    date: '15 شعبان',
    time: '10:00 صباحاً',
    location: 'الرياض، حي الورود',
    image: 'https://source.unsplash.com/featured/?meeting,business',
    status: 'confirmed',
  },
  {
    id: '5',
    title: 'حفل تخرج',
    venue: 'قاعة الجامعة',
    date: '10 شعبان',
    time: '4:00 مساءً',
    location: 'الرياض، حي الجامعة',
    image: 'https://source.unsplash.com/featured/?graduation,ceremony',
    status: 'confirmed',
  },
];

const Bookings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [upcomingBookingsList, setUpcomingBookingsList] = useState<Booking[]>([]);
  const [pastBookingsList, setPastBookingsList] = useState<Booking[]>([]);
  
  // Load bookings from localStorage on component mount
  useEffect(() => {
    const storedUpcomingBookings = localStorage.getItem('upcomingBookings');
    const storedPastBookings = localStorage.getItem('pastBookings');
    
    // Initialize with stored bookings or defaults
    setUpcomingBookingsList(
      storedUpcomingBookings ? JSON.parse(storedUpcomingBookings) : DEFAULT_UPCOMING_BOOKINGS
    );
    setPastBookingsList(
      storedPastBookings ? JSON.parse(storedPastBookings) : DEFAULT_PAST_BOOKINGS
    );
    
    // Check for new booking from BookingForm
    const newBooking = localStorage.getItem('newBooking');
    if (newBooking) {
      const bookingData = JSON.parse(newBooking);
      
      // Add the new booking to upcoming list
      setUpcomingBookingsList(prev => {
        const updatedList = [...prev, {
          id: String(Date.now()), // Generate unique ID
          title: bookingData.title || 'حجز جديد',
          venue: bookingData.venue || bookingData.serviceName,
          date: bookingData.date || '',
          time: bookingData.time || '',
          location: bookingData.location || '',
          image: bookingData.image || 'https://source.unsplash.com/featured/?event',
          status: bookingData.status || 'pending',
        }];
        
        // Update localStorage
        localStorage.setItem('upcomingBookings', JSON.stringify(updatedList));
        return updatedList;
      });
      
      // Clear the new booking from localStorage
      localStorage.removeItem('newBooking');
      
      // Show toast for new booking
      toast({
        title: "تم إضافة حجز جديد",
        description: "تمت إضافة الحجز بنجاح إلى قائمة الحجوزات",
      });
    }
    
    // Check for edited booking
    const editedBooking = localStorage.getItem('editedBooking');
    if (editedBooking) {
      const bookingData = JSON.parse(editedBooking);
      
      // Update the booking in the appropriate list
      setUpcomingBookingsList(prev => {
        const updatedList = prev.map(booking => 
          booking.id === bookingData.id ? { ...booking, ...bookingData } : booking
        );
        
        // Update localStorage
        localStorage.setItem('upcomingBookings', JSON.stringify(updatedList));
        return updatedList;
      });
      
      setPastBookingsList(prev => {
        const updatedList = prev.map(booking => 
          booking.id === bookingData.id ? { ...booking, ...bookingData } : booking
        );
        
        // Update localStorage
        localStorage.setItem('pastBookings', JSON.stringify(updatedList));
        return updatedList;
      });
      
      // Clear the edited booking from localStorage
      localStorage.removeItem('editedBooking');
      
      // Show toast for edited booking
      toast({
        title: "تم تحديث الحجز",
        description: "تم تحديث تفاصيل الحجز بنجاح",
      });
    }
  }, [toast]);
  
  const handleEditBooking = (id: string) => {
    // Find the booking to edit
    const bookingToEdit = [...upcomingBookingsList, ...pastBookingsList].find(
      booking => booking.id === id
    );
    
    if (bookingToEdit) {
      // Store the booking in localStorage for the form to access
      localStorage.setItem('currentEditBooking', JSON.stringify(bookingToEdit));
      
      // Navigation to edit page is now handled in the BookingCard component
      console.log('Editing booking:', id);
      
      // Show toast notification
      toast({
        title: "تم فتح التعديل",
        description: "يمكنك تعديل تفاصيل الحجز الآن",
      });
    }
  };
  
  const handleCancelBooking = (id: string) => {
    // Handle cancel booking
    console.log('Canceling booking:', id);
    
    // Update the appropriate booking list
    if (activeTab === 'upcoming') {
      setUpcomingBookingsList(prev => {
        const updatedList = prev.filter(booking => booking.id !== id);
        // Update localStorage
        localStorage.setItem('upcomingBookings', JSON.stringify(updatedList));
        return updatedList;
      });
    } else {
      setPastBookingsList(prev => {
        const updatedList = prev.filter(booking => booking.id !== id);
        // Update localStorage
        localStorage.setItem('pastBookings', JSON.stringify(updatedList));
        return updatedList;
      });
    }
    
    // Show toast notification
    toast({
      title: "تم إلغاء الحجز",
      description: "تم إلغاء الحجز بنجاح",
    });
  };

  const handleTabChange = (tab: 'upcoming' | 'past') => {
    setActiveTab(tab);
    
    // Show toast notification
    toast({
      title: tab === 'upcoming' ? "الحجوزات القادمة" : "الحجوزات السابقة",
      description: `تم الانتقال إلى ${tab === 'upcoming' ? "الحجوزات القادمة" : "الحجوزات السابقة"}`,
    });
  };

  return (
    <Layout title="حجوزاتي">
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'upcoming'
              ? 'text-munaasib-red border-b-2 border-munaasib-red'
              : 'text-gray-500'
          }`}
          onClick={() => handleTabChange('upcoming')}
        >
          الحجوزات القادمة
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'past'
              ? 'text-munaasib-red border-b-2 border-munaasib-red'
              : 'text-gray-500'
          }`}
          onClick={() => handleTabChange('past')}
        >
          الحجوزات السابقة
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'upcoming' ? (
          upcomingBookingsList.length > 0 ? (
            upcomingBookingsList.map((booking) => (
              <BookingCard
                key={booking.id}
                {...booking}
                onEdit={handleEditBooking}
                onCancel={handleCancelBooking}
              />
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">لا توجد حجوزات قادمة</p>
            </div>
          )
        ) : pastBookingsList.length > 0 ? (
          pastBookingsList.map((booking) => (
            <BookingCard
              key={booking.id}
              {...booking}
              onEdit={handleEditBooking}
              onCancel={handleCancelBooking}
            />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">لا توجد حجوزات سابقة</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Bookings;
