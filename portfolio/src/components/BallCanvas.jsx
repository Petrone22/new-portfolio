import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  Decal,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import Loader from "./Loader";

const Ball = ({ icon }) => {
  const newicon = useTexture(icon);
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={4}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#B9CFFF"
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={newicon}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
