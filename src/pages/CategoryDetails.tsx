import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Users, Coffee, Utensils } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ui/ServiceCard";

const CategoryDetails = () => {
  const { category } = useParams<{ category: string }>();
  
  // Category-specific data
  const categoryData = {
    kitchens: {
      title: 'المطابخ',
      description: 'خدمات التموين والضيافة المميزة',
      filterOptions: ['الكل', 'مطبخ سعودي', 'مطبخ يمني', 'مطبخ مصري'],
      providers: [
        {
          id: '1',
          name: 'مطبخ الأصالة',
          location: 'الرياض',
          subtitle: 'كبسة • مندي • مشويات',
          price: 150,
          rating: 4.8,
          reviews: 128,
          image: 'https://source.unsplash.com/featured/?food,arabic',
          featured: true,
        },
        {
          id: '2',
          name: 'مطبخ زمان',
          location: 'الرياض',
          subtitle: 'رياني • كبسة • يمني',
          price: 130,
          rating: 4.7,
          reviews: 95,
          image: 'https://source.unsplash.com/featured/?food,dinner',
        },
        {
          id: '3',
          name: 'مطبخ الخليج',
          location: 'الرياض',
          subtitle: 'كبسة • مندي • مشويات',
          price: 120,
          rating: 4.9,
          reviews: 156,
          image: 'https://source.unsplash.com/featured/?food,meat',
        },
        {
          id: '4',
          name: 'مطبخ الريف',
          location: 'الرياض',
          subtitle: 'مندي • معموص • سلايق',
          price: 140,
          rating: 4.6,
          reviews: 87,
          image: 'https://source.unsplash.com/featured/?food,buffet',
        },
      ],
    },
    coffee: {
      title: 'القهوجية',
      description: 'خدمات القهوة العربية التقليدية الفاخرة',
      filterOptions: ['الكل', 'تقليدي', 'عصري', 'رجال', 'نساء'],
      providers: [
        {
          id: '1',
          name: 'قهوجي الضيافة الملكية',
          location: 'الرياض',
          subtitle: 'ساعتين / ٣ مقدمين',
          price: 750,
          priceUnit: 'ر.س / ساعتين',
          rating: 4.9,
          reviews: 92,
          image: '/lovable-uploads/9e85d7d6-e814-4f7c-87d8-6f8c1a1fb9ad.png',
          additionalInfo: {
            duration: 'ساعتين',
            providers: 3,
            drinks: ['قهوة عربية', 'شاي وتمر'],
          }
        },
        {
          id: '2',
          name: 'مجلس القهوة',
          location: 'الرياض',
          subtitle: '٤ ساعات / ٣ مقدمين',
          price: 500,
          priceUnit: 'ر.س / ٤ ساعات',
          rating: 4.8,
          reviews: 245,
          image: 'https://source.unsplash.com/featured/?arabic,coffee',
          additionalInfo: {
            duration: '٤ ساعات',
            providers: 3,
            drinks: ['قهوة عربية', 'شاي وتمر'],
          }
        },
        {
          id: '3',
          name: 'روح القهوة',
          location: 'الرياض',
          subtitle: '٥ ساعات / ٤ مقدمين',
          price: 700,
          priceUnit: 'ر.س / ٥ ساعات',
          rating: 4.6,
          reviews: 189,
          image: 'https://source.unsplash.com/featured/?coffee,cups',
          additionalInfo: {
            duration: '٥ ساعات',
            providers: 4,
            drinks: ['قهوة عربية', 'شاي وتمر'],
          }
        },
      ],
    },
    halls: {
      title: 'القاعات',
      description: 'قاعات احتفالات فاخرة لجميع المناسبات',
      filterOptions: ['الكل', 'الرياض', 'جدة', 'الدمام'],
      providers: [
        {
          id: '1',
          name: 'قاعة الملكية',
          location: 'حي النرجس، الرياض',
          subtitle: 'تتسع لـ ٣٠٠ ضيف',
          price: 15000,
          priceUnit: 'ريال / ليلة',
          rating: 4.8,
          reviews: 254,
          image: 'https://source.unsplash.com/featured/?wedding,hall',
        },
        {
          id: '2',
          name: 'قاعة الأميرة',
          location: 'حي العليا، الرياض',
          subtitle: 'تتسع لـ ٣٠٠ ضيف',
          price: 20000,
          priceUnit: 'ريال / ليلة',
          rating: 4.9,
          reviews: 189,
          image: 'https://source.unsplash.com/featured/?wedding,venue',
        },
        {
          id: '3',
          name: 'قاعة السلطان',
          location: 'حي الورود، الرياض',
          subtitle: 'تتسع لـ ١٥٠ ضيف',
          price: 12000,
          priceUnit: 'ريال / ليلة',
          rating: 4.7,
          reviews: 167,
          image: 'https://source.unsplash.com/featured/?wedding,decoration',
        },
      ],
    },
    addons: {
      title: 'الكماليات والإضافات',
      description: 'إضافات مميزة لجعل مناسبتك استثنائية',
      filterOptions: ['الكل', 'إضاءة', 'ديكور', 'هدايا'],
      providers: [
        {
          id: '1',
          name: 'باقة الإضاءة والديكور الذهبية',
          location: 'الرياض',
          price: 800,
          rating: 4.8,
          reviews: 75,
          image: 'https://source.unsplash.com/featured/?decoration,wedding',
        },
        {
          id: '2',
          name: 'إضاءة LED للمدخل',
          location: 'الرياض',
          subtitle: 'مؤسسة النور للإضاءة',
          price: 350,
          rating: 4.8,
          reviews: 120,
          image: 'https://source.unsplash.com/featured/?lights,pathway',
        },
        {
          id: '3',
          name: 'VIP تنسيق هدايا',
          location: 'الرياض',
          subtitle: 'روائع الهدايا',
          price: 200,
          priceUnit: 'ريال للقطعة',
          rating: 4.9,
          reviews: 89,
          image: 'https://source.unsplash.com/featured/?gift,wrapped',
        },
        {
          id: '4',
          name: 'ديكور مدخل فاخر',
          location: 'الرياض',
          subtitle: 'لمسات الإبداع',
          price: 600,
          rating: 4.7,
          reviews: 56,
          image: 'https://source.unsplash.com/featured/?entrance,decoration',
        },
      ],
    },
  };

  // Map category param to the right key
  const categoryKey = category as keyof typeof categoryData;
  const data = categoryData[categoryKey] || categoryData.kitchens;

  // Get category icon
  const getCategoryIcon = () => {
    switch (categoryKey) {
      case 'coffee':
        return <Coffee className="w-5 h-5" />;
      case 'kitchens':
        return <Utensils className="w-5 h-5" />;
      default:
        return null;
    }
  };
  
  // Render coffee service additional info
  const renderCoffeeServiceInfo = (service: any) => {
    if (categoryKey !== 'coffee' || !service.additionalInfo) return null;
    
    return (
      <div className="flex gap-4 text-sm text-gray-600 mt-2">
        <div className="flex items-center">
          <Clock className="w-4 h-4 ml-1" />
          <span>{service.additionalInfo.duration}</span>
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 ml-1" />
          <span>{service.additionalInfo.providers} مقدمين</span>
        </div>
      </div>
    );
  };
  
  return (
    <Layout title={data.title} showBack={true}>
      <div className="pb-20">
        <div className="bg-munaasib-lightGold p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-1">{data.title}</h2>
          <p className="text-gray-700">{data.description}</p>
        </div>
        
        {/* Filter options */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {data.filterOptions.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                index === 0 
                ? 'bg-munaasib-red text-white' 
                : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        
        {categoryKey === 'coffee' ? (
          // Special layout for coffee services with additional info
          <div className="space-y-4">
            {data.providers.map((provider) => (
              <div key={provider.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-48 object-cover"
                  />
                  {provider.featured && (
                    <Badge className="absolute top-3 left-3 bg-munaasib-red">مميز</Badge>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{provider.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 ml-1" fill="currentColor" />
                      <span>{provider.rating}</span>
                      <span className="text-gray-500 text-sm mr-1">({provider.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 ml-1" />
                    <span className="text-sm">{provider.location}</span>
                  </div>
                  {renderCoffeeServiceInfo(provider)}
                  <div className="flex items-center text-gray-600 mt-1">
                    {provider.additionalInfo?.drinks?.map((drink, idx) => (
                      <span key={idx} className="text-sm ml-2 bg-gray-100 px-2 py-1 rounded">{drink}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="font-bold text-munaasib-red text-lg">
                      {provider.price} {provider.priceUnit}
                    </div>
                    <Link 
                      to={`/service/${provider.id}`} 
                      className="bg-munaasib-red text-white py-2 px-6 rounded-lg"
                    >
                      احجز الآن
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Default layout for other categories
          <div className="grid grid-cols-2 gap-4">
            {data.providers.map((provider) => (
              <ServiceCard
                key={provider.id}
                id={provider.id}
                name={provider.name}
                location={provider.location}
                image={provider.image}
                rating={provider.rating}
                price={provider.price}
                priceUnit={provider.priceUnit}
                subtitle={provider.subtitle}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryDetails;
