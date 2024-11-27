// /app/components/Logo.js
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="fixed top-4 left-4 z-100">
      <Image
        src="/assets/yy.png" // Ensure this path is correct
        alt="logo"
        width={100}
        height={100}
        className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] transition"
      />
    </div>
  );
};

export default Logo;