// src/Render3DLine.js
import React, { useRef, useEffect } from "react";
import { Vector3 } from "three";
// import { Line } from "drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Render3DLine = ({ points }) => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const camera = new Vector3(0, 0, 10);
    cameraRef.current = camera;

    const renderer = new window.THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  useEffect(() => {
    if (points.length > 1) {
      const scene = sceneRef.current;
      const camera = cameraRef.current;
      const lineGeometry = new window.THREE.BufferGeometry().setFromPoints(
        points.map((point) => new Vector3(point.x, point.y, 0))
      );
      const lineMaterial = new window.THREE.LineBasicMaterial({ color: 0xff0000 });
      const line = new window.THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);

      camera.position.z = Math.max(
        Math.abs(lineGeometry.boundingBox.max.x - lineGeometry.boundingBox.min.x),
        Math.abs(lineGeometry.boundingBox.max.y - lineGeometry.boundingBox.min.y)
      );
    }
  }, [points]);

  return <div ref={sceneRef} />;
};

export default Render3DLine;
