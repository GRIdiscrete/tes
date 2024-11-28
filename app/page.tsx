 "use client";
import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-scroll";
import { CustomizationProvider } from "@/contexts/Customization";
import Experience from "@/components/Experience";
import Configurator from "@/components/Configurator";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import { Html } from "@react-three/drei";
import Image from "next/image";

export default function Home() {
  const [isConfiguratorVisible, setConfiguratorVisible] = useState(false);
  const customizationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log( 'Section is visible', entry.isIntersecting); // Log intersection status
        setConfiguratorVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (customizationRef.current) {
      observer.observe(customizationRef.current);
    }

    return () => {
      if (customizationRef.current) {
        observer.unobserve(customizationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Logo Component */}

      <Navbar />
  
    {/* Hero Section */}
<section
  id="hero"
  className="w-[100vw] h-screen flex flex-col justify-center items-start text-center pt-20 bg-transparent mb-10"
  style={{
    backgroundImage: "url('/assets/bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div 
    className="flex-grow flex flex-col justify-center items-start pt-20 pl-10"
    style={{
      width: '100%', // Makes the content take full width
      maxWidth: '1200px', // Prevents content from stretching too much on larger screens
    }}
  >
    <Image 
      src="/assets/reg.png" 
      alt="hero" 
      width={200} 
      height={200} 
      priority 
      style={{ marginLeft: '-1' }}
    />
  </div>
</section>

{/* Add this CSS for responsiveness */}
<style jsx>{`
  #hero {
    position: relative;
  }

  /* Adjust for smaller screens */
  @media (max-width: 768px) {
    #hero {
      height: 100vh;
      padding: 0;
      backgroundPosition: top; /* Adjust the background alignment */
    }

    #hero .flex-grow {
      justify-content: center; /* Center content vertically for smaller screens */
      padding-left: 20px; /* Adjust spacing for smaller screens */
    }

    img {
      width: 150px; /* Adjust logo size for mobile */
      height: auto;
    }
  }
`}</style>
 

 <CustomizationProvider>
  <section
    ref={customizationRef}
    id="customization"
    className="w-full h-screen select-none flex flex-col md:flex-row bg-transparent text-white relative"
  >
    {/* Left: 3D Canvas */}
    <div className="w-full h-1/2 md:h-full md:flex-1 flex items-center justify-center relative">
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={["#FFFFFF"]} />
        <Experience />
      </Canvas>
    </div>

    {/* Right: Configurator */}
    <div
      className={`w-full h-1/2 md:h-full md:w-[300px] flex items-center justify-center relative ${
        isConfiguratorVisible ? "block" : "hidden"
      }`}
    >
      <Configurator />
    </div>
  </section>
</CustomizationProvider>




      {/* Pricing Section */}
      <section id="pricing" className="w-full h-fit-content p-8 py-20 px-6 bg-transparent text-black border-t-2 ">
        <h2 className="text-3xl font-semibold mb-6 text-center">Toyota Hilux Revo 2024 Packages</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-10">
          {/* Pricing Plans */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-black">Standard Edition</h3>
            <p className="mt-4 text-lg text-gray-700">$19,999</p>
            <ul className="list-disc list-inside text-left mt-4">
              <li>Standard Features</li>
              <li>Basic Color Options</li>
              <li>3 Year Warranty</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-purple-700">
              Choose Plan
            </button>
          </div>
          {/* Premium Plan */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg text-center text-white">
            <h3 className="text-xl font-semibold text-black">Premium Edition</h3>
            <p className="mt-4 text-lg text-gray-700">$29,999</p>
            <ul className="list-disc list-inside text-black text-left mt-4">
              <li>All Customization Options</li>
              <li>Free Accessories</li>
              <li>5 Year Warranty</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-purple-700">
              Choose Plan
            </button>
          </div>
          {/* Luxury Plan */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-black">Luxury Sport</h3>
            <p className="mt-4 text-lg text-gray-900">$49,999</p>
            <ul className="list-disc list-inside text-left mt-4">
              <li>Exclusive Features</li>
              <li>Free Delivery</li>
              <li>Lifetime Warranty</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-purple-700">
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full min-h-screen bg-transparent py-20 px-6 text-center mt-16 shadow-lg border-t border-gray-600">
        <h1 className="text-4xl font-bold mb-6">Why Choose Us?</h1>
        
        {/* Master Card for the main description */}
        <div className="max-w-lg mx-auto bg-gray-100 shadow-md rounded-lg p-9 mb-3 mt-10">
          <p className="text-lg text-gray-800">
            We provide premium cars with the best customization options, tailored to your preferences.
          </p>
        </div>

        {/* Cards for each list item */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-20">
          <div className="w-full md:w-1/3 bg-gray-100 p-7 rounded-lg shadow-md">
            <h3 className="text-xl font-light text-black bg-white-100 p-0 rounded">Wide range of models available.</h3>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-7 rounded-lg shadow-md">
            <h3 className="text-xl font-light text-black bg-white-100 p-0rounded">Expert customization tools.</h3>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-7 rounded-lg shadow-md">
            <h3 className="text-xl font-light text-black bg-white-100 p-2 rounded">Affordable prices and flexible plans.</h3>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-7 rounded-lg shadow-md">
            <h3 className="text-xl font-light text-black bg-white-100 p-0 rounded">Dedicated support for your design journey.</h3>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-400 fixed bottom-2 left-1/2 transform -translate-x-1/2">
          <p>Copyright 2024 FARAMATSI MOTORS</p>
        </footer>
      </section>
    </>
  );
}