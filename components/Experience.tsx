import { PresentationControls, Environment, Lightformer } from "@react-three/drei";
import Car from "./Car";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three'

const Experience = () => {
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 1.2, 0]}
      >
        <ambientLight intensity={0.5} color={0x350035} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
        />
        <Car scale={[1.1, 1.1, 1.1]}/>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}> <ringGeometry args={[3, 3.2, 132]} /> <meshBasicMaterial color={0x800080} side={THREE.DoubleSide} /> </mesh>
        <Environment preset="city" />
      </PresentationControls>
    </>
  );
};

export default Experience;
