import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1.5;
    }
  });

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={1} color="#111">
            Lost
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
