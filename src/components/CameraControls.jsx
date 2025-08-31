import { useEffect } from 'react';
import * as THREE from 'three';

const CameraControls = ({ camera, renderer }) => {
  useEffect(() => {
    if (!camera || !renderer) return;

    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let distance = camera.position.length();

    const onMouseDown = (event) => {
      isMouseDown = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onMouseMove = (event) => {
      if (!isMouseDown) return;

      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;

      targetX += deltaX * 0.01;
      targetY += deltaY * 0.01;

      // Limit vertical rotation
      targetY = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetY));

      mouseX = event.clientX;
      mouseY = event.clientY;

      // Update camera position
      camera.position.x = distance * Math.cos(targetY) * Math.cos(targetX);
      camera.position.y = distance * Math.sin(targetY);
      camera.position.z = distance * Math.cos(targetY) * Math.sin(targetX);
      
      camera.lookAt(0, 0, 0);
    };

    const onWheel = (event) => {
      distance *= (1 + event.deltaY * 0.001);
      distance = Math.max(1000, Math.min(50000000, distance)); // Limit zoom

      // Update camera position
      camera.position.x = distance * Math.cos(targetY) * Math.cos(targetX);
      camera.position.y = distance * Math.sin(targetY);
      camera.position.z = distance * Math.cos(targetY) * Math.sin(targetX);
      
      camera.lookAt(0, 0, 0);
    };

    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('wheel', onWheel);

    return () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('wheel', onWheel);
    };
  }, [camera, renderer]);

  return null;
};

export default CameraControls;

