import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, RotateCcw } from 'lucide-react';

const RealisticGalacticView = ({ onBackToSolar }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const galaxyRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000008);
    sceneRef.current = scene;

    // Camera setup for galactic view
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      200000
    );
    camera.position.set(0, 15000, 40000);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create background stars
    createBackgroundStars(scene);
    
    // Create realistic Milky Way galaxy
    createRealisticGalaxy(scene);

    // Camera controls
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let isMouseDown = false;
    let cameraDistance = 40000;

    const onMouseMove = (event) => {
      if (isMouseDown) {
        const deltaX = event.clientX - mouseX;
        const deltaY = event.clientY - mouseY;
        
        targetX += deltaX * 0.005;
        targetY += deltaY * 0.005;
        
        targetY = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetY));
        
        mouseX = event.clientX;
        mouseY = event.clientY;
      }
    };

    const onMouseDown = (event) => { 
      isMouseDown = true; 
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    
    const onMouseUp = () => { isMouseDown = false; };

    const onWheel = (event) => {
      cameraDistance += event.deltaY * 10;
      cameraDistance = Math.max(5000, Math.min(100000, cameraDistance));
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('wheel', onWheel);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (galaxyRef.current) {
        galaxyRef.current.rotation.y += 0.0002; // Very slow rotation
      }

      // Update camera position
      camera.position.x = Math.cos(targetX) * Math.cos(targetY) * cameraDistance;
      camera.position.z = Math.sin(targetX) * Math.cos(targetY) * cameraDistance;
      camera.position.y = Math.sin(targetY) * cameraDistance;
      
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();
    setIsLoading(false);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('wheel', onWheel);
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

  const createBackgroundStars = (scene) => {
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 15000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      // Position stars in a large sphere
      const radius = 80000 + Math.random() * 100000;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      starsPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starsPositions[i * 3 + 1] = radius * Math.cos(phi);
      starsPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      
      // Star colors
      const starType = Math.random();
      if (starType < 0.7) {
        // White/blue stars
        starsColors[i * 3] = 0.9 + Math.random() * 0.1;
        starsColors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        starsColors[i * 3 + 2] = 1;
      } else {
        // Yellow/red stars
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        starsColors[i * 3 + 2] = 0.6 + Math.random() * 0.2;
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
  };

  const createRealisticGalaxy = (scene) => {
    const galaxyGroup = new THREE.Group();
    galaxyRef.current = galaxyGroup;

    // Create the central bulge (elliptical, not spherical)
    const bulgeGeometry = new THREE.SphereGeometry(2500, 64, 32);
    bulgeGeometry.scale(1.5, 0.8, 1.5); // Make it more elliptical
    const bulgeGradient = createBulgeTexture();
    const bulgeMaterial = new THREE.MeshBasicMaterial({
      map: bulgeGradient,
      transparent: true,
      opacity: 0.9
    });
    const bulge = new THREE.Mesh(bulgeGeometry, bulgeMaterial);
    galaxyGroup.add(bulge);

    // Create the spiral disk with proper structure
    createSpiralDisk(galaxyGroup);
    
    // Create spiral arms with realistic structure
    createSpiralArms(galaxyGroup);
    
    // Add our solar system marker
    createSolarSystemMarker(galaxyGroup);

    scene.add(galaxyGroup);
  };

  const createBulgeTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext('2d');
    
    // Create radial gradient for bulge
    const gradient = context.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, '#ffee88');
    gradient.addColorStop(0.3, '#ffcc44');
    gradient.addColorStop(0.6, '#ff8844');
    gradient.addColorStop(1, 'transparent');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 512);
    
    return new THREE.CanvasTexture(canvas);
  };

  const createSpiralDisk = (galaxyGroup) => {
    // Main galactic disk
    const diskGeometry = new THREE.RingGeometry(3000, 25000, 128);
    const diskTexture = createDiskTexture();
    const diskMaterial = new THREE.MeshBasicMaterial({
      map: diskTexture,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const disk = new THREE.Mesh(diskGeometry, diskMaterial);
    disk.rotation.x = Math.PI / 2;
    galaxyGroup.add(disk);
  };

  const createDiskTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const context = canvas.getContext('2d');
    
    // Create spiral pattern
    const centerX = 512;
    const centerY = 512;
    
    // Fill with dark blue base
    context.fillStyle = '#001122';
    context.fillRect(0, 0, 1024, 1024);
    
    // Add spiral structure
    for (let angle = 0; angle < Math.PI * 8; angle += 0.01) {
      const radius = angle * 30;
      if (radius > 500) break;
      
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      const opacity = Math.max(0, 1 - radius / 500);
      context.fillStyle = `rgba(100, 150, 255, ${opacity * 0.3})`;
      context.beginPath();
      context.arc(x, y, 3, 0, Math.PI * 2);
      context.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  };

  const createSpiralArms = (galaxyGroup) => {
    // Create two main spiral arms
    for (let armIndex = 0; armIndex < 2; armIndex++) {
      const armGeometry = new THREE.BufferGeometry();
      const armPoints = [];
      const armColors = [];
      const pointCount = 8000;
      
      for (let i = 0; i < pointCount; i++) {
        const t = (i / pointCount) * Math.PI * 6; // Multiple rotations
        const armOffset = armIndex * Math.PI; // 180 degrees apart
        
        // Logarithmic spiral
        const radius = 3000 + t * 800;
        if (radius > 25000) break;
        
        const angle = t * 0.3 + armOffset;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        // Add some randomness and width to the arm
        const armWidth = 800 + radius * 0.02;
        const randomOffset = (Math.random() - 0.5) * armWidth;
        const perpAngle = angle + Math.PI / 2;
        
        const finalX = x + Math.cos(perpAngle) * randomOffset;
        const finalZ = z + Math.sin(perpAngle) * randomOffset;
        const y = (Math.random() - 0.5) * 200;
        
        armPoints.push(finalX, y, finalZ);
        
        // Color based on distance from center
        const distance = Math.sqrt(finalX * finalX + finalZ * finalZ);
        const brightness = Math.max(0.3, 1 - distance / 25000);
        const blue = 0.6 + Math.random() * 0.4;
        
        armColors.push(blue * brightness, blue * brightness * 0.8, brightness);
      }
      
      armGeometry.setAttribute('position', new THREE.Float32BufferAttribute(armPoints, 3));
      armGeometry.setAttribute('color', new THREE.Float32BufferAttribute(armColors, 3));
      
      const armMaterial = new THREE.PointsMaterial({
        size: 15,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });
      
      const arm = new THREE.Points(armGeometry, armMaterial);
      galaxyGroup.add(arm);
    }
  };

  const createSolarSystemMarker = (galaxyGroup) => {
    // Our solar system position in the Orion Arm
    const solarSystemDistance = 13000;
    const solarSystemAngle = Math.PI * 0.4;
    
    const x = Math.cos(solarSystemAngle) * solarSystemDistance;
    const z = Math.sin(solarSystemAngle) * solarSystemDistance;
    
    // Create marker
    const markerGeometry = new THREE.SphereGeometry(80, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffff00,
      emissive: 0x444400
    });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(x, 0, z);
    galaxyGroup.add(marker);

    // Add pulsing effect
    const pulseGeometry = new THREE.SphereGeometry(120, 16, 16);
    const pulseMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 0.3
    });
    const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
    pulse.position.set(x, 0, z);
    galaxyGroup.add(pulse);

    // Label
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 128;
    
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = 'yellow';
    context.font = 'bold 32px Arial';
    context.textAlign = 'center';
    context.fillText('Our Solar System', 256, 64);
    context.font = '20px Arial';
    context.fillText('(Orion Arm)', 256, 96);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ 
      map: texture, 
      transparent: true 
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.set(x, 800, z);
    sprite.scale.set(1500, 400, 1);
    galaxyGroup.add(sprite);
  };

  const resetView = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 15000, 40000);
    }
  };

  return (
    <div className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="text-white text-xl">Loading Milky Way Galaxy...</div>
        </div>
      )}
      
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Galaxy Info Panel */}
      <Card className="absolute top-4 left-4 w-80 bg-black/80 text-white border-gray-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Milky Way Galaxy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-gray-300">
            Our galaxy is a barred spiral galaxy with a bright central bulge and two major spiral arms. Our solar system is located in a minor arm called the Orion Arm.
          </p>
          <div className="text-xs text-gray-400">
            <p><strong>Type:</strong> Barred spiral galaxy</p>
            <p><strong>Diameter:</strong> ~100,000 light-years</p>
            <p><strong>Stars:</strong> 200-400 billion</p>
            <p><strong>Age:</strong> ~13.6 billion years</p>
            <p><strong>Our Location:</strong> Orion Arm, 26,000 ly from center</p>
          </div>
        </CardContent>
      </Card>

      {/* Controls Panel */}
      <Card className="absolute bottom-4 right-4 bg-black/80 text-white border-gray-600">
        <CardContent className="p-4">
          <div className="flex gap-2 mb-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white"
              onClick={onBackToSolar}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Solar System
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white"
              onClick={resetView}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset View
            </Button>
          </div>
          <div className="text-xs text-gray-400">
            <p>Drag: Rotate view • Scroll: Zoom in/out</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RealisticGalacticView;

