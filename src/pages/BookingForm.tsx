
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { ar } from 'date-fns/locale';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('');
  const [timeOpen, setTimeOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
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
  
  // Time slots available for selection
  const timeSlots = [
    '9:00 صباحاً', 
    '10:00 صباحاً', 
    '11:00 صباحاً', 
    '12:00 ظهراً',
    '1:00 مساءً', 
    '2:00 مساءً', 
    '3:00 مساءً', 
    '4:00 مساءً', 
    '5:00 مساءً', 
    '6:00 مساءً', 
    '7:00 مساءً', 
    '8:00 مساءً', 
    '9:00 مساءً'
  ];
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // In a real app, you would send this data to your backend
    const bookingData = {
      serviceId: id,
      serviceName: service.name,
      date: selectedDate ? formatHijriDate(selectedDate) : '',
      time,
      location: service.location,
      notes,
      image: service.image,
      status: 'pending',
      title: 'حجز جديد',
      venue: service.name,
    };
    
    console.log(bookingData);
    
    // Show success toast
    toast({
      title: "تم تأكيد الحجز بنجاح!",
      description: "يمكنك مراجعة تفاصيل الحجز في صفحة الحجوزات",
      variant: "success",
    });
    
    // Navigate to bookings page
    navigate('/bookings');
  };

  const formatHijriDate = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };
  
  // Handle date selection and close the popover
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setDateOpen(false);
  };
  
  // Handle time selection and close the popover
  const handleTimeSelect = (selectedTime: string) => {
    setTime(selectedTime);
    setTimeOpen(false);
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
            {service.location}
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label className="block font-medium mb-2">تاريخ المناسبة</label>
            <Popover open={dateOpen} onOpenChange={setDateOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-right font-normal relative",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <div className="absolute top-3 right-3 text-gray-500">
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                  <span className="mr-8">
                    {selectedDate ? formatHijriDate(selectedDate) : "اختر التاريخ"}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  locale={ar}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <label className="block font-medium mb-2">وقت المناسبة</label>
            <div className="relative">
              <Popover open={timeOpen} onOpenChange={setTimeOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-right font-normal relative",
                      !time && "text-muted-foreground"
                    )}
                  >
                    <div className="absolute top-3 right-3 text-gray-500">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="mr-8">
                      {time || "اختر الوقت"}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 max-h-60 overflow-auto" align="start">
                  <div className="grid grid-cols-1 gap-1 p-2">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot}
                        variant="ghost"
                        className="justify-start font-normal"
                        onClick={() => handleTimeSelect(slot)}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
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
            <span>ضريبة القيمة المضافة ({service.tax}%)</span>
            <span>{taxAmount} ريال</span>
          </div>
          <div className="flex justify-between font-bold mt-3 pt-3 border-t">
            <span>الإجمالي</span>
            <span className="text-munaasib-red">{totalAmount} ريال</span>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
        >
          تأكيد الحجز
        </button>
      </form>
    </Layout>
  );
};

export default BookingForm;
