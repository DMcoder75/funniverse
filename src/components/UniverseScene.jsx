import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';
import CameraControls from './CameraControls';
import astronomicalData from '../data/astronomicalData.json';

const UniverseScene = forwardRef((props, ref) => {
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

    // Camera setup - start just outside Earth
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000000
    );
    camera.position.set(0, 0, 15000); // Start just outside Earth
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.2);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xffffff, 2, 0);
    sunLight.position.set(0, 0, 0);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    // Create Sun
    const sunGeometry = new THREE.SphereGeometry(696000, 32, 32); // Sun radius in km
    const sunMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffff00
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Scaling factor for distances (1 AU = 149.6 million km)
    const AU_TO_SCENE_UNITS = 1000000; // 1 AU = 1,000,000 scene units
    const RADIUS_SCALE = 100; // Scale up planet radii for visibility

    // Create planets
    Object.entries(astronomicalData).forEach(([name, data]) => {
      if (name === 'Moon') return; // Handle Moon separately

      const radius = data.radius_km * RADIUS_SCALE;
      const distance = data.distance_from_sun_au * AU_TO_SCENE_UNITS;

      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      let material;

      // Planet-specific materials
      switch (name) {
        case 'Earth':
          material = new THREE.MeshLambertMaterial({ color: 0x6b93d6 });
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
          material = new THREE.MeshLambertMaterial({ color: 0xd8ca9d });
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
      planet.castShadow = true;
      planet.receiveShadow = true;
      scene.add(planet);

      planetsRef.current[name] = {
        mesh: planet,
        data: data,
        distance: distance,
        angle: 0
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
      sprite.position.y += radius * 2;
      sprite.scale.set(50000, 12500, 1);
      scene.add(sprite);
    });

    // Add Moon to Earth
    if (planetsRef.current.Earth) {
      const moonRadius = astronomicalData.Moon.radius_km * RADIUS_SCALE;
      const moonDistance = astronomicalData.Moon.distance_from_earth_km * 10; // Scale for visibility
      
      const moonGeometry = new THREE.SphereGeometry(moonRadius, 16, 16);
      const moonMaterial = new THREE.MeshLambertMaterial({ color: 0xc0c0c0 });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      moon.castShadow = true;
      moon.receiveShadow = true;
      scene.add(moon);

      planetsRef.current.Moon = {
        mesh: moon,
        data: astronomicalData.Moon,
        distance: moonDistance,
        angle: 0,
        parent: planetsRef.current.Earth
      };
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate planets around the Sun
      Object.entries(planetsRef.current).forEach(([name, planetInfo]) => {
        if (name === 'Moon') {
          // Moon orbits Earth
          if (planetInfo.parent) {
            planetInfo.angle += 0.01; // Moon orbital speed
            const earthPos = planetInfo.parent.mesh.position;
            planetInfo.mesh.position.x = earthPos.x + Math.cos(planetInfo.angle) * planetInfo.distance;
            planetInfo.mesh.position.z = earthPos.z + Math.sin(planetInfo.angle) * planetInfo.distance;
          }
        } else {
          // Planets orbit the Sun
          const orbitalSpeed = 0.001 / Math.sqrt(planetInfo.data.distance_from_sun_au); // Kepler's laws approximation
          planetInfo.angle += orbitalSpeed;
          planetInfo.mesh.position.x = Math.cos(planetInfo.angle) * planetInfo.distance;
          planetInfo.mesh.position.z = Math.sin(planetInfo.angle) * planetInfo.distance;
          
          // Planet rotation
          planetInfo.mesh.rotation.y += 0.01;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      navigateTo: (target) => {
        // This would implement smooth camera transitions
        console.log(`Navigating to ${target}`);
      }
    }));

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

  return (
    <div ref={mountRef} className="w-full h-screen">
      <CameraControls camera={cameraRef.current} renderer={rendererRef.current} />
    </div>
  );
});

export default UniverseScene;

