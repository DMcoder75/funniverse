import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
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

  // Planet data with realistic colors and properties
  const planetData = {
    Sun: { 
      distance: 0, 
      size: 8, 
      color: 0xFDB813, 
      emissive: 0xFDB813,
      emissiveIntensity: 0.3,
      rotationSpeed: 0.002,
      surfaceDistance: 12
    },
    Mercury: { 
      distance: 15, 
      size: 0.8, 
      color: 0x8C7853, 
      rotationSpeed: 0.01,
      surfaceDistance: 2
    },
    Venus: { 
      distance: 20, 
      size: 1.2, 
      color: 0xFFC649, 
      rotationSpeed: 0.007,
      surfaceDistance: 2.5
    },
    Earth: { 
      distance: 25, 
      size: 1.3, 
      color: 0x6B93D6, 
      rotationSpeed: 0.005,
      surfaceDistance: 2.8,
      hasAtmosphere: true
    },
    Mars: { 
      distance: 35, 
      size: 1.0, 
      color: 0xCD5C5C, 
      rotationSpeed: 0.005,
      surfaceDistance: 2.2
    },
    Jupiter: { 
      distance: 60, 
      size: 4.0, 
      color: 0xD8CA9D, 
      rotationSpeed: 0.002,
      surfaceDistance: 8
    },
    Saturn: { 
      distance: 80, 
      size: 3.5, 
      color: 0xFAD5A5, 
      rotationSpeed: 0.002,
      surfaceDistance: 7,
      hasRings: true
    },
    Uranus: { 
      distance: 120, 
      size: 2.5, 
      color: 0x4FD0E3, 
      rotationSpeed: 0.003,
      surfaceDistance: 5
    },
    Neptune: { 
      distance: 150, 
      size: 2.4, 
      color: 0x4B70DD, 
      rotationSpeed: 0.003,
      surfaceDistance: 5
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
        material = new THREE.MeshBasicMaterial({
          color: data.color,
          emissive: data.emissive,
          emissiveIntensity: data.emissiveIntensity
        });
      } else if (name === 'Earth') {
        // Special Earth with procedural texture
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const context = canvas.getContext('2d');
        
        // Create Earth-like texture
        const gradient = context.createRadialGradient(256, 128, 0, 256, 128, 256);
        gradient.addColorStop(0, '#4169e1'); // Blue center
        gradient.addColorStop(0.4, '#228b22'); // Green
        gradient.addColorStop(0.6, '#8b4513'); // Brown
        gradient.addColorStop(1, '#4169e1'); // Blue edge
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add some land masses
        for (let i = 0; i < 100; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 30 + 10;
          
          context.fillStyle = Math.random() > 0.5 ? '#228b22' : '#8b4513';
          context.beginPath();
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fill();
        }
        
        const earthTexture = new THREE.CanvasTexture(canvas);
        material = new THREE.MeshPhongMaterial({
          map: earthTexture,
          shininess: 10
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

      // Add planet labels
      const canvas2 = document.createElement('canvas');
      canvas2.width = 256;
      canvas2.height = 64;
      const context2 = canvas2.getContext('2d');
      context2.fillStyle = 'rgba(0, 0, 0, 0.7)';
      context2.fillRect(0, 0, canvas2.width, canvas2.height);
      context2.fillStyle = 'white';
      context2.font = '20px Arial';
      context2.textAlign = 'center';
      context2.fillText(name, canvas2.width / 2, canvas2.height / 2 + 7);
      
      const labelTexture = new THREE.CanvasTexture(canvas2);
      const labelMaterial = new THREE.SpriteMaterial({ map: labelTexture });
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

