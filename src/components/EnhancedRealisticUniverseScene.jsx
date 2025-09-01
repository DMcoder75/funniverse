import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';
import astronomicalData from '../data/astronomicalData.json';

const EnhancedRealisticUniverseScene = forwardRef(({ onLocationChange }, ref) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const planetsRef = useRef({});
  const animationIdRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusOnPlanet: (planetName) => {
      // This will be called from the navigation panel
      if (typeof window !== 'undefined' && window.focusOnPlanetRef) {
        window.focusOnPlanetRef(planetName);
      }
    }
  }), []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000008);
    sceneRef.current = scene;

    // Add enhanced stars background
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 20000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      // Position
      starsPositions[i * 3] = (Math.random() - 0.5) * 2500;
      starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 2500;
      starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 2500;
      
      // Enhanced color variation for more realistic stars
      const starType = Math.random();
      if (starType < 0.6) {
        // White stars
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 1;
        starsColors[i * 3 + 2] = 1;
      } else if (starType < 0.8) {
        // Blue stars
        starsColors[i * 3] = 0.6;
        starsColors[i * 3 + 1] = 0.8;
        starsColors[i * 3 + 2] = 1;
      } else if (starType < 0.95) {
        // Yellow stars
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 1;
        starsColors[i * 3 + 2] = 0.7;
      } else {
        // Red/orange stars
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 0.6;
        starsColors[i * 3 + 2] = 0.4;
      }
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Store stars reference for animation
    const starsRef = stars;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(0, 50, 150);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xffffff, 3, 1000);
    sunLight.position.set(0, 0, 0);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    // Texture loader
    const textureLoader = new THREE.TextureLoader();

    // Create realistic Sun with texture
    const sunGeometry = new THREE.SphereGeometry(8, 64, 64);
    const sunTexture = textureLoader.load('/assets/textures/sun_texture.jpg');
    const sunMaterial = new THREE.MeshLambertMaterial({ 
      map: sunTexture,
      emissive: 0xffaa00,
      emissiveIntensity: 0.3
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

    // Enhanced planet configurations with brighter, more solid appearance
    const planetConfigs = {
      Mercury: { 
        color: 0xccaa88, 
        texture: '/assets/textures/mercury_texture.jpg',
        emissive: 0x332211,
        emissiveIntensity: 0.3
      },
      Venus: { 
        color: 0xffdd77, 
        texture: '/assets/textures/venus_texture.png',
        emissive: 0x554422,
        emissiveIntensity: 0.4
      },
      Earth: { 
        color: 0x2299ff, 
        texture: '/assets/textures/earth_texture.jpg',
        emissive: 0x003366,
        emissiveIntensity: 0.3
      },
      Mars: { 
        color: 0xff7777, 
        texture: '/assets/textures/mars_texture.jpg',
        emissive: 0x441111,
        emissiveIntensity: 0.3
      },
      Jupiter: { 
        color: 0xffcc99, 
        texture: '/assets/textures/jupiter_texture.jpg',
        emissive: 0x443322,
        emissiveIntensity: 0.4
      },
      Saturn: { 
        color: 0xffddaa, 
        texture: '/assets/textures/saturn_texture.jpg',
        emissive: 0x443322,
        emissiveIntensity: 0.4
      },
      Uranus: { 
        color: 0x77ddff, 
        texture: '/assets/textures/uranus_texture.png',
        emissive: 0x224455,
        emissiveIntensity: 0.3
      },
      Neptune: { 
        color: 0x6688ff, 
        texture: '/assets/textures/neptune_texture.jpg',
        emissive: 0x112244,
        emissiveIntensity: 0.3
      }
    };

    // Create all planets with realistic textures and appearance
    Object.entries(astronomicalData).forEach(([name, data]) => {
      if (name === 'Moon') return;

      const radius = Math.max(data.radius_km * RADIUS_SCALE * 0.001, 0.2);
      const distance = data.distance_from_sun_au * AU_TO_SCENE_UNITS;
      const config = planetConfigs[name];

      const geometry = new THREE.SphereGeometry(radius, 64, 64);
      let material;

      // Load realistic texture for each planet with enhanced brightness
      const planetTexture = textureLoader.load(config.texture);
      material = new THREE.MeshPhongMaterial({ 
        map: planetTexture,
        color: config.color,
        emissive: config.emissive,
        emissiveIntensity: config.emissiveIntensity * 1.5, // Increased for brighter appearance
        shininess: 60, // Increased for more solid appearance
        transparent: false,
        opacity: 1.0,
        side: THREE.FrontSide
      });

      const planet = new THREE.Mesh(geometry, material);
      planet.position.x = distance;
      planet.castShadow = true;
      planet.receiveShadow = true;
      scene.add(planet);

      // Add Saturn's rings with enhanced brightness and visibility
      if (name === 'Saturn') {
        const ringGeometry = new THREE.RingGeometry(radius * 1.2, radius * 2.2, 64);
        const ringMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xffffff, 
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.9,
          emissive: 0x444444,
          emissiveIntensity: 0.2,
          shininess: 50
        });
        const rings = new THREE.Mesh(ringGeometry, ringMaterial);
        rings.rotation.x = Math.PI / 2;
        rings.castShadow = true;
        rings.receiveShadow = true;
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

      // Add transparent planet labels
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 128;
      
      // Transparent background - no fillRect call
      context.fillStyle = 'rgba(255, 255, 255, 0.9)';
      context.font = 'bold 32px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      
      // Add text shadow for better visibility
      context.shadowColor = 'rgba(0, 0, 0, 0.8)';
      context.shadowBlur = 4;
      context.shadowOffsetX = 2;
      context.shadowOffsetY = 2;
      
      context.fillText(name, 256, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true,
        alphaTest: 0.1
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.copy(planet.position);
      sprite.position.y += radius * 4;
      sprite.scale.set(radius * 12, radius * 3, 1);
      scene.add(sprite);
      
      planetsRef.current[name].label = sprite;
    });

    // Add major moons with realistic textures
    addEnhancedMoons(scene, planetsRef.current, textureLoader);

    // Basic camera controls for mouse/touch navigation
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let cameraDistance = 150;
    let isDragging = false;
    let dragThreshold = 5;

    const handleMouseDown = (event) => {
      event.preventDefault();
      isMouseDown = true;
      isDragging = false;
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseMove = (event) => {
      if (!isMouseDown) return;
      event.preventDefault();
      
      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;
      
      // Check if we've moved enough to consider it dragging
      if (Math.abs(deltaX) > dragThreshold || Math.abs(deltaY) > dragThreshold) {
        isDragging = true;
      }
      
      if (isDragging) {
        targetX += deltaX * 0.005;
        targetY += deltaY * 0.005;
        
        // Limit vertical rotation
        targetY = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetY));
        
        mouseX = event.clientX;
        mouseY = event.clientY;
      }
    };

    const handleMouseUp = (event) => {
      event.preventDefault();
      
      // Only handle click if we weren't dragging
      if (!isDragging && isMouseDown) {
        handleClick(event);
      }
      
      isMouseDown = false;
      isDragging = false;
    };

    const handleClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // Check for intersections with planets
      const planetMeshes = Object.values(planetsRef.current).map(p => p.mesh).filter(Boolean);
      const intersects = raycaster.intersectObjects(planetMeshes);

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        // Find which planet was clicked
        for (const [name, planetInfo] of Object.entries(planetsRef.current)) {
          if (planetInfo.mesh === clickedObject) {
            focusOnPlanet(name);
            if (onLocationChange) {
              onLocationChange(name);
            }
            break;
          }
        }
      }
    };

    const handleWheel = (event) => {
      event.preventDefault();
      const oldDistance = cameraDistance;
      cameraDistance += event.deltaY * 0.1;
      cameraDistance = Math.max(20, Math.min(800, cameraDistance));
      
      // Check if we're zooming into a planet for automatic surface view
      if (event.deltaY < 0 && cameraDistance < 30) { // Zooming in very close
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2(0, 0); // Center of screen
        raycaster.setFromCamera(mouse, camera);
        
        const planetMeshes = Object.values(planetsRef.current).map(p => p.mesh).filter(Boolean);
        const intersects = raycaster.intersectObjects(planetMeshes);
        
        if (intersects.length > 0) {
          const closestObject = intersects[0].object;
          // Find which planet is closest to center
          for (const [name, planetInfo] of Object.entries(planetsRef.current)) {
            if (planetInfo.mesh === closestObject && name !== 'Sun') {
              // Trigger surface view
              if (window.triggerSurfaceView) {
                window.triggerSurfaceView(name);
              }
              break;
            }
          }
        }
      }
    };

    // Touch controls for mobile
    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        isMouseDown = true;
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
      }
    };

    const handleTouchMove = (event) => {
      if (!isMouseDown || event.touches.length !== 1) return;
      event.preventDefault();
      
      const deltaX = event.touches[0].clientX - mouseX;
      const deltaY = event.touches[0].clientY - mouseY;
      
      targetX += deltaX * 0.005;
      targetY += deltaY * 0.005;
      
      // Limit vertical rotation
      targetY = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetY));
      
      mouseX = event.touches[0].clientX;
      mouseY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      event.preventDefault();
      isMouseDown = false;
    };

    // Add event listeners
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('wheel', handleWheel);
    renderer.domElement.addEventListener('touchstart', handleTouchStart);
    renderer.domElement.addEventListener('touchmove', handleTouchMove);
    renderer.domElement.addEventListener('touchend', handleTouchEnd);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Update camera rotation based on mouse/touch input
      camera.position.x = Math.cos(targetX) * Math.cos(targetY) * cameraDistance;
      camera.position.y = Math.sin(targetY) * cameraDistance;
      camera.position.z = Math.sin(targetX) * Math.cos(targetY) * cameraDistance;
      camera.lookAt(0, 0, 0);

      // Animate stars for dynamic background
      starsRef.rotation.x += 0.0001;
      starsRef.rotation.y += 0.0002;

      // Rotate planets around the Sun
      Object.entries(planetsRef.current).forEach(([name, planetInfo]) => {
        if (name === 'Sun') {
          // Sun rotation
          planetInfo.mesh.rotation.y += 0.005;
          return;
        }
        
        // Planets orbit the Sun
        const orbitalSpeed = 0.005 / Math.sqrt(planetInfo.data.distance_from_sun_au);
        planetInfo.angle += orbitalSpeed;
        planetInfo.mesh.position.x = Math.cos(planetInfo.angle) * planetInfo.distance;
        planetInfo.mesh.position.z = Math.sin(planetInfo.angle) * planetInfo.distance;
        
        // Update label position to always face camera
        if (planetInfo.label) {
          planetInfo.label.position.copy(planetInfo.mesh.position);
          planetInfo.label.position.y += planetInfo.radius * 4;
        }
        
        // Planet rotation
        const rotationSpeed = name === 'Venus' ? -0.005 : 0.02; // Venus rotates backwards
        planetInfo.mesh.rotation.y += rotationSpeed;

        // Animate moons
        if (planetInfo.moons) {
          planetInfo.moons.forEach((moonInfo) => {
            moonInfo.angle += moonInfo.speed;
            const planetPos = planetInfo.mesh.position;
            moonInfo.mesh.position.x = planetPos.x + Math.cos(moonInfo.angle) * moonInfo.distance;
            moonInfo.mesh.position.z = planetPos.z + Math.sin(moonInfo.angle) * moonInfo.distance;
            moonInfo.mesh.position.y = planetPos.y + Math.sin(moonInfo.angle * 0.3) * moonInfo.distance * 0.05;
            moonInfo.mesh.rotation.y += 0.01;
          });
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Focus on planet function
    const focusOnPlanet = (planetName) => {
      const planetInfo = planetsRef.current[planetName];
      if (planetInfo && planetInfo.mesh) {
        const planet = planetInfo.mesh;
        const distance = planetName === 'Sun' ? 50 : 20;
        
        // Calculate target camera position
        const planetPosition = planet.position.clone();
        const targetCameraDistance = distance;
        
        // Calculate spherical coordinates for the target position
        const targetTheta = Math.atan2(planetPosition.z, planetPosition.x);
        const targetPhi = 0; // Keep at equator level
        
        // Animate to target position
        const startTargetX = targetX;
        const startTargetY = targetY;
        const startCameraDistance = cameraDistance;
        const startTime = Date.now();
        const duration = 2000; // 2 seconds
        
        const animateCamera = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Smooth easing function
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          
          // Interpolate rotation and distance
          targetX = startTargetX + (targetTheta - startTargetX) * easeProgress;
          targetY = startTargetY + (targetPhi - startTargetY) * easeProgress;
          cameraDistance = startCameraDistance + (targetCameraDistance - startCameraDistance) * easeProgress;
          
          if (progress < 1) {
            requestAnimationFrame(animateCamera);
          }
        };
        
        animateCamera();
      }
    };

    // Make focusOnPlanet available to the imperative handle
    window.focusOnPlanetRef = focusOnPlanet;

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
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('wheel', handleWheel);
      renderer.domElement.removeEventListener('touchstart', handleTouchStart);
      renderer.domElement.removeEventListener('touchmove', handleTouchMove);
      renderer.domElement.removeEventListener('touchend', handleTouchEnd);
      
      // Clean up window reference
      if (typeof window !== 'undefined') {
        delete window.focusOnPlanetRef;
      }
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Function to add enhanced moons with realistic textures
  function addEnhancedMoons(scene, planets, textureLoader) {
    // Earth's Moon with realistic texture
    if (planets.Earth) {
      const moonRadius = 0.15;
      const moonDistance = 3;
      const moonGeometry = new THREE.SphereGeometry(moonRadius, 32, 32);
      const moonTexture = textureLoader.load('/assets/textures/moon_texture.jpg');
      const moonMaterial = new THREE.MeshLambertMaterial({ 
        map: moonTexture,
        emissive: 0x111111,
        emissiveIntensity: 0.05
      });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      moon.castShadow = true;
      moon.receiveShadow = true;
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
      phobos.castShadow = true;
      scene.add(phobos);

      planets.Mars.moons.push({
        mesh: phobos,
        distance: phobosDistance,
        angle: 0,
        speed: 0.05,
        name: 'Phobos'
      });

      // Deimos
      const deimosRadius = 0.03;
      const deimosDistance = 2.2;
      const deimosGeometry = new THREE.SphereGeometry(deimosRadius, 16, 16);
      const deimosMaterial = new THREE.MeshLambertMaterial({ color: 0x555555 });
      const deimos = new THREE.Mesh(deimosGeometry, deimosMaterial);
      deimos.castShadow = true;
      scene.add(deimos);

      planets.Mars.moons.push({
        mesh: deimos,
        distance: deimosDistance,
        angle: Math.PI,
        speed: 0.03,
        name: 'Deimos'
      });
    }

    // Jupiter's major moons (Galilean moons)
    if (planets.Jupiter) {
      const jupiterMoons = [
        { name: 'Io', radius: 0.08, distance: 4, speed: 0.04, color: 0xffff99 },
        { name: 'Europa', radius: 0.07, distance: 5, speed: 0.03, color: 0xaaaaff },
        { name: 'Ganymede', radius: 0.09, distance: 6.5, speed: 0.025, color: 0x888888 },
        { name: 'Callisto', radius: 0.08, distance: 8, speed: 0.02, color: 0x444444 }
      ];

      jupiterMoons.forEach((moonData, index) => {
        const moonGeometry = new THREE.SphereGeometry(moonData.radius, 16, 16);
        const moonMaterial = new THREE.MeshLambertMaterial({ color: moonData.color });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.castShadow = true;
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
        { name: 'Titan', radius: 0.12, distance: 8, speed: 0.015, color: 0xcc9966 },
        { name: 'Enceladus', radius: 0.04, distance: 5, speed: 0.03, color: 0xffffff }
      ];

      saturnMoons.forEach((moonData, index) => {
        const moonGeometry = new THREE.SphereGeometry(moonData.radius, 16, 16);
        const moonMaterial = new THREE.MeshLambertMaterial({ color: moonData.color });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.castShadow = true;
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
  }

  return <div ref={mountRef} className="w-full h-full" />;
});

EnhancedRealisticUniverseScene.displayName = 'EnhancedRealisticUniverseScene';

export default EnhancedRealisticUniverseScene;

