
import React from 'react';
import { Link } from 'react-router-dom';
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
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault(); // Prevent link navigation if onClick is provided
      onClick();
    }
  };

  return (
    <div className="service-card">
      <Link to={`/service/${id}`} onClick={handleClick}>
        <div className="aspect-w-16 aspect-h-9 mb-3">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-48 rounded-lg shadow-sm"
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
          <button className="bg-munaasib-red hover:bg-munaasib-darkRed text-white rounded-lg px-4 py-1 text-sm transition-colors">
            احجز الآن
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
