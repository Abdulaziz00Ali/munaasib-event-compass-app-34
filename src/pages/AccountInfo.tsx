
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Phone, Mail, Star, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountInfo = () => {
  const accountData = {
    name: 'محمد عبدالله',
    email: 'm.abdullah@example.com',
    phone: '+966501234567',
    joinDate: '15 يناير 2023',
    location: 'الرياض، المملكة العربية السعودية',
    accountType: 'مزود خدمة',
    verification: 'موثق',
    rating: 4.8,
    totalBookings: 245,
    completedEvents: 238,
    responseTime: 'خلال ساعتين',
    languages: ['العربية', 'الإنجليزية'],
    businessHours: 'السبت - الخميس: 9:00 ص - 9:00 م'
  };

  return (
    <Layout title="معلومات الحساب" showBack>
      <div className="space-y-6">
        {/* Profile Summary */}
        <Card className="p-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-16 h-16 rounded-full border-2 border-munaasib-gold overflow-hidden">
              <img 
                src="https://source.unsplash.com/featured/?portrait,man" 
                alt="صورة الملف الشخصي" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{accountData.name}</h2>
              <p className="text-gray-600">{accountData.accountType}</p>
              <div className="flex items-center mt-1">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {accountData.verification}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Account Statistics */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold">{accountData.rating}</div>
            <div className="text-sm text-gray-600">التقييم</div>
          </Card>
          
          <Card className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-munaasib-red" />
            </div>
            <div className="text-2xl font-bold">{accountData.totalBookings}</div>
            <div className="text-sm text-gray-600">إجمالي الحجوزات</div>
          </Card>
        </div>

        {/* Personal Information */}
        <Card className="p-4">
          <h3 className="text-lg font-bold mb-4">المعلومات الشخصية</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <Mail className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">البريد الإلكتروني</p>
                <p className="text-gray-600">{accountData.email}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-center space-x-3 space-x-reverse">
              <Phone className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">رقم الجوال</p>
                <p className="text-gray-600">{accountData.phone}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-center space-x-3 space-x-reverse">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">الموقع</p>
                <p className="text-gray-600">{accountData.location}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-center space-x-3 space-x-reverse">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">تاريخ الانضمام</p>
                <p className="text-gray-600">{accountData.joinDate}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Business Information */}
        <Card className="p-4">
          <h3 className="text-lg font-bold mb-4">معلومات الأعمال</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <Clock className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">وقت الاستجابة</p>
                <p className="text-gray-600">{accountData.responseTime}</p>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <p className="font-medium mb-2">ساعات العمل</p>
              <p className="text-gray-600">{accountData.businessHours}</p>
            </div>
            
            <Separator />
            
            <div>
              <p className="font-medium mb-2">اللغات</p>
              <div className="flex space-x-2 space-x-reverse">
                {accountData.languages.map((lang, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Performance Metrics */}
        <Card className="p-4">
          <h3 className="text-lg font-bold mb-4">الأداء</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>الفعاليات المكتملة</span>
              <span className="font-bold">{accountData.completedEvents}</span>
            </div>
            <div className="flex justify-between">
              <span>معدل الإكمال</span>
              <span className="font-bold text-green-600">
                {Math.round((accountData.completedEvents / accountData.totalBookings) * 100)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span>معدل الاستجابة</span>
              <span className="font-bold text-green-600">98%</span>
            </div>
          </div>
        </Card>

        {/* Edit Button */}
        <Link to="/edit-profile">
          <Button className="w-full bg-munaasib-red hover:bg-munaasib-red/90">
            تعديل المعلومات
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default AccountInfo;
