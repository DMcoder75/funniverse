import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';

const EnhancedGalaxyView = forwardRef(({ onLocationChange }, ref) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const galaxyRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Galaxy navigation positions
  const galaxyPositions = {
    'Galactic Center': { x: 0, y: 0, z: 0, distance: 500 },
    'Perseus Arm': { x: -3000, y: 200, z: -1500, distance: 2000 },
    'Sagittarius Arm': { x: 2000, y: -300, z: 2500, distance: 1800 },
    'Orion Arm': { x: -1000, y: 100, z: 1200, distance: 1500 },
    'Outer Rim': { x: 0, y: 500, z: 5000, distance: 3000 },
    'Galactic Halo': { x: 0, y: 8000, z: 0, distance: 6000 }
  };

  useImperativeHandle(ref, () => ({
    navigateToGalaxyRegion: (regionName) => {
      console.log('Navigating to galaxy region:', regionName);
      
      const position = galaxyPositions[regionName];
      if (position && cameraRef.current) {
        console.log('Galaxy region found:', regionName, position);
        
        // Update location immediately
        if (onLocationChange) {
          onLocationChange(regionName);
        }
        
        // Animate camera to the target position
        const camera = cameraRef.current;
        const startPosition = camera.position.clone();
        const targetPosition = new THREE.Vector3(position.x, position.y, position.z);
        
        // Calculate camera position at appropriate distance from target
        const direction = targetPosition.clone().normalize();
        const cameraPosition = targetPosition.clone().add(direction.multiplyScalar(position.distance));
        
        console.log('Animating camera from:', startPosition, 'to:', cameraPosition);
        
        // Smooth animation
        const animateToTarget = () => {
          const startTime = Date.now();
          const duration = 3000; // 3 seconds
          
          const animateStep = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Smooth easing
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            // Interpolate camera position
            camera.position.lerpVectors(startPosition, cameraPosition, easeProgress);
            camera.lookAt(targetPosition);
            
            if (progress < 1) {
              requestAnimationFrame(animateStep);
            } else {
              console.log('Galaxy navigation animation complete');
            }
          };
          
          animateStep();
        };
        
        animateToTarget();
      } else {
        console.log('Galaxy region not found:', regionName, 'Available regions:', Object.keys(galaxyPositions));
      }
    }
  }), [onLocationChange]);

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
        
        // Allow full 360-degree rotation - remove Y constraint
        // targetY = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetY));
        
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
      
      // Allow full 360-degree rotation - remove Y constraint
      // targetY = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetY));
      
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

    // Enhanced parameters for Milky Way-like spiral galaxy
    const parameters = {
      count: 150000,
      size: 0.015,
      radius: 6000,
      branches: 2, // Milky Way has 2 main spiral arms
      spin: 1.2,
      randomness: 0.3,
      randomnessPower: 2.5,
      insideColor: '#ffaa44',
      outsideColor: '#1b3984',
      barLength: 1500, // Central bar structure
      barWidth: 400
    };

    // Create main spiral galaxy geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      // Position with more realistic distribution
      const radius = Math.pow(Math.random(), 0.7) * parameters.radius;
      const spinAngle = radius * parameters.spin * 0.0008; // More realistic spiral tightness
      const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;

      // Add central bar structure (like Milky Way)
      let x, z;
      if (radius < parameters.barLength && Math.random() < 0.3) {
        // Central bar
        const barAngle = Math.PI * 0.25; // 45-degree bar
        const barRadius = Math.random() * parameters.barLength;
        x = Math.cos(barAngle) * barRadius;
        z = Math.sin(barAngle) * barRadius;
      } else {
        // Spiral arms
        x = Math.cos(branchAngle + spinAngle) * radius;
        z = Math.sin(branchAngle + spinAngle) * radius;
      }

      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius * 0.05;
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      positions[i3] = x + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = z + randomZ;

      // Enhanced color distribution
      const mixedColor = colorInside.clone();
      const colorMix = Math.min(radius / parameters.radius, 1);
      mixedColor.lerp(colorOutside, colorMix);

      // Add some variation for different star types
      if (Math.random() < 0.1) {
        mixedColor.lerp(new THREE.Color('#ffffff'), 0.5); // White giants
      } else if (Math.random() < 0.05) {
        mixedColor.lerp(new THREE.Color('#ff4444'), 0.7); // Red giants
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Enhanced material
    const material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    // Points
    const points = new THREE.Points(geometry, material);
    galaxyGroup.add(points);

    // Enhanced galactic core (Sagittarius A*)
    const coreGeometry = new THREE.SphereGeometry(80, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xffdd44,
      transparent: true,
      opacity: 0.9
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    galaxyGroup.add(core);

    // Add galactic halo
    const haloGeometry = new THREE.SphereGeometry(8000, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0x2244aa,
      transparent: true,
      opacity: 0.02,
      side: THREE.BackSide
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    galaxyGroup.add(halo);

    // Add dust lanes
    createDustLanes(galaxyGroup);
    
    // Add labels for galactic structures
    createGalacticLabels(scene, galaxyGroup);

    scene.add(galaxyGroup);
  }

  // Function to create dust lanes
  function createDustLanes(galaxyGroup) {
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 20000;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 4000 + 500;
      const angle = Math.random() * Math.PI * 2;
      
      dustPositions[i3] = Math.cos(angle) * radius;
      dustPositions[i3 + 1] = (Math.random() - 0.5) * 50; // Thin disk
      dustPositions[i3 + 2] = Math.sin(angle) * radius;

      // Dark dust color
      dustColors[i3] = 0.1;
      dustColors[i3 + 1] = 0.05;
      dustColors[i3 + 2] = 0.02;
    }

    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

    const dustMaterial = new THREE.PointsMaterial({
      size: 0.02,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    const dustLanes = new THREE.Points(dustGeometry, dustMaterial);
    galaxyGroup.add(dustLanes);
  }

  // Function to create galactic labels
  function createGalacticLabels(scene, galaxyGroup) {
    const labels = [
      { name: 'Sagittarius A* (Galactic Core)', position: [0, 0, 0], color: '#ffdd44' },
      { name: 'Perseus Arm', position: [3000, 0, 2000], color: '#88aaff' },
      { name: 'Scutum-Centaurus Arm', position: [-2500, 0, 3000], color: '#88aaff' },
      { name: 'Norma Arm', position: [1500, 0, -3500], color: '#88aaff' },
      { name: 'Sagittarius Arm', position: [-3500, 0, -1500], color: '#88aaff' },
      { name: 'Orion Spur (Our Location)', position: [1200, 0, 2800], color: '#ffaa44' },
      { name: 'Galactic Halo', position: [0, 4000, 0], color: '#aaccff' },
      { name: 'Central Bar', position: [800, 0, 800], color: '#ffcc66' },
      { name: 'Outer Rim', position: [5000, 0, 0], color: '#6688aa' }
    ];

    labels.forEach((labelData) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 128;

      // Transparent background
      context.fillStyle = 'rgba(0, 0, 0, 0.7)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.fillStyle = labelData.color;
      context.font = 'bold 24px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      
      // Add glow effect
      context.shadowColor = labelData.color;
      context.shadowBlur = 10;
      
      context.fillText(labelData.name, 256, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true,
        opacity: 0.8
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      
      sprite.position.set(labelData.position[0], labelData.position[1], labelData.position[2]);
      sprite.scale.set(800, 200, 1);
      
      // Make labels always face camera
      sprite.userData = { isLabel: true };
      
      scene.add(sprite);
    });
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
});

export default EnhancedGalaxyView;

