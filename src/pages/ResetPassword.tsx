
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-start mb-12">
          <Link to="/verification-code" className="text-gray-800">
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-2">إعادة تعيين كلمة المرور</h1>
          <p className="text-gray-600 text-sm">
            أدخل كلمة مرور جديدة
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Input 
              placeholder="كلمة المرور الجديدة" 
              className="bg-gray-50 py-6 text-right"
              type={showNewPassword ? "text" : "password"}
            />
            <button 
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 left-0 flex items-center pl-3"
            >
              {showNewPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          
          <div className="relative">
            <Input 
              placeholder="تأكيد كلمة المرور" 
              className="bg-gray-50 py-6 text-right"
              type={showConfirmPassword ? "text" : "password"}
            />
            <button 
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 left-0 flex items-center pl-3"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>

          <Button className="w-full bg-[#987654] py-6 text-lg hover:bg-[#876543]">
            تأكيد
          </Button>
        </div>

        <div className="text-center mt-6 flex justify-center gap-1">
          <Link to="/login" className="text-[#987654] mr-1">
            تسجيل الدخول
          </Link>
          <span className="text-gray-600">هل لديك حساب؟</span>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
