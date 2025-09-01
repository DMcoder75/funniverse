import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Zap, Globe, Rocket, ArrowLeft, Earth, Star, Sparkles, Circle, Target, Compass } from 'lucide-react';

const NavigationPanel = ({ onNavigateTo, currentLocation, viewMode, onBackToUniverse }) => {
  const locations = [
    { name: 'Earth', icon: Globe, color: 'text-blue-500' },
    { name: 'Moon', icon: Zap, color: 'text-gray-400' },
    { name: 'Mars', icon: Rocket, color: 'text-red-500' },
    { name: 'Venus', icon: Zap, color: 'text-yellow-500' },
    { name: 'Mercury', icon: Zap, color: 'text-orange-500' },
    { name: 'Jupiter', icon: Zap, color: 'text-orange-300' },
    { name: 'Saturn', icon: Zap, color: 'text-yellow-300' },
    { name: 'Uranus', icon: Zap, color: 'text-cyan-400' },
    { name: 'Neptune', icon: Zap, color: 'text-blue-600' },
    { name: 'Sun', icon: Zap, color: 'text-yellow-400' }
  ];

  const galaxyLocations = [
    { name: 'Galactic Center', icon: Target, color: 'text-yellow-500' },
    { name: 'Perseus Arm', icon: Compass, color: 'text-blue-400' },
    { name: 'Sagittarius Arm', icon: Compass, color: 'text-purple-400' },
    { name: 'Orion Arm', icon: Compass, color: 'text-green-400' },
    { name: 'Outer Rim', icon: Circle, color: 'text-cyan-400' },
    { name: 'Galactic Halo', icon: Sparkles, color: 'text-pink-400' }
  ];

  return (
    <Card className="absolute top-4 right-4 w-64 bg-black/80 text-white border-gray-600">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Home className="w-5 h-5" />
          Navigation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-sm text-gray-300 mb-3">
          Current: <span className="text-white font-semibold">{currentLocation}</span>
        </div>
        
        {viewMode === 'earth' || viewMode === 'galaxy' ? (
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white"
              onClick={onBackToUniverse}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Universe
            </Button>
            
            {viewMode === 'galaxy' && (
              <div className="space-y-2">
                <div className="text-xs text-gray-300 font-semibold">Galaxy Regions:</div>
                <div className="grid grid-cols-2 gap-2">
                  {galaxyLocations.map((location) => {
                    const IconComponent = location.icon;
                    return (
                      <Button
                        key={location.name}
                        variant="outline"
                        size="sm"
                        className="justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white"
                        onClick={() => onNavigateTo(location.name)}
                      >
                        <IconComponent className={`w-4 h-4 ${location.color}`} />
                        <span className="text-xs">{location.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
            
            <div className="text-xs text-gray-400 p-2 bg-gray-800/30 rounded">
              <p><strong>{viewMode === 'earth' ? 'Earth View' : 'Galaxy View'} Controls:</strong></p>
              <p>• Mouse: Rotate view</p>
              <p>• Scroll: Zoom in/out</p>
              {viewMode === 'earth' && <p>• Zoom from space to surface</p>}
              {viewMode === 'galaxy' && <p>• Explore galactic structures</p>}
              {viewMode === 'galaxy' && <p>• Buttons: Navigate to regions</p>}
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 bg-blue-800/50 border-blue-600 hover:bg-blue-700/50 text-white"
              onClick={() => onNavigateTo('Earth View')}
            >
              <Earth className="w-4 h-4 text-blue-400" />
              Immersive Earth View
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 bg-purple-800/50 border-purple-600 hover:bg-purple-700/50 text-white"
              onClick={() => onNavigateTo('Galaxy View')}
            >
              <Star className="w-4 h-4 text-purple-400" />
              Enhanced Galaxy View
            </Button>
            
            <div className="grid grid-cols-2 gap-2">
              {locations.map((location) => {
                const IconComponent = location.icon;
                return (
                  <Button
                    key={location.name}
                    variant="outline"
                    size="sm"
                    className="justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white"
                    onClick={() => onNavigateTo(location.name)}
                  >
                    <IconComponent className={`w-4 h-4 ${location.color}`} />
                    {location.name}
                  </Button>
                );
              })}
            </div>
            
            <div className="text-xs text-gray-400 mt-4 p-2 bg-gray-800/30 rounded">
              <p><strong>Controls:</strong></p>
              <p>• Mouse: Rotate view</p>
              <p>• Scroll: Zoom in/out</p>
              <p>• Buttons: Quick travel</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NavigationPanel;

