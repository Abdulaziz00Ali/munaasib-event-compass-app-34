
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Search } from 'lucide-react';

const Help = () => {
  const [query, setQuery] = useState('');
  
  const faqs = [
    {
      question: 'كيف أحجز مزود خدمة؟',
      answer: 'يمكنك البحث عن مزود الخدمة المناسب، ثم النقر على زر "احجز الآن"، واتباع الخطوات لتحديد التاريخ والوقت والموقع وإكمال عملية الحجز.'
    },
    {
      question: 'كيف يمكنني إلغاء حجزي؟',
      answer: 'يمكنك الانتقال إلى صفحة "حجوزاتي"، اختيار الحجز الذي ترغب بإلغائه، والنقر على زر "إلغاء" واتباع الإرشادات لإكمال عملية الإلغاء.'
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نحن ندعم طرق دفع متنوعة تشمل: بطاقات الائتمان (فيزا، ماستركارد)، بطاقات مدى، Apple Pay، وتحويل بنكي مباشر.'
    },
    {
      question: 'كيف أقيّم مزود الخدمة؟',
      answer: 'بعد اكتمال الحدث، ستتلقى إشعارًا لتقييم تجربتك. يمكنك أيضًا الذهاب إلى صفحة "حجوزاتي" > الحجوزات السابقة > والضغط على "تقييم".'
    },
  ];
  
  const filteredFaqs = query
    ? faqs.filter(faq => 
        faq.question.includes(query) || 
        faq.answer.includes(query)
      )
    : faqs;

  return (
    <Layout title="المساعدة والدعم" showBack>
      <div className="mb-6 relative">
        <div className="absolute right-3 top-3 text-gray-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="ابحث عن المساعدة"
          className="w-full bg-gray-100 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-munaasib-red"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      
      <h2 className="text-xl font-bold mb-4">الأسئلة الأكثر شيوعاً</h2>
      
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{faq.question}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 border-t pt-6">
        <h2 className="text-xl font-bold mb-4">تواصل معنا</h2>
        <div className="space-y-4">
          <button className="w-full bg-munaasib-red text-white py-3 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            الدردشة المباشرة
          </button>
          
          <button className="w-full bg-white border border-gray-300 text-gray-800 py-3 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>
            البريد الإلكتروني
          </button>
          
          <button className="w-full bg-white border border-gray-300 text-gray-800 py-3 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            اتصل بنا
          </button>
        </div>
      </div>
      
      <div className="mt-10 pt-6">
        <h3 className="text-center text-lg font-bold mb-4">إرسال رسالة</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">الاسم الكامل</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-munaasib-red"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-munaasib-red"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">الموضوع</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-munaasib-red"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">الرسالة</label>
            <textarea
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-munaasib-red"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-munaasib-red text-white py-3 rounded-lg hover:bg-munaasib-darkRed transition-colors"
          >
            إرسال
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Help;
