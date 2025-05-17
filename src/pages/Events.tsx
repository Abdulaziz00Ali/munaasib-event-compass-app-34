
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
      bgColor: 'bg-pink-50',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'القهوجية',
      count: '+150 مزود',
      path: '/categories/coffee',
      bgColor: 'bg-pink-50',
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'القاعات',
      count: '+180 مزود',
      path: '/categories/halls',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'الكماليات',
      count: '+120 مزود',
      path: '/categories/addons',
      bgColor: 'bg-green-50',
    },
  ];

  const featuredHalls = [
    {
      id: '1',
      title: 'قاعة الملكية',
      location: 'حي النرجس، الرياض',
      image: 'https://source.unsplash.com/featured/?wedding,hall',
      category: 'قاعة',
    },
    {
      id: '2',
      title: 'قاعة الملكية',
      location: 'فندق الفيصلية، الرياض',
      image: 'https://source.unsplash.com/featured/?wedding,venue',
      category: 'قاعة',
    },
  ];

  const specialOffers = [
    {
      id: '1',
      name: 'عرض نهاية الأسبوع',
      discount: '25%',
      description: 'خصم 25% على جميع القاعات',
      image: 'https://source.unsplash.com/featured/?event,hall',
    },
    {
      id: '2',
      name: 'عرض الأسبوع',
      discount: '15%',
      description: 'خصم 15% على باقات الزفاف',
      image: 'https://source.unsplash.com/featured/?wedding,decoration',
    },
  ];

  const eventPackages = [
    {
      id: '1',
      name: 'باقة الزفاف الملكي',
      price: '5000',
      description: 'تبدأ من 5000 ريال',
      image: 'https://source.unsplash.com/featured/?wedding,decoration',
    },
    {
      id: '2',
      name: 'باقة الزفاف الملكي',
      price: '3500',
      description: 'تبدأ من 3500 ريال',
      image: 'https://source.unsplash.com/featured/?wedding,celebration',
    },
  ];

  return (
    <Layout title="المناسبات">
      <div className="space-y-8 pb-20">
        {/* Service Categories */}
        <section>
          <h2 className="text-lg font-bold mb-4">الخدمات المتاحة</h2>
          <div className="grid grid-cols-2 gap-4">
            {eventCategories.map((category, index) => (
              <Link 
                key={index}
                to={category.path} 
                className={`${category.bgColor} rounded-xl shadow-sm p-4 flex flex-col items-center justify-center`}
              >
                <div className="text-munaasib-red mb-2">{category.icon}</div>
                <h3 className="font-medium text-sm text-center">{category.title}</h3>
                {category.count && <p className="text-xs text-gray-500 mt-1 text-center">{category.count}</p>}
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Halls */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">قاعات مميزة</h2>
            <Link to="/categories/halls" className="text-munaasib-red text-sm">عرض الكل</Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {featuredHalls.map((hall) => (
              <Link to={`/service/${hall.id}`} key={hall.id}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative">
                    <img
                      src={hall.image}
                      alt={hall.title}
                      className="w-full h-28 object-cover"
                    />
                    <Badge className="absolute bottom-2 start-2 bg-munaasib-red">{hall.category}</Badge>
                  </div>
                  <div className="p-2">
                    <h3 className="font-bold text-base">{hall.title}</h3>
                    <div className="flex items-center text-gray-600 text-xs">
                      <MapPin className="w-3 h-3 ml-1" />
                      <span>{hall.location}</span>
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
          <div className="grid gap-4">
            {specialOffers.map((offer) => (
              <div 
                key={offer.id} 
                className="bg-white rounded-lg shadow-sm overflow-hidden w-full"
              >
                <div className="flex">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-1/2 h-32 object-cover"
                  />
                  <div className="p-3 flex flex-col justify-between w-1/2">
                    <div>
                      <h3 className="font-bold text-base">{offer.name}</h3>
                      <p className="text-xs text-gray-500">{offer.description}</p>
                    </div>
                    <div className="text-munaasib-red font-bold text-lg">
                      خصم {offer.discount}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Event Packages */}
        <section>
          <h2 className="text-lg font-bold mb-4">باقات المناسبات</h2>
          <div className="grid grid-cols-2 gap-4">
            {eventPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-28 object-cover"
                />
                <div className="p-2">
                  <h3 className="font-bold text-base">{pkg.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{pkg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;
