import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';
import EnhancedCameraControls from './EnhancedCameraControls';
import astronomicalData from '../data/astronomicalData.json';

const RealisticUniverseScene = forwardRef(({ onLocationChange }, ref) => {
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
    scene.background = new THREE.Color(0x000008);
    sceneRef.current = scene;

    // Add stars background
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 15000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      // Position
      starsPositions[i * 3] = (Math.random() - 0.5) * 2000;
      starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
      
      // Color variation for more realistic stars
      const starType = Math.random();
      if (starType < 0.7) {
        // White stars
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 1;
        starsColors[i * 3 + 2] = 1;
      } else if (starType < 0.85) {
        // Blue stars
        starsColors[i * 3] = 0.7;
        starsColors[i * 3 + 1] = 0.8;
        starsColors[i * 3 + 2] = 1;
      } else {
        // Red/orange stars
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 0.7;
        starsColors[i * 3 + 2] = 0.5;
      }
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));
    const starsMaterial = new THREE.PointsMaterial({ 
      size: 0.8, 
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
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

    // Renderer setup with realistic settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "default",
      failIfMajorPerformanceCaveat: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = false;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Realistic lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.1);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xfff8dc, 3, 0);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    // Create realistic Sun
    const sunGeometry = new THREE.SphereGeometry(8, 64, 64);
    const sunMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xfff8dc
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    planetsRef.current.Sun = {
      mesh: sun,
      radius: 8,
      distance: 0,
      angle: 0
    };

    // Scaling factors
    const AU_TO_SCENE_UNITS = 50;
    const RADIUS_SCALE = 0.5;

    // Enhanced bright planet colors for better visibility
    const planetConfigs = {
      Mercury: { color: 0xb8a082, emissive: 0x2a1f15 },
      Venus: { color: 0xffdd44, emissive: 0x554400 },
      Earth: { color: 0x1199ff, emissive: 0x003366 }, // Bright vibrant blue
      Mars: { color: 0xff6b47, emissive: 0x441100 },
      Jupiter: { color: 0xffcc66, emissive: 0x553300 },
      Saturn: { color: 0xffeaa7, emissive: 0x554422 },
      Uranus: { color: 0x74d0f1, emissive: 0x003344 },
      Neptune: { color: 0x5588ff, emissive: 0x001144 }
    };

    // Create all planets with realistic appearance
    Object.entries(astronomicalData).forEach(([name, data]) => {
      if (name === 'Moon') return;

      const radius = Math.max(data.radius_km * RADIUS_SCALE * 0.001, 0.2);
      const distance = data.distance_from_sun_au * AU_TO_SCENE_UNITS;
      const config = planetConfigs[name];

      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      let material;

      if (name === 'Earth') {
        const textureLoader = new THREE.TextureLoader();
        const earthDiffuseTexture = textureLoader.load('/assets/textures/earth_diffuse.jpg');
        const earthPlantsTexture = textureLoader.load('/assets/textures/earth_plants.jpg');
        material = new THREE.MeshLambertMaterial({ map: earthDiffuseTexture });
        // You might want to blend these textures or use a shader for more advanced effects
        // For now, we'll just use the diffuse texture.
      } else {
        material = new THREE.MeshLambertMaterial({ 
          color: config.color
        });
      }

      // Special handling for specific planets with enhanced brightness
      if (name === 'Jupiter') {
        // Add bright banding effect
        material.color.setHex(0xffcc66);
        material.emissive.setHex(0x553300);
      }

      const planet = new THREE.Mesh(geometry, material);
      planet.position.x = distance;
      scene.add(planet);

      // Add Saturn's rings with enhanced bright appearance
      if (name === 'Saturn') {
        const ringGeometry = new THREE.RingGeometry(radius * 1.2, radius * 2.2, 32);
        const ringMaterial = new THREE.MeshLambertMaterial({ 
          color: 0xf0f0f0, 
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8
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
        radius: radius,
        moons: []
      };

      // Add planet label
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 64;
      // No fillStyle for background, so it's transparent
      context.fillStyle = 'white';
      context.font = 'bold 24px Arial';
      context.textAlign = 'center';
      context.fillText(name, 128, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true }); // Add transparent: true
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.copy(planet.position);
      sprite.position.y += radius * 3;
      sprite.scale.set(radius * 8, radius * 2, 1);
      scene.add(sprite);
      
      planetsRef.current[name].label = sprite;
    });

    // Add major moons
    addMajorMoons(scene, planetsRef.current);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate planets around the Sun
      Object.entries(planetsRef.current).forEach(([name, planetInfo]) => {
        if (name === 'Sun') return;
        
        // Planets orbit the Sun
        const orbitalSpeed = 0.005 / Math.sqrt(planetInfo.data.distance_from_sun_au);
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

        // Animate moons
        if (planetInfo.moons) {
          planetInfo.moons.forEach((moonInfo, index) => {
            moonInfo.angle += moonInfo.speed;
            const planetPos = planetInfo.mesh.position;
            moonInfo.mesh.position.x = planetPos.x + Math.cos(moonInfo.angle) * moonInfo.distance;
            moonInfo.mesh.position.z = planetPos.z + Math.sin(moonInfo.angle) * moonInfo.distance;
            moonInfo.mesh.position.y = planetPos.y + Math.sin(moonInfo.angle * 0.5) * moonInfo.distance * 0.1;
          });
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

  // Function to add major moons
  function addMajorMoons(scene, planets) {
    // Earth's Moon
    if (planets.Earth) {
      const moonRadius = 0.15;
      const moonDistance = 3;
      const moonGeometry = new THREE.SphereGeometry(moonRadius, 32, 32);
      const moonMaterial = new THREE.MeshLambertMaterial({ color: 0xc0c0c0 });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      scene.add(moon);

      planets.Earth.moons.push({
        mesh: moon,
        distance: moonDistance,
        angle: 0,
        speed: 0.02,
        name: 'Moon'
      });
    }

    // Mars moons
    if (planets.Mars) {
      // Phobos
      const phobosRadius = 0.05;
      const phobosDistance = 1.5;
      const phobosGeometry = new THREE.SphereGeometry(phobosRadius, 16, 16);
      const phobosMaterial = new THREE.MeshLambertMaterial({ color: 0x696969 });
      const phobos = new THREE.Mesh(phobosGeometry, phobosMaterial);
      scene.add(phobos);

      // Deimos
      const deimosRadius = 0.03;
      const deimosDistance = 2.2;
      const deimosGeometry = new THREE.SphereGeometry(deimosRadius, 16, 16);
      const deimosMaterial = new THREE.MeshLambertMaterial({ color: 0x696969 });
      const deimos = new THREE.Mesh(deimosGeometry, deimosMaterial);
      scene.add(deimos);

      planets.Mars.moons.push(
        {
          mesh: phobos,
          distance: phobosDistance,
          angle: 0,
          speed: 0.05,
          name: 'Phobos'
        },
        {
          mesh: deimos,
          distance: deimosDistance,
          angle: Math.PI,
          speed: 0.03,
          name: 'Deimos'
        }
      );
    }

    // Jupiter's major moons (Galilean moons)
    if (planets.Jupiter) {
      const jupiterMoons = [
        { name: 'Io', radius: 0.12, distance: 4, color: 0xffff99, speed: 0.08 },
        { name: 'Europa', radius: 0.10, distance: 5, color: 0xe6f3ff, speed: 0.06 },
        { name: 'Ganymede', radius: 0.15, distance: 6.5, color: 0xa0522d, speed: 0.04 },
        { name: 'Callisto', radius: 0.13, distance: 8, color: 0x2f4f4f, speed: 0.03 }
      ];

      jupiterMoons.forEach((moonData, index) => {
        const moonGeometry = new THREE.SphereGeometry(moonData.radius, 24, 24);
        const moonMaterial = new THREE.MeshLambertMaterial({ color: moonData.color });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        scene.add(moon);

        planets.Jupiter.moons.push({
          mesh: moon,
          distance: moonData.distance,
          angle: (index * Math.PI) / 2,
          speed: moonData.speed,
          name: moonData.name
        });
      });
    }

    // Saturn's major moons
    if (planets.Saturn) {
      const saturnMoons = [
        { name: 'Titan', radius: 0.14, distance: 7, color: 0xcd853f, speed: 0.025 },
        { name: 'Enceladus', radius: 0.08, distance: 4.5, color: 0xffffff, speed: 0.04 }
      ];

      saturnMoons.forEach((moonData, index) => {
        const moonGeometry = new THREE.SphereGeometry(moonData.radius, 24, 24);
        const moonMaterial = new THREE.MeshLambertMaterial({ color: moonData.color });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        scene.add(moon);

        planets.Saturn.moons.push({
          mesh: moon,
          distance: moonData.distance,
          angle: index * Math.PI,
          speed: moonData.speed,
          name: moonData.name
        });
      });
    }

    // Uranus major moons
    if (planets.Uranus) {
      const uranusMoons = [
        { name: 'Miranda', radius: 0.06, distance: 3.5, color: 0x696969, speed: 0.06 },
        { name: 'Ariel', radius: 0.08, distance: 4.5, color: 0xd3d3d3, speed: 0.04 }
      ];

      uranusMoons.forEach((moonData, index) => {
        const moonGeometry = new THREE.SphereGeometry(moonData.radius, 20, 20);
        const moonMaterial = new THREE.MeshLambertMaterial({ color: moonData.color });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        scene.add(moon);

        planets.Uranus.moons.push({
          mesh: moon,
          distance: moonData.distance,
          angle: index * Math.PI,
          speed: moonData.speed,
          name: 'Moon'
        });
      });
    }

    // Neptune's major moon
    if (planets.Neptune) {
      const tritonRadius = 0.11;
      const tritonDistance = 5;
      const tritonGeometry = new THREE.SphereGeometry(tritonRadius, 24, 24);
      const tritonMaterial = new THREE.MeshLambertMaterial({ color: 0xffe4e1 });
      const triton = new THREE.Mesh(tritonGeometry, tritonMaterial);
      scene.add(triton);

      planets.Neptune.moons.push({
        mesh: triton,
        distance: tritonDistance,
        angle: 0,
        speed: 0.03,
        name: 'Triton'
      });
    }
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

export default RealisticUniverseScene;



