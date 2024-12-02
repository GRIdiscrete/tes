// /app/components/Logo.js
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="fixed top-4 left-4 transform translate-x-16 z-50">
      <Image
    
       src="/assets/yy.png" // Ensure this path is correct
        alt="logo"
        width={100}
        height={100}
        className="w-[100px] h-[100px]md:w-[100px] md:h-[120px] transition" // Responsive size for different screens
      />
    </div>
  );
};

export default Logo;