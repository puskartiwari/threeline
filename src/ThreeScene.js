// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const ThreeScene = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the Three.js scene
//     const scene = new THREE.Scene();

//     // Set up the camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Set up the renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0xffffff, 1);

//     // Add the renderer to the DOM
//     canvasRef.current.appendChild(renderer.domElement);

//     // Create a 2D line
//     const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
//     const points = [];
//     points.push(new THREE.Vector3(-2, 0, 0));
//     points.push(new THREE.Vector3(2, 0, 0));
//     const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     const line = new THREE.Line(geometry, material);

//     // Add the line to the scene
//     scene.add(line);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate the line to make it appear 3D
//       line.rotation.x += 0.01;
//       line.rotation.y += 0.01;

//       // Render the scene with the camera
//       renderer.render(scene, camera);
//     };

//     // Start the animation loop
//     animate();

//     // Clean up
//     return () => {
//       // Remove the canvas element and dispose of the scene, camera, and renderer to free up resources
//       renderer.dispose();
//       canvasRef.current.removeChild(renderer.domElement);
//       scene.dispose();
//       camera.dispose();
//     };
//   }, []);

//   return <div ref={canvasRef} />;
// };

// export default ThreeScene;
