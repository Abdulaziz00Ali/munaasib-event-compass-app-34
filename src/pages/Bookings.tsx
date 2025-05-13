
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import BookingCard from '@/components/ui/BookingCard';

const Bookings = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingBookings = [
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
  ];

  const pastBookings = [
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
  ];
  
  const handleEditBooking = (id: string) => {
    // Handle edit booking
    console.log('Editing booking:', id);
  };
  
  const handleCancelBooking = (id: string) => {
    // Handle cancel booking
    console.log('Canceling booking:', id);
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
          onClick={() => setActiveTab('upcoming')}
        >
          الحجوزات القادمة
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'past'
              ? 'text-munaasib-red border-b-2 border-munaasib-red'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('past')}
        >
          الحجوزات السابقة
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'upcoming' ? (
          upcomingBookings.length > 0 ? (
            upcomingBookings.map((booking) => (
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
        ) : pastBookings.length > 0 ? (
          pastBookings.map((booking) => (
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
