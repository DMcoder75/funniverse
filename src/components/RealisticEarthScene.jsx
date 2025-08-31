import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';

const RealisticEarthScene = forwardRef(({ onLocationChange }, ref) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const earthRef = useRef(null);
  const cloudsRef = useRef(null);
  const animationIdRef = useRef(null);
  const controlsRef = useRef({
    isMouseDown: false,
    mouseX: 0,
    mouseY: 0,
    phi: 0,
    theta: Math.PI / 2,
    distance: 15,
    targetDistance: 15,
    minDistance: 4,
    maxDistance: 100
  });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    // Add stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 8000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      // Random positions
      starsPositions[i * 3] = (Math.random() - 0.5) * 2000;
      starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
      
      // Random colors (white, blue, orange)
      const colorType = Math.random();
      if (colorType < 0.7) {
        // White stars
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 1;
        starsColors[i * 3 + 2] = 1;
      } else if (colorType < 0.85) {
        // Blue stars
        starsColors[i * 3] = 0.7;
        starsColors[i * 3 + 1] = 0.8;
        starsColors[i * 3 + 2] = 1;
      } else {
        // Orange/red stars
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
    camera.position.set(15, 0, 0);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup with fallback options
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      failIfMajorPerformanceCaveat: false
    });
    
    // Try WebGL2 first, fallback to WebGL1
    const gl = renderer.getContext();
    if (!gl) {
      console.warn('WebGL not available, trying fallback options');
      const fallbackRenderer = new THREE.WebGLRenderer({ 
        antialias: false,
        alpha: false,
        failIfMajorPerformanceCaveat: false,
        preserveDrawingBuffer: true
      });
      rendererRef.current = fallbackRenderer;
    } else {
      rendererRef.current = renderer;
    }
    
    const finalRenderer = rendererRef.current;
    finalRenderer.setSize(window.innerWidth, window.innerHeight);
    finalRenderer.shadowMap.enabled = false; // Disable shadows for better compatibility
    finalRenderer.toneMapping = THREE.LinearToneMapping;
    finalRenderer.toneMappingExposure = 1.0;
    mountRef.current.appendChild(renderer.domElement);

    // Simplified lighting setup for better compatibility
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    // Sun light (point light for simplicity)
    const sunLight = new THREE.PointLight(0xffffff, 1.2, 0);
    sunLight.position.set(100, 0, 0);
    scene.add(sunLight);

    // Create realistic Earth with procedural textures (fallback approach)
    const createRealisticEarth = () => {
      // Create Earth geometry
      const earthGeometry = new THREE.SphereGeometry(3.5, 64, 64);
      
      // Create a procedural Earth-like texture
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const context = canvas.getContext('2d');
      
      // Create a gradient from blue (ocean) to green/brown (land)
      const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#1e3a8a'); // Deep blue
      gradient.addColorStop(0.3, '#3b82f6'); // Blue
      gradient.addColorStop(0.5, '#22c55e'); // Green
      gradient.addColorStop(0.7, '#a3a3a3'); // Gray
      gradient.addColorStop(1, '#1e3a8a'); // Deep blue
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add some noise for land masses
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 20 + 5;
        
        if (Math.random() > 0.7) {
          context.fillStyle = '#16a34a'; // Green for land
        } else if (Math.random() > 0.8) {
          context.fillStyle = '#a3a3a3'; // Gray for mountains
        } else {
          context.fillStyle = '#0ea5e9'; // Blue for water
        }
        
        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fill();
      }
      
      const earthTexture = new THREE.CanvasTexture(canvas);
      earthTexture.wrapS = THREE.RepeatWrapping;
      earthTexture.wrapT = THREE.RepeatWrapping;
      
      // Create Earth material
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 5,
        transparent: false
      });

      const earth = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);
      earthRef.current = earth;

      // Create cloud layer
      const cloudsGeometry = new THREE.SphereGeometry(3.52, 32, 32);
      
      // Create procedural cloud texture
      const cloudCanvas = document.createElement('canvas');
      cloudCanvas.width = 512;
      cloudCanvas.height = 256;
      const cloudContext = cloudCanvas.getContext('2d');
      
      // Create wispy clouds
      cloudContext.fillStyle = 'rgba(255, 255, 255, 0)';
      cloudContext.fillRect(0, 0, cloudCanvas.width, cloudCanvas.height);
      
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * cloudCanvas.width;
        const y = Math.random() * cloudCanvas.height;
        const size = Math.random() * 50 + 10;
        const opacity = Math.random() * 0.8 + 0.2;
        
        cloudContext.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        cloudContext.beginPath();
        cloudContext.arc(x, y, size, 0, Math.PI * 2);
        cloudContext.fill();
      }
      
      const cloudTexture = new THREE.CanvasTexture(cloudCanvas);
      const cloudsMaterial = new THREE.MeshLambertMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.4
      });

      const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
      scene.add(clouds);
      cloudsRef.current = clouds;

      // Create atmosphere glow
      const atmosphereGeometry = new THREE.SphereGeometry(3.8, 32, 32);
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
      scene.add(atmosphere);

      console.log('Procedural Earth created successfully');
    };

    createRealisticEarth();

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
      controlsRef.current.targetDistance = Math.max(
        controlsRef.current.minDistance, 
        Math.min(controlsRef.current.maxDistance, controlsRef.current.targetDistance)
      );
    };

    const updateCameraPosition = () => {
      const controls = controlsRef.current;
      
      const x = controls.distance * Math.sin(controls.theta) * Math.cos(controls.phi);
      const y = controls.distance * Math.cos(controls.theta);
      const z = controls.distance * Math.sin(controls.theta) * Math.sin(controls.phi);
      
      camera.position.set(x, y, z);
      camera.lookAt(0, 0, 0);
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

      // Rotate Earth
      if (earthRef.current) {
        earthRef.current.rotation.y += 0.005; // Slow rotation
      }

      // Rotate clouds slightly faster
      if (cloudsRef.current) {
        cloudsRef.current.rotation.y += 0.007;
      }

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

    // Focus function for surface exploration
    window.focusOnEarth = (mode = 'orbit') => {
      const controls = controlsRef.current;
      
      if (mode === 'surface') {
        // Get very close for surface exploration
        controls.targetDistance = 4.5;
        controls.minDistance = 4.0;
        controls.maxDistance = 20;
        onLocationChange?.('Earth Surface');
      } else {
        // Normal orbit view
        controls.targetDistance = 15;
        controls.minDistance = 4;
        controls.maxDistance = 100;
        onLocationChange?.('Earth Orbit');
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
    focusOnEarth: (mode) => {
      if (window.focusOnEarth) {
        window.focusOnEarth(mode);
      }
    },
    getDistance: () => controlsRef.current.distance
  }));

  return <div ref={mountRef} className="w-full h-screen" />;
});

export default RealisticEarthScene;

