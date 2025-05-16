
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Utensils, Coffee, Building, Package } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import CategoryCard from '@/components/ui/CategoryCard';

const Events = () => {
  const eventCategories = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'المطابخ',
      count: '+200 مزود',
      path: '/categories/kitchens',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'القهوجية',
      count: '+150 مزود',
      path: '/categories/coffee',
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'القاعات',
      count: '+180 مزود',
      path: '/categories/halls',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'الكماليات',
      count: '+120 مزود',
      path: '/categories/addons',
    },
  ];

  const featuredHalls = [
    {
      id: '1',
      title: 'قاعة الملكية الفاخرة',
      date: '20 مايو 2024',
      location: 'حي النرجس، الرياض',
      image: 'https://source.unsplash.com/featured/?wedding,hall',
      category: 'قاعة',
    },
    {
      id: '2',
      title: 'قاعة الفيصلية',
      date: '5 يونيو 2024',
      location: 'فندق الفيصلية، الرياض',
      image: 'https://source.unsplash.com/featured/?wedding,venue',
      category: 'قاعة',
    },
    {
      id: '3',
      title: 'قاعة المرجان',
      date: '15 يونيو 2024',
      location: 'مركز الرياض الدولي للمعارض',
      image: 'https://source.unsplash.com/featured/?event,hall',
      category: 'قاعة',
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
      <div className="space-y-8 pb-20">
        {/* Service Categories */}
        <section>
          <h2 className="text-lg font-bold mb-4">خدمات المناسبات</h2>
          <div className="grid grid-cols-2 gap-4">
            {eventCategories.map((category, index) => (
              <CategoryCard 
                key={index}
                icon={category.icon}
                title={category.title}
                path={category.path}
                count={category.count}
              />
            ))}
          </div>
        </section>

        {/* Featured Halls */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">اختيار القاعات مميزة</h2>
            <Link to="/halls" className="text-munaasib-red text-sm">عرض الكل</Link>
          </div>

          <div className="space-y-4">
            {featuredHalls.map((hall) => (
              <Link to={`/hall/${hall.id}`} key={hall.id}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative">
                    <img
                      src={hall.image}
                      alt={hall.title}
                      className="w-full h-40 object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-munaasib-red">{hall.category}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{hall.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 ml-1" />
                      <span className="text-sm">{hall.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section>
          <h2 className="text-lg font-bold mb-4">عروض خاصة</h2>
          <ScrollArea className="w-full">
            <div className="flex space-x-4 rtl:space-x-reverse pb-4">
              {specialOffers.map((offer) => (
                <div 
                  key={offer.id} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden min-w-[280px] flex-shrink-0"
                >
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-munaasib-red text-white py-1 px-3 rounded-br-lg">
                      خصم {offer.discount}
                    </div>
                  </div>
                  <div className="p-3">
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
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </section>

        {/* Event Packages */}
        <section>
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
        </section>
      </div>
    </Layout>
  );
};

export default Events;
