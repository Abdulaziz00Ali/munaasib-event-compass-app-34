
import React from 'react';
import { ChefHat, Coffee, Grid2X2, Calendar, Bell, Search, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/ui/CategoryCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const categories = [
    {
      icon: <ChefHat size={36} />,
      title: 'المطابخ',
      path: '/categories/kitchens',
      count: 'الأطباق شهية المحلية'
    },
    {
      icon: <Coffee size={36} />,
      title: 'القهوجية',
      path: '/categories/coffee',
      count: 'خدمات القهوة العربية'
    },
    {
      icon: <Grid2X2 size={36} />,
      title: 'الكماليات',
      path: '/categories/addons',
      count: 'إضافات مميزة'
    },
    {
      icon: <Calendar size={36} />,
      title: 'حجوزاتي',
      path: '/bookings',
      count: 'تتبع طلباتك'
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

        {/* Messages Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">الرسائل</h3>
            <Link to="/messages" className="text-munaasib-red text-sm">عرض الكل</Link>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-munaasib-red rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">أحمد محمد</h4>
                <p className="text-xs text-gray-600">بخصوص حجز يوم الخميس...</p>
              </div>
              <span className="text-xs text-gray-500">منذ 5 دقائق</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">سارة علي</h4>
                <p className="text-xs text-gray-600">شكراً لكم على الخدمة...</p>
              </div>
              <span className="text-xs text-gray-500">منذ ساعة</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
