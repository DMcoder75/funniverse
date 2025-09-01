import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Home, Zap, RotateCcw } from 'lucide-react';

const GalacticView = ({ onBackToSolar }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const galaxyRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000008);
    sceneRef.current = scene;

    // Camera setup for galactic view
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      500000
    );
    camera.position.set(0, 15000, 25000);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create distant star field
    createDistantStars(scene);
    
    // Create Milky Way galaxy
    createMilkyWayGalaxy(scene);
    
    // Add our solar system marker
    createSolarSystemMarker(scene);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    // Camera controls
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let isMouseDown = false;

    const onMouseMove = (event) => {
      if (isMouseDown) {
        mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
        mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
      }
    };

    const onMouseDown = () => { isMouseDown = true; };
    const onMouseUp = () => { isMouseDown = false; };

    const onWheel = (event) => {
      const newZoom = Math.max(0.1, Math.min(10, zoomLevel + event.deltaY * 0.001));
      setZoomLevel(newZoom);
      camera.position.multiplyScalar(newZoom / zoomLevel);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('wheel', onWheel);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Smooth camera rotation
      targetX += (mouseX - targetX) * 0.02;
      targetY += (mouseY - targetY) * 0.02;
      
      if (galaxyRef.current) {
        galaxyRef.current.rotation.y += 0.0005; // Slow galaxy rotation
      }

      // Camera orbital movement
      const radius = camera.position.length();
      camera.position.x = Math.cos(targetX) * radius;
      camera.position.z = Math.sin(targetX) * radius;
      camera.position.y += (targetY * 5000 - camera.position.y) * 0.02;
      
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
  }, [zoomLevel]);

  const createDistantStars = (scene) => {
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 20000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      // Position stars in a large sphere around the galaxy
      const radius = 100000 + Math.random() * 200000;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      starsPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starsPositions[i * 3 + 1] = radius * Math.cos(phi);
      starsPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      
      // Varied star colors
      const starType = Math.random();
      if (starType < 0.6) {
        // White stars
        starsColors[i * 3] = 1;
        starsColors[i * 3 + 1] = 1;
        starsColors[i * 3 + 2] = 1;
      } else if (starType < 0.8) {
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
      size: 2, 
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
  };

  const createMilkyWayGalaxy = (scene) => {
    const galaxyGroup = new THREE.Group();
    galaxyRef.current = galaxyGroup;

    // Central bulge - brighter and more prominent
    const bulgeGeometry = new THREE.SphereGeometry(4000, 64, 64);
    const bulgeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffee88,
      transparent: true,
      opacity: 0.9
    });
    const bulge = new THREE.Mesh(bulgeGeometry, bulgeMaterial);
    galaxyGroup.add(bulge);

    // Create more detailed spiral arms based on reference images
    const armData = [
      { name: 'Perseus Arm', color: 0x88bbff, offset: 0, density: 3000 },
      { name: 'Carina-Sagittarius Arm', color: 0x99ccff, offset: Math.PI * 0.5, density: 2800 },
      { name: 'Norma Arm', color: 0xaaddff, offset: Math.PI, density: 2500 },
      { name: 'Cygnus Arm', color: 0xbbddff, offset: Math.PI * 1.5, density: 2700 },
      { name: 'Orion Arm', color: 0xffffaa, offset: Math.PI * 0.3, density: 1500 } // Our local arm
    ];
    
    armData.forEach((arm, armIndex) => {
      createDetailedSpiralArm(galaxyGroup, arm, armIndex);
    });

    // Add galaxy disk with more realistic appearance
    const diskGeometry = new THREE.RingGeometry(6000, 30000, 128);
    const diskMaterial = new THREE.MeshBasicMaterial({
      color: 0x3366bb,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    });
    const disk = new THREE.Mesh(diskGeometry, diskMaterial);
    disk.rotation.x = Math.PI / 2;
    galaxyGroup.add(disk);

    // Add outer halo
    const haloGeometry = new THREE.RingGeometry(30000, 50000, 64);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0x2244aa,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.rotation.x = Math.PI / 2;
    galaxyGroup.add(halo);

    scene.add(galaxyGroup);
  };

  const createDetailedSpiralArm = (galaxyGroup, armData, armIndex) => {
    const armGeometry = new THREE.BufferGeometry();
    const armPoints = [];
    const armColors = [];
    const pointCount = armData.density;
    
    for (let i = 0; i < pointCount; i++) {
      const t = (i / pointCount) * Math.PI * 6; // More spiral turns
      const armOffset = armData.offset;
      
      // Create more realistic spiral shape
      const baseRadius = 8000 + t * 600;
      const radiusVariation = Math.sin(t * 3) * 1000; // Add some wave to the arms
      const radius = baseRadius + radiusVariation;
      
      const x = Math.cos(t + armOffset) * radius;
      const z = Math.sin(t + armOffset) * radius;
      const y = (Math.random() - 0.5) * 800; // Vertical spread
      
      armPoints.push(x, y, z);
      
      // More varied colors along the arm
      const colorObj = new THREE.Color(armData.color);
      const brightness = 0.6 + Math.random() * 0.4;
      const distance = Math.sqrt(x*x + z*z);
      const centerBrightness = Math.max(0.3, 1 - distance / 25000); // Brighter near center
      
      armColors.push(
        colorObj.r * brightness * centerBrightness, 
        colorObj.g * brightness * centerBrightness, 
        colorObj.b * brightness * centerBrightness
      );
    }
    
    armGeometry.setAttribute('position', new THREE.Float32BufferAttribute(armPoints, 3));
    armGeometry.setAttribute('color', new THREE.Float32BufferAttribute(armColors, 3));
    
    const armMaterial = new THREE.PointsMaterial({
      size: 20,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });
    
    const arm = new THREE.Points(armGeometry, armMaterial);
    galaxyGroup.add(arm);
  };

  const createSolarSystemMarker = (scene) => {
    // Our solar system is located in the Orion Arm (Local Arm)
    // About 26,000 light years from galactic center
    const solarSystemDistance = 15000; // Scaled distance
    const solarSystemAngle = Math.PI * 0.3; // Position in Orion Arm
    
    const x = Math.cos(solarSystemAngle) * solarSystemDistance;
    const z = Math.sin(solarSystemAngle) * solarSystemDistance;
    
    // Create a bright, pulsing marker for our solar system
    const markerGeometry = new THREE.SphereGeometry(80, 32, 32);
    const markerMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffff00,
      emissive: 0x666600
    });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(x, 0, z);
    marker.userData = { isSolarSystem: true, position: { x, y: 0, z } };
    scene.add(marker);

    // Add multiple pulsing rings
    for (let i = 1; i <= 3; i++) {
      const pulseGeometry = new THREE.SphereGeometry(80 + i * 50, 32, 32);
      const pulseMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.2 / i
      });
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
      pulse.position.set(x, 0, z);
      pulse.userData = { isPulse: true, pulseIndex: i };
      scene.add(pulse);
    }

    // Add enhanced label with background
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 256;
    
    // Background
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Text
    context.fillStyle = 'yellow';
    context.font = 'bold 48px Arial';
    context.textAlign = 'center';
    context.fillText('🌟 Our Solar System', 512, 128);
    context.font = '32px Arial';
    context.fillText('(Click to zoom in)', 512, 180);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ 
      map: texture, 
      transparent: true 
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.set(x, 800, z);
    sprite.scale.set(2000, 500, 1);
    sprite.userData = { isLabel: true };
    scene.add(sprite);

    return { x, y: 0, z };
  };

  const resetView = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 15000, 25000);
      setZoomLevel(1);
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
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Milky Way Galaxy View
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-gray-300">
            Our galaxy contains 200-400 billion stars arranged in spiral arms. Our solar system is located in the Orion Arm, about 26,000 light-years from the galactic center.
          </p>
          <div className="text-xs text-gray-400">
            <p><strong>Diameter:</strong> ~100,000 light-years</p>
            <p><strong>Thickness:</strong> ~1,000 light-years</p>
            <p><strong>Age:</strong> ~13.6 billion years</p>
            <p><strong>Type:</strong> Barred spiral galaxy</p>
          </div>
          <div className="text-xs text-yellow-400">
            <p><strong>Yellow marker:</strong> Our Solar System location</p>
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
            <p>Zoom Level: {zoomLevel.toFixed(1)}x</p>
          </div>
        </CardContent>
      </Card>

      {/* Spiral Arms Legend */}
      <Card className="absolute top-4 right-4 w-64 bg-black/80 text-white border-gray-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Spiral Arms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="text-xs space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded"></div>
              <span>Perseus Arm</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-300 rounded"></div>
              <span>Carina-Sagittarius Arm</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-200 rounded"></div>
              <span>Norma Arm</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-100 rounded"></div>
              <span>Cygnus Arm</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span>Orion Arm (Our Location)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GalacticView;

