import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';

const EnhancedGalaxyViewV2 = forwardRef(({ onLocationChange }, ref) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const galaxyRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, 0));
  const [isNavigating, setIsNavigating] = useState(false);

  // Enhanced galaxy navigation positions with more detailed regions
  const galaxyPositions = {
    // Major Spiral Arms
    'Perseus Arm': { x: -4000, y: 200, z: -2000, distance: 2500, color: 0x4488ff },
    'Sagittarius Arm': { x: 2500, y: -200, z: 3000, distance: 2000, color: 0x8844ff },
    'Orion Arm': { x: -1200, y: 100, z: 1500, distance: 1800, color: 0xffaa44, isHome: true },
    'Scutum-Centaurus Arm': { x: 3500, y: 150, z: -2500, distance: 2200, color: 0x44ff88 },
    
    // Central Regions
    'Galactic Center': { x: 0, y: 0, z: 0, distance: 800, color: 0xff4444 },
    'Central Bar': { x: 800, y: 0, z: 800, distance: 1200, color: 0xffaa44 },
    'Nuclear Bulge': { x: 0, y: 200, z: 0, distance: 1000, color: 0xffdd44 },
    
    // Outer Regions
    'Outer Rim': { x: 0, y: 300, z: 6000, distance: 4000, color: 0x44aaff },
    'Galactic Halo': { x: 0, y: 8000, z: 0, distance: 8000, color: 0xff44aa },
    
    // Notable Features
    'Orion Nebula': { x: -1100, y: 50, z: 1400, distance: 1500, color: 0xff6644 },
    'Crab Nebula': { x: -2000, y: 100, z: -1500, distance: 1800, color: 0xff4466 },
    'Andromeda Approach': { x: -8000, y: 2000, z: 8000, distance: 10000, color: 0x6644ff },
    'Local Group': { x: 0, y: 5000, z: 0, distance: 12000, color: 0x44ff66 }
  };

  useImperativeHandle(ref, () => ({
    navigateToGalaxyRegion: (regionName) => {
      console.log('Navigating to galaxy region:', regionName);
      
      const position = galaxyPositions[regionName];
      if (position && cameraRef.current && !isNavigating) {
        console.log('Galaxy region found:', regionName, position);
        
        setIsNavigating(true);
        
        // Update location immediately
        if (onLocationChange) {
          onLocationChange(regionName);
        }
        
        // Get current camera state
        const camera = cameraRef.current;
        const currentPosition = camera.position.clone();
        const targetPosition = new THREE.Vector3(position.x, position.y, position.z);
        
        // Update camera target for smooth transition
        setCameraTarget(targetPosition);
        
        // Calculate optimal viewing position for the target region
        const targetDistance = Math.max(position.distance * 1.2, 2000); // Ensure good viewing distance
        
        // Calculate direction from target to camera for optimal viewing angle
        const viewDirection = currentPosition.clone().sub(targetPosition).normalize();
        
        // If too close to target, use a default viewing direction
        if (currentPosition.distanceTo(targetPosition) < 500) {
          viewDirection.set(1, 0.5, 1).normalize();
        }
        
        // Position camera at optimal distance from target
        const newCameraPosition = targetPosition.clone().add(
          viewDirection.multiplyScalar(targetDistance)
        );
        
        console.log('Moving camera to view region:', regionName);
        console.log('Target position:', targetPosition);
        console.log('New camera position:', newCameraPosition);
        
        // Smooth animation with clear movement to target
        const animateToTarget = () => {
          const startTime = Date.now();
          const duration = 3000; // Slightly longer for smoother movement
          
          const animateStep = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Smooth easing function
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            // Interpolate camera position smoothly
            camera.position.lerpVectors(currentPosition, newCameraPosition, easeProgress);
            
            // Look at the target region with smooth transition
            const currentLookAt = new THREE.Vector3(0, 0, 0); // Current center
            const targetLookAt = targetPosition.clone(); // Target region
            const blendedLookAt = currentLookAt.lerp(targetLookAt, easeProgress * 0.7); // More aggressive look-at
            camera.lookAt(blendedLookAt);
            
            if (progress < 1) {
              requestAnimationFrame(animateStep);
            } else {
              console.log('Galaxy navigation animation complete - now viewing:', regionName);
              setIsNavigating(false);
            }
          };
          
          animateStep();
        };
        
        animateToTarget();
      } else if (isNavigating) {
        console.log('Navigation already in progress, ignoring request');
      } else {
        console.log('Galaxy region not found:', regionName, 'Available regions:', Object.keys(galaxyPositions));
      }
    }
  }), [onLocationChange, isNavigating]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000008);
    sceneRef.current = scene;

    // Camera setup - start from outside the galaxy
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
    camera.position.set(0, 3000, 10000);
    cameraRef.current = camera;

    // Renderer setup with enhanced settings
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.8;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404080, 0.4);
    scene.add(ambientLight);

    // Central galactic core light with enhanced properties
    const coreLight = new THREE.PointLight(0xffaa44, 3, 8000);
    coreLight.position.set(0, 0, 0);
    coreLight.castShadow = true;
    scene.add(coreLight);

    // Additional lighting for spiral arms
    const armLight1 = new THREE.PointLight(0x4488ff, 1.5, 5000);
    armLight1.position.set(-3000, 100, -1500);
    scene.add(armLight1);

    const armLight2 = new THREE.PointLight(0x8844ff, 1.5, 5000);
    armLight2.position.set(2000, -100, 2500);
    scene.add(armLight2);

    // Create the enhanced galaxy structure
    createEnhancedGalaxyStructure(scene);

    // Create enhanced background stars
    createEnhancedBackgroundStars(scene);

    // Create enhanced nebulae
    createEnhancedNebulae(scene);

    // Create navigation markers
    createNavigationMarkers(scene);

    // Enhanced camera controls
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let cameraDistance = 10000;
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
        targetX += deltaX * 0.008;
        targetY += deltaY * 0.008;
        
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
      cameraDistance += event.deltaY * 3;
      cameraDistance = Math.max(800, Math.min(50000, cameraDistance));
      
      // Enhanced location updates based on distance
      if (cameraDistance > 30000) {
        onLocationChange && onLocationChange('Intergalactic Space');
      } else if (cameraDistance > 15000) {
        onLocationChange && onLocationChange('Galaxy Overview');
      } else if (cameraDistance > 8000) {
        onLocationChange && onLocationChange('Spiral Arms Region');
      } else if (cameraDistance > 3000) {
        onLocationChange && onLocationChange('Galactic Disk');
      } else if (cameraDistance > 1500) {
        onLocationChange && onLocationChange('Inner Galaxy');
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
      
      targetX += deltaX * 0.008;
      targetY += deltaY * 0.008;
      
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

    // Enhanced animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Update camera position with smooth interpolation
      const targetCameraX = Math.cos(targetX) * Math.cos(targetY) * cameraDistance;
      const targetCameraY = Math.sin(targetY) * cameraDistance;
      const targetCameraZ = Math.sin(targetX) * Math.cos(targetY) * cameraDistance;
      
      camera.position.x += (targetCameraX - camera.position.x) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;
      camera.position.z += (targetCameraZ - camera.position.z) * 0.05;
      camera.lookAt(0, 0, 0);

      // Animate galaxy rotation with variable speed
      if (galaxyRef.current) {
        galaxyRef.current.rotation.y += 0.0008;
        
        // Add subtle wobble for realism
        galaxyRef.current.rotation.x = Math.sin(Date.now() * 0.0001) * 0.02;
        galaxyRef.current.rotation.z = Math.cos(Date.now() * 0.00015) * 0.01;
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

  // Enhanced galaxy structure creation
  function createEnhancedGalaxyStructure(scene) {
    const galaxyGroup = new THREE.Group();
    galaxyRef.current = galaxyGroup;

    // Enhanced parameters for ultra-realistic Milky Way
    const parameters = {
      count: 200000,
      size: 0.02,
      radius: 8000,
      branches: 2,
      spin: 1.5,
      randomness: 0.4,
      randomnessPower: 3,
      insideColor: '#ffaa44',
      outsideColor: '#1b3984',
      barLength: 2000,
      barWidth: 600
    };

    // Create main spiral galaxy geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const sizes = new Float32Array(parameters.count);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      // Enhanced position distribution
      const radius = Math.pow(Math.random(), 0.6) * parameters.radius;
      const spinAngle = radius * parameters.spin * 0.001;
      const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;

      let x, z;
      if (radius < parameters.barLength && Math.random() < 0.4) {
        // Enhanced central bar
        const barAngle = Math.PI * 0.3;
        const barRadius = Math.random() * parameters.barLength;
        x = Math.cos(barAngle) * barRadius;
        z = Math.sin(barAngle) * barRadius;
      } else {
        // Enhanced spiral arms with more realistic distribution
        const armOffset = Math.sin(radius * 0.002) * 200;
        x = Math.cos(branchAngle + spinAngle) * radius + armOffset;
        z = Math.sin(branchAngle + spinAngle) * radius + armOffset;
      }

      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius * 0.03;
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      positions[i3] = x + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = z + randomZ;

      // Enhanced color distribution with stellar classification
      const mixedColor = colorInside.clone();
      const colorMix = Math.min(radius / parameters.radius, 1);
      mixedColor.lerp(colorOutside, colorMix);

      // Stellar classification colors
      const stellarType = Math.random();
      if (stellarType < 0.05) {
        mixedColor.lerp(new THREE.Color('#ffffff'), 0.8); // O-type (blue-white)
      } else if (stellarType < 0.15) {
        mixedColor.lerp(new THREE.Color('#aabbff'), 0.6); // B-type (blue)
      } else if (stellarType < 0.25) {
        mixedColor.lerp(new THREE.Color('#ffffff'), 0.4); // A-type (white)
      } else if (stellarType < 0.35) {
        mixedColor.lerp(new THREE.Color('#ffffaa'), 0.5); // F-type (yellow-white)
      } else if (stellarType < 0.55) {
        mixedColor.lerp(new THREE.Color('#ffff88'), 0.6); // G-type (yellow, like Sun)
      } else if (stellarType < 0.80) {
        mixedColor.lerp(new THREE.Color('#ffaa44'), 0.7); // K-type (orange)
      } else {
        mixedColor.lerp(new THREE.Color('#ff6644'), 0.8); // M-type (red)
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      // Variable star sizes
      sizes[i] = Math.random() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Enhanced material with custom shader
    const material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });

    const points = new THREE.Points(geometry, material);
    galaxyGroup.add(points);

    // Enhanced galactic core (Sagittarius A*)
    const coreGeometry = new THREE.SphereGeometry(120, 64, 64);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xffdd44,
      transparent: true,
      opacity: 0.95
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    
    // Add core glow effect
    const coreGlowGeometry = new THREE.SphereGeometry(200, 32, 32);
    const coreGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide
    });
    const coreGlow = new THREE.Mesh(coreGlowGeometry, coreGlowMaterial);
    
    galaxyGroup.add(core);
    galaxyGroup.add(coreGlow);

    // Enhanced galactic halo with gradient
    const haloGeometry = new THREE.SphereGeometry(12000, 64, 64);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0x2244aa,
      transparent: true,
      opacity: 0.03,
      side: THREE.BackSide
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    galaxyGroup.add(halo);

    // Add enhanced dust lanes
    createEnhancedDustLanes(galaxyGroup);
    
    // Add enhanced galactic labels
    createEnhancedGalacticLabels(scene, galaxyGroup);

    scene.add(galaxyGroup);
  }

  // Enhanced dust lanes
  function createEnhancedDustLanes(galaxyGroup) {
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 30000;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 6000 + 800;
      const angle = Math.random() * Math.PI * 2;
      
      // Create dust lane patterns
      const laneOffset = Math.sin(angle * 2) * 100;
      
      dustPositions[i3] = Math.cos(angle) * radius + laneOffset;
      dustPositions[i3 + 1] = (Math.random() - 0.5) * 80;
      dustPositions[i3 + 2] = Math.sin(angle) * radius + laneOffset;

      // Enhanced dust colors with variation
      const dustBrightness = 0.05 + Math.random() * 0.1;
      dustColors[i3] = dustBrightness;
      dustColors[i3 + 1] = dustBrightness * 0.8;
      dustColors[i3 + 2] = dustBrightness * 0.6;
    }

    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

    const dustMaterial = new THREE.PointsMaterial({
      size: 0.03,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    const dustLanes = new THREE.Points(dustGeometry, dustMaterial);
    galaxyGroup.add(dustLanes);
  }

  // Enhanced galactic labels
  function createEnhancedGalacticLabels(scene, galaxyGroup) {
    const labels = [
      { name: 'Sagittarius A*\n(Galactic Core)', position: [0, 0, 0], color: '#ffdd44', size: 1.2 },
      { name: 'Perseus Arm', position: [-4000, 200, -2000], color: '#4488ff', size: 1.0 },
      { name: 'Sagittarius Arm', position: [2500, -200, 3000], color: '#8844ff', size: 1.0 },
      { name: 'Orion Arm\n(Our Location)', position: [-1200, 100, 1500], color: '#ffaa44', size: 1.1 },
      { name: 'Scutum-Centaurus Arm', position: [3500, 150, -2500], color: '#44ff88', size: 1.0 },
      { name: 'Central Bar', position: [800, 0, 800], color: '#ffcc66', size: 0.9 },
      { name: 'Nuclear Bulge', position: [0, 200, 0], color: '#ffdd44', size: 0.8 },
      { name: 'Galactic Halo', position: [0, 4000, 0], color: '#ff44aa', size: 0.7 },
      { name: 'Outer Rim', position: [0, 300, 6000], color: '#44aaff', size: 0.8 }
    ];

    labels.forEach((labelData) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 256;

      // Clear canvas with transparent background
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add semi-transparent background with rounded corners
      context.fillStyle = 'rgba(0, 0, 0, 0.7)';
      
      // Polyfill for roundRect if not available
      if (typeof context.roundRect !== 'function') {
        const roundRect = (x, y, width, height, radius) => {
          context.beginPath();
          context.moveTo(x + radius, y);
          context.lineTo(x + width - radius, y);
          context.quadraticCurveTo(x + width, y, x + width, y + radius);
          context.lineTo(x + width, y + height - radius);
          context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
          context.lineTo(x + radius, y + height);
          context.quadraticCurveTo(x, y + height, x, y + height - radius);
          context.lineTo(x, y + radius);
          context.quadraticCurveTo(x, y, x + radius, y);
          context.closePath();
        };
        roundRect(10, 10, canvas.width - 20, canvas.height - 20, 10);
      } else {
        context.roundRect(10, 10, canvas.width - 20, canvas.height - 20, 10);
      }
      context.fill();
      
      // Set text properties
      context.fillStyle = labelData.color;
      context.font = `bold ${24 * labelData.size}px Arial`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      
      // Add glow effect
      context.shadowColor = labelData.color;
      context.shadowBlur = 10;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      
      // Handle multi-line text
      const lines = labelData.name.split('\n');
      const lineHeight = 30 * labelData.size;
      const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, index) => {
        context.fillText(line, canvas.width / 2, startY + index * lineHeight);
      });

      // Create texture from canvas
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      // Create sprite material
      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
        depthTest: false,
        depthWrite: false
      });

      // Create sprite
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.set(labelData.position[0], labelData.position[1], labelData.position[2]);
      sprite.scale.set(800 * labelData.size, 400 * labelData.size, 1);

      // Add to scene (not galaxy group so labels don't rotate with galaxy)
      scene.add(sprite);
    });
  }

  // Enhanced background stars
  function createEnhancedBackgroundStars(scene) {
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 15000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      starsPositions[i * 3] = (Math.random() - 0.5) * 80000;
      starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 80000;
      starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 80000;
      
      // Enhanced color variation
      const starType = Math.random();
      if (starType < 0.6) {
        starsColors[i * 3] = 0.9 + Math.random() * 0.1;
        starsColors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        starsColors[i * 3 + 2] = 1;
      } else if (starType < 0.85) {
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 1;
        starsColors[i * 3 + 2] = 0.7 + Math.random() * 0.3;
      } else {
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 0.5 + Math.random() * 0.3;
        starsColors[i * 3 + 2] = 0.3 + Math.random() * 0.2;
      }
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
  }

  // Enhanced nebulae
  function createEnhancedNebulae(scene) {
    const nebulaeCount = 35;
    
    for (let i = 0; i < nebulaeCount; i++) {
      const nebulaeGeometry = new THREE.SphereGeometry(150 + Math.random() * 400, 32, 32);
      const nebulaeColors = [
        0xff3366, 0x3366ff, 0x66ff33, 0xffaa33, 0xaa33ff,
        0xff6633, 0x33ff66, 0x6633ff, 0xffff33, 0xff33ff
      ];
      const color = nebulaeColors[Math.floor(Math.random() * nebulaeColors.length)];
      
      const nebulaeMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.15 + Math.random() * 0.25,
        side: THREE.DoubleSide
      });
      
      const nebula = new THREE.Mesh(nebulaeGeometry, nebulaeMaterial);
      
      // Enhanced positioning
      const angle = Math.random() * Math.PI * 2;
      const distance = 1500 + Math.random() * 5000;
      nebula.position.x = Math.cos(angle) * distance;
      nebula.position.y = (Math.random() - 0.5) * 800;
      nebula.position.z = Math.sin(angle) * distance;
      
      scene.add(nebula);
    }
  }

  // Create navigation markers
  function createNavigationMarkers(scene) {
    Object.entries(galaxyPositions).forEach(([name, position]) => {
      const markerGeometry = new THREE.SphereGeometry(50, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: position.color,
        transparent: true,
        opacity: position.isHome ? 0.8 : 0.6
      });
      
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.set(position.x, position.y, position.z);
      
      // Add glow effect for home marker
      if (position.isHome) {
        const glowGeometry = new THREE.SphereGeometry(80, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: position.color,
          transparent: true,
          opacity: 0.3,
          side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.set(position.x, position.y, position.z);
        scene.add(glow);
      }
      
      scene.add(marker);
    });
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <div className="text-white text-lg">Loading Enhanced Galaxy...</div>
        </div>
      )}
    </div>
  );
});

export default EnhancedGalaxyViewV2;

