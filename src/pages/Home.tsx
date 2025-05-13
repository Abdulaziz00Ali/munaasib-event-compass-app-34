
import React from 'react';
import { Bell, Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/ui/CategoryCard';
import ServiceCard from '@/components/ui/ServiceCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="category-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zm-14 7h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4z" />
        </svg>
      ),
      title: 'المطابخ',
      path: '/vendors/catering',
      count: 'مزود +120'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="category-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 9h20v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm0 0V7a2 2 0 012-2h16a2 2 0 012 2v2M12 12v6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.5 14.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm8 0c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5z" />
        </svg>
      ),
      title: 'القهوجية',
      path: '/vendors/coffee',
      count: 'مزود +85'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="category-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 11h16M4 15h16" />
        </svg>
      ),
      title: 'الكماليات',
      path: '/vendors/accessories',
      count: 'مزود +150'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="category-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'حجوزاتي',
      path: '/bookings',
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
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <Bell className="h-6 w-6 text-gray-700" />
          </div>
          <h1 className="text-xl font-bold">مناسب</h1>
          <div>
            <Search className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>

      <div className="pt-16 pb-20">
        <div className="bg-munaasib-lightGold p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-1">مرحباً عبدالعزيز</h2>
          <p className="text-gray-700">ما الذي ترغب بتنسيقه اليوم؟</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {categories.slice(0, 4).map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              path={category.path}
              count={category.count}
            />
          ))}
        </div>

        <div className="red-gradient rounded-lg p-4 text-white mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">جرب مساعد الأفكار الذكي</h3>
            </div>
            <button className="bg-white text-munaasib-red px-4 py-2 rounded-full font-medium">
              ابدأ الآن
            </button>
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

      <Layout showNavbar={false}>
        {/* Content is added directly to the body*/}
      </Layout>
    </>
  );
};

export default Home;
