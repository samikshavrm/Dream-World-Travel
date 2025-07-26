import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">Travel Beyond Reality.</h1>
          <div className="hero-subtitle">
            <h2 className="hero-highlight">Wander through worlds not found on maps.</h2>
          </div>
          <p className="hero-desc">
            Every step you take here is a leap into fantasy. Dreamlands await — painted in clouds, stars, and forgotten time.
          </p>
        </div>
        <div className="hero-right">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight intensity={2} position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#790872" 
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img src="./img/moon.png" alt="moon" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

