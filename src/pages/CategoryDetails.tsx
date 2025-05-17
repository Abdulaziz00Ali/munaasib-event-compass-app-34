
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Badge } from "@/components/ui/badge";

const CategoryDetails = () => {
  const { category } = useParams<{ category: string }>();
  
  // Category-specific data
  const categoryData = {
    kitchens: {
      title: 'المطابخ',
      description: 'خدمات التموين والضيافة المميزة',
      providers: [
        {
          id: '1',
          name: 'مطبخ السعادة الملكي',
          location: 'الرياض',
          description: 'خدمة تموين وأطباق عالية الجودة للمناسبات الفاخرة',
          rating: 4.8,
          image: 'https://source.unsplash.com/featured/?catering,food',
        },
        {
          id: '2',
          name: 'مطبخ الشرق للولائم',
          location: 'الرياض',
          description: 'تخصص في المأكولات العربية الفاخرة والبوفيهات المفتوحة',
          rating: 4.7,
          image: 'https://source.unsplash.com/featured/?arabic,food',
        },
        {
          id: '3',
          name: 'مطبخ الأصالة',
          location: 'الرياض',
          description: 'وجبات تراثية أصيلة بمكونات طازجة وخدمة مميزة',
          rating: 4.9,
          image: 'https://source.unsplash.com/featured/?traditional,food',
        },
        {
          id: '4',
          name: 'مطبخ الخليج للمناسبات',
          location: 'الرياض',
          description: 'أطباق خليجية فاخرة لجميع المناسبات والحفلات',
          rating: 4.6,
          image: 'https://source.unsplash.com/featured/?gulf,food',
        },
      ],
    },
    coffee: {
      title: 'القهوجية',
      description: 'خدمات القهوة العربية التقليدية الفاخرة',
      providers: [
        {
          id: '1',
          name: 'قهوجي السعادة',
          location: 'الرياض',
          description: 'قهوة عربية أصيلة وضيافة تقليدية للمناسبات',
          rating: 4.9,
          image: 'https://source.unsplash.com/featured/?arabic,coffee',
        },
        {
          id: '2',
          name: 'قهوجي الأصالة',
          location: 'الرياض',
          description: 'خدمات قهوة عربية وضيافة بنكهات مميزة',
          rating: 4.7,
          image: 'https://source.unsplash.com/featured/?traditional,coffee',
        },
        {
          id: '3',
          name: 'قهوة وضيافة الخليج',
          location: 'الرياض',
          description: 'تخصص في القهوة العربية التقليدية والضيافة الفاخرة',
          rating: 4.8,
          image: 'https://source.unsplash.com/featured/?gulf,coffee',
        },
        {
          id: '4',
          name: 'قهوجي الملوك',
          location: 'الرياض',
          description: 'خدمة قهوة راقية للمناسبات والحفلات الخاصة',
          rating: 4.9,
          image: 'https://source.unsplash.com/featured/?luxury,coffee',
        },
      ],
    },
    halls: {
      title: 'القاعات',
      description: 'قاعات احتفالات فاخرة لجميع المناسبات',
      providers: [
        {
          id: '1',
          name: 'قاعة الملكية الفاخرة',
          location: 'حي النرجس، الرياض',
          description: 'قاعة فاخرة للمناسبات والاحتفالات الكبيرة',
          rating: 4.8,
          image: 'https://source.unsplash.com/featured/?wedding,hall',
        },
        {
          id: '2',
          name: 'قاعة الفيصلية',
          location: 'فندق الفيصلية، الرياض',
          description: 'قاعة فخمة في موقع متميز بوسط المدينة',
          rating: 4.9,
          image: 'https://source.unsplash.com/featured/?luxury,venue',
        },
        {
          id: '3',
          name: 'قاعة المرجان',
          location: 'مركز الرياض الدولي للمعارض',
          description: 'قاعة واسعة مجهزة بأحدث التقنيات للمناسبات الكبرى',
          rating: 4.7,
          image: 'https://source.unsplash.com/featured/?event,hall',
        },
        {
          id: '4',
          name: 'قاعة السلطان',
          location: 'حي الورود، الرياض',
          description: 'قاعة بتصميم فريد وخدمات متكاملة لكافة المناسبات',
          rating: 4.8,
          image: 'https://source.unsplash.com/featured/?celebration,hall',
        },
      ],
    },
    addons: {
      title: 'الكماليات',
      description: 'إضافات مميزة لجعل مناسبتك استثنائية',
      providers: [
        {
          id: '1',
          name: 'ديكور الفخامة',
          location: 'الرياض',
          description: 'تزيين وديكورات فاخرة للمناسبات والحفلات',
          rating: 4.7,
          image: 'https://source.unsplash.com/featured/?decoration,wedding',
        },
        {
          id: '2',
          name: 'استوديو الأمل للتصوير',
          location: 'الرياض',
          description: 'خدمات تصوير احترافية للحفلات والمناسبات',
          rating: 4.8,
          image: 'https://source.unsplash.com/featured/?photography,event',
        },
        {
          id: '3',
          name: 'إضاءة النجوم',
          location: 'الرياض',
          description: 'تجهيزات إضاءة متطورة لإضفاء أجواء مميزة',
          rating: 4.6,
          image: 'https://source.unsplash.com/featured/?lighting,event',
        },
        {
          id: '4',
          name: 'هدايا الضيوف',
          location: 'الرياض',
          description: 'هدايا وتذكارات مميزة للمناسبات الخاصة',
          rating: 4.9,
          image: 'https://source.unsplash.com/featured/?gifts,wedding',
        },
      ],
    },
  };

  // Map category param to the right key
  const categoryKey = category === 'kitchens' ? 'kitchens' : 
                      category === 'coffee' ? 'coffee' : 
                      category === 'halls' ? 'halls' : 
                      category === 'addons' ? 'addons' : 'kitchens';
  
  const data = categoryData[categoryKey as keyof typeof categoryData];
  
  return (
    <Layout title={data.title} showBack={true}>
      <div className="pb-20">
        <div className="bg-munaasib-lightGold p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-1">{data.title}</h2>
          <p className="text-gray-700">{data.description}</p>
        </div>
        
        <div className="space-y-4">
          {data.providers.map((provider) => (
            <div key={provider.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-munaasib-red">مميز</Badge>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{provider.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 ml-1" fill="currentColor" />
                    <span>{provider.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 my-2">{provider.description}</p>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 ml-1" />
                  <span className="text-sm">{provider.location}</span>
                </div>
                <Link 
                  to={`/provider/${provider.id}`} 
                  className="bg-munaasib-red text-white py-2 px-4 rounded-lg text-center block w-full"
                >
                  عرض التفاصيل
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryDetails;
