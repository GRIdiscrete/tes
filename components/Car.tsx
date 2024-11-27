import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";
import * as THREE from "three";
import { GroupProps } from "@react-three/fiber";

const Car: React.FC<GroupProps> = (props) => {


  const { scene } = useGLTF("./models/desuntitled.glb");


  
  const {
    bodyColor,
    glassColor,
    steeringWheelColor,
    tireColor,
    leatherColor,
    interiorColor,
    showTires,
    showTail,
    brakeDesign,
    backlightColor,
    tailColor,
  } = useCustomization();

  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: bodyColor.color,
        metalness: 0.5,
        roughness: 0.05,
      }),
    [bodyColor]
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: glassColor.color,
        transparent: true,
        opacity: 0.5,
      }),
    [glassColor]
  );

  const steeringWheelMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: steeringWheelColor.color }),
    [steeringWheelColor]
  );

  const tireMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: tireColor.color }),
    [tireColor]
  );

  const leatherMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: leatherColor.color }),
    [leatherColor]
  );

  const interiorMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: interiorColor.color }),
    [interiorColor]
  );

  const backlightMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: backlightColor.color }),
    [backlightColor]
  );

  const tailMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: tailColor.color }),
    [tailColor]
  );

  if (scene) {
    scene.traverse((child: any) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        console.log(mesh.name)
        if (mesh.name.startsWith("door") || mesh.name == "hilux_mb01_hilux_mb016_0"
        || mesh.name == "hilux_mb01_hilux_mb017_0"
        ) {
          mesh.material = bodyMaterial;
        } else if (mesh.name.includes("glass")) {
          mesh.material = glassMaterial;
        }
         else if (mesh.name.includes("movsteer_10_movsteer_108_0")) {
          mesh.material = steeringWheelMaterial;
        } else if (mesh.name.includes("wheel_rf4_0") || mesh.name.includes("wheel_rf5_0") ) {
          mesh.visible = showTires;
          if (showTires) {
            mesh.material = tireMaterial;
          }
        } else if (mesh.name.startsWith("boot") || mesh.name == "hilux_mb01_wheel_rf2_0") {
          mesh.visible = showTail;
          if (showTail) {
            mesh.material = tailMaterial;
          }
        } else if (mesh.name.includes("hilux_dashboard") || mesh.name.includes("movsteer")  ) {
          mesh.material = leatherMaterial;
        } else if (mesh.name.includes("taillight")) {
          mesh.material = backlightMaterial;
        } else if (mesh.name.includes("hilux_mb07_hilux_mb0710_0")) {
          mesh.material = interiorMaterial;
        } else if (mesh.name.includes("wheel_rf3_0")) {
          if (brakeDesign === 1) {
            mesh.visible = !mesh.name.includes("wheel_rf3_0");
          } else if (brakeDesign === 2) {
            mesh.visible = mesh.name.includes("wheel_rf3_0");
          }
        }
      }
    });
  }

  return (
    <group {...props} dispose={null}>
      {scene && <primitive object={scene} />}
    </group>
  );
};

useGLTF.preload("./models/desuntitled.glb");

export default Car;
