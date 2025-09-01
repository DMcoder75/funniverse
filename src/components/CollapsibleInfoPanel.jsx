import { useState } from 'react';
import { ChevronRight, ChevronDown, Info } from 'lucide-react';

const CollapsibleInfoPanel = ({ viewMode, currentLocation }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getViewData = () => {
    switch (viewMode) {
      case 'universe':
        return {
          title: 'Solar System',
          data: {
            'Current Focus': currentLocation,
            'Scale': '~40 AU diameter',
            'Objects': '8 planets + moons',
            'Simulation': 'Real-time orbital mechanics',
            'Textures': 'NASA-based imagery'
          }
        };
      case 'earth':
        return {
          title: 'Earth View',
          data: {
            'Current Altitude': currentLocation,
            'Radius': '6,371 km',
            'Surface Area': '510.1 million km²',
            'Atmosphere': 'Realistic lighting',
            'Zoom Range': 'Space to surface'
          }
        };
      case 'galaxy':
        return {
          title: 'Milky Way Galaxy',
          data: {
            'Current View': currentLocation,
            'Diameter': '~100,000 light-years',
            'Stars': '100,000+ simulated',
            'Structure': '4-armed spiral',
            'Core Type': 'Supermassive black hole'
          }
        };
      default:
        return { title: 'Unknown', data: {} };
    }
  };

  const viewData = getViewData();

  return (
    <div className="absolute bottom-4 left-4 z-50">
      {!isExpanded ? (
        // Collapsed state - small dot
        <button
          onClick={() => setIsExpanded(true)}
          className="w-8 h-8 bg-black/80 hover:bg-black/90 text-white rounded-full border border-gray-600 flex items-center justify-center transition-all duration-200 hover:scale-110"
          title="Show view information"
        >
          <Info className="w-4 h-4" />
        </button>
      ) : (
        // Expanded state - key-value pairs
        <div className="bg-black/80 text-white p-3 rounded-lg border border-gray-600 min-w-64 max-w-80">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-yellow-400">{viewData.title}</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-white transition-colors"
              title="Collapse"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-1">
            {Object.entries(viewData.data).map(([key, value]) => (
              <div key={key} className="flex justify-between text-xs">
                <span className="text-gray-300 font-medium">{key}:</span>
                <span className="text-white ml-2 text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleInfoPanel;

