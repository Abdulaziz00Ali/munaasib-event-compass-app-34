
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ChefHat, Coffee, Building2, Package } from 'lucide-react';

interface GoogleMapComponentProps {
  center?: { lat: number, lng: number };
  zoom?: number;
  markers?: Array<{
    position: { lat: number, lng: number };
    title?: string;
    id?: string;
    category?: 'kitchens' | 'coffee' | 'venues' | 'accessories' | string;
  }>;
  onMarkerClick?: (markerId: string) => void;
  highlightedMarkerId?: string;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  center = { lat: 24.7136, lng: 46.6753 }, // Default to Riyadh coordinates
  zoom = 12,
  markers = [],
  onMarkerClick,
  highlightedMarkerId
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [apiKeyEntered, setApiKeyEntered] = useState<string | null>(
    localStorage.getItem('googleMapsApiKey')
  );
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number, lng: number } | null>(null);
  const [locationStatus, setLocationStatus] = useState<'detecting' | 'granted' | 'denied' | 'unavailable'>('detecting');

  // Function to load the Google Maps API script
  const loadGoogleMapsScript = (apiKey: string) => {
    if (window.google && window.google.maps) {
      setGoogleMapsLoaded(true);
      return;
    }
    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setGoogleMapsLoaded(true);
    };
    script.onerror = () => {
      console.error('Google Maps script failed to load');
      setGoogleMapsLoaded(false);
      localStorage.removeItem('googleMapsApiKey');
      setApiKeyEntered(null);
    };
    document.head.appendChild(script);
  };

  // Get user location
  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('unavailable');
      console.log('Geolocation is not supported by your browser');
      return;
    }

    setLocationStatus('detecting');
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setUserLocation(userPos);
        setLocationStatus('granted');
        
        // If map is already loaded, center it on user's location
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setCenter(userPos);
        }
      },
      () => {
        setLocationStatus('denied');
        console.log('Unable to retrieve your location');
      }
    );
  };

  // Initialize the map once the API is loaded
  useEffect(() => {
    if (apiKeyEntered) {
      loadGoogleMapsScript(apiKeyEntered);
    }
  }, [apiKeyEntered]);

  // Try to get user location when the component mounts
  useEffect(() => {
    if (apiKeyEntered) {
      getUserLocation();
    }
  }, [apiKeyEntered]);

  // Initialize the map once the API is loaded
  useEffect(() => {
    if (googleMapsLoaded && mapRef.current && window.google) {
      // Use user location if available, otherwise use provided center
      const initialCenter = userLocation && locationStatus === 'granted' 
        ? userLocation 
        : center;

      // Create the map
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center: initialCenter,
        zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
      
      // Add a "my location" button if location access is granted
      if (locationStatus === 'granted' && mapInstanceRef.current) {
        // Add the control to the map
        const locationButton = document.createElement("button");
        locationButton.innerHTML = `
          <div style="background-color: white; padding: 5px; border-radius: 2px; box-shadow: 0 1px 4px rgba(0,0,0,0.3);">
            <span style="display: inline-block; width: 18px; height: 18px; background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"/></svg>');"></span>
          </div>
        `;
        locationButton.className = "custom-map-control-button";
        locationButton.style.margin = "10px";
        locationButton.style.border = "none";
        locationButton.style.cursor = "pointer";
        
        locationButton.addEventListener("click", () => {
          // Try HTML5 geolocation again
          if (userLocation) {
            mapInstanceRef.current?.setCenter(userLocation);
          } else {
            getUserLocation();
          }
        });

        mapInstanceRef.current.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
          locationButton
        );
      }

      // Create user location marker if available
      if (userLocation && locationStatus === 'granted' && mapInstanceRef.current) {
        new google.maps.Marker({
          position: userLocation,
          map: mapInstanceRef.current,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#4285F4",
            fillOpacity: 1,
            strokeColor: "white",
            strokeWeight: 2,
          },
          title: "موقعك الحالي",
        });
      }
      
      setMapLoaded(true);
    }
  }, [googleMapsLoaded, center, zoom, userLocation, locationStatus]);

  // Update markers when markers prop changes
  useEffect(() => {
    if (mapLoaded && mapInstanceRef.current && markers.length > 0) {
      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      // Add new markers
      markers.forEach(marker => {
        if (!mapInstanceRef.current) return;
        
        // Determine marker icon based on category
        const getMarkerIcon = (category?: string) => {
          const iconSize = new google.maps.Size(30, 30);
          const iconAnchor = new google.maps.Point(15, 30);
          
          let iconUrl = '';
          
          switch (category) {
            case 'kitchens':
              iconUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" viewBox="0 0 24 24" fill="none" stroke="${highlightedMarkerId === marker.id ? '#ff0000' : '#e11d48'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                  <line x1="6" x2="18" y1="17" y2="17"></line>
                </svg>
              `);
              break;
            case 'coffee':
              iconUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" viewBox="0 0 24 24" fill="none" stroke="${highlightedMarkerId === marker.id ? '#ff0000' : '#e11d48'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                  <line x1="6" x2="6" y1="2" y2="4"></line>
                  <line x1="10" x2="10" y1="2" y2="4"></line>
                  <line x1="14" x2="14" y1="2" y2="4"></line>
                </svg>
              `);
              break;
            case 'venues':
            case 'halls':
              iconUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" viewBox="0 0 24 24" fill="none" stroke="${highlightedMarkerId === marker.id ? '#ff0000' : '#e11d48'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M12 14h.01"></path>
                </svg>
              `);
              break;
            case 'accessories':
            case 'addons':
              iconUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" viewBox="0 0 24 24" fill="none" stroke="${highlightedMarkerId === marker.id ? '#ff0000' : '#e11d48'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" x2="12" y1="22" y2="12"></line>
                </svg>
              `);
              break;
            default:
              // default marker icon
              iconUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" viewBox="0 0 24 24" fill="none" stroke="${highlightedMarkerId === marker.id ? '#ff0000' : '#e11d48'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              `);
          }
          
          return {
            url: iconUrl,
            size: iconSize,
            anchor: iconAnchor,
            scaledSize: iconSize
          };
        };
        
        // Create the marker with the appropriate icon
        const newMarker = new google.maps.Marker({
          position: marker.position,
          map: mapInstanceRef.current,
          title: marker.title || '',
          icon: getMarkerIcon(marker.category),
          animation: highlightedMarkerId === marker.id ? google.maps.Animation.BOUNCE : undefined
        });

        // Create info window for each marker
        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="text-align: center; direction: rtl; padding: 5px;">
                      <div style="font-weight: bold; font-size: 14px;">${marker.title}</div>
                      <div style="margin-top: 5px;">
                        <button style="background-color: #e11d48; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">
                          عرض التفاصيل
                        </button>
                      </div>
                    </div>`
        });

        // Add click listener to the marker
        newMarker.addListener('click', () => {
          // Close any open info windows
          markersRef.current.forEach(m => {
            google.maps.event.clearListeners(m, 'closeclick');
          });
          
          // Open this marker's info window
          infoWindow.open(mapInstanceRef.current, newMarker);
          
          // Add listener to call onMarkerClick when the "عرض التفاصيل" button is clicked
          google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
            const button = document.querySelector('button');
            if (button && onMarkerClick && marker.id) {
              button.addEventListener('click', () => {
                onMarkerClick(marker.id!);
                infoWindow.close();
              });
            }
          });
          
          // Call onMarkerClick to scroll to the related card
          if (onMarkerClick && marker.id) {
            onMarkerClick(marker.id);
          }
        });

        markersRef.current.push(newMarker);
      });

      // If a marker is highlighted, make sure it's visible on the map
      if (highlightedMarkerId) {
        const highlightedMarker = markers.find(m => m.id === highlightedMarkerId);
        if (highlightedMarker && mapInstanceRef.current) {
          mapInstanceRef.current.panTo(highlightedMarker.position);
          mapInstanceRef.current.setZoom(15); // Zoom in a bit
        }
      }
    }
  }, [markers, mapLoaded, onMarkerClick, highlightedMarkerId]);

  // Handle API key input
  const handleApiKeySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const apiKey = formData.get('apiKey') as string;
    
    if (apiKey) {
      localStorage.setItem('googleMapsApiKey', apiKey);
      setApiKeyEntered(apiKey);
    }
  };

  // Function to clear the API key and reset
  const handleClearApiKey = () => {
    localStorage.removeItem('googleMapsApiKey');
    setApiKeyEntered(null);
    setGoogleMapsLoaded(false);
    setMapLoaded(false);
    // Reload the page to clear the Google Maps scripts
    window.location.reload();
  };

  // If no API key is entered, show API key input form
  if (!apiKeyEntered) {
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h3 className="text-lg font-bold mb-4 text-center">إدخال مفتاح Google Maps API</h3>
          <p className="text-sm text-gray-600 mb-4 text-center">
            لاستخدام خرائط Google، يرجى إدخال مفتاح API الخاص بك
          </p>
          <form onSubmit={handleApiKeySubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="apiKey"
                placeholder="أدخل مفتاح API الخاص بك"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-munaasib-red text-white py-2 px-4 rounded-md hover:bg-munaasib-darkRed transition-colors"
            >
              حفظ المفتاح
            </button>
          </form>
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>يمكنك الحصول على مفتاح API من <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer" className="text-munaasib-red">لوحة تحكم Google Cloud</a></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
      <div ref={mapRef} className="w-full h-full"></div>
      
      {!googleMapsLoaded && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
          <div className="text-gray-600">جاري تحميل الخريطة...</div>
        </div>
      )}
      
      {!mapLoaded && googleMapsLoaded && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
          <div className="text-gray-600">جاري إعداد الخريطة...</div>
        </div>
      )}
      
      {locationStatus === 'detecting' && (
        <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-xs shadow-md">
          جاري تحديد موقعك...
        </div>
      )}
      
      {locationStatus === 'denied' && (
        <div className="absolute top-2 right-2 bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-xs shadow-md">
          تم رفض الوصول للموقع
        </div>
      )}
      
      <div className="absolute bottom-2 left-2 z-10">
        <button 
          onClick={handleClearApiKey}
          className="bg-white text-gray-600 px-2 py-1 rounded text-xs shadow-md hover:bg-gray-100"
        >
          تغيير مفتاح API
        </button>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
