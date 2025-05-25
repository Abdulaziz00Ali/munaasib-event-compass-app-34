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
import { getAllTabukVenues } from '@/data/tabukVenues';

// Define types for our different items
type FeaturedHall = {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
  position: { lat: number, lng: number };
  mapCategory: string;
  distance: string;
  rating: number;
  price: number;
  priceUnit: string;
};

type SpecialOffer = {
  id: string;
  name: string;
  discount: string;
  description: string;
  image: string;
  position: { lat: number, lng: number };
  mapCategory: string;
  distance: string;
};

type EventPackage = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  position: { lat: number, lng: number };
  mapCategory: string;
  distance: string;
};

const Events = () => {
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);
  const [showMap, setShowMap] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  
  useEffect(() => {
    // Use Tabuk location as default
    setUserLocation({ lat: 28.3998, lng: 36.5662 });
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

  // Get ALL real venues from Tabuk and convert to featured halls format
  const tabukVenues = getAllTabukVenues();
  const realFeaturedHalls: FeaturedHall[] = tabukVenues.map(venue => ({
    id: venue.id,
    title: venue.name,
    location: venue.address,
    image: venue.image,
    category: 'قاعة',
    position: venue.position,
    mapCategory: venue.category,
    distance: venue.distance,
    rating: venue.rating,
    price: venue.price,
    priceUnit: venue.priceUnit,
  }));

  const specialOffers: SpecialOffer[] = [
    {
      id: '1',
      name: 'عرض نهاية الأسبوع',
      discount: '25%',
      description: 'خصم 25% على جميع القاعات',
      image: 'https://source.unsplash.com/featured/?event,hall',
      position: { lat: 28.3998, lng: 36.5662 },
      mapCategory: 'venues',
      distance: '3.0 كم',
    },
    {
      id: '2',
      name: 'عرض الأسبوع',
      discount: '15%',
      description: 'خصم 15% على باقات الزفاف',
      image: 'https://source.unsplash.com/featured/?wedding,decoration',
      position: { lat: 28.4012, lng: 36.5698 },
      mapCategory: 'accessories',
      distance: '4.5 كم',
    },
  ];

  const eventPackages: EventPackage[] = [
    {
      id: '1',
      name: 'باقة الزفاف الملكي',
      price: '5000',
      description: 'تبدأ من 5000 ريال',
      image: 'https://source.unsplash.com/featured/?wedding,decoration',
      position: { lat: 28.3845, lng: 36.5421 },
      mapCategory: 'accessories',
      distance: '5.8 كم',
    },
    {
      id: '2',
      name: 'باقة الزفاف الفاخر',
      price: '3500',
      description: 'تبدأ من 3500 ريال',
      image: 'https://source.unsplash.com/featured/?wedding,celebration',
      position: { lat: 28.4156, lng: 36.5789 },
      mapCategory: 'accessories',
      distance: '6.2 كم',
    },
  ];

  // Filter combined items by search query
  const filteredItems = {
    featuredHalls: !searchQuery ? realFeaturedHalls : realFeaturedHalls.filter(hall => 
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
        toast(`تم تحديد ${itemDetails.displayName} على الخريطة`);
      }
    }
  };
  
  // Helper function to get item details by ID, with proper type handling
  const getItemDetailsById = (id: string) => {
    if (id.startsWith('offer-')) {
      const offerId = id.replace('offer-', '');
      const offer = specialOffers.find(offer => offer.id === offerId);
      return offer ? {
        displayName: offer.name, // Use name for offers
        ...offer
      } : null;
    } else if (id.startsWith('package-')) {
      const packageId = id.replace('package-', '');
      const pkg = eventPackages.find(pkg => pkg.id === packageId);
      return pkg ? {
        displayName: pkg.name, // Use name for packages
        ...pkg
      } : null;
    } else {
      const hall = realFeaturedHalls.find(hall => hall.id === id);
      return hall ? {
        displayName: hall.title, // Use title for halls
        ...hall
      } : null;
    }
  };

  const handleItemClick = (id: string) => {
    setSelectedVenue(id);
    
    // Find the service to get its position
    const itemDetails = getItemDetailsById(id);
    if (itemDetails) {
      // Display toast with the correct property name
      toast(`تم تحديد ${itemDetails.displayName} على الخريطة`);
    }
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
        
        {/* Google Map */}
        {showMap && (
          <section className="h-64 rounded-lg overflow-hidden shadow-md">
            <GoogleMapComponent
              markers={mapMarkers}
              onMarkerClick={handleMarkerClick}
              highlightedMarkerId={selectedVenue}
              center={userLocation || { lat: 28.3998, lng: 36.5662 }}
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

        {/* Featured Halls - Now showing ALL real Tabuk venues */}
        {filteredItems.featuredHalls.length > 0 && (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">قاعات الأفراح في تبوك ({filteredItems.featuredHalls.length})</h2>
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
