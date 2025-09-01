import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Camera, RotateCcw } from 'lucide-react';

const PlanetSurfaceViewer = ({ planetName, onBack }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced bright planet surface configurations for better visibility
  const surfaceConfigs = {
    Earth: {
      skyColor: 0x87CEEB,
      groundColor: 0x32CD32,
      terrainHeight: 0.3,
      features: ['mountains', 'valleys', 'water'],
      atmosphere: true,
      description: "Earth's surface features diverse landscapes including mountains, valleys, oceans, and vegetation."
    },
    Mars: {
      skyColor: 0xFF8C69,
      groundColor: 0xFF6347,
      terrainHeight: 0.5,
      features: ['craters', 'canyons', 'dust'],
      atmosphere: false,
      description: "Mars surface is characterized by bright red iron oxide dust, massive canyons, and ancient impact craters."
    },
    Venus: {
      skyColor: 0xFFB347,
      groundColor: 0xFFD700,
      terrainHeight: 0.4,
      features: ['volcanoes', 'lava_plains', 'thick_atmosphere'],
      atmosphere: true,
      description: "Venus surface shows extensive volcanic activity with bright golden lava plains and thick sulfuric acid clouds."
    },
    Mercury: {
      skyColor: 0x000000,
      groundColor: 0xD2B48C,
      terrainHeight: 0.6,
      features: ['craters', 'cliffs', 'no_atmosphere'],
      atmosphere: false,
      description: "Mercury's surface is heavily cratered with steep cliffs and extreme temperature variations."
    },
    Moon: {
      skyColor: 0x000000,
      groundColor: 0xE5E5E5,
      terrainHeight: 0.4,
      features: ['craters', 'maria', 'regolith'],
      atmosphere: false,
      description: "The Moon's surface features ancient impact craters, dark volcanic plains (maria), and bright fine regolith."
    },
    Jupiter: {
      skyColor: 0xFFE4B5,
      groundColor: 0xFFE4B5,
      terrainHeight: 0.2,
      features: ['gas_clouds', 'storms', 'no_solid_surface'],
      atmosphere: true,
      description: "Jupiter has no solid surface - only swirling bright gas clouds and massive storm systems."
    },
    Saturn: {
      skyColor: 0xFFF8DC,
      groundColor: 0xF0E68C,
      terrainHeight: 0.2,
      features: ['gas_clouds', 'rings_view', 'no_solid_surface'],
      atmosphere: true,
      description: "Saturn's gaseous atmosphere shows beautiful bright cloud bands with spectacular ring views."
    },
    Uranus: {
      skyColor: 0x87CEEB,
      groundColor: 0x87CEEB,
      terrainHeight: 0.2,
      features: ['ice_clouds', 'methane_atmosphere', 'no_solid_surface'],
      atmosphere: true,
      description: "Uranus features a bright methane-rich atmosphere creating its distinctive blue-green color."
    },
    Neptune: {
      skyColor: 0x6495ED,
      groundColor: 0x6495ED,
      terrainHeight: 0.2,
      features: ['ice_clouds', 'storms', 'no_solid_surface'],
      atmosphere: true,
      description: "Neptune's dynamic atmosphere shows bright blue storm spots and high-speed winds."
    }
  };

  useEffect(() => {
    if (!mountRef.current || !planetName) return;

    const config = surfaceConfigs[planetName] || surfaceConfigs.Earth;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(config.skyColor);
    sceneRef.current = scene;

    // Camera setup for surface view
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Create terrain based on planet type
    createPlanetTerrain(scene, config);

    // Add atmosphere effect if applicable
    if (config.atmosphere) {
      createAtmosphereEffect(scene, config);
    }

    // Camera controls
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };

    const onWheel = (event) => {
      camera.position.z += event.deltaY * 0.01;
      camera.position.z = Math.max(1, Math.min(20, camera.position.z));
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('wheel', onWheel);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Smooth camera movement
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      
      camera.position.x += (targetX * 5 - camera.position.x) * 0.05;
      camera.position.y += (2 - targetY * 2 - camera.position.y) * 0.05;
      
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
  }, [planetName]);

  const createPlanetTerrain = (scene, config) => {
    const geometry = new THREE.PlaneGeometry(50, 50, 128, 128);
    const vertices = geometry.attributes.position.array;

    // Generate terrain based on planet characteristics
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const z = vertices[i + 2];
      
      // Create varied terrain height
      let height = 0;
      
      if (config.features.includes('mountains')) {
        height += Math.sin(x * 0.1) * Math.cos(z * 0.1) * config.terrainHeight;
      }
      
      if (config.features.includes('craters')) {
        // Add crater-like depressions
        const craterDistance = Math.sqrt(x * x + z * z);
        if (craterDistance < 5) {
          height -= (5 - craterDistance) * 0.2;
        }
      }
      
      if (config.features.includes('valleys')) {
        height += Math.sin(x * 0.05) * config.terrainHeight * 0.5;
      }
      
      // Add random noise for surface detail
      height += (Math.random() - 0.5) * 0.1;
      
      vertices[i + 1] = height;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    const material = new THREE.MeshLambertMaterial({ 
      color: config.groundColor,
      wireframe: false
    });

    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI / 2;
    terrain.receiveShadow = true;
    scene.add(terrain);

    // Add surface details based on planet features
    addSurfaceDetails(scene, config);
  };

  const addSurfaceDetails = (scene, config) => {
    // Add rocks and surface features
    for (let i = 0; i < 20; i++) {
      const rockGeometry = new THREE.SphereGeometry(
        Math.random() * 0.3 + 0.1, 
        8, 
        6
      );
      const rockMaterial = new THREE.MeshLambertMaterial({ 
        color: new THREE.Color(config.groundColor).multiplyScalar(0.7)
      });
      const rock = new THREE.Mesh(rockGeometry, rockMaterial);
      
      rock.position.x = (Math.random() - 0.5) * 40;
      rock.position.z = (Math.random() - 0.5) * 40;
      rock.position.y = Math.random() * 0.5;
      rock.castShadow = true;
      
      scene.add(rock);
    }

    // Add planet-specific features
    if (config.features.includes('water')) {
      // Add water bodies for Earth
      const waterGeometry = new THREE.PlaneGeometry(10, 10);
      const waterMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x006994,
        transparent: true,
        opacity: 0.8
      });
      const water = new THREE.Mesh(waterGeometry, waterMaterial);
      water.rotation.x = -Math.PI / 2;
      water.position.y = 0.1;
      water.position.x = 15;
      scene.add(water);
    }

    if (config.features.includes('dust')) {
      // Add dust particles for Mars
      const dustGeometry = new THREE.BufferGeometry();
      const dustCount = 1000;
      const dustPositions = new Float32Array(dustCount * 3);
      
      for (let i = 0; i < dustCount; i++) {
        dustPositions[i * 3] = (Math.random() - 0.5) * 100;
        dustPositions[i * 3 + 1] = Math.random() * 10;
        dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      }
      
      dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
      const dustMaterial = new THREE.PointsMaterial({ 
        color: config.groundColor,
        size: 0.1,
        transparent: true,
        opacity: 0.6
      });
      const dust = new THREE.Points(dustGeometry, dustMaterial);
      scene.add(dust);
    }
  };

  const createAtmosphereEffect = (scene, config) => {
    // Create atmospheric haze effect
    const atmosphereGeometry = new THREE.SphereGeometry(30, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: config.skyColor,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);
  };

  const resetView = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 2, 5);
    }
  };

  const config = surfaceConfigs[planetName] || surfaceConfigs.Earth;

  return (
    <div className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="text-white text-xl">Loading {planetName} surface...</div>
        </div>
      )}
      
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Surface Info Panel */}
      <Card className="absolute top-4 left-4 w-80 bg-black/80 text-white border-gray-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Camera className="w-5 h-5" />
            {planetName} Surface View
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-gray-300">
            {config.description}
          </p>
          <div className="text-xs text-gray-400">
            <p><strong>Features:</strong> {config.features.join(', ')}</p>
            <p><strong>Atmosphere:</strong> {config.atmosphere ? 'Present' : 'None'}</p>
          </div>
        </CardContent>
      </Card>

      {/* Controls Panel */}
      <Card className="absolute bottom-4 right-4 bg-black/80 text-white border-gray-600">
        <CardContent className="p-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white"
              onClick={onBack}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Space
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
          <div className="text-xs text-gray-400 mt-2">
            <p>Mouse: Look around • Scroll: Zoom</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanetSurfaceViewer;

