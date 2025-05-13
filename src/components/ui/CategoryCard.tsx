
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type CategoryCardProps = {
  icon: ReactNode;
  title: string;
  path: string;
  count?: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, path, count }) => {
  return (
    <Link to={path} className="service-card flex flex-col items-center justify-center py-6">
      <div className="mb-2">{icon}</div>
      <h3 className="font-medium text-center">{title}</h3>
      {count && <p className="text-xs text-munaasib-gold mt-1 text-center">{count}</p>}
    </Link>
  );
};

export default CategoryCard;
