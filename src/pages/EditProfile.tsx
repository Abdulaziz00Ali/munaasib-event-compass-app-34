
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EditProfile = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: 'محمد عبدالله',
    email: 'm.abdullah@example.com',
    phone: '+966501234567',
    bio: 'مطبخ شعبي متخصص في الأكلات التراثية السعودية',
    location: 'الرياض، المملكة العربية السعودية',
    experience: '5 سنوات',
    specialties: 'المأكولات الشعبية، الحلويات التراثية'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    toast({
      title: "تم حفظ التغييرات",
      description: "تم تحديث ملفك الشخصي بنجاح",
    });
  };

  return (
    <Layout title="تعديل الملف الشخصي" showBack>
      <div className="space-y-6">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-munaasib-gold overflow-hidden">
              <img 
                src="https://source.unsplash.com/featured/?portrait,man" 
                alt="صورة الملف الشخصي" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-munaasib-red text-white p-2 rounded-full">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600">اضغط لتغيير الصورة</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">الاسم الكامل</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="text-right"
            />
          </div>

          <div>
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="text-right"
            />
          </div>

          <div>
            <Label htmlFor="phone">رقم الجوال</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="text-right"
            />
          </div>

          <div>
            <Label htmlFor="location">الموقع</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="text-right"
            />
          </div>

          <div>
            <Label htmlFor="bio">نبذة تعريفية</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              className="text-right min-h-[100px]"
              placeholder="اكتب نبذة عن خدماتك وخبراتك..."
            />
          </div>

          <div>
            <Label htmlFor="experience">سنوات الخبرة</Label>
            <Input
              id="experience"
              value={formData.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              className="text-right"
            />
          </div>

          <div>
            <Label htmlFor="specialties">التخصصات</Label>
            <Textarea
              id="specialties"
              value={formData.specialties}
              onChange={(e) => handleInputChange('specialties', e.target.value)}
              className="text-right"
              placeholder="اذكر تخصصاتك مفصولة بفواصل..."
            />
          </div>
        </div>

        {/* Save Button */}
        <Button 
          onClick={handleSave}
          className="w-full bg-munaasib-red hover:bg-munaasib-red/90"
        >
          <Save className="w-4 h-4 ml-2" />
          حفظ التغييرات
        </Button>
      </div>
    </Layout>
  );
};

export default EditProfile;
