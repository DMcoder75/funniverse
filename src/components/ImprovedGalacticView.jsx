import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Home, Zap, RotateCcw } from 'lucide-react';

const ImprovedGalacticView = ({ onBackToSolar }) => {
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
    scene.background = new THREE.Color(0x000005);
    sceneRef.current = scene;

    // Camera setup for galactic view
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      500000
    );
    camera.position.set(0, 20000, 35000);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.8;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create distant star field
    createDistantStars(scene);
    
    // Create realistic Milky Way galaxy with proper spiral structure
    createRealisticMilkyWay(scene);
    
    // Add our solar system marker
    const solarSystemPos = createSolarSystemMarker(scene);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    // Camera controls
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let isMouseDown = false;

    const onMouseMove = (event) => {
      if (isMouseDown) {
        mouseX = (event.clientX - window.innerWidth / 2) * 0.0003;
        mouseY = (event.clientY - window.innerHeight / 2) * 0.0003;
      }
    };

    const onMouseDown = () => { isMouseDown = true; };
    const onMouseUp = () => { isMouseDown = false; };

    const onWheel = (event) => {
      const newZoom = Math.max(0.1, Math.min(10, zoomLevel + event.deltaY * 0.001));
      setZoomLevel(newZoom);
      
      const currentDistance = camera.position.length();
      const newDistance = currentDistance * (newZoom / zoomLevel);
      camera.position.normalize().multiplyScalar(newDistance);
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
        galaxyRef.current.rotation.y += 0.0003; // Slow galaxy rotation
      }

      // Camera orbital movement
      const radius = camera.position.length();
      camera.position.x = Math.cos(targetX) * Math.cos(targetY) * radius;
      camera.position.z = Math.sin(targetX) * Math.cos(targetY) * radius;
      camera.position.y = Math.sin(targetY) * radius;
      
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
    const starsCount = 25000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      // Position stars in a large sphere around the galaxy
      const radius = 150000 + Math.random() * 300000;
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
      size: 3, 
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
  };

  const createRealisticMilkyWay = (scene) => {
    const galaxyGroup = new THREE.Group();
    galaxyRef.current = galaxyGroup;

    // Create central bar structure (not a sphere)
    createCentralBar(galaxyGroup);
    
    // Create nuclear bulge
    createNuclearBulge(galaxyGroup);
    
    // Create realistic spiral arms
    createRealisticSpiralArms(galaxyGroup);
    
    // Add galaxy disk
    createGalaxyDisk(galaxyGroup);

    scene.add(galaxyGroup);
  };

  const createCentralBar = (galaxyGroup) => {
    // Create the central bar structure typical of barred spiral galaxies
    const barGeometry = new THREE.BoxGeometry(8000, 1000, 2000);
    const barMaterial = new THREE.MeshBasicMaterial({
      color: 0xffdd88,
      transparent: true,
      opacity: 0.8
    });
    const centralBar = new THREE.Mesh(barGeometry, barMaterial);
    centralBar.rotation.z = Math.PI / 6; // Rotate the bar
    galaxyGroup.add(centralBar);

    // Add bar glow effect
    const barGlowGeometry = new THREE.BoxGeometry(9000, 1200, 2200);
    const barGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.3
    });
    const barGlow = new THREE.Mesh(barGlowGeometry, barGlowMaterial);
    barGlow.rotation.z = Math.PI / 6;
    galaxyGroup.add(barGlow);
  };

  const createNuclearBulge = (galaxyGroup) => {
    // Create the nuclear bulge - more elliptical than spherical
    const bulgeGeometry = new THREE.SphereGeometry(3000, 64, 32);
    bulgeGeometry.scale(1, 0.6, 1); // Flatten it
    const bulgeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffee99,
      transparent: true,
      opacity: 0.9
    });
    const bulge = new THREE.Mesh(bulgeGeometry, bulgeMaterial);
    galaxyGroup.add(bulge);
  };

  const createRealisticSpiralArms = (galaxyGroup) => {
    // Create proper logarithmic spiral arms
    const armData = [
      { name: 'Perseus Arm', color: 0x88bbff, startAngle: 0, armIndex: 0 },
      { name: 'Carina-Sagittarius Arm', color: 0x99ccff, startAngle: Math.PI, armIndex: 1 },
      { name: 'Norma Arm', color: 0xaaddff, startAngle: Math.PI * 0.5, armIndex: 2 },
      { name: 'Cygnus Arm', color: 0xbbddff, startAngle: Math.PI * 1.5, armIndex: 3 }
    ];

    armData.forEach((arm) => {
      createLogarithmicSpiralArm(galaxyGroup, arm);
    });

    // Create the Orion Arm (our local arm) - smaller and less prominent
    createOrionArm(galaxyGroup);
  };

  const createLogarithmicSpiralArm = (galaxyGroup, armData) => {
    const armGeometry = new THREE.BufferGeometry();
    const armPoints = [];
    const armColors = [];
    const pointCount = 4000;
    
    for (let i = 0; i < pointCount; i++) {
      const t = (i / pointCount) * Math.PI * 4; // 4 full rotations
      
      // Logarithmic spiral formula: r = a * e^(b*θ)
      const a = 4000; // Initial radius
      const b = 0.2; // Spiral tightness
      const radius = a * Math.exp(b * t);
      
      if (radius > 50000) break; // Don't extend too far
      
      const angle = t + armData.startAngle;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      
      // Add some vertical spread and randomness
      const y = (Math.random() - 0.5) * 1000 * (1 + radius / 20000);
      
      // Add some width to the arm
      const armWidth = 1000 + radius * 0.02;
      const offsetAngle = (Math.random() - 0.5) * 0.3;
      const finalX = x + Math.cos(angle + Math.PI/2 + offsetAngle) * (Math.random() - 0.5) * armWidth;
      const finalZ = z + Math.sin(angle + Math.PI/2 + offsetAngle) * (Math.random() - 0.5) * armWidth;
      
      armPoints.push(finalX, y, finalZ);
      
      // Color variation along the arm
      const colorObj = new THREE.Color(armData.color);
      const brightness = 0.7 + Math.random() * 0.3;
      const distance = Math.sqrt(finalX*finalX + finalZ*finalZ);
      const centerBrightness = Math.max(0.4, 1 - distance / 40000);
      
      armColors.push(
        colorObj.r * brightness * centerBrightness,
        colorObj.g * brightness * centerBrightness,
        colorObj.b * brightness * centerBrightness
      );
    }
    
    armGeometry.setAttribute('position', new THREE.Float32BufferAttribute(armPoints, 3));
    armGeometry.setAttribute('color', new THREE.Float32BufferAttribute(armColors, 3));
    
    const armMaterial = new THREE.PointsMaterial({
      size: 25,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });
    
    const arm = new THREE.Points(armGeometry, armMaterial);
    galaxyGroup.add(arm);
  };

  const createOrionArm = (galaxyGroup) => {
    // Create our local Orion Arm - smaller spur
    const armGeometry = new THREE.BufferGeometry();
    const armPoints = [];
    const armColors = [];
    const pointCount = 1500;
    
    for (let i = 0; i < pointCount; i++) {
      const t = (i / pointCount) * Math.PI * 1.5; // Shorter arm
      const baseRadius = 12000 + t * 800;
      const angle = t + Math.PI * 0.3; // Position in Orion region
      
      const x = Math.cos(angle) * baseRadius;
      const z = Math.sin(angle) * baseRadius;
      const y = (Math.random() - 0.5) * 600;
      
      armPoints.push(x, y, z);
      
      // Golden color for our local arm
      const brightness = 0.8 + Math.random() * 0.2;
      armColors.push(1 * brightness, 0.9 * brightness, 0.6 * brightness);
    }
    
    armGeometry.setAttribute('position', new THREE.Float32BufferAttribute(armPoints, 3));
    armGeometry.setAttribute('color', new THREE.Float32BufferAttribute(armColors, 3));
    
    const armMaterial = new THREE.PointsMaterial({
      size: 20,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });
    
    const orionArm = new THREE.Points(armGeometry, armMaterial);
    galaxyGroup.add(orionArm);
  };

  const createGalaxyDisk = (galaxyGroup) => {
    // Create the galactic disk with proper structure
    const diskGeometry = new THREE.RingGeometry(8000, 45000, 128);
    const diskMaterial = new THREE.MeshBasicMaterial({
      color: 0x2244aa,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide
    });
    const disk = new THREE.Mesh(diskGeometry, diskMaterial);
    disk.rotation.x = Math.PI / 2;
    galaxyGroup.add(disk);

    // Add outer halo
    const haloGeometry = new THREE.RingGeometry(45000, 80000, 64);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0x1133aa,
      transparent: true,
      opacity: 0.03,
      side: THREE.DoubleSide
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.rotation.x = Math.PI / 2;
    galaxyGroup.add(halo);
  };

  const createSolarSystemMarker = (scene) => {
    // Our solar system is located in the Orion Arm
    const solarSystemDistance = 15000;
    const solarSystemAngle = Math.PI * 0.3;
    
    const x = Math.cos(solarSystemAngle) * solarSystemDistance;
    const z = Math.sin(solarSystemAngle) * solarSystemDistance;
    
    // Create a bright, pulsing marker
    const markerGeometry = new THREE.SphereGeometry(100, 32, 32);
    const markerMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffff00,
      emissive: 0x888800
    });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(x, 0, z);
    scene.add(marker);

    // Add pulsing rings
    for (let i = 1; i <= 3; i++) {
      const pulseGeometry = new THREE.SphereGeometry(100 + i * 60, 32, 32);
      const pulseMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.3 / i
      });
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
      pulse.position.set(x, 0, z);
      scene.add(pulse);
    }

    // Enhanced label
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 256;
    
    context.fillStyle = 'rgba(0, 0, 0, 0.8)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = 'yellow';
    context.font = 'bold 48px Arial';
    context.textAlign = 'center';
    context.fillText('🌟 Our Solar System', 512, 128);
    context.font = '32px Arial';
    context.fillText('(Orion Arm)', 512, 180);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ 
      map: texture, 
      transparent: true 
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.set(x, 1000, z);
    sprite.scale.set(2500, 600, 1);
    scene.add(sprite);

    return { x, y: 0, z };
  };

  const resetView = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 20000, 35000);
      setZoomLevel(1);
    }
  };

  return (
    <div className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="text-white text-xl">Loading Realistic Milky Way Galaxy...</div>
        </div>
      )}
      
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Galaxy Info Panel */}
      <Card className="absolute top-4 left-4 w-80 bg-black/80 text-white border-gray-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Realistic Milky Way Galaxy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-gray-300">
            Our galaxy is a barred spiral galaxy with a central bar structure, nuclear bulge, and logarithmic spiral arms. Our solar system is located in the Orion Arm.
          </p>
          <div className="text-xs text-gray-400">
            <p><strong>Type:</strong> Barred spiral galaxy (SBbc)</p>
            <p><strong>Diameter:</strong> ~100,000 light-years</p>
            <p><strong>Central Bar:</strong> ~27,000 light-years long</p>
            <p><strong>Stars:</strong> 200-400 billion</p>
            <p><strong>Age:</strong> ~13.6 billion years</p>
          </div>
          <div className="text-xs text-yellow-400">
            <p><strong>Yellow marker:</strong> Our Solar System in Orion Arm</p>
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
          <CardTitle className="text-sm">Galaxy Structure</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="text-xs space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span>Central Bar & Nuclear Bulge</span>
            </div>
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
              <div className="w-3 h-3 bg-yellow-300 rounded"></div>
              <span>Orion Arm (Our Location)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImprovedGalacticView;

