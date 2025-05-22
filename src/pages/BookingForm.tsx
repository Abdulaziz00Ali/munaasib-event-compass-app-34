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

type EditBookingData = {
  id: string;
  title: string;
  venue: string;
  date: string;
  time: string;
  location: string;
  image: string;
  status: 'confirmed' | 'pending' | 'cancelled';
};

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
  const [hijriDay, setHijriDay] = useState<string | null>(null);
  const [hijriMonth, setHijriMonth] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBooking, setEditingBooking] = useState<EditBookingData | null>(null);
  
  // Get selected package from location state if available
  const selectedPackageId = location.state?.selectedPackage || null;
  
  // Check if we're editing an existing booking
  useEffect(() => {
    // Check if we're editing by looking for stored booking data
    const storedBooking = localStorage.getItem('currentEditBooking');
    
    if (storedBooking) {
      try {
        const bookingData = JSON.parse(storedBooking) as EditBookingData;
        setEditingBooking(bookingData);
        setIsEditing(true);
        
        // Pre-fill form fields with booking data
        setHijriDay(null); // Will be parsed from the date
        setHijriMonth(null); // Will be parsed from the date
        setTime(bookingData.time || '');
        
        // Show toast to indicate we're in edit mode
        toast({
          title: "وضع التعديل",
          description: "أنت الآن تقوم بتعديل حجز موجود",
        });
        
        // Parse the date (if possible)
        if (bookingData.date) {
          const dateParts = bookingData.date.split(' ');
          if (dateParts.length >= 2) {
            setHijriDay(dateParts[0]);
            setHijriMonth(dateParts.slice(1).join(' '));
          }
        }
      } catch (error) {
        console.error('Error parsing stored booking:', error);
        // Clear invalid data
        localStorage.removeItem('currentEditBooking');
      }
    } else {
      // Check for saved date in localStorage for new bookings
      const savedDateStr = localStorage.getItem('selectedBookingDate');
      const savedHijriDay = localStorage.getItem('selectedHijriDay');
      const savedHijriMonth = localStorage.getItem('selectedHijriMonth');
      
      // Only proceed if we have all three values
      if (savedDateStr && savedHijriDay && savedHijriMonth) {
        try {
          const savedDate = new Date(savedDateStr);
          // Check if date is valid
          if (isNaN(savedDate.getTime())) {
            console.error('Invalid date from localStorage');
            clearStoredDateData();
            return;
          }
          
          // Set the date from localStorage if it exists
          setSelectedDate(savedDate);
          setHijriDay(savedHijriDay);
          setHijriMonth(savedHijriMonth);
          
          console.log(`Loading saved date from localStorage: ${savedHijriDay}/${savedHijriMonth}`);
        } catch (error) {
          console.error('Error parsing saved date:', error);
          // Clear invalid date data
          clearStoredDateData();
        }
      }
    }
  }, [toast]);
  
  // Function to clear all stored date data
  const clearStoredDateData = () => {
    localStorage.removeItem('selectedBookingDate');
    localStorage.removeItem('selectedHijriDay');
    localStorage.removeItem('selectedHijriMonth');
    setSelectedDate(undefined);
    setHijriDay(null);
    setHijriMonth(null);
  };
  
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
    
    const formattedDate = hijriDay && hijriMonth ? `${hijriDay} ${hijriMonth} 1446` : '';
    
    if (isEditing && editingBooking) {
      // We're updating an existing booking
      const updatedBooking = {
        ...editingBooking,
        date: formattedDate,
        time: time,
        notes: notes,
        // Keep other properties the same
      };
      
      // Store the updated booking in localStorage for the Bookings page to pick up
      localStorage.setItem('editedBooking', JSON.stringify(updatedBooking));
      
      // Clear editing state
      localStorage.removeItem('currentEditBooking');
      
      // Show success toast
      toast({
        title: "تم تحديث الحجز بنجاح!",
        description: "تم تحديث تفاصيل الحجز وحفظها",
        variant: "default",
      });
    } else {
      // We're creating a new booking
      const bookingData = {
        serviceId: id,
        serviceName: service.name,
        date: formattedDate,
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
      
      // Store the new booking in localStorage for the Bookings page to pick up
      localStorage.setItem('newBooking', JSON.stringify(bookingData));
      
      // Show success toast
      toast({
        title: "تم تأكيد الحجز بنجاح!",
        description: "يمكنك مراجعة تفاصيل الحجز في صفحة الحجوزات",
        variant: "default",
      });
    }
    
    // Navigate to bookings page
    navigate('/bookings');
    
    // Clear all stored date data after successful booking
    clearStoredDateData();
  };

  // Custom function to format Hijri date with priority to stored Hijri values
  const formatHijriDate = (date: Date) => {
    // Check if we have stored Hijri values first
    if (hijriDay && hijriMonth) {
      return `${hijriDay} ${hijriMonth} 1446`;
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
    if (!date) {
      clearStoredDateData();
      setDateOpen(false);
      
      toast({
        title: "تم إلغاء اختيار التاريخ",
        description: "يرجى اختيار تاريخ جديد للحجز",
      });
      return;
    }
    
    // Format the date to Hijri to get day and month
    const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
    }).format(date);
    
    // Parse the Hijri date components
    const parts = hijriDate.split(' ');
    const day = parts[0];
    const month = parts.length > 1 ? parts.slice(1).join(' ') : '';
    
    if (day && month) {
      // Update state
      setSelectedDate(date);
      setHijriDay(day);
      setHijriMonth(month);
      
      // Store in localStorage
      localStorage.setItem('selectedBookingDate', date.toISOString());
      localStorage.setItem('selectedHijriDay', day);
      localStorage.setItem('selectedHijriMonth', month);
      
      toast({
        title: "تم اختيار التاريخ",
        description: `تم اختيار ${day} ${month} كتاريخ للحجز`,
      });
    } else {
      toast({
        title: "خطأ في تنسيق التاريخ",
        description: "تعذر تحليل التاريخ الهجري بشكل صحيح",
        variant: "destructive",
      });
    }
    
    setDateOpen(false);
  };
  
  // Handle time selection and close the popover
  const handleTimeSelect = (selectedTime: string) => {
    setTime(selectedTime);
    setTimeOpen(false);
    
    toast({
      title: "تم اختيار الوقت",
      description: `تم اختيار ${selectedTime} كوقت للحجز`,
    });
  };

  return (
    <Layout title={isEditing ? "تعديل الحجز" : "طلب الحجز"} showBack>
      <div className="mb-6 flex items-center">
        <img 
          src={editingBooking?.image || service.image} 
          alt={editingBooking?.venue || service.name} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="mr-4">
          <div className="flex items-center">
            <span className="text-yellow-500 ml-1">★</span>
            <span className="font-semibold">{service.rating}</span>
          </div>
          <h2 className="font-bold text-lg">{editingBooking?.venue || service.name}</h2>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            {editingBooking?.location || service.location}
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
                    !hijriDay && !hijriMonth && !editingBooking?.date && "text-muted-foreground"
                  )}
                >
                  <div className="absolute top-3 right-3 text-gray-500">
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                  <span className="mr-8">
                    {hijriDay && hijriMonth 
                      ? `${hijriDay} ${hijriMonth} 1446`
                      : editingBooking?.date
                        ? editingBooking.date
                        : "اختر التاريخ"}
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
          disabled={(!hijriDay || !hijriMonth) && !editingBooking?.date || !time}
        >
          {isEditing ? "حفظ التعديلات" : "تأكيد الحجز"}
        </button>
      </form>
    </Layout>
  );
};

export default BookingForm;
