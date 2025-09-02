import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Target, 
  Compass, 
  Circle, 
  Sparkles, 
  Star, 
  Zap, 
  Navigation,
  ArrowLeft,
  Moon
} from 'lucide-react';

const EnhancedGalaxyNavigation = ({ onNavigateTo, currentLocation, onBackToUniverse }) => {
  const galaxyRegions = [
    {
      category: "Major Spiral Arms",
      regions: [
        { 
          name: 'Perseus Arm', 
          icon: Compass, 
          color: 'text-blue-400',
          description: 'Major spiral arm containing many star-forming regions',
          distance: '6,500 ly from center'
        },
        { 
          name: 'Sagittarius Arm', 
          icon: Compass, 
          color: 'text-purple-400',
          description: 'Inner spiral arm with dense stellar populations',
          distance: '4,000 ly from center'
        },
        { 
          name: 'Orion Arm', 
          icon: Star, 
          color: 'text-yellow-400',
          description: 'Our local spiral arm - Solar System location',
          distance: '26,000 ly from center',
          isHome: true
        },
        { 
          name: 'Scutum-Centaurus Arm', 
          icon: Compass, 
          color: 'text-green-400',
          description: 'Major spiral arm on the far side',
          distance: '3,000 ly from center'
        }
      ]
    },
    {
      category: "Central Regions",
      regions: [
        { 
          name: 'Galactic Center', 
          icon: Target, 
          color: 'text-red-500',
          description: 'Sagittarius A* - Supermassive black hole',
          distance: '0 ly from center'
        },
        { 
          name: 'Central Bar', 
          icon: Navigation, 
          color: 'text-orange-400',
          description: 'Central stellar bar structure',
          distance: '1,500 ly from center'
        },
        { 
          name: 'Nuclear Bulge', 
          icon: Sun, 
          color: 'text-yellow-500',
          description: 'Dense central stellar region',
          distance: '500 ly from center'
        }
      ]
    },
    {
      category: "Outer Regions",
      regions: [
        { 
          name: 'Outer Rim', 
          icon: Circle, 
          color: 'text-cyan-400',
          description: 'Sparse outer edge of the galaxy',
          distance: '50,000 ly from center'
        },
        { 
          name: 'Galactic Halo', 
          icon: Sparkles, 
          color: 'text-pink-400',
          description: 'Dark matter halo surrounding galaxy',
          distance: '100,000 ly from center'
        }
      ]
    },
    {
      category: "Notable Features",
      regions: [
        { 
          name: 'Orion Nebula', 
          icon: Telescope, 
          color: 'text-purple-300',
          description: 'Stellar nursery in Orion Arm',
          distance: '1,344 ly from Earth'
        },
        { 
          name: 'Crab Nebula', 
          icon: Zap, 
          color: 'text-red-300',
          description: 'Supernova remnant with pulsar',
          distance: '6,500 ly from Earth'
        },
        { 
          name: 'Andromeda Approach', 
          icon: Orbit, 
          color: 'text-blue-300',
          description: 'View towards approaching Andromeda Galaxy',
          distance: '2.5 million ly'
        },
        { 
          name: 'Local Group', 
          icon: MapPin, 
          color: 'text-green-300',
          description: 'Our galaxy cluster neighborhood',
          distance: '10 million ly diameter'
        }
      ]
    }
  ];

  const getButtonStyle = (region) => {
    const baseStyle = "justify-start gap-2 text-left h-auto py-2 px-3 bg-gray-900/70 border-gray-600 hover:bg-gray-800/70 text-white transition-all duration-200";
    
    if (region.isHome) {
      return `${baseStyle} border-yellow-500/50 bg-yellow-900/20 hover:bg-yellow-800/30`;
    }
    
    if (currentLocation === region.name) {
      return `${baseStyle} border-blue-500/50 bg-blue-900/30 hover:bg-blue-800/40`;
    }
    
    return baseStyle;
  };

  return (
    <Card className="absolute top-4 right-4 w-80 max-h-[90vh] overflow-y-auto bg-black/85 text-white border-gray-600 backdrop-blur-sm z-20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Navigation className="w-5 h-5 text-blue-400" />
          Galaxy Navigation
        </CardTitle>
        <div className="text-sm text-gray-300">
          Current: <span className="text-white font-semibold">{currentLocation}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Back to Universe Button */}
        {onBackToUniverse && (
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white"
            onClick={onBackToUniverse}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Universe
          </Button>
        )}
        
        {galaxyRegions.map((category) => (
          <div key={category.category} className="space-y-2">
            <div className="text-xs font-semibold text-gray-300 uppercase tracking-wide border-b border-gray-700 pb-1">
              {category.category}
            </div>
            <div className="space-y-1">
              {category.regions.map((region) => {
                const IconComponent = region.icon;
                return (
                  <Button
                    key={region.name}
                    variant="outline"
                    size="sm"
                    className={`w-full justify-start gap-2 text-xs transition-all duration-200 ${getButtonStyle(region)}`}
                    onClick={() => {
                      console.log('Galaxy navigation button clicked:', region.name);
                      if (onNavigateTo) {
                        onNavigateTo(region.name);
                      }
                    }}
                  >
                    <div className="flex items-start gap-2 w-full">
                      <IconComponent className={`w-4 h-4 ${region.color} mt-0.5 flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{region.name}</div>
                        <div className="text-xs text-gray-400 line-clamp-2">
                          {region.description}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {region.distance}
                        </div>
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
        
        <div className="text-xs text-gray-400 p-3 bg-gray-800/30 rounded border border-gray-700">
          <p><strong>Enhanced Galaxy Controls:</strong></p>
          <p>• Mouse: Rotate and explore</p>
          <p>• Scroll: Zoom in/out</p>
          <p>• Buttons: Navigate to regions</p>
          <p>• <span className="text-yellow-400">★</span> Home: Our Solar System</p>
          <p>• <span className="text-blue-400">●</span> Current location</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedGalaxyNavigation;

