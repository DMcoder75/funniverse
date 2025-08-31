import { useEffect, useRef } from 'react';
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
    isAnimating: false,
    phi: 0, // Horizontal rotation (unlimited)
    theta: Math.PI / 2, // Vertical rotation
    targetPhi: 0,
    targetTheta: Math.PI / 2
  });

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

      // Full 360-degree horizontal rotation (no limits)
      controls.targetPhi -= deltaX * 0.01;
      
      // Vertical rotation with smooth limits to prevent flipping
      controls.targetTheta += deltaY * 0.01;
      controls.targetTheta = Math.max(0.1, Math.min(Math.PI - 0.1, controls.targetTheta));

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
      let minDistance = 2;
      let maxDistance = 500;
      
      if (controls.focusTarget && planets[controls.focusTarget]) {
        const targetData = planets[controls.focusTarget];
        if (targetData) {
          minDistance = targetData.radius * 1.5; // Get very close
          maxDistance = targetData.radius * 100;
        }
      }
      
      controls.targetDistance = Math.max(minDistance, Math.min(maxDistance, controls.targetDistance));
    };

    const updateCameraPosition = () => {
      // Smooth interpolation for rotation
      controls.phi += (controls.targetPhi - controls.phi) * 0.1;
      controls.theta += (controls.targetTheta - controls.theta) * 0.1;

      if (controls.focusTarget && planets[controls.focusTarget]) {
        const target = planets[controls.focusTarget].mesh;
        const targetPos = target.position.clone();
        
        // Spherical coordinates around the focused object
        const x = targetPos.x + controls.distance * Math.sin(controls.theta) * Math.cos(controls.phi);
        const y = targetPos.y + controls.distance * Math.cos(controls.theta);
        const z = targetPos.z + controls.distance * Math.sin(controls.theta) * Math.sin(controls.phi);
        
        camera.position.set(x, y, z);
        camera.lookAt(targetPos);
      } else {
        // Default solar system view with full 360-degree capability
        const x = controls.distance * Math.sin(controls.theta) * Math.cos(controls.phi);
        const y = controls.distance * Math.cos(controls.theta);
        const z = controls.distance * Math.sin(controls.theta) * Math.sin(controls.phi);
        
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
      
      // Continuous smooth rotation updates
      updateCameraPosition();
      
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
  }, [camera, renderer, planets]);

  // Expose focus method
  useEffect(() => {
    if (camera && renderer) {
      window.focusOnPlanet = (planetName) => {
        const controls = controlsRef.current;
        
        if (planetName === 'Sun' || planetName === 'Solar System') {
          // Focus on solar system center
          controls.focusTarget = null;
          controls.targetDistance = 80;
          controls.targetPhi = 0;
          controls.targetTheta = Math.PI / 2;
          controls.isAnimating = true;
          
          // Smooth transition to solar system view
          const startPos = camera.position.clone();
          const targetPos = new THREE.Vector3(80, 0, 0);
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
              controls.distance = 80;
              controls.phi = 0;
              controls.theta = Math.PI / 2;
            }
          };
          
          animateTransition();
          onLocationChange?.(planetName);
          
        } else if (planets[planetName]) {
          // Focus on specific planet
          controls.focusTarget = planetName;
          const targetData = planets[planetName];
          controls.targetDistance = targetData.radius * 8; // Good viewing distance
          controls.isAnimating = true;
          
          // Smooth transition to planet
          const startPos = camera.position.clone();
          const planetPos = targetData.mesh.position.clone();
          const offset = new THREE.Vector3(controls.targetDistance, 0, 0);
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
              // Reset rotation angles for the new focus
              controls.phi = 0;
              controls.theta = Math.PI / 2;
              controls.targetPhi = 0;
              controls.targetTheta = Math.PI / 2;
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

