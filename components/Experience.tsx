import { PresentationControls, Environment, Lightformer, Html } from "@react-three/drei";
import Car from "./Car";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three'

const Experience = () => {
    const captureScreenshot = () => {
    const dataURL = gl.domElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'car_view.png';
    link.click();
  };
  return (
    <>
            <Html>
        <button onClick={captureScreenshot} style={{
          borderRadius: '20px',
          backgroundColor: '#ffffff',
          position: 'absolute',
          top: -60,
          color: '#333',
          left: 300,
          padding: '5px 15px',
          boxShadow: '0px 0px 10px #800080'

        }}>Export Image</button>
      </Html>

      <PresentationControls
        speed={3.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 1.5, 0]}
      >
        <ambientLight intensity={0.5} color={0x350035} castShadow />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
        />
        <Car scale={[1.2, 1.2, 1.2]} castShadow/>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}> <ringGeometry args={[3.1, 3.2, 132]} /> <meshBasicMaterial color={0x800080} side={THREE.DoubleSide} /> </mesh>
        <Environment preset="city" />
      </PresentationControls>
    </>
  );
};

export default Experience;
