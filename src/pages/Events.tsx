
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Star, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const eventCategories = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
        </svg>
      ),
      title: 'حفلات الزفاف',
      count: '+200 مزود',
      color: 'bg-red-100 text-munaasib-red',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
      title: 'مناسبات خطوبة',
      count: '+150 مزود',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
        </svg>
      ),
      title: 'حفلات تخرج',
      count: '+120 مزود',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
      title: 'مناسبات شركات',
      count: '+180 مزود',
      color: 'bg-green-100 text-green-600',
    },
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'مهرجان الطعام السنوي',
      date: '20 مايو 2024',
      location: 'حديقة الملك عبدالله، الرياض',
      image: 'https://source.unsplash.com/featured/?food,festival',
      category: 'طعام',
    },
    {
      id: '2',
      title: 'معرض الزفاف الدولي',
      date: '5 يونيو 2024',
      location: 'فندق الفيصلية، الرياض',
      image: 'https://source.unsplash.com/featured/?wedding,expo',
      category: 'زفاف',
    },
    {
      id: '3',
      title: 'ملتقى مزودي الحفلات',
      date: '15 يونيو 2024',
      location: 'مركز الرياض الدولي للمعارض',
      image: 'https://source.unsplash.com/featured/?event,planning',
      category: 'مناسبات',
    },
  ];

  const specialOffers = [
    {
      id: '1',
      name: 'قاعة السلطان الملكية',
      discount: '25%',
      endDate: 'حتى 30 مايو',
      image: 'https://source.unsplash.com/featured/?wedding,hall',
      rating: 4.8,
      location: 'حي النرجس، الرياض',
    },
    {
      id: '2',
      name: 'مطبخ الرياض للولائم',
      discount: '15%',
      endDate: 'حتى 15 يونيو',
      image: 'https://source.unsplash.com/featured/?catering,food',
      rating: 4.9,
      location: 'حي الملقا، الرياض',
    },
    {
      id: '3',
      name: 'استوديو الأمل للتصوير',
      discount: '30%',
      endDate: 'لمدة أسبوع فقط',
      image: 'https://source.unsplash.com/featured/?camera,photography',
      rating: 4.7,
      location: 'حي النخيل، الرياض',
    },
    {
      id: '4',
      name: 'قهوة وضيافة الخليج',
      discount: '20%',
      endDate: 'لحفلات نهاية الاسبوع',
      image: 'https://source.unsplash.com/featured/?coffee,arabic',
      rating: 4.9,
      location: 'حي الورود، الرياض',
    },
  ];

  const eventPackages = [
    {
      id: '1',
      name: 'باقة الزفاف الكاملة',
      price: '15,000',
      description: 'تشمل القاعة، الضيافة، التصوير، والديكور',
      image: 'https://source.unsplash.com/featured/?wedding,decoration',
      rating: 4.8,
    },
    {
      id: '2',
      name: 'باقة حفلات الخطوبة',
      price: '8,500',
      description: 'تشمل الكوشة، الضيافة، والتصوير',
      image: 'https://source.unsplash.com/featured/?engagement,party',
      rating: 4.7,
    },
    {
      id: '3',
      name: 'باقة مناسبات الشركات',
      price: '12,000',
      description: 'تشمل الديكور، الضيافة، والتنظيم',
      image: 'https://source.unsplash.com/featured/?corporate,event',
      rating: 4.9,
    },
  ];

  return (
    <Layout title="المناسبات">
      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="events">المناسبات</TabsTrigger>
          <TabsTrigger value="offers">العروض</TabsTrigger>
          <TabsTrigger value="packages">الباقات</TabsTrigger>
        </TabsList>
        
        <TabsContent value="events" className="space-y-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {eventCategories.map((category, index) => (
              <div 
                key={index}
                className={`${category.color} rounded-xl p-4 flex flex-col items-center justify-center`}
              >
                <div className="mb-2">{category.icon}</div>
                <h3 className="font-medium text-sm">{category.title}</h3>
                <p className="text-xs mt-1">{category.count}</p>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">مناسبات قادمة</h2>
              <Link to="/all-events" className="text-munaasib-red text-sm">عرض الكل</Link>
            </div>

            {upcomingEvents.map((event) => (
              <Link to={`/event/${event.id}`} key={event.id}>
                <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-40 object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-munaasib-red">{event.category}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <CalendarDays className="w-4 h-4 ml-1" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 ml-1" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="offers" className="space-y-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">عروض خاصة</h2>

            <div className="grid grid-cols-1 gap-4">
              {specialOffers.map((offer) => (
                <div key={offer.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-munaasib-red text-white py-1 px-3 rounded-br-lg">
                      خصم {offer.discount}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold">{offer.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 ml-1" fill="currentColor" />
                        <span>{offer.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 my-2">{offer.endDate}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 ml-1" />
                      <span>{offer.location}</span>
                    </div>
                    <button className="w-full bg-munaasib-red hover:bg-munaasib-darkRed text-white rounded-lg py-2 mt-3 transition-colors">
                      احجز العرض
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="packages" className="space-y-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">باقات متكاملة</h2>

            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {eventPackages.map((pkg) => (
                  <CarouselItem key={pkg.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="border-none shadow-sm">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={pkg.image}
                            alt={pkg.name}
                            className="object-cover w-full h-40 rounded-t-lg"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold">{pkg.name}</h3>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 ml-1" fill="currentColor" />
                              <span>{pkg.rating}</span>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 my-2">{pkg.description}</div>
                          <div className="flex justify-between items-center mt-3">
                            <div className="font-bold text-munaasib-red">{pkg.price} ر.س</div>
                            <button className="bg-munaasib-red hover:bg-munaasib-darkRed text-white rounded-lg px-4 py-1 transition-colors">
                              احجز الآن
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Events;
