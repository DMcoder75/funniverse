import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Zap, Globe, Rocket, Eye, Mountain, Sparkles } from 'lucide-react';

const NavigationPanel = ({ onNavigateTo, onViewSurface, onViewGalaxy, currentLocation }) => {
  const locations = [
    { name: 'Earth', icon: Globe, color: 'text-blue-500', hasSurface: true },
    { name: 'Moon', icon: Zap, color: 'text-gray-400', hasSurface: true },
    { name: 'Mars', icon: Rocket, color: 'text-red-500', hasSurface: true },
    { name: 'Venus', icon: Zap, color: 'text-yellow-500', hasSurface: true },
    { name: 'Mercury', icon: Zap, color: 'text-orange-500', hasSurface: true },
    { name: 'Jupiter', icon: Zap, color: 'text-orange-300', hasSurface: true },
    { name: 'Saturn', icon: Zap, color: 'text-yellow-300', hasSurface: true },
    { name: 'Uranus', icon: Zap, color: 'text-cyan-400', hasSurface: true },
    { name: 'Neptune', icon: Zap, color: 'text-blue-600', hasSurface: true },
    { name: 'Sun', icon: Zap, color: 'text-yellow-400', hasSurface: false }
  ];

  return (
    <Card className="absolute top-4 right-4 w-72 bg-black/80 text-white border-gray-600">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Home className="w-5 h-5" />
          Navigation & Surface Explorer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-sm text-gray-300 mb-3">
          Current: <span className="text-white font-semibold">{currentLocation}</span>
        </div>
        
        <div className="space-y-2">
          {locations.map((location) => {
            const IconComponent = location.icon;
            return (
              <div key={location.name} className="flex gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 justify-start gap-2 bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 text-white"
                  onClick={() => onNavigateTo(location.name)}
                >
                  <IconComponent className={`w-4 h-4 ${location.color}`} />
                  {location.name}
                </Button>
                {location.hasSurface && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-2 bg-blue-800/50 border-blue-600 hover:bg-blue-700/50 text-white"
                    onClick={() => onViewSurface(location.name)}
                    title={`View ${location.name} surface`}
                  >
                    <Mountain className="w-4 h-4" />
                  </Button>
                )}
              </div>
            );
          })}
          
          {/* Galactic View Button */}
          <div className="pt-2 border-t border-gray-600">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 bg-purple-800/50 border-purple-600 hover:bg-purple-700/50 text-white"
              onClick={onViewGalaxy}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              Milky Way Galaxy View
            </Button>
          </div>
        </div>
        
        <div className="text-xs text-gray-400 mt-4 p-2 bg-gray-800/30 rounded">
          <p><strong>Controls:</strong></p>
          <p>• <strong>Planet buttons:</strong> Navigate to planet</p>
          <p>• <strong>🏔️ Surface buttons:</strong> Explore planet surface</p>
          <p>• <strong>🌌 Galaxy button:</strong> View Milky Way galaxy</p>
          <p>• <strong>Mouse:</strong> Rotate view</p>
          <p>• <strong>Scroll:</strong> Zoom in/out</p>
        </div>
        
        <div className="text-xs text-blue-400 mt-2 p-2 bg-blue-900/20 rounded border border-blue-800">
          <p><strong>🌍 Multi-Scale Explorer:</strong></p>
          <p>Journey from planetary surfaces to the galactic scale - experience the universe from microscopic to cosmic perspectives with realistic NASA-based visuals.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NavigationPanel;

