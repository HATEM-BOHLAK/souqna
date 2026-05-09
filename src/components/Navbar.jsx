import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-my-bg border-b border-my-black">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* الصف الأول: اللوغو + البحث + زر القائمة */}
          <div className="flex items-center justify-between h-16 gap-4">
            {/* اللوغو */}
            <Link to="/">
              <div className="shrink-0">
                <div className="flex items-center">
                  <span className="text-xl sm:text-2xl font-bold text-my-green">
                    souqna
                  </span>
                </div>
              </div>
            </Link>

            {/* مربع البحث - ظاهر في جميع الشاشات */}
            <div className="flex-1 max-w-md md:max-w-lg mx-2 sm:mx-4 md:mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="ابحث هنا..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 pr-9 sm:pr-10 rounded-lg border border-my-black/20 focus:border-my-green focus:outline-none focus:ring-1 focus:ring-my-green bg-my-black text-my-green text-sm sm:text-base"
                />
                <button className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 text-my-green hover:text-my-green/80">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* الأزرار - تظهر فقط في الشاشات المتوسطة والكبيرة */}
            <div className="hidden md:flex items-center space-x-2 sm:space-x-3 shrink-0">
              <Link to="login">
                <button className="px-3 sm:px-4 py-2 text-my-green hover:text-my-green font-medium transition-colors duration-200 border border-my-bg rounded-lg hover:border-my-green text-sm sm:text-base">
                  تسجيل الدخول
                </button>
              </Link>
              <Link to="register">
                <button className="px-3 sm:px-4 py-2 bg-my-green text-my-black font-medium rounded-lg hover:bg-my-green/90 transition-colors duration-200 shadow-sm text-sm sm:text-base">
                  إنشاء حساب
                </button>
              </Link>
            </div>

            {/* زر القائمة للهواتف - يظهر فقط في الشاشات الصغيرة */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-my-green hover:text-my-green hover:bg-my-black/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-my-green transition-colors duration-200 shrink-0"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">فتح القائمة الرئيسية</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة للهواتف - تحتوي على الأزرار فقط */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-my-black/10 bg-my-bg">
            <div className="px-4 py-3 space-y-2">
              {/* أزرار تسجيل الدخول وإنشاء حساب فقط */}
              <Link to="login">
                <button className="w-full px-4 py-2.5 text-my-green hover:text-my-green font-medium transition-colors duration-200 border border-my-bg rounded-lg hover:border-my-green text-center text-sm sm:text-base">
                  تسجيل الدخول
                </button>
              </Link>
              <Link to="register">
                <button className="w-full px-4 py-2.5 bg-my-green text-white font-medium rounded-lg hover:bg-my-green/90 transition-colors duration-200 shadow-sm text-center text-sm sm:text-base">
                  إنشاء حساب
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
