import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Users, Coffee, Utensils, Building2, Package, Filter, Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ui/ServiceCard";
import GoogleMapComponent from "@/components/GoogleMapComponent";
import { Input } from "@/components/ui/input";
import { toast } from '@/components/ui/sonner';
import { getAllTabukVenues, VenueData } from '@/data/tabukVenues';

const CategoryDetails = () => {
  const { category } = useParams<{ category: string }>();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'distance'>('distance');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  
  useEffect(() => {
    // Use Tabuk location for halls, Riyadh for others
    if (category === 'halls') {
      setUserLocation({ lat: 28.3998, lng: 36.5662 });
    } else {
      setUserLocation({ lat: 24.7136, lng: 46.6753 });
    }
  }, [category]);
  
  // Get real Tabuk venues for halls category
  const tabukVenues = getAllTabukVenues();
  
  // Convert Tabuk venues to provider format
  const tabukProviders = tabukVenues.map(venue => ({
    id: venue.id,
    name: venue.name,
    location: venue.address,
    subtitle: `تتسع لـ 300 ضيف`, // Default capacity
    price: venue.price,
    priceUnit: venue.priceUnit,
    rating: venue.rating,
    reviews: Math.floor(Math.random() * 200) + 50, // Random review count
    image: venue.image,
    distance: venue.distance,
    position: venue.position,
    category: venue.category,
  }));

  // Category-specific data with real Tabuk venues for halls
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
          priceUnit: 'ر.س',
          rating: 4.8,
          reviews: 128,
          image: 'https://source.unsplash.com/featured/?food,arabic',
          featured: true,
          distance: '5.0 كم',
          position: { lat: 24.7136, lng: 46.6753 },
          category: 'kitchens',
        },
        {
          id: '2',
          name: 'مطبخ زمان',
          location: 'الرياض',
          subtitle: 'رياني • كبسة • يمني',
          price: 130,
          priceUnit: 'ر.س',
          rating: 4.7,
          reviews: 95,
          image: 'https://source.unsplash.com/featured/?food,dinner',
          distance: '3.2 كم',
          position: { lat: 24.7246, lng: 46.6558 },
          category: 'kitchens',
        },
        {
          id: '3',
          name: 'مطبخ الخليج',
          location: 'الرياض',
          subtitle: 'كبسة • مندي • مشويات',
          price: 120,
          priceUnit: 'ر.س',
          rating: 4.9,
          reviews: 156,
          image: 'https://source.unsplash.com/featured/?food,meat',
          distance: '4.0 كم',
          position: { lat: 24.7048, lng: 46.6763 },
          category: 'kitchens',
        },
        {
          id: '4',
          name: 'مطبخ الريف',
          location: 'الرياض',
          subtitle: 'مندي • معموص • سلايق',
          price: 140,
          priceUnit: 'ر.س',
          rating: 4.6,
          reviews: 87,
          image: 'https://source.unsplash.com/featured/?food,buffet',
          distance: '6.2 كم',
          position: { lat: 24.6941, lng: 46.6858 },
          category: 'kitchens',
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
          distance: '3.5 كم',
          image: '/lovable-uploads/9e85d7d6-e814-4f7c-87d8-6f8c1a1fb9ad.png',
          additionalInfo: {
            duration: 'ساعتين',
            providers: 3,
            drinks: ['قهوة عربية', 'شاي وتمر'],
          },
          position: { lat: 24.7336, lng: 46.7053 },
          category: 'coffee',
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
          distance: '5.3 كم',
          image: 'https://source.unsplash.com/featured/?arabic,coffee',
          additionalInfo: {
            duration: '٤ ساعات',
            providers: 3,
            drinks: ['قهوة عربية', 'شاي وتمر'],
          },
          position: { lat: 24.7146, lng: 46.6853 },
          category: 'coffee',
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
          distance: '7.1 كم',
          image: 'https://source.unsplash.com/featured/?coffee,cups',
          additionalInfo: {
            duration: '٥ ساعات',
            providers: 4,
            drinks: ['قهوة عربية', 'شاي وتمر'],
          },
          position: { lat: 24.6941, lng: 46.6768 },
          category: 'coffee',
        },
      ],
    },
    halls: {
      title: 'القاعات',
      description: 'قاعات احتفالات فاخرة من تبوك لجميع المناسبات',
      filterOptions: ['الكل', 'تبوك', 'البساتين', 'الريان'],
      providers: tabukProviders, // Use real Tabuk venues
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
          subtitle: 'تجهيزات كاملة',
          price: 800,
          priceUnit: 'ر.س',
          rating: 4.8,
          reviews: 75,
          distance: '3.7 كم',
          image: 'https://source.unsplash.com/featured/?decoration,wedding',
          position: { lat: 24.7236, lng: 46.6353 },
          category: 'accessories',
        },
        {
          id: '2',
          name: 'إضاءة LED للمدخل',
          location: 'الرياض',
          subtitle: 'مؤسسة النور للإضاءة',
          price: 350,
          priceUnit: 'ر.س',
          rating: 4.8,
          reviews: 120,
          distance: '4.2 كم',
          image: 'https://source.unsplash.com/featured/?lights,pathway',
          position: { lat: 24.7146, lng: 46.6753 },
          category: 'accessories',
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
          distance: '5.8 كم',
          image: 'https://source.unsplash.com/featured/?gift,wrapped',
          position: { lat: 24.7036, lng: 46.6853 },
          category: 'accessories',
        },
        {
          id: '4',
          name: 'ديكور مدخل فاخر',
          location: 'الرياض',
          subtitle: 'لمسات الإبداع',
          price: 600,
          priceUnit: 'ر.س',
          rating: 4.7,
          reviews: 56,
          distance: '6.4 كم',
          image: 'https://source.unsplash.com/featured/?entrance,decoration',
          position: { lat: 24.6936, lng: 46.6653 },
          category: 'accessories',
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
      case 'halls':
        return <Building2 className="w-5 h-5" />;
      case 'addons':
        return <Package className="w-5 h-5" />;
      default:
        return null;
    }
  };
  
  // Filter and sort data based on selected filter, search and sort
  const filteredProviders = data.providers
    .filter((provider: any) => {
      // Filter by category filter option
      const filterMatch = selectedFilter === 'all' || 
                         (provider.subtitle && provider.subtitle.includes(selectedFilter));
      
      // Filter by search query
      const searchMatch = !searchQuery || 
                         provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (provider.subtitle && provider.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return filterMatch && searchMatch;
    })
    .sort((a: any, b: any) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price - b.price;
        case 'distance':
        default:
          // Parse the distance value (assuming format like "5.0 كم")
          const distanceA = parseFloat(a.distance.split(' ')[0]);
          const distanceB = parseFloat(b.distance.split(' ')[0]);
          return distanceA - distanceB;
      }
    });

  // Prepare markers for Google Maps
  const mapMarkers = filteredProviders.map((provider: any) => ({
    position: provider.position,
    title: provider.name,
    id: provider.id,
    category: provider.category
  }));

  const handleMarkerClick = (markerId: string) => {
    setSelectedServiceId(markerId);
    
    // Scroll to the service when a marker is clicked
    const serviceElement = document.getElementById(`service-${markerId}`);
    if (serviceElement) {
      serviceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleServiceCardClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    
    // Find the service to get its position
    const service = data.providers.find((s: any) => s.id === serviceId);
    if (service) {
      // You could add any additional logic here if needed
      toast(`تم تحديد ${service.name} على الخريطة`);
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
          <div className="flex items-center gap-2">
            {getCategoryIcon()}
            <h2 className="text-xl font-bold">{data.title}</h2>
          </div>
          <p className="text-gray-700 mt-1">{data.description}</p>
        </div>
        
        {/* Search and Sort */}
        <div className="mb-4 flex gap-2">
          <div className="relative flex-grow">
            <Input
              type="search"
              placeholder="ابحث..."
              className="pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="w-5 h-5 absolute top-2.5 right-3 text-gray-400" />
          </div>
          <div className="relative">
            <select
              className="h-10 border border-input rounded-md bg-background px-3 py-2 appearance-none pr-8 cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'distance' | 'rating' | 'price')}
            >
              <option value="distance">الأقرب</option>
              <option value="rating">التقييم</option>
              <option value="price">السعر</option>
            </select>
            <Filter className="w-4 h-4 absolute top-3 left-2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Google Map */}
        <div className="h-64 mb-4 rounded-lg overflow-hidden shadow-md">
          <GoogleMapComponent 
            markers={mapMarkers}
            onMarkerClick={handleMarkerClick}
            highlightedMarkerId={selectedServiceId}
            center={userLocation || { lat: 24.7136, lng: 46.6753 }}
          />
        </div>
        
        {/* Filter options */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {data.filterOptions.map((option: string, index: number) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                (index === 0 && selectedFilter === 'all') || option === selectedFilter 
                ? 'bg-munaasib-red text-white' 
                : 'bg-white text-gray-700 border border-gray-200'
              }`}
              onClick={() => setSelectedFilter(index === 0 ? 'all' : option)}
            >
              {option}
            </button>
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            لا توجد نتائج مطابقة لبحثك
          </div>
        )}
        
        {categoryKey === 'coffee' && filteredProviders.length > 0 ? (
          // Special layout for coffee services with additional info
          <div className="space-y-4">
            {filteredProviders.map((provider: any) => (
              <div 
                key={provider.id} 
                id={`service-${provider.id}`}
                className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${
                  selectedServiceId === provider.id ? 'ring-2 ring-munaasib-red' : ''
                }`}
                onClick={() => handleServiceCardClick(provider.id)}
              >
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
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{provider.distance}</span>
                  </div>
                  {renderCoffeeServiceInfo(provider)}
                  <div className="flex items-center text-gray-600 mt-1">
                    {provider.additionalInfo?.drinks?.map((drink: string, idx: number) => (
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
        ) : filteredProviders.length > 0 ? (
          // Default layout for other categories
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredProviders.map((provider: any) => (
              <div 
                key={provider.id} 
                id={`service-${provider.id}`}
                className={`transition-all duration-300 ${selectedServiceId === provider.id ? 'ring-2 ring-munaasib-red rounded-lg' : ''}`}
                onClick={() => handleServiceCardClick(provider.id)}
              >
                <ServiceCard
                  id={provider.id}
                  name={provider.name}
                  location={provider.location}
                  image={provider.image}
                  rating={provider.rating}
                  price={provider.price}
                  priceUnit={provider.priceUnit}
                  subtitle={provider.subtitle}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default CategoryDetails;
