import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Zap, Globe, Rocket } from 'lucide-react';

const NavigationPanel = ({ onNavigateTo, currentLocation }) => {
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
      </CardContent>
    </Card>
  );
};

export default NavigationPanel;

