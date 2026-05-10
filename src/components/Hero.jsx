import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, ArrowLeft, Sparkles } from "lucide-react";
import Logo from "./Logo";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("البحث عن:", searchQuery);
  };

  return (
    <section className="bg-my-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-10">
      {/* خلفية زخرفية خفيفة */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-72 h-72 bg-my-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-my-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
        {/* ✅ اللوغو بحجم xlarge */}
        <div className="mb-4">
          <Logo size="xlarge" />
        </div>

        {/* ✅ شعار "سوقك بين يديك" */}
        <p className="text-lg sm:text-xl text-my-green mb-8 sm:mb-10 font-medium tracking-wide">
          سوقك بين يديك ✨
        </p>

        {/* ✅ مربع البحث السريع */}
        <form onSubmit={handleSearch} className="mb-8 sm:mb-10">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                w-full pl-12 pr-5 py-4 
                bg-my-black border-2 border-my-green/50 rounded-2xl
                text-my-green text-base sm:text-lg
                placeholder:text-my-green/50
                focus:border-my-green focus:outline-none focus:ring-4 focus:ring-my-green/10 focus:text-my-green
                transition-all duration-300
                shadow-sm hover:shadow-md
              "
            />

            {/* أيقونة البحث */}
            <button
              type="submit"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 bg-my-green text-white rounded-xl hover:bg-my-green/90 transition-colors duration-200"
            >
              <Search size={20} />
            </button>

            {/* زر مسح (يظهر عند الكتابة) */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute left-12 top-1/2 -translate-y-1/2 p-1 text-my-green/50 hover:text-my-green transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </form>

        {/* ✅ الزرين الرئيسيين */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          {/* زر: أحدث المنتجات */}
          <Link
            to="/latest-products"
            className="
              group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 
              px-7 py-3.5 sm:px-8 sm:py-4
              bg-my-green/5 border-2 border-my-green text-my-green
              font-semibold rounded-xl
              hover:border-my-green hover:text-my-green hover:bg-my-green/5
              transition-all duration-300
              shadow-sm hover:shadow-md
              text-base sm:text-lg
            "
          >
            <Sparkles
              size={20}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            أحدث المنتجات
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
          </Link>

          {/* زر: أضف منتج */}
          <Link
            to="/add-product"
            className="
              group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 
              px-7 py-3.5 sm:px-8 sm:py-4
              bg-my-green text-my-black
              font-semibold rounded-xl
              hover:bg-my-green/90
              transition-all duration-300
              shadow-lg hover:shadow-xl hover:-translate-y-0.5
              text-base sm:text-lg
            "
          >
            <Plus
              size={20}
              className="group-hover:rotate-90 transition-transform duration-300"
            />
            أضف منتج
          </Link>
        </div>

        {/* نص صغير إضافي (اختياري) */}
        <p className="mt-8 text-xs sm:text-sm text-my-green">
          بيع و اشتري بسهولة و سرعة...
        </p>
      </div>
    </section>
  );
};

export default Hero;
