import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const EnhancedGalaxyView = ({ onLocationChange }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const galaxyRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000005);
    sceneRef.current = scene;

    // Camera setup - start from outside the galaxy
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 50000);
    camera.position.set(0, 2000, 8000);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting for the galaxy
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    // Central galactic core light
    const coreLight = new THREE.PointLight(0xffaa44, 2, 5000);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // Create the galaxy structure
    createGalaxyStructure(scene);

    // Create distant background stars
    createBackgroundStars(scene);

    // Create nebulae
    createNebulae(scene);

    // Camera controls
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let cameraDistance = 8000;
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
      
      if (Math.abs(deltaX) > dragThreshold || Math.abs(deltaY) > dragThreshold) {
        isDragging = true;
      }
      
      if (isDragging) {
        targetX += deltaX * 0.005;
        targetY += deltaY * 0.005;
        
        targetY = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetY));
        
        mouseX = event.clientX;
        mouseY = event.clientY;
      }
    };

    const handleMouseUp = (event) => {
      event.preventDefault();
      isMouseDown = false;
      isDragging = false;
    };

    const handleWheel = (event) => {
      event.preventDefault();
      cameraDistance += event.deltaY * 2;
      cameraDistance = Math.max(500, Math.min(20000, cameraDistance));
      
      // Update location based on distance
      if (cameraDistance > 15000) {
        onLocationChange && onLocationChange('Intergalactic Space');
      } else if (cameraDistance > 8000) {
        onLocationChange && onLocationChange('Galaxy Overview');
      } else if (cameraDistance > 3000) {
        onLocationChange && onLocationChange('Spiral Arms');
      } else if (cameraDistance > 1000) {
        onLocationChange && onLocationChange('Galactic Disk');
      } else {
        onLocationChange && onLocationChange('Galactic Core');
      }
    };

    // Touch controls
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

      // Update camera position
      camera.position.x = Math.cos(targetX) * Math.cos(targetY) * cameraDistance;
      camera.position.y = Math.sin(targetY) * cameraDistance;
      camera.position.z = Math.sin(targetX) * Math.cos(targetY) * cameraDistance;
      camera.lookAt(0, 0, 0);

      // Animate galaxy rotation
      if (galaxyRef.current) {
        galaxyRef.current.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

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
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onLocationChange]);

  // Function to create realistic galaxy structure
  function createGalaxyStructure(scene) {
    const galaxyGroup = new THREE.Group();
    galaxyRef.current = galaxyGroup;

    // Parameters for spiral galaxy
    const parameters = {
      count: 100000,
      size: 0.01,
      radius: 5000,
      branches: 4,
      spin: 1,
      randomness: 0.2,
      randomnessPower: 3,
      insideColor: '#ff6030',
      outsideColor: '#1b3984'
    };

    // Create galaxy geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      // Position
      const radius = Math.random() * parameters.radius;
      const spinAngle = radius * parameters.spin;
      const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;

      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius * 0.1;
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / parameters.radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material
    const material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });

    // Points
    const points = new THREE.Points(geometry, material);
    galaxyGroup.add(points);

    // Add galactic core
    const coreGeometry = new THREE.SphereGeometry(50, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.8
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    galaxyGroup.add(core);

    // Add galactic halo
    const haloGeometry = new THREE.SphereGeometry(6000, 64, 64);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a1a2e,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    galaxyGroup.add(halo);

    scene.add(galaxyGroup);
  }

  // Function to create background stars
  function createBackgroundStars(scene) {
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 50000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      // Position - much farther away
      starsPositions[i * 3] = (Math.random() - 0.5) * 40000;
      starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 40000;
      starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 40000;
      
      // Color variation
      const starType = Math.random();
      if (starType < 0.7) {
        // White/blue stars
        starsColors[i * 3] = 0.8 + Math.random() * 0.2;
        starsColors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        starsColors[i * 3 + 2] = 1;
      } else if (starType < 0.9) {
        // Yellow stars
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 1;
        starsColors[i * 3 + 2] = 0.6 + Math.random() * 0.4;
      } else {
        // Red stars
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 0.4 + Math.random() * 0.4;
        starsColors[i * 3 + 2] = 0.2 + Math.random() * 0.3;
      }
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
  }

  // Function to create nebulae
  function createNebulae(scene) {
    const nebulaeCount = 20;
    
    for (let i = 0; i < nebulaeCount; i++) {
      const nebulaeGeometry = new THREE.SphereGeometry(200 + Math.random() * 300, 16, 16);
      const nebulaeColors = [0xff3366, 0x3366ff, 0x66ff33, 0xffaa33, 0xaa33ff];
      const color = nebulaeColors[Math.floor(Math.random() * nebulaeColors.length)];
      
      const nebulaeMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.1 + Math.random() * 0.2,
        side: THREE.DoubleSide
      });
      
      const nebula = new THREE.Mesh(nebulaeGeometry, nebulaeMaterial);
      
      // Position randomly around the galaxy
      const angle = Math.random() * Math.PI * 2;
      const distance = 1000 + Math.random() * 4000;
      nebula.position.x = Math.cos(angle) * distance;
      nebula.position.y = (Math.random() - 0.5) * 500;
      nebula.position.z = Math.sin(angle) * distance;
      
      scene.add(nebula);
    }
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <div className="text-white text-lg">Loading Galaxy...</div>
        </div>
      )}
    </div>
  );
};

export default EnhancedGalaxyView;

