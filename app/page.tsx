"use client";
import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { CustomizationProvider } from "@/contexts/Customization";
import Experience from "@/components/Experience";
import Configurator from "@/components/Configurator";
import Navbar from "@/components/Navbar";

import Image from "next/image";
import { FaCar, FaCogs, FaDollarSign, FaHandsHelping } from "react-icons/fa"; // Import specific icons

export default function Home() {
  const [isConfiguratorVisible, setConfiguratorVisible] = useState(false);
  const customizationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Section is visible", entry.isIntersecting); // Log intersection status
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
   
    
      <Navbar />

      {/* Hero Section */}
      <section
  id="hero"
  className="w-[100vw] h-screen flex flex-col justify-center items-center text-center pt-20 mb-10 bg-transparent"
>
  {/* Background Image */}
  <div
    className="relative w-full h-full"
    style={{
      backgroundImage: "url('/assets/bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
  <div
    className="flex-grow flex flex-col justify-center items-start pt-20 pl-10"
    style={{
      width: '100%', // Makes the content take full width
      maxWidth: '1000px', // Prevents content from stretching too much on larger screens
      alignItems: 'flex-start', // Aligns content to the left
    }}
  >
    <Image 
      src="/assets/reg.png" 
      alt="hero" 
      width={150} 
      height={150} 
      priority 
      style={{ marginLeft: '10' }}
    />
  </div>
  </div>
</section>

      <CustomizationProvider>
        {/* Customization Section */}
        <section
          ref={customizationRef}
          id="customization"
          className="w-full h-screen flex flex-col md:flex-row bg-transparent text-white relative"
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
      <section
        id="pricing"
        className="w-full p-8 py-20 px-6 bg-transparent text-black border-t-2"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Toyota Hilux Revo 2024 Packages
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-10">
          {/* Pricing Plans */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-black">
              Standard Edition
            </h3>
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

          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg text-center">
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

      {/* About Section/ Why Choose Us */}
      <section
        id="about"
        className="w-full min-h-screen bg-transparent py-20 px-6 text-center mt-16 shadow-lg border-t border-gray-600"
      >
        <h1 className="text-4xl font-bold mb-6">Why Choose Us?</h1>

        {/* Master Card for the main description */}
        <div className="max-w-lg mx-auto bg-gray-100 shadow-md rounded-lg p-9 mb-3 mt-10">
          <p className="text-lg text-gray-800">
            We provide premium cars with the best customization options,
            tailored to your preferences.
          </p>
        </div>

        {/* Cards for each list item */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-20">
          <div className="w-full md:w-1/3 bg-gray-100 p-7 rounded-lg shadow-md">
            <FaCar className="text-purple-800 text-4xl mb-4 text align-center" />
            <h3 className="text-xl font-light text-black">
              Wide range of models available.
            </h3>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-7 rounded-lg shadow-md">
            <FaCogs className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-light text-black">
              Expert customization tools.
            </h3>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-7 rounded-lg shadow-md">
            <FaDollarSign className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-light text-black">
              Affordable prices and flexible plans.
            </h3>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-7 rounded-lg shadow-md">
            <FaHandsHelping className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-light text-black">
              Dedicated support for your design journey.
            </h3>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-400 py-4 fixed bottom-2 left-1/2 transform -translate-x-1/2">
          <p>Copyright 2025 FARAMATSI MOTORS</p>
        </footer>
      </section>
    </>
  );
}
