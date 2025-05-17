import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ServiceCard from '@/components/ui/ServiceCard';
import CategoryCard from '@/components/ui/CategoryCard';
import { useUserType } from '@/hooks/useUserType';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { userType } = useUserType();

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'venues', name: 'قاعات الأفراح' },
    { id: 'catering', name: 'التموين' },
    { id: 'photography', name: 'التصوير' },
  ];

  const services = [
    {
      id: '1',
      name: 'قاعة الملكية',
      location: 'حي النرجس، الرياض',
      image: 'https://source.unsplash.com/featured/?wedding,hall',
      rating: 4.8,
      price: 5000,
      priceUnit: 'ر.س / ليلة',
      category: 'venues',
    },
    {
      id: '2',
      name: 'قاعة الأميرة',
      location: 'حي العليا، الرياض',
      image: 'https://source.unsplash.com/featured/?event,venue',
      rating: 4.9,
      price: 7500,
      priceUnit: 'ر.س / ليلة',
      category: 'venues',
    },
    {
      id: '3',
      name: 'قاعة السلطان',
      location: 'حي الورود، الرياض',
      image: 'https://source.unsplash.com/featured/?celebration,hall',
      rating: 4.7,
      price: 6200,
      priceUnit: 'ر.س / ليلة',
      category: 'venues',
    },
    {
      id: '4',
      name: 'مطبخ الرياض للولائم',
      location: 'حي النرجس، الرياض',
      image: 'https://source.unsplash.com/featured/?catering,food',
      rating: 4.8,
      price: 35,
      priceUnit: 'ر.س / وجبة',
      category: 'catering',
    },
    {
      id: '5',
      name: 'قهوة وضيافة الخليج',
      location: 'حي الملقا، الرياض',
      image: 'https://source.unsplash.com/featured/?coffee,arabic',
      rating: 4.9,
      price: 500,
      priceUnit: 'ر.س / حفل',
      category: 'catering',
    },
    {
      id: '6',
      name: 'استوديو الأمل للتصوير',
      location: 'حي النخيل، الرياض',
      image: 'https://source.unsplash.com/featured/?camera,photography',
      rating: 4.8,
      price: 1500,
      priceUnit: 'ر.س',
      category: 'photography',
    },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
  
  const serviceCategories = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="category-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'المطابخ والتموين',
      path: '/vendors/catering',
      count: 'مزود +250',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="category-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'القهوة والمشروبات',
      path: '/vendors/coffee',
      count: 'مزود +180',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="category-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 11h16M4 15h16" />
        </svg>
      ),
      title: 'الإكسسوارات والتجهيزات',
      path: '/vendors/accessories',
      count: 'مزود +150',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="category-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'التصوير والتوثيق',
      path: '/vendors/photography',
      count: 'مزود +120',
    }
  ];

  if (userType === 'vendor') {
    return (
      <Layout title="مقدمي الخدمات" showSearch>
        <div className="space-y-8">
          <div className="bg-munaasib-lightGold p-4 rounded-lg mb-6">
            <h2 className="text-xl font-bold mb-1">مرحباً بك كمزود خدمة</h2>
            <p className="text-gray-700">يمكنك إدارة خدماتك هنا</p>
          </div>
          
          <div>
            <h2 className="text-lg font-bold mb-4">خدماتك المتاحة</h2>
            <div className="grid grid-cols-2 gap-4">
              {serviceCategories.map((category, index) => (
                <CategoryCard
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  path={category.path}
                  count={category.count}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-bold mb-4">إحصائيات الأداء</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-center text-gray-500">لم يتم إضافة أي خدمات بعد</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="مقدمي الخدمات" showSearch>
      <div className="mb-4 overflow-x-auto pb-2">
        <div className="flex space-x-2 space-x-reverse">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-munaasib-red text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="text-gray-700">الرياض، المملكة العربية السعودية</span>
        </div>
      </div>

      {selectedCategory === 'all' && (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">جميع الفئات</h2>
          <div className="grid grid-cols-2 gap-4">
            {serviceCategories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                path={category.path}
                count={category.count}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-4">عروض مميزة</h2>
        <div className="grid grid-cols-1 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              name={service.name}
              location={service.location}
              image={service.image}
              rating={service.rating}
              price={service.price}
              priceUnit={service.priceUnit}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
