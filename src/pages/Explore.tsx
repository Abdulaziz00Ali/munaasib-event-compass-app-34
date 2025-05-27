import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ServiceCard from '@/components/ui/ServiceCard';
import { useUserType } from '@/hooks/useUserType';
import { ChefHat, Coffee, Building2, Package, Search, Filter, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleMapComponent from '@/components/GoogleMapComponent';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { getAllTabukVenues, VenueData } from '@/data/tabukVenues';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'distance' | 'rating' | 'price'>('distance');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const servicesPerPage = 5;
  const { userType } = useUserType();

  useEffect(() => {
    setUserLocation({ lat: 28.3998, lng: 36.5662 });
  }, []);
  
  const categories = [
    { id: 'kitchens', name: 'المطابخ', icon: <ChefHat className="w-6 h-6 text-red-500" /> },
    { id: 'coffee', name: 'القهوجية', icon: <Coffee className="w-6 h-6 text-red-500" /> },
    { id: 'venues', name: 'القاعات', icon: <Building2 className="w-6 h-6 text-red-500" /> },
    { id: 'accessories', name: 'الكماليات', icon: <Package className="w-6 h-6 text-red-500" /> },
  ];

  // Get ALL 53 real venues from Tabuk
  const tabukVenues = getAllTabukVenues();
  console.log('Total venues loaded:', tabukVenues.length);
  
  // Mock data for other categories
  const mockServices = [
    {
      id: 'mock-coffee-1',
      name: 'قهوجي أصايل',
      location: 'حي العليا، تبوك',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMOCK1Z5rGKzXl_6QZKzUqKBJ8QGZzQGZQGZQGZ=s1360-w1360-h1020',
      rating: 4.5,
      price: 80,
      priceUnit: 'ر.س / ساعتين',
      category: 'coffee',
      distance: '3.2 كم',
      position: { lat: 28.3946, lng: 36.5728 },
    },
    {
      id: 'mock-kitchen-1',
      name: 'مطبخ الأصالة',
      location: 'حي المروج، تبوك',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMOCK2Z5rGKzXl_6QZKzUqKBJ8QGZzQGZQGZQGZ=s1360-w1360-h1020',
      rating: 4.7,
      price: 180,
      priceUnit: 'ر.س / وجبة',
      category: 'kitchens',
      distance: '2.8 كم',
      position: { lat: 28.3836, lng: 36.5853 },
    },
    {
      id: 'mock-accessories-1',
      name: 'متجر هدايا الفرح',
      location: 'حي الملقا، تبوك',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMOCK3Z5rGKzXl_6QZKzUqKBJ8QGZzQGZQGZQGZ=s1360-w1360-h1020',
      rating: 4.3,
      price: 200,
      priceUnit: 'ر.س',
      category: 'accessories',
      distance: '6.5 كم',
      position: { lat: 28.3736, lng: 36.5653 },
    }
  ];

  // Convert ALL Tabuk venues to service format
  const tabukServices = tabukVenues.map(venue => ({
    id: venue.id,
    name: venue.name,
    location: venue.address,
    image: venue.image,
    rating: venue.rating,
    price: venue.price,
    priceUnit: venue.priceUnit,
    category: venue.category,
    distance: venue.distance,
    position: venue.position,
  }));

  const allServices = [...tabukServices, ...mockServices];
  console.log('Total services (venues + mock):', allServices.length);

  // Filter services based on selected category and search query
  const filteredServices = allServices
    .filter(service => {
      const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
      const searchMatch = !searchQuery || 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.location.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price - b.price;
        case 'distance':
        default:
          const distanceA = parseFloat(a.distance.split(' ')[0]);
          const distanceB = parseFloat(b.distance.split(' ')[0]);
          return distanceA - distanceB;
      }
    });

  console.log('Filtered services:', filteredServices.length);

  // Pagination logic
  const totalServices = filteredServices.length;
  const totalPages = Math.ceil(totalServices / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  console.log(`Page ${currentPage}: showing ${currentServices.length} services`);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);
  
  // Prepare markers for Google Maps
  const mapMarkers = filteredServices.map(service => ({
    position: service.position,
    title: service.name,
    id: service.id,
    category: service.category
  }));

  const handleMarkerClick = (markerId: string) => {
    setSelectedServiceId(markerId);
    
    const serviceElement = document.getElementById(`service-${markerId}`);
    if (serviceElement) {
      serviceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleServiceCardClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    
    const service = allServices.find(s => s.id === serviceId);
    if (service) {
      toast(`تم تحديد ${service.name} على الخريطة`);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <Layout title="استكشاف" showSearch={false}>
      {/* Search Section */}
      <div className="mb-4 flex gap-2">
        <div className="relative flex-grow">
          <Input
            type="search"
            placeholder="ابحث عن خدمات قريبة..."
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

      <div className="h-64 mb-4 rounded-lg overflow-hidden shadow-md">
        <GoogleMapComponent 
          markers={mapMarkers}
          onMarkerClick={handleMarkerClick}
          highlightedMarkerId={selectedServiceId}
          center={userLocation || { lat: 28.3998, lng: 36.5662 }}
        />
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
          <MapPin className="w-5 h-5 ml-1 text-gray-600" />
          <span className="text-gray-700">تبوك، المملكة العربية السعودية</span>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-4">
          مقدمي الخدمات القريبين ({totalServices})
          {selectedCategory === 'venues' && ` - ${tabukServices.length} قاعة متاحة`}
        </h2>
        
        <div className="grid grid-cols-1 gap-6">
          {currentServices.length > 0 ? (
            currentServices.map((service) => (
              <div 
                key={service.id} 
                id={`service-${service.id}`}
                className={`transition-all duration-300 ${selectedServiceId === service.id ? 'ring-2 ring-munaasib-red rounded-lg' : ''}`}
                onClick={() => handleServiceCardClick(service.id)}
              >
                <ServiceCard
                  id={service.id}
                  name={service.name}
                  location={service.location}
                  image={service.image}
                  rating={service.rating}
                  price={service.price}
                  priceUnit={service.priceUnit}
                  subtitle={service.distance}
                />
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-500">
              لا توجد نتائج مطابقة لبحثك
            </div>
          )}
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Show page numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNumber;
              if (totalPages <= 5) {
                pageNumber = i + 1;
              } else if (currentPage <= 3) {
                pageNumber = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNumber = totalPages - 4 + i;
              } else {
                pageNumber = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === pageNumber
                      ? 'bg-munaasib-red text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <span className="px-2 text-gray-500">...</span>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Page info */}
        {totalPages > 1 && (
          <div className="text-center mt-4 text-sm text-gray-600">
            الصفحة {currentPage} من {totalPages} ({filteredServices.length} نتيجة)
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Explore;
