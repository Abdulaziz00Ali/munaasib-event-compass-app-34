
import React, { useState, useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import ServiceCard from '@/components/ui/ServiceCard';
import CategoryCard from '@/components/ui/CategoryCard';
import { useUserType } from '@/hooks/useUserType';
import { ChefHat, Coffee, Building2, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleMapComponent from '@/components/GoogleMapComponent';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { userType } = useUserType();
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const categories = [
    { id: 'kitchens', name: 'المطابخ', icon: <ChefHat className="w-6 h-6 text-red-500" /> },
    { id: 'coffee', name: 'القهوجية', icon: <Coffee className="w-6 h-6 text-red-500" /> },
    { id: 'venues', name: 'القاعات', icon: <Building2 className="w-6 h-6 text-red-500" /> },
    { id: 'accessories', name: 'الكماليات', icon: <Package className="w-6 h-6 text-red-500" /> },
  ];

  const services = [
    {
      id: '1',
      name: 'مطبخ الضيافة الملكي',
      location: 'حي النرجس، الرياض',
      image: 'https://source.unsplash.com/featured/?kitchen,catering',
      rating: 4.8,
      price: 150,
      priceUnit: 'ر.س',
      category: 'kitchens',
      distance: '5.0 كم',
    },
    {
      id: '2',
      name: 'قهوجي أصايل',
      location: 'حي العليا، الرياض',
      image: 'https://source.unsplash.com/featured/?coffee,arabic',
      rating: 4.5,
      price: 80,
      priceUnit: 'ر.س',
      category: 'coffee',
      distance: '3.2 كم',
    },
    {
      id: '3',
      name: 'قاعة اللؤلؤة',
      location: 'حي الورود، الرياض',
      image: 'https://source.unsplash.com/featured/?wedding,hall',
      rating: 4.9,
      price: 500,
      priceUnit: 'ر.س',
      category: 'venues',
      distance: '4.7 كم',
    },
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
  
  // If the user is a vendor, redirect them to the VendorDashboard
  if (userType === 'vendor') {
    return (
      <Layout title="استكشاف" showSearch>
        <div className="flex flex-col items-center justify-center p-8 h-64 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">أنت مسجل كمزود خدمة</h2>
          <p className="text-gray-700 mb-4">يمكنك إدارة خدماتك من لوحة التحكم الخاصة بك</p>
          <Link 
            to="/vendor-dashboard" 
            className="bg-munaasib-red text-white px-6 py-2 rounded-full"
          >
            انتقل إلى لوحة التحكم
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="استكشاف" showSearch>
      <div className="h-64 mb-4 rounded-lg overflow-hidden">
        <GoogleMapComponent />
      </div>

      <div className="mb-4 overflow-x-auto pb-2">
        <div className="flex space-x-2 space-x-reverse">
          <button
            className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-1 ${
              selectedCategory === 'all'
                ? 'bg-munaasib-red text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            الكل
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-1 ${
                selectedCategory === category.id
                  ? 'bg-munaasib-red text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="text-gray-700">الرياض، المملكة العربية السعودية</span>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-4">مقدمي الخدمات القريبين</h2>
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
              subtitle={service.distance}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
