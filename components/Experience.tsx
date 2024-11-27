import { PresentationControls, Environment, Lightformer, Html } from "@react-three/drei";
import Car from "./Car";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';
import { useRef, useState } from 'react';

const Experience = () => {
  const { gl, scene, camera, set } = useThree();
  const interiorCamera = useRef<THREE.PerspectiveCamera>(null);
  const [useInteriorCamera, setUseInteriorCamera] = useState(false);

  // Enable shadows in the renderer
  gl.shadowMap.enabled = true;
  gl.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: for softer shadows

  useFrame(() => {
    if (useInteriorCamera && interiorCamera.current) {
      set({ camera: interiorCamera.current });
    } else {
      set({ camera });
    }
  });

  const captureScreenshot = () => {
    const dataURL = gl.domElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'car_view.png';
    link.click();
  };
  

  return (
    <>

      <PresentationControls
        speed={7}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 1.2, 0]}
      >
        <ambientLight intensity={0.5} color={0x350035} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />



        <Car scale={[1.2, 1.1, 1.1]} castShadow receiveShadow />



        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.0, 0]} receiveShadow>
          <ringGeometry args={[3.15, 3.2, 132]} />
          <meshBasicMaterial color={0x5A1E66} side={THREE.DoubleSide} />
        </mesh>
        <Environment preset="city" />
        <perspectiveCamera
          ref={interiorCamera}
          position={[0, 1, 0]} // Adjust the position to fit inside the car
          fov={75}
          aspect={window.innerWidth / window.innerHeight}
          near={0.1}
          far={1000}
        />
      </PresentationControls>
    </>
  );
};

export default Experience;
