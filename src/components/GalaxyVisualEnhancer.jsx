import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const GalaxyVisualEnhancer = ({ currentLocation, isVisible }) => {
  const [imageOpacity, setImageOpacity] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);

  // Mapping of galaxy regions to their corresponding images
  const regionImages = {
    'Orion Arm': '/images/orion-arm.png',
    'Galactic Center': '/images/galactic-center.png',
    'Perseus Arm': '/images/perseus-arm.png',
    'Sagittarius Arm': '/images/sagittarius-arm.png',
    'Galactic Halo': '/images/galactic-halo.png',
    'Orion Nebula': '/images/orion-nebula.png',
    'Crab Nebula': '/images/crab-nebula.png',
    'Andromeda Approach': '/images/andromeda-galaxy.png',
    'Scutum-Centaurus Arm': '/images/stellar-nursery.png'
  };

  // Region descriptions for enhanced information
  const regionDescriptions = {
    'Orion Arm': {
      title: 'Orion Arm - Our Galactic Home',
      description: 'Also known as the Orion Spur, this is our local spiral arm where the Solar System resides. It contains young, hot blue stars and active star-forming regions.',
      facts: [
        'Contains our Solar System',
        'About 10,000 light-years long',
        '26,000 light-years from galactic center',
        'Rich in stellar nurseries'
      ]
    },
    'Galactic Center': {
      title: 'Galactic Center - Sagittarius A*',
      description: 'The supermassive black hole at the heart of our galaxy, surrounded by dense stellar populations and intense gravitational effects.',
      facts: [
        'Contains Sagittarius A* black hole',
        '4 million times mass of our Sun',
        'Extremely dense stellar region',
        'Source of powerful radio emissions'
      ]
    },
    'Perseus Arm': {
      title: 'Perseus Arm - Major Spiral Structure',
      description: 'One of the major spiral arms of the Milky Way, containing massive star-forming regions and bright stellar associations.',
      facts: [
        'Major spiral arm of the galaxy',
        'Contains many star clusters',
        'Rich in molecular clouds',
        'About 6,500 light-years from center'
      ]
    },
    'Sagittarius Arm': {
      title: 'Sagittarius Arm - Inner Spiral',
      description: 'An inner spiral arm with dense stellar populations and active star formation regions.',
      facts: [
        'Inner spiral arm structure',
        'Dense stellar populations',
        'Active star formation',
        'Contains bright nebulae'
      ]
    },
    'Galactic Halo': {
      title: 'Galactic Halo - Ancient Realm',
      description: 'The sparse outer region containing ancient stars, globular clusters, and dark matter.',
      facts: [
        'Contains oldest stars in galaxy',
        'Sparse stellar density',
        'Globular clusters scattered throughout',
        'Dominated by dark matter'
      ]
    },
    'Orion Nebula': {
      title: 'Orion Nebula - Stellar Nursery',
      description: 'One of the brightest nebulae visible to the naked eye, a stellar nursery where new stars are actively forming.',
      facts: [
        'Closest star-forming region to Earth',
        '1,344 light-years away',
        'Contains the Trapezium Cluster',
        'Visible to the naked eye'
      ]
    },
    'Crab Nebula': {
      title: 'Crab Nebula - Supernova Remnant',
      description: 'The remnant of a supernova explosion observed by Chinese astronomers in 1054 AD, containing a rapidly spinning pulsar.',
      facts: [
        'Supernova remnant from 1054 AD',
        'Contains a pulsar spinning 30 times/second',
        'Expanding at 1,500 km/s',
        'Powerful source of radiation'
      ]
    },
    'Andromeda Approach': {
      title: 'Andromeda Galaxy - Our Neighbor',
      description: 'The nearest major galaxy to the Milky Way, approaching us and destined to merge with our galaxy in about 4.5 billion years.',
      facts: [
        '2.5 million light-years away',
        'Approaching at 250,000 mph',
        'Will merge with Milky Way',
        'Contains 1 trillion stars'
      ]
    },
    'Scutum-Centaurus Arm': {
      title: 'Scutum-Centaurus Arm',
      description: 'A major spiral arm on the far side of the galaxy, rich in star formation and stellar associations.',
      facts: [
        'Major spiral arm structure',
        'Far side of the galaxy',
        'Rich in young stars',
        'Active star formation regions'
      ]
    }
  };

  useEffect(() => {
    if (isVisible && regionImages[currentLocation]) {
      setCurrentImage(regionImages[currentLocation]);
      setImageOpacity(0);
      
      // Fade in the new image
      const timer = setTimeout(() => {
        setImageOpacity(0.3);
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      // Fade out
      setImageOpacity(0);
      const timer = setTimeout(() => {
        setCurrentImage(null);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [currentLocation, isVisible]);

  const currentRegion = regionDescriptions[currentLocation];

  if (!isVisible || !currentImage) return null;

  return (
    <>
      {/* Background Image Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: imageOpacity,
          filter: 'blur(1px) brightness(0.4)'
        }}
      />
      
      {/* Enhanced Information Panel */}
      {currentRegion && (
        <Card className="absolute bottom-4 left-4 w-96 bg-black/90 text-white border-gray-600 backdrop-blur-md">
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-lg font-bold">★</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-300">{currentRegion.title}</h3>
                <p className="text-sm text-gray-300">Current Location</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-200 leading-relaxed">
              {currentRegion.description}
            </p>
            
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-yellow-300">Key Facts:</h4>
              <ul className="space-y-1">
                {currentRegion.facts.map((fact, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-2 border-t border-gray-700">
              <p className="text-xs text-gray-400">
                Use navigation controls to explore other regions of our galaxy
              </p>
            </div>
          </div>
        </Card>
      )}
      
      {/* Particle Effects Overlay */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        
        {/* Animated stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Cosmic dust effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
        </div>
      </div>
    </>
  );
};

export default GalaxyVisualEnhancer;

