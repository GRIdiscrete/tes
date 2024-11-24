'use client';
import Configurator from "@/components/Configurator";
import Experience from "@/components/Experience";
import { CustomizationProvider } from "@/contexts/Customization";
import { Canvas } from "@react-three/fiber";
import Ff from '../public/assets/ff.svg'
import Image from "next/image";
import { url } from "inspector";

export default function Home() {
  return (<>
    <div className="w-full h-12 z-10 fixed  left-5 mb-4">
      <Image src={'/assets/yy.png'} alt="logo" width={200}  height={200} 
      className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] transition"/>
      <div className="div flex flex-row gap-4">
      <h2 className="font-semibold">F A R A M A T S I </h2>
      <h2 className="font-semibold text-purple-900"> M O T O R S</h2>
      </div>
    </div>
    <CustomizationProvider>
      <div className="w-screen h-screen select-none flex flex-col md:flex-row">
        <div className="w-full h-1/3 md:h-full md:flex-1">
          <Canvas dpr={[1, 2]} >
            <color attach="background" args={["#FFFFFF"]} />
            <Experience />
          </Canvas>
        </div>
        <div className="flex justify-center w-full h-1/2 md:h-full md:w-[300px] ">
          <Configurator />
        </div>
      </div>
    </CustomizationProvider>
    <div className="text-sm text-gray-400 fixed bottom-2 left-1/2">
<p>Copyright 2024 FARAMATSI MOTORS</p>
      </div></>
  );
}