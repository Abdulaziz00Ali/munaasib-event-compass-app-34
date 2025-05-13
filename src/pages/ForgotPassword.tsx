
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-start mb-12">
          <Link to="/login" className="text-gray-800">
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-2">نسيت كلمة المرور؟</h1>
          <p className="text-gray-600 text-sm">
            أدخل رقم جوالك لإعادة تعيين كلمة المرور
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Input 
              placeholder="رقم الجوال" 
              className="bg-gray-50 py-6 text-right" 
              type="tel"
            />
          </div>

          <Button className="w-full bg-[#DC143C] py-6 text-lg hover:bg-[#C01232]">
            إرسال رمز التحقق
          </Button>
        </div>

        <div className="text-center mt-6 flex justify-center gap-1">
          <Link to="/login" className="text-blue-500">
            تذكرت كلمة المرور؟ تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
