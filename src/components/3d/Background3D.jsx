import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedBlobs = () => {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    group.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]} position={[-3, 2, -5]}>
          <MeshDistortMaterial 
            color="#06b6d4" 
            attach="material" 
            distort={0.4} 
            speed={2} 
            roughness={0} 
            transmission={0.8}
            thickness={1}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere args={[2, 64, 64]} position={[4, -1, -8]}>
          <MeshDistortMaterial 
            color="#14b8a6" 
            attach="material" 
            distort={0.5} 
            speed={1.5} 
            roughness={0.2} 
            transparent
            opacity={0.6}
          />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={3}>
        <Sphere args={[1, 64, 64]} position={[0, -3, -3]}>
          <MeshDistortMaterial 
            color="#3b82f6" 
            attach="material" 
            distort={0.3} 
            speed={3} 
            roughness={0.1}
            transmission={0.9}
            thickness={0.5}
          />
        </Sphere>
      </Float>
    </group>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-dark-blue to-[#081020]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan/20 via-transparent to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
      
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />
          <AnimatedBlobs />
        </Canvas>
      </div>
    </div>
  );
};

export default Background3D;
