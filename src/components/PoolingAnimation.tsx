import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type MySceneProps = {
  width: number;
  height: number;
  channels: number;
  kernelSize: number;
  stride: number;
  padding: number;
};

const MyScene = (props: MySceneProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Set up the Three.js scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Calculate the size of each pixel
      const pixelSize = 0.5;

      // Calculate the size of the cube
      const cubeWidth = props.width * pixelSize;
      const cubeHeight = props.height * pixelSize;

      // Add a cube to the scene
      const geometry = new THREE.BoxGeometry(pixelSize, pixelSize, 0);
      const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, side: THREE.FrontSide });

      // Add borders to each pixel
      for (let x = 0; x < props.width; x++) {
        for (let y = 0; y < props.height; y++) {
          const cube = new THREE.Mesh(geometry, material);
          cube.position.set(
            (x - props.width / 2) * pixelSize,
            (y - props.height / 2) * pixelSize,
            0
          );
          scene.add(cube);

          // Add black border
          const borderGeometry = new THREE.BoxGeometry(pixelSize + 0.1, pixelSize + 0.1, 0);

          const borderMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
          const border = new THREE.Mesh(borderGeometry, borderMaterial);
          border.position.copy(cube.position);
          scene.add(border);
        }
      }

      // Move the camera back
      camera.position.z = 5;

      // Render the scene
      const animate = () => {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
      };
      animate();
    }
  }, [props.height, props.width, props.channels, props.kernelSize, props.stride, props.padding]);

  return <canvas ref={canvasRef} />;
};

export default MyScene;
