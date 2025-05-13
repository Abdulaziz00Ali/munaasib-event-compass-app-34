
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Calendar, Clock, MapPin } from 'lucide-react';

const BookingForm = () => {
  const { id } = useParams<{ id: string }>();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  
  // Mock service data - in a real app, you would fetch based on the id
  const service = {
    id: id || '1',
    name: 'استوديو الأمل للتصوير',
    location: 'حي النخيل، الرياض',
    image: 'https://source.unsplash.com/featured/?camera,photography',
    rating: 4.8,
    basePrice: 1500,
    tax: 15, // 15%
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      serviceId: id,
      date,
      time,
      location,
      notes,
    });
    
    // In a real app, you would send this data to your backend
    alert('تم تأكيد الحجز بنجاح!');
  };
  
  const taxAmount = service.basePrice * (service.tax / 100);
  const totalAmount = service.basePrice + taxAmount;

  return (
    <Layout title="طلب الحجز" showBack>
      <div className="mb-6 flex items-center">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="mr-4">
          <div className="flex items-center">
            <span className="text-yellow-500 ml-1">★</span>
            <span className="font-semibold">{service.rating}</span>
          </div>
          <h2 className="font-bold text-lg">{service.name}</h2>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <MapPin className="w-4 h-4 ml-1" />
            {service.location}
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label className="block font-medium mb-2">تاريخ المناسبة</label>
            <div className="relative">
              <div className="absolute top-3 right-3 text-gray-500">
                <Calendar className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="اختر التاريخ"
                className="w-full border border-gray-300 rounded-lg py-3 px-10"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block font-medium mb-2">وقت المناسبة</label>
            <div className="relative">
              <div className="absolute top-3 right-3 text-gray-500">
                <Clock className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="اختر الوقت"
                className="w-full border border-gray-300 rounded-lg py-3 px-10"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block font-medium mb-2">موقع المناسبة</label>
            <div className="relative">
              <div className="absolute top-3 right-3 text-gray-500">
                <MapPin className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="أدخل الموقع"
                className="w-full border border-gray-300 rounded-lg py-3 px-10"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block font-medium mb-2">ملاحظات إضافية</label>
            <textarea
              placeholder="أضف أي ملاحظات خاصة بالحجز"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 h-32 resize-none"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">تفاصيل السعر</h3>
          <div className="flex justify-between mb-2">
            <span>السعر الأساسي</span>
            <span>{service.basePrice} ريال</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>الضريبة ({service.tax}%)</span>
            <span>{taxAmount} ريال</span>
          </div>
          <div className="flex justify-between font-bold mt-3 pt-3 border-t">
            <span>الإجمالي</span>
            <span className="text-munaasib-red">{totalAmount} ريال</span>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full mt-6 bg-munaasib-red text-white py-3 rounded-lg font-bold hover:bg-munaasib-darkRed transition-colors"
        >
          تأكيد الحجز
        </button>
      </form>
    </Layout>
  );
};

export default BookingForm;
