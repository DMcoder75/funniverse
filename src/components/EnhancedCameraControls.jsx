import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const EnhancedCameraControls = ({ camera, renderer, planets, onLocationChange }) => {
  const controlsRef = useRef({
    isMouseDown: false,
    mouseX: 0,
    mouseY: 0,
    targetX: 0,
    targetY: 0,
    distance: 50,
    targetDistance: 50,
    focusTarget: null,
    isAnimating: false
  });

  const [isSurfaceView, setSurfaceView] = useState(false);

  useEffect(() => {
    if (!camera || !renderer) return;

    const controls = controlsRef.current;
    
    // Initialize camera position
    camera.position.set(0, 0, controls.distance);
    camera.lookAt(0, 0, 0);

    const onMouseDown = (event) => {
      controls.isMouseDown = true;
      controls.mouseX = event.clientX;
      controls.mouseY = event.clientY;
    };

    const onMouseUp = () => {
      controls.isMouseDown = false;
    };

    const onMouseMove = (event) => {
      if (!controls.isMouseDown || controls.isAnimating) return;

      const deltaX = event.clientX - controls.mouseX;
      const deltaY = event.clientY - controls.mouseY;

      controls.targetX += deltaX * 0.01;
      controls.targetY += deltaY * 0.01;

      // Limit vertical rotation
      controls.targetY = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, controls.targetY));

      controls.mouseX = event.clientX;
      controls.mouseY = event.clientY;

      // Update camera position immediately for responsive feel
      updateCameraPosition();
    };

    const onWheel = (event) => {
      event.preventDefault();
      
      if (controls.isAnimating) return;

      const zoomFactor = 1 + event.deltaY * 0.001;
      controls.targetDistance *= zoomFactor;
      
      // Dynamic zoom limits based on focus target
      let minDistance = 5;
      let maxDistance = 200;
      
      if (controls.focusTarget) {
        const targetData = planets[controls.focusTarget];
        if (targetData) {
          minDistance = isSurfaceView ? 0.1 : targetData.radius * 2.5; // Closer zoom for surface view
          maxDistance = targetData.radius * 50;
        }
      }
      
      controls.targetDistance = Math.max(minDistance, Math.min(maxDistance, controls.targetDistance));
    };

    const updateCameraPosition = () => {
      if (controls.focusTarget && planets[controls.focusTarget]) {
        const target = planets[controls.focusTarget].mesh;
        const targetPos = target.position.clone();
        
        if (isSurfaceView) {
          // Surface view: Position camera on the surface
          const surfacePosition = targetPos.clone().add(new THREE.Vector3(0, planets[controls.focusTarget].radius + 1, 0));
          camera.position.copy(surfacePosition);
          const lookAtTarget = targetPos.clone().add(new THREE.Vector3(1, planets[controls.focusTarget].radius + 1, 0));
          camera.lookAt(lookAtTarget);
        } else {
          // Orbit view
          const x = targetPos.x + controls.distance * Math.cos(controls.targetY) * Math.cos(controls.targetX);
          const y = targetPos.y + controls.distance * Math.sin(controls.targetY);
          const z = targetPos.z + controls.distance * Math.cos(controls.targetY) * Math.sin(controls.targetX);
          
          camera.position.set(x, y, z);
          camera.lookAt(targetPos);
        }
      } else {
        // Default solar system view
        const x = controls.distance * Math.cos(controls.targetY) * Math.cos(controls.targetX);
        const y = controls.distance * Math.sin(controls.targetY);
        const z = controls.distance * Math.cos(controls.targetY) * Math.sin(controls.targetX);
        
        camera.position.set(x, y, z);
        camera.lookAt(0, 0, 0);
      }
    };

    // Smooth animation loop
    const animate = () => {
      // Smooth distance interpolation
      const distanceDiff = controls.targetDistance - controls.distance;
      if (Math.abs(distanceDiff) > 0.1) {
        controls.distance += distanceDiff * 0.1;
        updateCameraPosition();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('wheel', onWheel);
    };
  }, [camera, renderer, planets, isSurfaceView]);

  // Expose focus method
  useEffect(() => {
    if (camera && renderer) {
      window.focusOnPlanet = (planetName, viewType = 'orbit') => {
        const controls = controlsRef.current;
        setSurfaceView(viewType === 'surface');
        
        if (planetName === 'Sun' || planetName === 'Solar System') {
          // Focus on solar system center
          controls.focusTarget = null;
          controls.targetDistance = 50;
          controls.targetX = 0;
          controls.targetY = 0;
          controls.isAnimating = true;
          
          // Smooth transition to solar system view
          const startPos = camera.position.clone();
          const targetPos = new THREE.Vector3(0, 0, 50);
          const startTime = Date.now();
          const duration = 2000; // 2 seconds
          
          const animateTransition = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            
            camera.position.lerpVectors(startPos, targetPos, easeProgress);
            camera.lookAt(0, 0, 0);
            
            if (progress < 1) {
              requestAnimationFrame(animateTransition);
            } else {
              controls.isAnimating = false;
              controls.distance = 50;
            }
          };
          
          animateTransition();
          onLocationChange?.(planetName);
          
        } else if (planets[planetName]) {
          // Focus on specific planet
          controls.focusTarget = planetName;
          const targetData = planets[planetName];
          controls.targetDistance = targetData.radius * (viewType === 'surface' ? 1.5 : 5);
          controls.isAnimating = true;
          
          // Smooth transition to planet
          const startPos = camera.position.clone();
          const planetPos = targetData.mesh.position.clone();
          const offset = new THREE.Vector3(0, 0, controls.targetDistance);
          const targetPos = planetPos.clone().add(offset);
          const startTime = Date.now();
          const duration = 2000; // 2 seconds
          
          const animateTransition = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            
            const currentPlanetPos = targetData.mesh.position.clone();
            const currentTargetPos = currentPlanetPos.clone().add(offset);
            
            camera.position.lerpVectors(startPos, currentTargetPos, easeProgress);
            camera.lookAt(currentPlanetPos);
            
            if (progress < 1) {
              requestAnimationFrame(animateTransition);
            } else {
              controls.isAnimating = false;
              controls.distance = controls.targetDistance;
            }
          };
          
          animateTransition();
          onLocationChange?.(planetName);
        }
      };
    }
  }, [camera, renderer, planets, onLocationChange]);

  return null;
};

export default EnhancedCameraControls;


