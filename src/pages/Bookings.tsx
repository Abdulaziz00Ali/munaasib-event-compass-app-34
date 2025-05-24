
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import BookingCard from '@/components/ui/BookingCard';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle } from 'lucide-react';

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
    
    setUpcomingBookingsList(
      storedUpcomingBookings ? JSON.parse(storedUpcomingBookings) : DEFAULT_UPCOMING_BOOKINGS
    );
    setPastBookingsList(
      storedPastBookings ? JSON.parse(storedPastBookings) : DEFAULT_PAST_BOOKINGS
    );
    
    const newBooking = localStorage.getItem('newBooking');
    if (newBooking) {
      const bookingData = JSON.parse(newBooking);
      
      setUpcomingBookingsList(prev => {
        const updatedList = [...prev, {
          id: String(Date.now()),
          title: bookingData.title || 'حجز جديد',
          venue: bookingData.venue || bookingData.serviceName,
          date: bookingData.date || '',
          time: bookingData.time || '',
          location: bookingData.location || '',
          image: bookingData.image || 'https://source.unsplash.com/featured/?event',
          status: bookingData.status || 'pending',
        }];
        
        localStorage.setItem('upcomingBookings', JSON.stringify(updatedList));
        return updatedList;
      });
      
      localStorage.removeItem('newBooking');
      
      toast({
        title: "تم إضافة حجز جديد",
        description: "تمت إضافة الحجز بنجاح إلى قائمة الحجوزات",
      });
    }
    
    const editedBooking = localStorage.getItem('editedBooking');
    if (editedBooking) {
      const bookingData = JSON.parse(editedBooking);
      
      setUpcomingBookingsList(prev => {
        const updatedList = prev.map(booking => 
          booking.id === bookingData.id ? { ...booking, ...bookingData } : booking
        );
        
        localStorage.setItem('upcomingBookings', JSON.stringify(updatedList));
        return updatedList;
      });
      
      setPastBookingsList(prev => {
        const updatedList = prev.map(booking => 
          booking.id === bookingData.id ? { ...booking, ...bookingData } : booking
        );
        
        localStorage.setItem('pastBookings', JSON.stringify(updatedList));
        return updatedList;
      });
      
      localStorage.removeItem('editedBooking');
      
      toast({
        title: "تم تحديث الحجز",
        description: "تم تحديث تفاصيل الحجز بنجاح",
      });
    }
  }, [toast]);
  
  const handleEditBooking = (id: string) => {
    const bookingToEdit = [...upcomingBookingsList, ...pastBookingsList].find(
      booking => booking.id === id
    );
    
    if (bookingToEdit) {
      localStorage.setItem('currentEditBooking', JSON.stringify(bookingToEdit));
      
      console.log('Editing booking:', id);
      
      toast({
        title: "تم فتح التعديل",
        description: "يمكنك تعديل تفاصيل الحجز الآن",
      });
    }
  };
  
  const handleCancelBooking = (id: string) => {
    console.log('Canceling booking:', id);
    
    if (activeTab === 'upcoming') {
      setUpcomingBookingsList(prev => {
        const updatedList = prev.filter(booking => booking.id !== id);
        localStorage.setItem('upcomingBookings', JSON.stringify(updatedList));
        return updatedList;
      });
    } else {
      setPastBookingsList(prev => {
        const updatedList = prev.filter(booking => booking.id !== id);
        localStorage.setItem('pastBookings', JSON.stringify(updatedList));
        return updatedList;
      });
    }
    
    toast({
      title: "تم إلغاء الحجز",
      description: "تم إلغاء الحجز بنجاح",
    });
  };

  const handleTabChange = (tab: 'upcoming' | 'past') => {
    setActiveTab(tab);
    
    toast({
      title: tab === 'upcoming' ? "الحجوزات القادمة" : "الحجوزات السابقة",
      description: `تم الانتقال إلى ${tab === 'upcoming' ? "الحجوزات القادمة" : "الحجوزات السابقة"}`,
    });
  };

  return (
    <Layout title="حجوزاتي">
      {/* Messages Section */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">الرسائل</h3>
          <Link to="/messages" className="text-munaasib-red text-sm">عرض الكل</Link>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-munaasib-red rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">مطبخ الأصالة</h4>
              <p className="text-xs text-gray-600">بخصوص حجز الخميس...</p>
            </div>
            <span className="text-xs text-gray-500">منذ 30 دقيقة</span>
          </div>
        </div>
      </div>

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
