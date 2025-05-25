import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Share, Calendar, Star, MapPin, StarHalf, StarOff } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableRow 
} from '@/components/ui/table';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ar } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';
import { useUserType } from '@/hooks/useUserType';
import { getVenueById } from '@/data/tabukVenues';

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { userType } = useUserType();
  const isVendor = userType === 'vendor';
  
  const [selectedPackage, setSelectedPackage] = useState<string>('gold');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedHijriDay, setSelectedHijriDay] = useState<string | null>(null);
  const [selectedHijriMonth, setSelectedHijriMonth] = useState<string | null>(null);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const [availableDates, setAvailableDates] = useState([
    { day: 14, month: 'ذو القعدة', year: 1446 },
    { day: 15, month: 'ذو القعدة', year: 1446 },
    { day: 18, month: 'ذو القعدة', year: 1446 },
    { day: 20, month: 'ذو القعدة', year: 1446 },
  ]);
  
  // Try to get real venue data first, fallback to mock data
  const realVenue = getVenueById(id || '');
  
  const service = realVenue ? {
    id: realVenue.id,
    name: realVenue.name,
    location: realVenue.address,
    image: realVenue.image,
    rating: realVenue.rating,
    reviewCount: Math.floor(Math.random() * 300) + 100, // Random review count
    description: realVenue.description,
    classification: 'قاعات أفراح',
    capacity: '300 ضيف',
    basePrice: realVenue.price,
    features: realVenue.features,
    providesFullService: true,
    fullServiceDetails: 'القاعة متكفلة بتوفير خدمات القهوجية والمطبخ بشكل كامل، مع إمكانية إضافة خدمات إضافية حسب الطلب.',
    packages: realVenue.packages, // Use real packages (Hall only vs Hall + Dinner)
    reviews: realVenue.reviews,
    gallery: realVenue.gallery
  } : {
    id: id || '1',
    name: 'قصر الأفراح الملكي',
    location: 'حي النرجس، الرياض',
    image: 'https://source.unsplash.com/featured/?wedding,hall',
    rating: 4.8,
    reviewCount: 236,
    description: 'نقدم خدمات تنظيم حفلات الزفاف والمناسبات بأعلى مستويات الجودة والفخامة. متخصصون في الضيافة السعودية الأصيلة مع لمسات عصرية.',
    classification: 'قاعات أفراح',
    capacity: '500 ضيف',
    basePrice: 5000,
    features: [
      { 
        name: 'ضيافة فاخرة', 
        icon: '✨',
        description: 'نقدم خدمات ضيافة متكاملة مع أرقى أنواع المشروبات والحلويات'
      },
      { 
        name: 'إضاءة احترافية', 
        icon: '💡',
        description: 'أنظمة إضاءة متطورة مع خيارات متعددة للألوان والتأثيرات'
      },
      { 
        name: 'تنظيم كامل', 
        icon: '👥',
        description: 'فريق متكامل من المنظمين والمنسقين لإدارة الحفل من البداية للنهاية'
      },
      { 
        name: 'ركن سيارات', 
        icon: '🚗',
        description: 'خدمة صف السيارات متوفرة لجميع الضيوف'
      }
    ],
    providesFullService: true,
    fullServiceDetails: 'القاعة متكفلة بتوفير خدمات القهوجية والمطبخ بشكل كامل، مع إمكانية إضافة خدمات إضافية حسب الطلب.',
    packages: [
      {
        id: 'gold',
        name: 'الباقة الذهبية',
        price: 15000,
        description: 'قاعة فاخرة + ضيافة كاملة + تنسيق',
      },
      {
        id: 'silver',
        name: 'الباقة الفضية',
        price: 10000,
        description: 'قاعة + ضيافة أساسية',
      },
      {
        id: 'bronze',
        name: 'الباقة البرونزية',
        price: 7000,
        description: 'قاعة فقط',
      },
    ],
    reviews: [
      {
        id: '1',
        name: 'أحمد محمد',
        rating: 5,
        date: 'قبل 3 أيام',
        comment: 'خدمة ممتازة وتنظيم رائع للحفل'
      },
      {
        id: '2',
        name: 'سارة عبدالله',
        rating: 4,
        date: 'قبل أسبوع',
        comment: 'تجربة جميلة وموقع مميز'
      }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?wedding,hall,luxury',
      'https://source.unsplash.com/featured/?wedding,decoration',
      'https://source.unsplash.com/featured/?wedding,cake'
    ]
  };

  // Load any saved date information on component mount
  useEffect(() => {
    const savedDateStr = localStorage.getItem('selectedBookingDate');
    const savedHijriDay = localStorage.getItem('selectedHijriDay');
    const savedHijriMonth = localStorage.getItem('selectedHijriMonth');
    
    if (savedDateStr && savedHijriDay && savedHijriMonth) {
      try {
        const savedDate = new Date(savedDateStr);
        if (isNaN(savedDate.getTime())) {
          console.error('Invalid date loaded from localStorage');
          clearStoredDateData();
          return;
        }
        setSelectedDate(savedDate);
        setSelectedHijriDay(savedHijriDay);
        setSelectedHijriMonth(savedHijriMonth);
      } catch (error) {
        console.error('Error loading saved date:', error);
        // Clear invalid data
        clearStoredDateData();
      }
    }
  }, []);

  // Function to clear stored date data
  const clearStoredDateData = () => {
    localStorage.removeItem('selectedBookingDate');
    localStorage.removeItem('selectedHijriDay');
    localStorage.removeItem('selectedHijriMonth');
    setSelectedDate(undefined);
    setSelectedHijriDay(null);
    setSelectedHijriMonth(null);
  };

  // Parse a Hijri date string into its components
  const parseHijriDate = (hijriDateStr: string) => {
    if (!hijriDateStr) return { day: null, month: null };
    
    const parts = hijriDateStr.split(' ');
    const day = parts[0];
    const month = parts.length > 1 ? parts.slice(1).join(' ') : null;
    
    return { day, month };
  };

  // Handle date selection from calendar
  const handleDateSelect = (date: Date | undefined) => {
    if (!date) {
      clearStoredDateData();
      
      toast({
        title: "تم إلغاء اختيار التاريخ",
        description: "تم إلغاء تاريخ الحجز بنجاح",
      });
      
      setCalendarOpen(false);
      return;
    }
    
    // Format the Gregorian date to Hijri
    const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
    }).format(date);
    
    // Parse the Hijri date components
    const parts = hijriDate.split(' ');
    const day = parts[0];
    const month = parts.length > 1 ? parts.slice(1).join(' ') : '';
    
    if (day && month) {
      // Set the selected Hijri day and month
      setSelectedHijriDay(day);
      setSelectedHijriMonth(month);
      
      // Set the selected date
      setSelectedDate(date);
      
      // Store the selected date in localStorage
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
    
    setCalendarOpen(false);
  };

  // Format date in Hijri
  const formatHijriDate = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };
  
  // Check if a date is the currently selected date
  const isDateSelected = (day: number, month: string) => {
    const dayStr = day.toString();
    return selectedHijriDay === dayStr && selectedHijriMonth === month;
  };

  // Handle click on an available date
  const handleDateClick = (day: number, month: string) => {
    // Convert to strings for consistency
    const dayStr = day.toString();
    
    // If this date is already selected, deselect it
    if (isDateSelected(day, month)) {
      clearStoredDateData();
      
      toast({
        title: "تم إلغاء اختيار التاريخ",
        description: "تم إلغاء تاريخ الحجز بنجاح",
      });
      return;
    }
    
    // Otherwise select it
    setSelectedHijriDay(dayStr);
    setSelectedHijriMonth(month);
    
    // Store in localStorage
    localStorage.setItem('selectedHijriDay', dayStr);
    localStorage.setItem('selectedHijriMonth', month);
    
    // Since we don't have an exact Gregorian date for the Hijri date,
    // we'll use the current date as a placeholder
    const today = new Date();
    localStorage.setItem('selectedBookingDate', today.toISOString());
    setSelectedDate(today);
    
    toast({
      title: "تم اختيار التاريخ",
      description: `تم اختيار ${dayStr} ${month} كتاريخ للحجز`,
    });
  };
  
  // Add a new available date (for vendor only)
  const handleAddDate = () => {
    if (!isVendor) return;
    
    // In a real app, this would be connected to a date picker
    // For now, just add a hardcoded new date for demo purposes
    const newDate = {
      day: 25,
      month: 'ذو القعدة',
      year: 1446
    };
    
    setAvailableDates(prev => [...prev, newDate]);
    
    toast({
      title: "تم إضافة تاريخ جديد",
      description: `تم إضافة ${newDate.day} ${newDate.month} إلى المواعيد المتاحة`,
    });
  };
  
  // Remove an available date (for vendor only)
  const handleRemoveDate = (index: number) => {
    if (!isVendor) return;
    
    const dateToRemove = availableDates[index];
    setAvailableDates(prev => prev.filter((_, i) => i !== index));
    
    toast({
      title: "تم حذف التاريخ",
      description: `تم حذف ${dateToRemove.day} ${dateToRemove.month} من المواعيد المتاحة`,
    });
  };

  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && halfStar) {
        stars.push(<StarHalf key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<StarOff key={i} className="w-5 h-5 text-gray-300" />);
      }
    }
    
    return stars;
  };
  
  const handleBookNow = () => {
    // Navigate to booking form with selected package
    navigate(`/booking/${id}`, { state: { selectedPackage } });
  };

  return (
    <Layout showBack showNavbar={false}>
      <div className="relative -mt-4 -mx-4">
        <img 
          src={service.image}
          alt={service.name}
          className="w-full h-64 object-cover"
        />
        
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <Link to="/explore" className="bg-white p-2 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700 flip-rtl">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <button className="bg-white p-2 rounded-full shadow-lg">
            <Share className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className="px-4">
        {/* Service Header with Rating */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold">{service.name}</h1>
          
          <div className="flex items-center justify-between mt-2">
            <div>
              <Link to={`/reviews/${id}`} className="flex items-center">
                <div className="flex items-center">
                  {renderRatingStars(service.rating)}
                  <span className="font-semibold mr-1">{service.rating}</span>
                  <span className="text-gray-500">({service.reviewCount} تقييم)</span>
                </div>
              </Link>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="w-4 h-4 ml-1" />
                {service.location}
              </div>
            </div>
            
            <div className="bg-green-500 text-white px-3 py-1 rounded-lg">
              <span className="text-sm font-medium">متاح حالياً</span>
            </div>
          </div>
        </div>
        
        {/* Service Details Table */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">تفاصيل المكان</h2>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold w-1/3">التصنيف</TableCell>
                <TableCell>{service.classification}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">السعة</TableCell>
                <TableCell>{service.capacity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">السعر يبدأ من</TableCell>
                <TableCell className="text-munaasib-red font-bold">{service.basePrice.toLocaleString()} ريال</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Service Features */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-3">الميزات</h2>
          <div className="grid grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="flex flex-col items-center p-4">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="text-center font-medium">{feature.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 bg-munaasib-lightGold border border-munaasib-gold p-4 rounded-lg">
            <h3 className="font-bold mb-1">تنظيم متكامل</h3>
            <p className="text-gray-700">{service.fullServiceDetails}</p>
          </div>
        </div>
        
        {/* Packages and Pricing */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">الباقات والأسعار</h2>
          <div className="space-y-4">
            {service.packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedPackage === pkg.id 
                    ? 'border-munaasib-gold bg-munaasib-lightGold' 
                    : 'border-gray-200'
                }`}
                onClick={() => {
                  setSelectedPackage(pkg.id);
                  toast({
                    title: "تم اختيار الباقة",
                    description: `تم اختيار ${pkg.name}`,
                  });
                }}
              >
                <div className="flex justify-between">
                  <h3 className="font-bold">{pkg.name}</h3>
                  <span className="font-bold text-munaasib-red">{pkg.price.toLocaleString()} ريال</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Photo Gallery */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">معرض الصور</h2>
            <Link to={`/gallery/${id}`} className="text-munaasib-red text-sm">عرض الكل</Link>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {service.gallery.map((image, index) => (
              <div key={index} className="min-w-[150px] h-[100px]">
                <img 
                  src={image} 
                  alt={`صورة ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Available Dates - Only visible to vendors */}
        {isVendor && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold">إدارة المواعيد المتاحة</h2>
              <button 
                onClick={handleAddDate}
                className="text-white bg-green-600 rounded-lg px-3 py-1 text-sm"
              >
                إضافة موعد
              </button>
            </div>
            
            <div className="flex gap-3 overflow-x-auto pb-2">
              {availableDates.map((date, index) => (
                <div 
                  key={`${date.day}-${date.month}-${index}`}
                  className="relative border rounded-lg p-4 flex flex-col items-center min-w-[80px] bg-white border-gray-200"
                >
                  <button 
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                    onClick={() => handleRemoveDate(index)}
                  >
                    ×
                  </button>
                  <span className="text-lg font-bold">{date.day}</span>
                  <span className="text-gray-500" dir="rtl">
                    {date.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Reviews */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">التقييمات والآراء</h2>
            <Link to={`/reviews/${id}`} className="text-munaasib-red text-sm">عرض الكل</Link>
          </div>
          
          <div className="mt-4 space-y-4">
            {service.reviews.map(review => (
              <div key={review.id} className="border-b border-gray-100 pb-4">
                <div className="flex justify-between">
                  <div className="font-bold">{review.name}</div>
                  <div className="text-gray-500 text-sm">{review.date}</div>
                </div>
                <div className="flex items-center mt-1">
                  {renderRatingStars(review.rating)}
                </div>
                <p className="text-gray-700 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Service Description */}
        <div className="border-t border-gray-200 mt-6 pt-6">
          <h2 className="text-lg font-bold mb-2">عن المكان</h2>
          <p className="text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>
        
        <div className="sticky bottom-20 left-0 right-0 bg-white pt-4 pb-4 mt-8">
          <button
            onClick={handleBookNow}
            className="block w-full text-white text-center py-3 rounded-lg font-bold transition-colors bg-green-600 hover:bg-green-700"
          >
            احجز الآن
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
