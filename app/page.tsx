"use client";
import Configurator from "@/components/Configurator";
import Experience from "@/components/Experience";
import { CustomizationProvider } from "@/contexts/Customization";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <div className="w-full h-12 z-10 fixed left-5 mb-4">
        <Image
          src={"/assets/yy.png"}
          alt="logo"
          width={200}
          height={200}
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] transition"
        />
        <div className="div flex flex-row gap-4 hidden md:block">
          <h2 className="font-semibold text-sm md:text-lg">F A R A M A T S I </h2>
          <h2 className="font-semibold text-sm md:text-lg text-purple-900"> M O T O R S</h2>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full min-h-screen bg-gray-100 py-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h1>
        <p className="text-lg text-gray-600">
          We provide premium cars with the best customization options, tailored to your preferences.
        </p>
        <ul className="list-disc list-inside text-left mx-auto w-3/4 md:w-1/2 my-8 text-gray-700">
          <li>Wide range of models available.</li>
          <li>Expert customization tools.</li>
          <li>Affordable prices and flexible plans.</li>
          <li>Dedicated support for your design journey.</li>
        </ul>

        {/* Pricing Section */}
        <div className="w-full py-12 bg-white">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Pricing Plans</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
            {/* Basic Plan */}
            <div className="w-full md:w-1/3 bg-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-700">Basic Plan</h3>
              <p className="mt-4 text-lg text-gray-600">$19,999</p>
              <ul className="list-disc list-inside text-left mt-4">
                <li>Standard Features</li>
                <li>Basic Color Options</li>
                <li>3 Year Warranty</li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-purple-900 text-white font-semibold rounded-lg hover:bg-purple-700">
                Choose Plan
              </button>
            </div>
            {/* Premium Plan */}
            <div className="w-full md:w-1/3 bg-purple-900 p-6 rounded-lg text-center text-white">
              <h3 className="text-xl font-semibold">Premium Plan</h3>
              <p className="mt-4 text-lg">$29,999</p>
              <ul className="list-disc list-inside text-left mt-4">
                <li>All Customization Options</li>
                <li>Free Accessories</li>
                <li>5 Year Warranty</li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-300">
                Choose Plan
              </button>
            </div>
            {/* Luxury Plan */}
            <div className="w-full md:w-1/3 bg-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-700">Luxury Plan</h3>
              <p className="mt-4 text-lg text-gray-600">$49,999</p>
              <ul className="list-disc list-inside text-left mt-4">
                <li>Exclusive Features</li>
                <li>Free Delivery</li>
                <li>Lifetime Warranty</li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-purple-900 text-white font-semibold rounded-lg hover:bg-purple-700">
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        <button
          className="mt-6 px-6 py-3 bg-purple-900 text-white font-semibold rounded-lg hover:bg-purple-700"
          onClick={() => document.getElementById("customization").scrollIntoView({ behavior: "smooth" })}
        >
          Start Customizing Your Car
        </button>
      </section>

      {/* Customization Section */}
      <CustomizationProvider>
        <section id="customization" className="w-full h-screen select-none flex flex-col md:flex-row">
          {/* Canvas for Car Model */}
          <div className="w-full h-1/2 md:h-full md:flex-1">
            <Canvas dpr={[1, 2]}>
              <color attach="background" args={["#FFFFFF"]} />
              <Experience />
            </Canvas>
          </div>
          {/* Configurator */}
          <div className="flex justify-center w-full h-1/2 md:h-full md:w-[300px]">
            <Configurator />
          </div>
        </section>
      </CustomizationProvider>

      {/* Footer */}
      <div className="text-sm text-gray-400 fixed bottom-2 left-1/2 transform -translate-x-1/2">
        <p>Copyright 2024 FARAMATSI MOTORS</p>
      </div>
    </>
  );
}
