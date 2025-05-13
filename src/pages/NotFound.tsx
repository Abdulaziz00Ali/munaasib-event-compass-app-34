
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-bold text-munaasib-red">404</h1>
      <p className="text-xl mt-4 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
      <Link
        to="/"
        className="bg-munaasib-red text-white py-3 px-6 rounded-lg hover:bg-munaasib-darkRed transition-colors"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
