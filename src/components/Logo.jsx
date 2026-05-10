import React, { useState } from "react";

const Logo = ({ size = "large" }) => {
  const [isHovered, setIsHovered] = useState(false);

  // الأحجام
  const sizes = {
    small: "text-2xl sm:text-3xl",
    medium: "text-3xl sm:text-4xl lg:text-5xl",
    large: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
    xlarge: "text-6xl sm:text-7xl lg:text-8xl xl:text-9xl",
  };

  // أحجام النقطة الزخرفية
  const dotSizes = {
    small: { width: "7px", height: "7px", margin: "8px" },
    medium: { width: "9px", height: "9px", margin: "12px" },
    large: { width: "11px", height: "11px", margin: "16px" },
    xlarge: { width: "14px", height: "14px", margin: "22px" },
  };

  return (
    <div
      className={`inline-flex items-center cursor-pointer ${
        isHovered ? "scale-105" : "scale-100"
      } transition-transform duration-500 ease-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* الحاوية الرئيسية */}
      <div className="relative">
        {/* النص العربي */}
        <h1
          className={`
            ${sizes[size]} 
            font-black tracking-normal
            relative
            font-arabic
            select-none
          `}
          style={{
            color: "#16a34a",
            fontFamily:
              "'Tajawal', 'Cairo', 'IBM Plex Sans Arabic', sans-serif",
            textShadow: isHovered
              ? `
                0 0 10px rgba(22, 163, 74, 0.8),
                0 0 20px rgba(22, 163, 74, 0.6),
                0 0 30px rgba(22, 163, 74, 0.4)
              `
              : "0 0 5px rgba(22, 163, 74, 0.2)",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            animation: "logo-float 3s ease-in-out infinite",
            letterSpacing: "-0.02em",
          }}
        >
          سوقنا
          {/* نقطة زخرفية */}
          <span
            className="inline-block mr-1 align-middle"
            style={{
              width: dotSizes[size].width,
              height: dotSizes[size].height,
              backgroundColor: "#16a34a",
              borderRadius: "50%",
              display: "inline-block",
              marginBottom: dotSizes[size].margin,
              animation: "pulse-dot 2s ease-in-out infinite",
              boxShadow: isHovered
                ? `0 0 12px rgba(22, 163, 74, 0.9)`
                : "0 0 4px rgba(22, 163, 74, 0.4)",
              transition: "all 0.5s ease",
            }}
          />
        </h1>

        {/* تأثير التوهج الخلفي */}
        <div
          className="absolute inset-0 blur-2xl opacity-30 -z-10"
          style={{
            background:
              "linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #16a34a 100%)",
            transform: isHovered ? "scale(1.2)" : "scale(1)",
            transition: "transform 0.5s ease",
            filter: "blur(20px)",
          }}
        />

        {/* جسيمات متطايرة عند Hover */}
        {isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="absolute w-1.5 h-1.5 bg-green-500 rounded-full pointer-events-none"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  animation: `particle-fly 1s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: "0 0 6px rgba(34, 197, 94, 0.8)",
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Logo;
