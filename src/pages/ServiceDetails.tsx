
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Share } from 'lucide-react';

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedPackage, setSelectedPackage] = useState<string>('gold');
  
  // This is mock data - in a real app, you would fetch this from an API
  const service = {
    id: id || '1',
    name: 'قصر الأفراح الملكي',
    location: 'حي النرجس، الرياض',
    image: 'https://source.unsplash.com/featured/?wedding,hall',
    rating: 4.8,
    reviewCount: 236,
    description: 'نقدم خدمات تنظيم حفلات الزفاف والمناسبات بأعلى مستويات الجودة والفخامة. متخصصون في الضيافة السعودية الأصيلة مع لمسات عصرية.',
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
    availableDates: ['25 فبراير', '26 فبراير', '28 فبراير'],
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
        <div className="flex justify-between items-start mt-4">
          <div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="font-semibold">{service.rating}</span>
              <span className="text-gray-500 mr-1">({service.reviewCount} تقييم)</span>
            </div>
            <h1 className="text-2xl font-bold mt-1">{service.name}</h1>
            <div className="flex items-center text-gray-600 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {service.location}
            </div>
          </div>
          
          <div className="bg-munaasib-red text-white px-3 py-1 rounded-lg">
            <span className="text-sm font-medium">موثَّق</span>
          </div>
        </div>
        
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
        
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">المواعيد المتاحة</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {service.availableDates.map((date, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col items-center min-w-[100px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-munaasib-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                <span className="mt-1">{date}</span>
                <span className="text-gray-500 text-sm">مساءً</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6">
          <h2 className="text-lg font-bold mb-2">تفاصيل الخدمة</h2>
          <p className="text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>
        
        <div className="sticky bottom-20 left-0 right-0 bg-white pt-4 pb-4 mt-8">
          <Link
            to={`/booking/${id}`}
            className="block w-full bg-munaasib-red text-white text-center py-3 rounded-lg font-bold hover:bg-munaasib-darkRed transition-colors"
          >
            احجز الآن
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
