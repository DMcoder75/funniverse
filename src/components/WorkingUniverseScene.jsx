import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';

const WorkingUniverseScene = forwardRef(({ onLocationChange }, ref) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const planetsRef = useRef({});
  const animationIdRef = useRef(null);
  const controlsRef = useRef({
    isMouseDown: false,
    mouseX: 0,
    mouseY: 0,
    phi: 0,
    theta: Math.PI / 2,
    distance: 100,
    targetDistance: 100,
    focusTarget: null
  });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    // Add stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 5000;
    const starsPositions = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount * 3; i++) {
      starsPositions[i] = (Math.random() - 0.5) * 2000;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(100, 0, 0);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xffffff, 1, 0);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    // Create Sun - large and bright
    const sunGeometry = new THREE.SphereGeometry(10, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xfff8dc });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    planetsRef.current.Sun = {
      mesh: sun,
      radius: 10,
      distance: 0,
      angle: 0
    };

    // Planet data with realistic colors and larger sizes for visibility
    const planetData = [
      { name: 'Mercury', distance: 30, radius: 2, color: 0x8c7853 },
      { name: 'Venus', distance: 45, radius: 3, color: 0xffc649 },
      { name: 'Earth', distance: 60, radius: 3.5, color: 0x4169e1 },
      { name: 'Mars', distance: 80, radius: 2.5, color: 0xcd5c5c },
      { name: 'Jupiter', distance: 120, radius: 8, color: 0xd2b48c },
      { name: 'Saturn', distance: 160, radius: 7, color: 0xfad5a5 },
      { name: 'Uranus', distance: 200, radius: 4, color: 0x4fd0e7 },
      { name: 'Neptune', distance: 240, radius: 4, color: 0x4b70dd }
    ];

    // Create planets
    planetData.forEach((data, index) => {
      const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: data.color });
      const planet = new THREE.Mesh(geometry, material);
      
      // Position planet
      planet.position.x = data.distance;
      scene.add(planet);

      // Add Saturn's rings
      if (data.name === 'Saturn') {
        const ringGeometry = new THREE.RingGeometry(data.radius * 1.2, data.radius * 2, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xc0c0c0, 
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.7
        });
        const rings = new THREE.Mesh(ringGeometry, ringMaterial);
        rings.rotation.x = Math.PI / 2;
        planet.add(rings);
      }

      planetsRef.current[data.name] = {
        mesh: planet,
        radius: data.radius,
        distance: data.distance,
        angle: index * 0.5, // Spread planets around
        speed: 0.01 / (data.distance * 0.01) // Slower for outer planets
      };

      // Add planet label
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 64;
      context.fillStyle = 'white';
      context.font = 'bold 24px Arial';
      context.textAlign = 'center';
      context.fillText(data.name, 128, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.copy(planet.position);
      sprite.position.y += data.radius * 2;
      sprite.scale.set(data.radius * 4, data.radius, 1);
      scene.add(sprite);
      
      planetsRef.current[data.name].label = sprite;
    });

    // Add Earth's Moon
    const moonGeometry = new THREE.SphereGeometry(0.8, 16, 16);
    const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xc0c0c0 });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moon);

    planetsRef.current.Moon = {
      mesh: moon,
      radius: 0.8,
      distance: 8,
      angle: 0,
      speed: 0.05,
      parent: planetsRef.current.Earth
    };

    // Mouse controls for 360-degree rotation
    const onMouseDown = (event) => {
      controlsRef.current.isMouseDown = true;
      controlsRef.current.mouseX = event.clientX;
      controlsRef.current.mouseY = event.clientY;
    };

    const onMouseUp = () => {
      controlsRef.current.isMouseDown = false;
    };

    const onMouseMove = (event) => {
      if (!controlsRef.current.isMouseDown) return;

      const deltaX = event.clientX - controlsRef.current.mouseX;
      const deltaY = event.clientY - controlsRef.current.mouseY;

      // Full 360-degree horizontal rotation
      controlsRef.current.phi -= deltaX * 0.01;
      
      // Vertical rotation with limits
      controlsRef.current.theta += deltaY * 0.01;
      controlsRef.current.theta = Math.max(0.1, Math.min(Math.PI - 0.1, controlsRef.current.theta));

      controlsRef.current.mouseX = event.clientX;
      controlsRef.current.mouseY = event.clientY;

      updateCameraPosition();
    };

    const onWheel = (event) => {
      event.preventDefault();
      const zoomFactor = 1 + event.deltaY * 0.001;
      controlsRef.current.targetDistance *= zoomFactor;
      controlsRef.current.targetDistance = Math.max(20, Math.min(500, controlsRef.current.targetDistance));
    };

    const updateCameraPosition = () => {
      const controls = controlsRef.current;
      
      if (controls.focusTarget && planetsRef.current[controls.focusTarget]) {
        const target = planetsRef.current[controls.focusTarget].mesh;
        const targetPos = target.position.clone();
        
        const x = targetPos.x + controls.distance * Math.sin(controls.theta) * Math.cos(controls.phi);
        const y = targetPos.y + controls.distance * Math.cos(controls.theta);
        const z = targetPos.z + controls.distance * Math.sin(controls.theta) * Math.sin(controls.phi);
        
        camera.position.set(x, y, z);
        camera.lookAt(targetPos);
      } else {
        const x = controls.distance * Math.sin(controls.theta) * Math.cos(controls.phi);
        const y = controls.distance * Math.cos(controls.theta);
        const z = controls.distance * Math.sin(controls.theta) * Math.sin(controls.phi);
        
        camera.position.set(x, y, z);
        camera.lookAt(0, 0, 0);
      }
    };

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Smooth zoom
      const distanceDiff = controlsRef.current.targetDistance - controlsRef.current.distance;
      if (Math.abs(distanceDiff) > 0.1) {
        controlsRef.current.distance += distanceDiff * 0.1;
        updateCameraPosition();
      }

      // Animate planets
      Object.entries(planetsRef.current).forEach(([name, planetInfo]) => {
        if (name === 'Sun') return;
        
        if (name === 'Moon' && planetInfo.parent) {
          planetInfo.angle += planetInfo.speed;
          const earthPos = planetInfo.parent.mesh.position;
          planetInfo.mesh.position.x = earthPos.x + Math.cos(planetInfo.angle) * planetInfo.distance;
          planetInfo.mesh.position.z = earthPos.z + Math.sin(planetInfo.angle) * planetInfo.distance;
        } else if (name !== 'Moon') {
          planetInfo.angle += planetInfo.speed;
          planetInfo.mesh.position.x = Math.cos(planetInfo.angle) * planetInfo.distance;
          planetInfo.mesh.position.z = Math.sin(planetInfo.angle) * planetInfo.distance;
          
          if (planetInfo.label) {
            planetInfo.label.position.copy(planetInfo.mesh.position);
            planetInfo.label.position.y += planetInfo.radius * 2;
          }
        }
        
        // Planet rotation
        if (planetInfo.mesh) {
          planetInfo.mesh.rotation.y += 0.02;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Event listeners
    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('wheel', onWheel, { passive: false });

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Focus function
    window.focusOnPlanet = (planetName) => {
      const controls = controlsRef.current;
      
      if (planetName === 'Sun' || planetName === 'Solar System') {
        controls.focusTarget = null;
        controls.targetDistance = 150;
        controls.phi = 0;
        controls.theta = Math.PI / 2;
        onLocationChange?.(planetName);
      } else if (planetsRef.current[planetName]) {
        controls.focusTarget = planetName;
        const targetData = planetsRef.current[planetName];
        controls.targetDistance = targetData.radius * 10;
        onLocationChange?.(planetName);
      }
    };

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('wheel', onWheel);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    focusOnPlanet: (planetName) => {
      if (window.focusOnPlanet) {
        window.focusOnPlanet(planetName);
      }
    }
  }));

  return <div ref={mountRef} className="w-full h-screen" />;
});

export default WorkingUniverseScene;

