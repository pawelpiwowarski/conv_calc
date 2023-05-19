import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

type BoxProps = {
  color: string;
  position: [number, number, number];
};

function Box(props: BoxProps) {
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 0]);

  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Animation logic
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 0.5]} />
      <meshStandardMaterial color={hovered ? 'pink' : props.color} />
    </mesh>
  );
}

type MySceneProps = {
  width: number;
  height: number;
  channels: number;
  kernelSize: number;
  stride: number;
  padding: number;
};

const MyScene = (props: MySceneProps) => {


  if (props.height * props.width * props.channels > 1 && props.height * props.width * props.channels < 500) {
    const totalWidth = props.width + props.padding * 2;
    const totalHeight = props.height + props.padding * 2;

    return (
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        {
        Array.from({ length: props.channels }, (_, k) => (
        Array.from({ length: totalHeight }, (_, i) => (
          Array.from({ length: totalWidth }, (_, j) => {
            const isOrangeBox =
              i >= props.padding &&
              i < totalHeight - props.padding &&
              j >= props.padding &&
              j < totalWidth - props.padding;

            const isBlueBox =  
              i     < props.kernelSize && j  < props.kernelSize;

            return (
              <Box
                key={`${i}-${j}`}
                color={isBlueBox ? 'blue' : isOrangeBox ? 'orange' : 'grey'}
                position={[i - props.padding, j - props.padding, k]}
              />
            );
          })
        ))
      
        ))}

        <OrbitControls />






      </Canvas>
    );
  } else {
    return null;
  }
};

export default MyScene;
