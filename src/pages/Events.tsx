
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Utensils, Coffee, Building2, Package, Filter, Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import CategoryCard from '@/components/ui/CategoryCard';
import GoogleMapComponent from '@/components/GoogleMapComponent';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

const Events = () => {
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);
  const [showMap, setShowMap] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  
  useEffect(() => {
    // Try to get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          console.log("Unable to retrieve location");
          // Use default location (Riyadh)
          setUserLocation({ lat: 24.7136, lng: 46.6753 });
        }
      );
    }
  }, []);
  
  const eventCategories = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'المطابخ',
      count: '+200 مزود',
      path: '/categories/kitchens',
      bgColor: 'bg-pink-50',
      category: 'kitchens',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'القهوجية',
      count: '+150 مزود',
      path: '/categories/coffee',
      bgColor: 'bg-pink-50',
      category: 'coffee',
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'القاعات',
      count: '+180 مزود',
      path: '/categories/halls',
      bgColor: 'bg-blue-50',
      category: 'venues',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'الكماليات',
      count: '+120 مزود',
      path: '/categories/addons',
      bgColor: 'bg-green-50',
      category: 'accessories',
    },
  ];

  const featuredHalls = [
    {
      id: '1',
      title: 'قاعة الملكية',
      location: 'حي النرجس، الرياض',
      image: 'https://source.unsplash.com/featured/?wedding,hall',
      category: 'قاعة',
      position: { lat: 24.7336, lng: 46.6653 },
      mapCategory: 'venues',
      distance: '5.5 كم',
      rating: 4.8,
      price: 15000,
      priceUnit: 'ر.س / ليلة',
    },
    {
      id: '2',
      title: 'قاعة الفيصلية',
      location: 'فندق الفيصلية، الرياض',
      image: 'https://source.unsplash.com/featured/?wedding,venue',
      category: 'قاعة',
      position: { lat: 24.7046, lng: 46.6953 },
      mapCategory: 'venues',
      distance: '4.2 كم',
      rating: 4.9,
      price: 20000,
      priceUnit: 'ر.س / ليلة',
    },
  ];

  const specialOffers = [
    {
      id: '1',
      name: 'عرض نهاية الأسبوع',
      discount: '25%',
      description: 'خصم 25% على جميع القاعات',
      image: 'https://source.unsplash.com/featured/?event,hall',
      position: { lat: 24.7136, lng: 46.6753 },
      mapCategory: 'venues',
      distance: '3.0 كم',
    },
    {
      id: '2',
      name: 'عرض الأسبوع',
      discount: '15%',
      description: 'خصم 15% على باقات الزفاف',
      image: 'https://source.unsplash.com/featured/?wedding,decoration',
      position: { lat: 24.7246, lng: 46.6853 },
      mapCategory: 'accessories',
      distance: '4.5 كم',
    },
  ];

  const eventPackages = [
    {
      id: '1',
      name: 'باقة الزفاف الملكي',
      price: '5000',
      description: 'تبدأ من 5000 ريال',
      image: 'https://source.unsplash.com/featured/?wedding,decoration',
      position: { lat: 24.7046, lng: 46.6753 },
      mapCategory: 'accessories',
      distance: '5.8 كم',
    },
    {
      id: '2',
      name: 'باقة الزفاف الفاخر',
      price: '3500',
      description: 'تبدأ من 3500 ريال',
      image: 'https://source.unsplash.com/featured/?wedding,celebration',
      position: { lat: 24.6946, lng: 46.6653 },
      mapCategory: 'accessories',
      distance: '6.2 كم',
    },
  ];

  // Filter combined items by search query
  const filteredItems = {
    featuredHalls: !searchQuery ? featuredHalls : featuredHalls.filter(hall => 
      hall.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hall.location.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    specialOffers: !searchQuery ? specialOffers : specialOffers.filter(offer => 
      offer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    eventPackages: !searchQuery ? eventPackages : eventPackages.filter(pkg => 
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  };

  // Prepare markers for Google Maps
  // We're combining all locations for the map
  const allLocations = [
    ...filteredItems.featuredHalls.map(hall => ({
      id: hall.id,
      title: hall.title,
      position: hall.position,
      category: hall.mapCategory
    })),
    ...filteredItems.specialOffers.map(offer => ({
      id: `offer-${offer.id}`,
      title: offer.name,
      position: offer.position,
      category: offer.mapCategory
    })),
    ...filteredItems.eventPackages.map(pkg => ({
      id: `package-${pkg.id}`,
      title: pkg.name,
      position: pkg.position,
      category: pkg.mapCategory
    }))
  ];

  const mapMarkers = allLocations.map((item: any) => ({
    position: item.position,
    title: item.title || item.name,
    id: item.id,
    category: item.category
  }));

  const handleMarkerClick = (markerId: string) => {
    setSelectedVenue(markerId);
    
    // Scroll to the corresponding item
    const element = document.getElementById(`item-${markerId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Toast to indicate which item was selected
      const itemDetails = getItemDetailsById(markerId);
      if (itemDetails) {
        toast(`تم تحديد ${itemDetails.name || itemDetails.title} على الخريطة`);
      }
    }
  };
  
  // Helper function to get item details by ID
  const getItemDetailsById = (id: string) => {
    if (id.startsWith('offer-')) {
      const offerId = id.replace('offer-', '');
      return specialOffers.find(offer => offer.id === offerId);
    } else if (id.startsWith('package-')) {
      const packageId = id.replace('package-', '');
      return eventPackages.find(pkg => pkg.id === packageId);
    } else {
      return featuredHalls.find(hall => hall.id === id);
    }
  };

  const handleItemClick = (id: string) => {
    setSelectedVenue(id);
  };

  return (
    <Layout title="المناسبات">
      <div className="space-y-8 pb-20">
        {/* Search Bar */}
        <div className="flex items-center gap-2 mb-2">
          <div className="relative flex-grow">
            <Input
              type="search"
              placeholder="ابحث عن مناسبات وخدمات..."
              className="pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="w-5 h-5 absolute top-2.5 right-3 text-gray-400" />
          </div>
          <button 
            onClick={() => setShowMap(!showMap)}
            className={`px-3 py-2 rounded-md text-sm ${showMap ? 'bg-gray-200' : 'bg-munaasib-red text-white'}`}
          >
            {showMap ? 'إخفاء الخريطة' : 'إظهار الخريطة'}
          </button>
        </div>
        
        {/* Google Map - Toggle based on showMap state */}
        {showMap && (
          <section className="h-64 rounded-lg overflow-hidden shadow-md">
            <GoogleMapComponent
              markers={mapMarkers}
              onMarkerClick={handleMarkerClick}
              highlightedMarkerId={selectedVenue}
              center={userLocation || { lat: 24.7136, lng: 46.6753 }}
            />
          </section>
        )}
      
        {/* Service Categories */}
        <section>
          <h2 className="text-lg font-bold mb-4">الخدمات المتاحة</h2>
          <div className="grid grid-cols-2 gap-4">
            {eventCategories.map((category, index) => (
              <Link 
                key={index}
                to={category.path} 
                className={`${category.bgColor} rounded-xl shadow-sm p-4 flex flex-col items-center justify-center`}
                id={`category-${index}`}
              >
                <div className="text-munaasib-red mb-2">{category.icon}</div>
                <h3 className="font-medium text-sm text-center">{category.title}</h3>
                {category.count && <p className="text-xs text-gray-500 mt-1 text-center">{category.count}</p>}
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Halls */}
        {filteredItems.featuredHalls.length > 0 && (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">قاعات مميزة</h2>
              <Link to="/categories/halls" className="text-munaasib-red text-sm">عرض الكل</Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {filteredItems.featuredHalls.map((hall) => (
                <div 
                  key={hall.id}
                  id={`item-${hall.id}`}
                  className={`cursor-pointer ${selectedVenue === hall.id ? 'ring-2 ring-munaasib-red rounded-lg' : ''}`}
                  onClick={() => handleItemClick(hall.id)}
                >
                  <Link to={`/service/${hall.id}`}>
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="relative">
                        <img
                          src={hall.image}
                          alt={hall.title}
                          className="w-full h-28 object-cover"
                        />
                        <Badge className="absolute bottom-2 start-2 bg-munaasib-red">{hall.category}</Badge>
                      </div>
                      <div className="p-2">
                        <h3 className="font-bold text-base">{hall.title}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600 text-xs">
                            <MapPin className="w-3 h-3 ml-1" />
                            <span className="truncate">{hall.location}</span>
                          </div>
                          <span className="text-xs text-gray-500">{hall.distance}</span>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 ml-1" fill="currentColor" />
                            <span className="text-xs">{hall.rating}</span>
                          </div>
                          <span className="text-xs text-munaasib-red font-bold">{hall.price.toLocaleString()} {hall.priceUnit}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Special Offers */}
        {filteredItems.specialOffers.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-4">عروض خاصة</h2>
            <div className="grid gap-4">
              {filteredItems.specialOffers.map((offer) => (
                <div 
                  key={offer.id} 
                  id={`item-offer-${offer.id}`}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden w-full cursor-pointer ${
                    selectedVenue === `offer-${offer.id}` ? 'ring-2 ring-munaasib-red' : ''
                  }`}
                  onClick={() => handleItemClick(`offer-${offer.id}`)}
                >
                  <div className="flex">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="w-1/2 h-32 object-cover"
                    />
                    <div className="p-3 flex flex-col justify-between w-1/2">
                      <div>
                        <h3 className="font-bold text-base">{offer.name}</h3>
                        <p className="text-xs text-gray-500">{offer.description}</p>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <MapPin className="w-3 h-3 ml-1" />
                          <span className="truncate">{offer.distance}</span>
                        </div>
                      </div>
                      <div className="text-munaasib-red font-bold text-lg">
                        خصم {offer.discount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Event Packages */}
        {filteredItems.eventPackages.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-4">باقات المناسبات</h2>
            <div className="grid grid-cols-2 gap-4">
              {filteredItems.eventPackages.map((pkg) => (
                <div 
                  key={pkg.id}
                  id={`item-package-${pkg.id}`}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer ${
                    selectedVenue === `package-${pkg.id}` ? 'ring-2 ring-munaasib-red' : ''
                  }`}
                  onClick={() => handleItemClick(`package-${pkg.id}`)}
                >
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-28 object-cover"
                  />
                  <div className="p-2">
                    <h3 className="font-bold text-sm">{pkg.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500">{pkg.description}</p>
                      <span className="text-xs text-gray-500">{pkg.distance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* No Results Message */}
        {!filteredItems.featuredHalls.length && !filteredItems.specialOffers.length && !filteredItems.eventPackages.length && (
          <div className="text-center py-10 text-gray-500">
            لا توجد نتائج مطابقة لبحثك
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Events;
