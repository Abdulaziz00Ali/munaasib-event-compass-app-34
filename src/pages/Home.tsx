import React from 'react';
import { ChefHat, Coffee, Grid2X2, Calendar, Bell, Search, Star, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/ui/CategoryCard';
import ServiceCard from '@/components/ui/ServiceCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const categories = [
    {
      icon: <ChefHat size={36} />,
      title: 'المطابخ',
      path: '/vendors/catering',
      count: 'الأطباق شهية المحلية'
    },
    {
      icon: <Coffee size={36} />,
      title: 'القهوجية',
      path: '/vendors/coffee',
      count: 'خدمات القهوة العربية'
    },
    {
      icon: <Grid2X2 size={36} />,
      title: 'الكماليات',
      path: '/vendors/accessories',
      count: 'إضافات مميزة'
    },
    {
      icon: <Calendar size={36} />,
      title: 'حجوزاتي',
      path: '/bookings',
      count: 'تتبع طلباتك'
    },
  ];

  const featuredVendors = [
    {
      id: '1',
      name: 'مطبخ السعادة',
      location: 'الرياض',
      distance: 3.5,
      image: 'https://source.unsplash.com/featured/?food,catering',
      rating: 4.8,
    },
    {
      id: '2',
      name: 'سعادة',
      location: 'الرياض',
      distance: 3.5,
      image: 'https://source.unsplash.com/featured/?meal,food',
      rating: 4.8,
    },
    {
      id: '3',
      name: 'مطبخ الشرق',
      location: 'الرياض',
      distance: 4.2,
      image: 'https://source.unsplash.com/featured/?kitchen,cooking',
      rating: 4.7,
    },
    {
      id: '4',
      name: 'مطبخ الأصالة',
      location: 'الرياض',
      distance: 5.1,
      image: 'https://source.unsplash.com/featured/?arabic,food',
      rating: 4.9,
    },
  ];

  return (
    <Layout showNavbar={false}>
      <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/notifications">
            <Bell className="h-6 w-6 text-gray-700" />
          </Link>
          <h1 className="text-xl font-bold text-munaasib-red">مناسب</h1>
          <Link to="/search">
            <Search className="h-6 w-6 text-gray-700" />
          </Link>
        </div>
      </div>

      <div className="pt-16 pb-20">
        <div className="bg-munaasib-lightGold p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-1">مرحباً عبدالعزيز</h2>
          <p className="text-gray-700">ما الذي ترغب بتنسيقه اليوم؟</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              path={category.path}
              count={category.count}
            />
          ))}
        </div>

        <div className="gold-gradient rounded-lg p-4 text-white mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">جرب مساعد الأفكار الذكي</h3>
            </div>
            <Button className="bg-white text-munaasib-red px-4 py-2 rounded-full font-medium hover:bg-gray-100">
              ابدأ الآن
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">مزودو خدمات مميزون</h2>
            <Link to="/vendors" className="text-munaasib-red">عرض الكل</Link>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {featuredVendors.map((vendor) => (
                <CarouselItem key={vendor.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-0">
                      <Link to={`/service/${vendor.id}`}>
                        <div className="relative">
                          <img
                            src={vendor.image}
                            alt={vendor.name}
                            className="object-cover w-full h-36 rounded-t-lg"
                          />
                        </div>
                        <div className="p-3">
                          <div className="mb-1 font-bold">{vendor.name}</div>
                          <div className="flex items-center text-sm text-gray-600 mb-1">
                            <Star className="h-4 w-4 text-yellow-500 mr-1 ml-1" fill="currentColor" />
                            <span>{vendor.rating}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-1 ml-1" />
                            <span>{vendor.location} · {vendor.distance} كم</span>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
