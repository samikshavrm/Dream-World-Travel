import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import "../index.css";

const Who = () => {
  return (
    <section className="who-section">
      <div className="who-container">
        <div className="who-left">
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </div>

        <div className="who-right">
          <h1 className="who-title">City of Echoes</h1>
          <div className="who-whatwedo">
            <h2 className="who-subtitle">The Memory Archive</h2>
          </div>
          <p className="who-desc">
            This cube holds the echoes of dreamers who once wandered these realms. Each face reflects a story, each spin a fragment of forgotten time.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Who;
