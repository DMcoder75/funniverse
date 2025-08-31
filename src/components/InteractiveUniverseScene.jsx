import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';
import EnhancedCameraControls from './EnhancedCameraControls';
import astronomicalData from '../data/astronomicalData.json';

const InteractiveUniverseScene = forwardRef(({ onLocationChange }, ref) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const planetsRef = useRef({});
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    // Add stars background
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 10000;
    const starsPositions = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount * 3; i++) {
      starsPositions[i] = (Math.random() - 0.5) * 2000;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    cameraRef.current = camera;

    // Renderer setup with fallback options
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "default",
      failIfMajorPerformanceCaveat: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = false; // Disable shadows for better compatibility
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xffffff, 2, 0);
    sunLight.position.set(0, 0, 0);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    // Create Sun
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffff00
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Add Sun to planets reference
    planetsRef.current.Sun = {
      mesh: sun,
      radius: 5,
      distance: 0,
      angle: 0
    };

    // Scaling factors
    const AU_TO_SCENE_UNITS = 50; // Reduced for better navigation
    const RADIUS_SCALE = 0.5; // More realistic scaling

    // Create all planets
    Object.entries(astronomicalData).forEach(([name, data]) => {
      if (name === 'Moon') return; // Handle Moon separately

      const radius = Math.max(data.radius_km * RADIUS_SCALE * 0.001, 0.2); // Minimum visible size
      const distance = data.distance_from_sun_au * AU_TO_SCENE_UNITS;

      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      let material;

      // Planet-specific materials with more realistic colors
      switch (name) {
        case 'Earth':
          material = new THREE.MeshLambertMaterial({ 
            color: 0x6b93d6,
            map: createPlanetTexture(0x6b93d6, 0x228b22) // Blue with green continents
          });
          break;
        case 'Mars':
          material = new THREE.MeshLambertMaterial({ color: 0xcd5c5c });
          break;
        case 'Venus':
          material = new THREE.MeshLambertMaterial({ color: 0xffc649 });
          break;
        case 'Mercury':
          material = new THREE.MeshLambertMaterial({ color: 0x8c7853 });
          break;
        case 'Jupiter':
          material = new THREE.MeshLambertMaterial({ 
            color: 0xd8ca9d,
            map: createPlanetTexture(0xd8ca9d, 0xb8860b) // Jupiter bands
          });
          break;
        case 'Saturn':
          material = new THREE.MeshLambertMaterial({ color: 0xfad5a5 });
          break;
        case 'Uranus':
          material = new THREE.MeshLambertMaterial({ color: 0x4fd0e7 });
          break;
        case 'Neptune':
          material = new THREE.MeshLambertMaterial({ color: 0x4b70dd });
          break;
        default:
          material = new THREE.MeshLambertMaterial({ color: 0x888888 });
      }

      const planet = new THREE.Mesh(geometry, material);
      planet.position.x = distance;
      scene.add(planet);

      // Add Saturn's rings
      if (name === 'Saturn') {
        const ringGeometry = new THREE.RingGeometry(radius * 1.2, radius * 2, 32);
        const ringMaterial = new THREE.MeshLambertMaterial({ 
          color: 0xaaaaaa, 
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.7
        });
        const rings = new THREE.Mesh(ringGeometry, ringMaterial);
        rings.rotation.x = Math.PI / 2;
        planet.add(rings);
      }

      planetsRef.current[name] = {
        mesh: planet,
        data: data,
        distance: distance,
        angle: 0,
        radius: radius
      };

      // Add planet label
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 64;
      context.fillStyle = 'white';
      context.font = '24px Arial';
      context.textAlign = 'center';
      context.fillText(name, 128, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.copy(planet.position);
      sprite.position.y += radius * 3;
      sprite.scale.set(radius * 8, radius * 2, 1);
      scene.add(sprite);
      
      // Store sprite reference for updating position
      planetsRef.current[name].label = sprite;
    });

    // Add Moon to Earth
    if (planetsRef.current.Earth) {
      const moonRadius = 0.1;
      const moonDistance = 2;
      
      const moonGeometry = new THREE.SphereGeometry(moonRadius, 16, 16);
      const moonMaterial = new THREE.MeshLambertMaterial({ color: 0xc0c0c0 });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      scene.add(moon);

      planetsRef.current.Moon = {
        mesh: moon,
        data: astronomicalData.Moon,
        distance: moonDistance,
        angle: 0,
        radius: moonRadius,
        parent: planetsRef.current.Earth
      };
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate planets around the Sun
      Object.entries(planetsRef.current).forEach(([name, planetInfo]) => {
        if (name === 'Sun') return;
        
        if (name === 'Moon') {
          // Moon orbits Earth
          if (planetInfo.parent) {
            planetInfo.angle += 0.02; // Moon orbital speed
            const earthPos = planetInfo.parent.mesh.position;
            planetInfo.mesh.position.x = earthPos.x + Math.cos(planetInfo.angle) * planetInfo.distance;
            planetInfo.mesh.position.z = earthPos.z + Math.sin(planetInfo.angle) * planetInfo.distance;
          }
        } else {
          // Planets orbit the Sun
          const orbitalSpeed = 0.005 / Math.sqrt(planetInfo.data.distance_from_sun_au); // Kepler's laws
          planetInfo.angle += orbitalSpeed;
          planetInfo.mesh.position.x = Math.cos(planetInfo.angle) * planetInfo.distance;
          planetInfo.mesh.position.z = Math.sin(planetInfo.angle) * planetInfo.distance;
          
          // Update label position
          if (planetInfo.label) {
            planetInfo.label.position.copy(planetInfo.mesh.position);
            planetInfo.label.position.y += planetInfo.radius * 3;
          }
          
          // Planet rotation
          planetInfo.mesh.rotation.y += 0.02;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Helper function to create simple planet textures
  function createPlanetTexture(baseColor, accentColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    // Create gradient
    const gradient = context.createLinearGradient(0, 0, 256, 256);
    gradient.addColorStop(0, `#${baseColor.toString(16).padStart(6, '0')}`);
    gradient.addColorStop(1, `#${accentColor.toString(16).padStart(6, '0')}`);
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
    
    return new THREE.CanvasTexture(canvas);
  }

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    focusOnPlanet: (planetName) => {
      if (window.focusOnPlanet) {
        window.focusOnPlanet(planetName);
      }
    }
  }));

  return (
    <div ref={mountRef} className="w-full h-screen">
      <EnhancedCameraControls 
        camera={cameraRef.current} 
        renderer={rendererRef.current}
        planets={planetsRef.current}
        onLocationChange={onLocationChange}
      />
    </div>
  );
});

export default InteractiveUniverseScene;

