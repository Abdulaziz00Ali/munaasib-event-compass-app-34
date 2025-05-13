import React from 'react';
import { ChefHat, Coffee, Grid2X2, Calendar, Bell, Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/ui/CategoryCard';
import ServiceCard from '@/components/ui/ServiceCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
      name: 'قاعة الملكية',
      location: 'حي النرجس، الرياض',
      image: 'https://source.unsplash.com/featured/?wedding,hall',
      rating: 4.8,
      price: 8000,
    },
    {
      id: '2',
      name: 'قاعة الأميرة',
      location: 'حي العليا، الرياض',
      image: 'https://source.unsplash.com/featured/?event,venue',
      rating: 4.9,
      price: 7500,
    },
    {
      id: '3',
      name: 'قاعة السلطان',
      location: 'حي الورود، الرياض',
      image: 'https://source.unsplash.com/featured/?celebration,hall',
      rating: 4.7,
      price: 6200,
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
            <h2 className="text-xl font-bold">مقدمو خدمة مميزون</h2>
            <Link to="/vendors" className="text-munaasib-red">عرض الكل</Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {featuredVendors.map((vendor) => (
              <ServiceCard
                key={vendor.id}
                id={vendor.id}
                name={vendor.name}
                location={vendor.location}
                image={vendor.image}
                rating={vendor.rating}
                price={vendor.price}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
