
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

type ServiceCardProps = {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  priceUnit?: string;
  subtitle?: string;
  onClick?: () => void;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  name,
  location,
  image,
  rating,
  price,
  priceUnit = 'ريال',
  subtitle,
  onClick
}) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/booking/${id}`);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Image failed to load:', image);
    // Use a working fallback image for wedding halls
    e.currentTarget.src = 'https://images.unsplash.com/photo-1519167758481-83f29da96d81?w=400&h=300&fit=crop&auto=format';
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Image loaded successfully:', image);
  };

  return (
    <div className="service-card">
      <Link to={`/service/${id}`} onClick={handleCardClick}>
        <div className="aspect-w-16 aspect-h-9 mb-3">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-48 rounded-lg shadow-sm"
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        </div>
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 ml-1" fill="currentColor" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-2 flex items-center">
          <MapPin className="w-4 h-4 ml-1" />
          <span>{location}</span>
        </div>
        {subtitle && (
          <div className="text-sm text-gray-500 mb-2">
            {subtitle}
          </div>
        )}
        <div className="flex justify-between items-center mt-2">
          <div className="font-bold text-munaasib-red">
            {price.toLocaleString()} {priceUnit}
          </div>
          <button 
            className="bg-munaasib-red hover:bg-munaasib-darkRed text-white rounded-lg px-4 py-1 text-sm transition-colors"
            onClick={handleBookNowClick}
          >
            احجز الآن
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
