import { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';

const FullUniverseScene = forwardRef(({ onLocationChange }, ref) => {
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
    distance: 50,
    targetDistance: 50,
    minDistance: 4,
    maxDistance: 500,
    focusedPlanet: 'Solar System',
    surfaceMode: false
  });

  // Planet data with realistic colors based on reference images
  const planetData = {
    Sun: { 
      distance: 0, 
      size: 12, 
      color: 0xFF6B00, // Bright orange-yellow like real sun
      rotationSpeed: 0.001,
      surfaceDistance: 20,
      emissive: 0xFF4500,
      emissiveIntensity: 0.5
    },
    Mercury: { 
      distance: 15, 
      size: 1.5, 
      color: 0x8C7853, // Gray-brown rocky surface
      rotationSpeed: 0.008,
      surfaceDistance: 3
    },
    Venus: { 
      distance: 22, 
      size: 2.0, 
      color: 0xFFC649, // Bright yellowish-white atmosphere
      rotationSpeed: 0.006,
      surfaceDistance: 4
    },
    Earth: { 
      distance: 30, 
      size: 2.2, 
      color: 0x6B93D6, // Blue oceans
      rotationSpeed: 0.005,
      surfaceDistance: 4.5,
      hasAtmosphere: true,
      hasOceans: true,
      hasContinents: true
    },
    Mars: { 
      distance: 40, 
      size: 1.8, 
      color: 0xCD5C5C, // Reddish-orange surface
      rotationSpeed: 0.005,
      surfaceDistance: 3.5,
      hasDesert: true
    },
    Jupiter: { 
      distance: 70, 
      size: 6.0, 
      color: 0xD2B48C, // Tan with brown stripes
      rotationSpeed: 0.002,
      surfaceDistance: 12,
      hasStripes: true
    },
    Saturn: { 
      distance: 90, 
      size: 5.5, 
      color: 0xFAD5A5, // Pale yellow-beige
      rotationSpeed: 0.002,
      surfaceDistance: 11,
      hasRings: true
    },
    Uranus: { 
      distance: 130, 
      size: 3.5, 
      color: 0x4FD0E7, // Pale blue-green ice giant
      rotationSpeed: 0.003,
      surfaceDistance: 7
    },
    Neptune: { 
      distance: 160, 
      size: 3.2, 
      color: 0x4169E1, // Deep blue
      rotationSpeed: 0.003,
      surfaceDistance: 6.5
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    // Add stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 10000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      starsPositions[i * 3] = (Math.random() - 0.5) * 2000;
      starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
      
      const colorType = Math.random();
      if (colorType < 0.7) {
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 1;
        starsColors[i * 3 + 2] = 1;
      } else if (colorType < 0.85) {
        starsColors[i * 3] = 0.7;
        starsColors[i * 3 + 1] = 0.8;
        starsColors[i * 3 + 2] = 1;
      } else {
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 0.7;
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

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(50, 20, 50);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      failIfMajorPerformanceCaveat: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = false;
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 1.0;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xffffff, 1.5, 0);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    // Create planets
    Object.entries(planetData).forEach(([name, data]) => {
      const geometry = new THREE.SphereGeometry(data.size, 32, 32);
      let material;
      if (name === 'Sun') {
        // Create realistic Sun texture with solar flares
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const context = canvas.getContext('2d');
        
        // Create radial gradient for sun surface
        const gradient = context.createRadialGradient(256, 128, 0, 256, 128, 256);
        gradient.addColorStop(0, '#FFFF00'); // Bright yellow center
        gradient.addColorStop(0.3, '#FF8C00'); // Orange
        gradient.addColorStop(0.7, '#FF4500'); // Red-orange
        gradient.addColorStop(1, '#FF6B00'); // Outer orange
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add solar flares and texture
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 20 + 5;
          
          context.fillStyle = Math.random() > 0.5 ? '#FFFF88' : '#FF6600';
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fill();
        }
        
        const sunTexture = new THREE.CanvasTexture(canvas);
        material = new THREE.MeshBasicMaterial({
          map: sunTexture,
          color: data.color,
          emissive: data.emissive,
          emissiveIntensity: data.emissiveIntensity
        });
      } else if (name === 'Earth') {
        // Create realistic Earth texture based on reference images
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const context = canvas.getContext('2d');
        
        // Deep blue ocean base
        context.fillStyle = '#1e40af';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add continents with realistic colors
        for (let i = 0; i < 60; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 35 + 20;
          
          // Mix of green and brown for land masses
          context.fillStyle = Math.random() > 0.6 ? '#228b22' : '#8b4513';
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fill();
        }
        
        // Add white clouds
        context.fillStyle = 'rgba(255, 255, 255, 0.4)';
        for (let i = 0; i < 40; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 25 + 15;
          
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fill();
        }
        
        // Add polar ice caps
        context.fillStyle = 'rgba(255, 255, 255, 0.8)';
        context.fillRect(0, 0, canvas.width, 15);
        context.fillRect(0, canvas.height - 15, canvas.width, 15);
        
        const earthTexture = new THREE.CanvasTexture(canvas);
        material = new THREE.MeshPhongMaterial({
          map: earthTexture,
          color: data.color, // Ensure base color is still applied
          shininess: 10
        });
      } else if (name === 'Mars') {
        // Create Mars texture with desert patterns
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const context = canvas.getContext('2d');
        
        // Base red color
        context.fillStyle = '#cd5c5c';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add darker patches for terrain
        for (let i = 0; i < 40; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 25 + 15;
          
          context.fillStyle = '#8b3a3a';
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fill();
        }
        
        // Add polar ice caps
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvas.width, 20);
        context.fillRect(0, canvas.height - 20, canvas.width, 20);
        
        const marsTexture = new THREE.CanvasTexture(canvas);
        material = new THREE.MeshPhongMaterial({
          map: marsTexture,
          color: data.color, // Ensure base color is still applied
          shininess: 5
        });
      } else if (name === 'Jupiter') {
        // Create Jupiter texture with stripes
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const context = canvas.getContext('2d');
        
        // Base color
        context.fillStyle = '#d8ca9d';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add horizontal stripes
        for (let y = 0; y < canvas.height; y += 20) {
          context.fillStyle = y % 40 === 0 ? '#c4a484' : '#e6d4b7';
          context.fillRect(0, y, canvas.width, 10);
        }
        
        // Add the Great Red Spot
        context.fillStyle = '#cc6666';
        context.beginPath();
        context.ellipse(canvas.width * 0.3, canvas.height * 0.6, 30, 20, 0, 0, Math.PI * 2);
        context.fill();
        
        const jupiterTexture = new THREE.CanvasTexture(canvas);
        material = new THREE.MeshPhongMaterial({
          map: jupiterTexture,
          color: data.color, // Ensure base color is still applied
          shininess: 5
        });
      } else {
        material = new THREE.MeshPhongMaterial({
          color: data.color,
          shininess: 5
        });
      }

      const planet = new THREE.Mesh(geometry, material);
      
      // Position planets
      if (name !== 'Sun') {
        planet.position.x = data.distance;
      }
      
      scene.add(planet);
      planetsRef.current[name] = planet;

      // Add Saturn's rings
      if (data.hasRings) {
        const ringGeometry = new THREE.RingGeometry(data.size * 1.2, data.size * 2, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: 0xC4A484,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.7
        });
        const rings = new THREE.Mesh(ringGeometry, ringMaterial);
        rings.rotation.x = Math.PI / 2;
        rings.position.copy(planet.position);
        scene.add(rings);
        planetsRef.current[name + '_rings'] = rings;
      }

      // Add Earth's atmosphere
      if (data.hasAtmosphere) {
        const atmosphereGeometry = new THREE.SphereGeometry(data.size * 1.1, 32, 32);
        const atmosphereMaterial = new THREE.ShaderMaterial({
          uniforms: {
            c: { value: 0.3 },
            p: { value: 3.0 }
          },
          vertexShader: `
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float c;
            uniform float p;
            varying vec3 vNormal;
            void main() {
              float intensity = pow(c - dot(vNormal, vec3(0.0, 0.0, 1.0)), p);
              gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
            }
          `,
          side: THREE.BackSide,
          blending: THREE.AdditiveBlending,
          transparent: true
        });
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        atmosphere.position.copy(planet.position);
        scene.add(atmosphere);
        planetsRef.current[name + '_atmosphere'] = atmosphere;
      }

      // Add planet labels with transparent background
      const canvas2 = document.createElement('canvas');
      canvas2.width = 256;
      canvas2.height = 64;
      const context2 = canvas2.getContext('2d');
      
      // No background - transparent
      context2.clearRect(0, 0, canvas2.width, canvas2.height);
      
      // Add text with outline for better visibility
      context2.strokeStyle = 'black';
      context2.lineWidth = 3;
      context2.font = 'bold 20px Arial';
      context2.textAlign = 'center';
      context2.strokeText(name, canvas2.width / 2, canvas2.height / 2 + 7);
      
      context2.fillStyle = 'white';
      context2.fillText(name, canvas2.width / 2, canvas2.height / 2 + 7);
      
      const labelTexture = new THREE.CanvasTexture(canvas2);
      const labelMaterial = new THREE.SpriteMaterial({ 
        map: labelTexture,
        transparent: true
      });
      const label = new THREE.Sprite(labelMaterial);
      label.scale.set(8, 2, 1);
      label.position.copy(planet.position);
      label.position.y += data.size + 3;
      scene.add(label);
      planetsRef.current[name + '_label'] = label;
    });

    // Mouse controls
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

      controlsRef.current.phi -= deltaX * 0.01;
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
      controlsRef.current.targetDistance = Math.max(
        controlsRef.current.minDistance, 
        Math.min(controlsRef.current.maxDistance, controlsRef.current.targetDistance)
      );
    };

    const updateCameraPosition = () => {
      const controls = controlsRef.current;
      let focusPoint = new THREE.Vector3(0, 0, 0);
      
      if (controls.focusedPlanet !== 'Solar System' && planetsRef.current[controls.focusedPlanet]) {
        focusPoint = planetsRef.current[controls.focusedPlanet].position.clone();
      }
      
      const x = focusPoint.x + controls.distance * Math.sin(controls.theta) * Math.cos(controls.phi);
      const y = focusPoint.y + controls.distance * Math.cos(controls.theta);
      const z = focusPoint.z + controls.distance * Math.sin(controls.theta) * Math.sin(controls.phi);
      
      camera.position.set(x, y, z);
      camera.lookAt(focusPoint);
    };

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Smooth zoom
      const distanceDiff = controlsRef.current.targetDistance - controlsRef.current.distance;
      if (Math.abs(distanceDiff) > 0.01) {
        controlsRef.current.distance += distanceDiff * 0.1;
        updateCameraPosition();
      }

      // Rotate planets
      Object.entries(planetData).forEach(([name, data]) => {
        if (planetsRef.current[name]) {
          planetsRef.current[name].rotation.y += data.rotationSpeed;
        }
        if (planetsRef.current[name + '_rings']) {
          planetsRef.current[name + '_rings'].rotation.z += data.rotationSpeed * 0.5;
        }
      });

      // Orbital motion (simplified)
      const time = Date.now() * 0.0001;
      Object.entries(planetData).forEach(([name, data]) => {
        if (name !== 'Sun' && planetsRef.current[name]) {
          const angle = time / (data.distance * 0.1);
          const x = Math.cos(angle) * data.distance;
          const z = Math.sin(angle) * data.distance;
          planetsRef.current[name].position.set(x, 0, z);
          
          if (planetsRef.current[name + '_rings']) {
            planetsRef.current[name + '_rings'].position.set(x, 0, z);
          }
          if (planetsRef.current[name + '_atmosphere']) {
            planetsRef.current[name + '_atmosphere'].position.set(x, 0, z);
          }
          if (planetsRef.current[name + '_label']) {
            planetsRef.current[name + '_label'].position.set(x, data.size + 3, z);
          }
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
    focusOnPlanet: (planetName, mode = 'orbit') => {
      const controls = controlsRef.current;
      const data = planetData[planetName];
      
      if (planetName === 'Solar System') {
        controls.focusedPlanet = 'Solar System';
        controls.targetDistance = 100;
        controls.minDistance = 20;
        controls.maxDistance = 500;
        controls.surfaceMode = false;
        onLocationChange?.('Solar System');
      } else if (data) {
        controls.focusedPlanet = planetName;
        controls.surfaceMode = mode === 'surface';
        
        if (mode === 'surface') {
          controls.targetDistance = data.surfaceDistance;
          controls.minDistance = data.surfaceDistance * 0.8;
          controls.maxDistance = data.surfaceDistance * 3;
          onLocationChange?.(`${planetName} Surface`);
        } else {
          controls.targetDistance = data.size * 8;
          controls.minDistance = data.size * 3;
          controls.maxDistance = data.size * 20;
          onLocationChange?.(`${planetName} Orbit`);
        }
      }
    },
    getCurrentPlanet: () => controlsRef.current.focusedPlanet,
    isSurfaceMode: () => controlsRef.current.surfaceMode
  }));

  return <div ref={mountRef} className="w-full h-screen" />;
});

export default FullUniverseScene;

