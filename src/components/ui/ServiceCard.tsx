
import React from 'react';
import { Link } from 'react-router-dom';

type ServiceCardProps = {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  priceUnit?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  name,
  location,
  image,
  rating,
  price,
  priceUnit = 'ريال'
}) => {
  return (
    <div className="service-card">
      <Link to={`/service/${id}`}>
        <div className="aspect-w-16 aspect-h-9 mb-3">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-48 rounded-lg"
          />
        </div>
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500 ml-1">★</span>
            <span>{rating}</span>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {location}
        </div>
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
