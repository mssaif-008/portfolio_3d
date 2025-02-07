import React, { useState, useEffect, Suspense } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';

const Lambo = ({ isMobile }) => {
  const lambo = useGLTF("./wallpaper_7680x2160_-_lamborghini_aventador_svj/scene.gltf");
  
  return (
    <primitive
      object={lambo.scene}
      scale={isMobile ? 0.9 : 0.9}
      position-y={isMobile ? -2 : -1.25}
      rotation-y={isMobile ? Math.PI / 8 : 0}
      position-z={isMobile?-3.5:0}
    />
  );
};

const LamboCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: isMobile ? [0, 2, 5] : [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={6} />
        <directionalLight position={[5, 10, 5]} intensity={10} castShadow />
        <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={5} castShadow />
        <Lambo isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default LamboCanvas;
