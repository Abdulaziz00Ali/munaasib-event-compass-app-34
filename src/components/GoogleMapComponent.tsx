
import React, { useEffect, useRef, useState } from 'react';

interface GoogleMapComponentProps {
  center?: { lat: number, lng: number };
  zoom?: number;
  markers?: Array<{
    position: { lat: number, lng: number };
    title?: string;
    id?: string;
  }>;
  onMarkerClick?: (markerId: string) => void;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  center = { lat: 24.7136, lng: 46.6753 }, // Default to Riyadh coordinates
  zoom = 12,
  markers = [],
  onMarkerClick
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [apiKeyEntered, setApiKeyEntered] = useState<string | null>(
    localStorage.getItem('googleMapsApiKey')
  );
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

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

  // Initialize the map once the API is loaded
  useEffect(() => {
    if (apiKeyEntered) {
      loadGoogleMapsScript(apiKeyEntered);
    }
  }, [apiKeyEntered]);

  // Initialize the map once the API is loaded
  useEffect(() => {
    if (googleMapsLoaded && mapRef.current && window.google) {
      // Create the map
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
      
      setMapLoaded(true);
    }
  }, [googleMapsLoaded, center, zoom]);

  // Update markers when markers prop changes
  useEffect(() => {
    if (mapLoaded && mapInstanceRef.current && markers.length > 0) {
      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      // Add new markers
      markers.forEach(marker => {
        if (!mapInstanceRef.current) return;
        
        const newMarker = new google.maps.Marker({
          position: marker.position,
          map: mapInstanceRef.current,
          title: marker.title || '',
        });

        if (onMarkerClick && marker.id) {
          newMarker.addListener('click', () => {
            if (onMarkerClick && marker.id) {
              onMarkerClick(marker.id);
            }
          });
        }

        markersRef.current.push(newMarker);
      });
    }
  }, [markers, mapLoaded, onMarkerClick]);

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
    <div 
      ref={mapRef} 
      className="w-full h-full bg-gray-200 flex items-center justify-center relative"
    >
      {!googleMapsLoaded && (
        <div className="text-gray-600">جاري تحميل الخريطة...</div>
      )}
      {!mapLoaded && googleMapsLoaded && (
        <div className="text-gray-600">جاري إعداد الخريطة...</div>
      )}
    </div>
  );
};

export default GoogleMapComponent;
