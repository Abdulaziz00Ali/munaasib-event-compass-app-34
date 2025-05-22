
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import BookingCard from '@/components/ui/BookingCard';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Bookings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [upcomingBookingsList, setUpcomingBookingsList] = useState([
    {
      id: '1',
      title: 'حفل زفاف تقليدي',
      venue: 'قصر الأفراح',
      date: '25 رمضان',
      time: '7:00 مساءً',
      location: 'الرياض، حي النرجس',
      image: 'https://source.unsplash.com/featured/?wedding,hall',
      status: 'confirmed' as const,
    },
    {
      id: '2',
      title: 'حفل عيد ميلاد',
      venue: 'دار المناسبات',
      date: '1 شوال',
      time: '5:30 مساءً',
      location: 'الرياض، حي الملقا',
      image: 'https://source.unsplash.com/featured/?birthday,party',
      status: 'pending' as const,
    },
    {
      id: '3',
      title: 'مؤتمر أعمال',
      venue: 'فندق الأصالة',
      date: '3 شوال',
      time: '9:00 صباحاً',
      location: 'الرياض، حي العليا',
      image: 'https://source.unsplash.com/featured/?conference,business',
      status: 'confirmed' as const,
    },
  ]);

  const [pastBookingsList, setPastBookingsList] = useState([
    {
      id: '4',
      title: 'اجتماع عمل',
      venue: 'مركز الأعمال',
      date: '15 شعبان',
      time: '10:00 صباحاً',
      location: 'الرياض، حي الورود',
      image: 'https://source.unsplash.com/featured/?meeting,business',
      status: 'confirmed' as const,
    },
    {
      id: '5',
      title: 'حفل تخرج',
      venue: 'قاعة الجامعة',
      date: '10 شعبان',
      time: '4:00 مساءً',
      location: 'الرياض، حي الجامعة',
      image: 'https://source.unsplash.com/featured/?graduation,ceremony',
      status: 'confirmed' as const,
    },
  ]);
  
  const handleEditBooking = (id: string) => {
    // Navigation to edit page is now handled in the BookingCard component
    console.log('Editing booking:', id);
    
    // Show toast notification
    toast({
      title: "تم فتح التعديل",
      description: "يمكنك تعديل تفاصيل الحجز الآن",
    });
  };
  
  const handleCancelBooking = (id: string) => {
    // Handle cancel booking
    console.log('Canceling booking:', id);
    
    // Update the state to remove the canceled booking
    if (activeTab === 'upcoming') {
      setUpcomingBookingsList(prev => prev.filter(booking => booking.id !== id));
    } else {
      setPastBookingsList(prev => prev.filter(booking => booking.id !== id));
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
