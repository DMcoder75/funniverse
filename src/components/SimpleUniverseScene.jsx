import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SimpleUniverseScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    camera.position.set(0, 0, 50);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add some basic lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create a simple Sun
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
    const earthMaterial = new THREE.MeshLambertMaterial({ color: 0x6b93d6 });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(20, 0, 0);
    scene.add(earth);

    // Create Mars
    const marsGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const marsMaterial = new THREE.MeshLambertMaterial({ color: 0xcd5c5c });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    mars.position.set(30, 0, 0);
    scene.add(mars);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      // Rotate planets
      earth.rotation.y += 0.01;
      mars.rotation.y += 0.01;
      
      // Orbit Earth around Sun
      earth.position.x = 20 * Math.cos(Date.now() * 0.001);
      earth.position.z = 20 * Math.sin(Date.now() * 0.001);
      
      // Orbit Mars around Sun
      mars.position.x = 30 * Math.cos(Date.now() * 0.0005);
      mars.position.z = 30 * Math.sin(Date.now() * 0.0005);

      renderer.render(scene, camera);
    };

    animate();

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
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen bg-black" />;
};

export default SimpleUniverseScene;

