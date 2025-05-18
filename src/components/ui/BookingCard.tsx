
import React from 'react';
import { useNavigate } from 'react-router-dom';

type BookingCardProps = {
  id: string;
  title: string;
  venue: string;
  date: string;
  time: string;
  location: string;
  image: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  onEdit: (id: string) => void;
  onCancel: (id: string) => void;
};

const BookingCard: React.FC<BookingCardProps> = ({
  id,
  title,
  venue,
  date,
  time,
  location,
  image,
  status,
  onEdit,
  onCancel,
}) => {
  const navigate = useNavigate();
  
  const statusText = {
    confirmed: 'مؤكد',
    pending: 'قيد المعالجة',
    cancelled: 'ملغي',
  };

  const statusClass = {
    confirmed: 'status-confirmed',
    pending: 'status-pending',
    cancelled: 'bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-sm font-medium',
  };
  
  const handleEdit = () => {
    onEdit(id);
    // Navigate to the booking form with the booking id
    navigate(`/booking/${id}`);
  };
  
  const handleCancel = () => {
    if (window.confirm('هل أنت متأكد من إلغاء هذا الحجز؟')) {
      onCancel(id);
    }
  };

  return (
    <div className="event-card">
      <div className="flex">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="mr-3 flex-1">
          <div className="flex justify-between">
            <h3 className="font-bold">{title}</h3>
            <span className={statusClass[status]}>{statusText[status]}</span>
          </div>
          <h4 className="text-gray-700">{venue}</h4>
          
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {date} {time}
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {location}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-4">
        <button 
          onClick={handleEdit} 
          className="bg-munaasib-gold text-white py-2 px-6 rounded-lg hover:bg-munaasib-darkGold transition-colors duration-200"
        >
          تعديل الحجز
        </button>
        <button 
          onClick={handleCancel} 
          className="border border-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          إلغاء الحجز
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
