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

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string>('gold');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedHijriDay, setSelectedHijriDay] = useState<number | null>(null);
  const [selectedHijriMonth, setSelectedHijriMonth] = useState<string | null>(null);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const [availableDates, setAvailableDates] = useState([
    { day: 14, month: 'ذو القعدة', year: 1446 },
    { day: 15, month: 'ذو القعدة', year: 1446 },
    { day: 18, month: 'ذو القعدة', year: 1446 },
    { day: 20, month: 'ذو القعدة', year: 1446 },
  ]);
  
  // This is mock data - in a real app, you would fetch this from an API
  const service = {
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

  // Load any saved date information on component mount but don't auto-select
  useEffect(() => {
    // Only load the saved date for display purposes, not auto-selection
    const savedDateStr = localStorage.getItem('selectedBookingDate');
    const savedHijriDay = localStorage.getItem('selectedHijriDay');
    const savedHijriMonth = localStorage.getItem('selectedHijriMonth');
    
    if (savedDateStr && savedHijriDay && savedHijriMonth) {
      try {
        const savedDate = new Date(savedDateStr);
        // Don't auto-set the selected date here
        // This way we don't force selection on initial load
      } catch (error) {
        console.error('Error loading saved date:', error);
      }
    }
  }, []);

  // Parse a Hijri date string into its components - Fixed NaN issue
  const parseHijriDate = (hijriDateStr: string) => {
    if (!hijriDateStr) return null;
    
    // Extract the numeric day value using regex
    const dayMatch = hijriDateStr.match(/^(\d+)/);
    const day = dayMatch ? parseInt(dayMatch[1], 10) : null;
    
    // Extract the month name (everything after the day number)
    let month = null;
    if (dayMatch && dayMatch.index !== undefined) {
      const startPos = dayMatch.index + dayMatch[0].length;
      month = hijriDateStr.substring(startPos).trim();
    }
    
    if (day !== null && month) {
      return {
        day,
        month,
        year: 1446 // Default value for the year
      };
    }
    return null;
  };

  // Handle date selection from calendar
  const handleDateSelect = (date: Date | undefined) => {
    if (!date) {
      setSelectedDate(undefined);
      setSelectedHijriDay(null);
      setSelectedHijriMonth(null);
      
      // Clear localStorage
      localStorage.removeItem('selectedBookingDate');
      localStorage.removeItem('selectedHijriDay');
      localStorage.removeItem('selectedHijriMonth');
      
      setCalendarOpen(false);
      return;
    }
    
    // Format the Gregorian date to Hijri
    const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
    }).format(date);
    
    // Parse the Hijri date components
    const parsedDate = parseHijriDate(hijriDate);
    
    if (parsedDate) {
      // Set the selected Hijri day and month
      setSelectedHijriDay(parsedDate.day);
      setSelectedHijriMonth(parsedDate.month);
      
      // Set the selected date
      setSelectedDate(date);
      
      // Store the selected date in localStorage
      localStorage.setItem('selectedBookingDate', date.toISOString());
      localStorage.setItem('selectedHijriDay', parsedDate.day.toString());
      localStorage.setItem('selectedHijriMonth', parsedDate.month);
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
    return selectedHijriDay === day && selectedHijriMonth === month;
  };

  // Sets a specific date as selected by its Hijri day and month
  // This version is read-only - selection can only be done from calendar view
  const selectDateByHijri = (day: number, month: string) => {
    // We no longer allow selection from the available dates directly
    // Only displaying the available dates provided by vendor
    
    // Instead, we'll open the calendar when an available date is clicked
    setCalendarOpen(true);
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
                onClick={() => setSelectedPackage(pkg.id)}
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
        
        {/* Available Dates */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">المواعيد المتاحة</h2>
          
          <div className="relative">
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">شهر {availableDates[0]?.month || "ذو القعدة"}</span>
                <PopoverTrigger asChild>
                  <button 
                    className="text-munaasib-red flex items-center text-sm"
                  >
                    <Calendar className="w-4 h-4 ml-1" />
                    عرض التقويم
                  </button>
                </PopoverTrigger>
              </div>
              <PopoverContent className="w-auto p-0 z-50" align="end">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  className="p-3 pointer-events-auto"
                  locale={ar}
                />
              </PopoverContent>
            </Popover>
            
            <div className="flex gap-3 overflow-x-auto pb-2">
              {availableDates.map((date, index) => (
                <button 
                  key={`${date.day}-${date.month}-${index}`}
                  className={`border rounded-lg p-4 flex flex-col items-center min-w-[80px] focus:outline-none transition-colors ${
                    isDateSelected(date.day, date.month) 
                      ? 'border-green-500 bg-green-50 text-green-700'  
                      : 'bg-white border-gray-200'
                  } cursor-default`}
                  onClick={() => setCalendarOpen(true)}
                >
                  <span className="text-lg font-bold">{date.day}</span>
                  <span className="text-gray-500" dir="rtl">
                    {date.month}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
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
            className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
          >
            احجز الآن
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
