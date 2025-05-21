import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('');
  const [timeOpen, setTimeOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [notes, setNotes] = useState('');
  
  // Get selected package from location state if available
  const selectedPackageId = location.state?.selectedPackage || null;
  
  // Check for saved date in localStorage on component mount
  useEffect(() => {
    const savedDateStr = localStorage.getItem('selectedBookingDate');
    const savedHijriDay = localStorage.getItem('selectedHijriDay');
    const savedHijriMonth = localStorage.getItem('selectedHijriMonth');
    
    if (savedDateStr) {
      try {
        const savedDate = new Date(savedDateStr);
        
        // If we have saved Hijri information, use that to create a more accurate display date
        if (savedHijriDay && savedHijriMonth) {
          console.log(`Using saved Hijri date: ${savedHijriDay}/${savedHijriMonth}`);
        }
        
        setSelectedDate(savedDate);
      } catch (error) {
        console.error('Error parsing saved date:', error);
      }
    }
  }, []);
  
  // Mock service data - in a real app, you would fetch based on the id
  const service = {
    id: id || '1',
    name: 'استوديو الأمل للتصوير',
    location: 'حي النخيل، الرياض',
    image: 'https://source.unsplash.com/featured/?camera,photography',
    rating: 4.8,
    basePrice: 1500,
    tax: 15, // 15%
    packages: [
      {
        id: 'gold',
        name: 'الباقة الذهبية',
        price: 15000,
      },
      {
        id: 'silver',
        name: 'الباقة الفضية',
        price: 10000,
      },
      {
        id: 'bronze',
        name: 'الباقة البرونزية',
        price: 7000,
      },
    ],
  };
  
  // Get price from selected package or use base price
  const getBasePrice = () => {
    if (selectedPackageId) {
      const selectedPackage = service.packages.find(pkg => pkg.id === selectedPackageId);
      return selectedPackage ? selectedPackage.price : service.basePrice;
    }
    return service.basePrice;
  };
  
  const basePrice = getBasePrice();
  const taxAmount = basePrice * (service.tax / 100);
  const totalAmount = basePrice + taxAmount;
  
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
      basePrice: basePrice,
      taxAmount: taxAmount,
      totalAmount: totalAmount,
    };
    
    console.log(bookingData);
    
    // Show success toast - changing variant from "success" to "default"
    toast({
      title: "تم تأكيد الحجز بنجاح!",
      description: "يمكنك مراجعة تفاصيل الحجز في صفحة الحجوزات",
      variant: "default",
    });
    
    // Navigate to bookings page
    navigate('/bookings');
    
    // Clear all stored date data after successful booking
    localStorage.removeItem('selectedBookingDate');
    localStorage.removeItem('selectedHijriDay');
    localStorage.removeItem('selectedHijriMonth');
  };

  // Custom function to format Hijri date with priority to stored Hijri values
  const formatHijriDate = (date: Date) => {
    // Check if we have stored Hijri values first
    const savedHijriDay = localStorage.getItem('selectedHijriDay');
    const savedHijriMonth = localStorage.getItem('selectedHijriMonth');
    
    if (savedHijriDay && savedHijriMonth) {
      return `${savedHijriDay} ${savedHijriMonth} 1446`;
    }
    
    // Fallback to calculated Hijri date
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
    
    // Update localStorage when date is changed in booking form
    if (date) {
      // Format the Gregorian date to Hijri to get day and month
      const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
      }).format(date);
      
      // Parse the Hijri date components using a similar function to ServiceDetails
      const dayMatch = hijriDate.match(/^(\d+)/);
      const day = dayMatch ? parseInt(dayMatch[1], 10) : null;
      
      let month = null;
      if (dayMatch && dayMatch.index !== undefined) {
        const startPos = dayMatch.index + dayMatch[0].length;
        month = hijriDate.substring(startPos).trim();
      }
      
      localStorage.setItem('selectedBookingDate', date.toISOString());
      
      if (day !== null) {
        localStorage.setItem('selectedHijriDay', day.toString());
      }
      
      if (month) {
        localStorage.setItem('selectedHijriMonth', month);
      }
    } else {
      localStorage.removeItem('selectedBookingDate');
      localStorage.removeItem('selectedHijriDay');
      localStorage.removeItem('selectedHijriMonth');
    }
  };
  
  // Handle time selection and close the popover
  const handleTimeSelect = (selectedTime: string) => {
    setTime(selectedTime);
    setTimeOpen(false);
  };

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
                  className="p-3 pointer-events-auto"
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
            <span>{basePrice} ريال</span>
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
