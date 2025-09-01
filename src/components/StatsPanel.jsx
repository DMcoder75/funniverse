import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

const StatsPanel = ({ selectedPlanet, viewMode }) => {
  const planetData = {
    Earth: {
      diameter: '12,742 km',
      mass: '5.97 × 10²⁴ kg',
      distance: '149.6 million km',
      day: '24 hours',
      year: '365.25 days',
      moons: '1 (Moon)',
      atmosphere: 'N₂ (78%), O₂ (21%)',
      temperature: '-89°C to 58°C'
    },
    Mars: {
      diameter: '6,779 km',
      mass: '6.39 × 10²³ kg',
      distance: '227.9 million km',
      day: '24.6 hours',
      year: '687 days',
      moons: '2 (Phobos, Deimos)',
      atmosphere: 'CO₂ (95%), N₂ (3%)',
      temperature: '-87°C to -5°C'
    },
    Venus: {
      diameter: '12,104 km',
      mass: '4.87 × 10²⁴ kg',
      distance: '108.2 million km',
      day: '243 days',
      year: '225 days',
      moons: '0',
      atmosphere: 'CO₂ (96%), N₂ (3%)',
      temperature: '462°C (surface)'
    },
    Mercury: {
      diameter: '4,879 km',
      mass: '3.30 × 10²³ kg',
      distance: '57.9 million km',
      day: '59 days',
      year: '88 days',
      moons: '0',
      atmosphere: 'Very thin',
      temperature: '-173°C to 427°C'
    },
    Jupiter: {
      diameter: '139,820 km',
      mass: '1.90 × 10²⁷ kg',
      distance: '778.5 million km',
      day: '9.9 hours',
      year: '12 years',
      moons: '95+ (Io, Europa, Ganymede, Callisto)',
      atmosphere: 'H₂ (89%), He (10%)',
      temperature: '-108°C (cloud tops)'
    },
    Saturn: {
      diameter: '116,460 km',
      mass: '5.68 × 10²⁶ kg',
      distance: '1.43 billion km',
      day: '10.7 hours',
      year: '29 years',
      moons: '146+ (Titan, Enceladus)',
      atmosphere: 'H₂ (96%), He (3%)',
      temperature: '-139°C (cloud tops)'
    },
    Uranus: {
      diameter: '50,724 km',
      mass: '8.68 × 10²⁵ kg',
      distance: '2.87 billion km',
      day: '17.2 hours',
      year: '84 years',
      moons: '27+ (Miranda, Ariel)',
      atmosphere: 'H₂ (83%), He (15%), CH₄ (2%)',
      temperature: '-197°C'
    },
    Neptune: {
      diameter: '49,244 km',
      mass: '1.02 × 10²⁶ kg',
      distance: '4.50 billion km',
      day: '16.1 hours',
      year: '165 years',
      moons: '16+ (Triton)',
      atmosphere: 'H₂ (80%), He (19%), CH₄ (1%)',
      temperature: '-201°C'
    },
    Sun: {
      diameter: '1.39 million km',
      mass: '1.99 × 10³⁰ kg',
      distance: '0 km (center)',
      day: '25 days (equator)',
      year: 'N/A',
      moons: '8 planets',
      atmosphere: 'H (73%), He (25%)',
      temperature: '5,778K (surface)'
    },
    Moon: {
      diameter: '3,474 km',
      mass: '7.35 × 10²² kg',
      distance: '384,400 km (from Earth)',
      day: '27.3 days',
      year: '27.3 days',
      moons: '0',
      atmosphere: 'Very thin',
      temperature: '-233°C to 123°C'
    }
  };

  const galaxyData = {
    name: 'Milky Way Galaxy',
    type: 'Barred Spiral Galaxy',
    diameter: '~100,000 light-years',
    thickness: '~1,000 light-years',
    stars: '200-400 billion',
    age: '~13.6 billion years',
    mass: '~1.5 × 10¹² solar masses',
    location: 'Local Group'
  };

  if (viewMode === 'galactic') {
    return (
      <Card className="absolute top-4 left-4 w-64 bg-black/80 text-white border-gray-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Info className="w-4 h-4" />
            Galaxy Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-xs space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-400">Type:</span>
              <span>{galaxyData.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Diameter:</span>
              <span>{galaxyData.diameter}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Stars:</span>
              <span>{galaxyData.stars}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Age:</span>
              <span>{galaxyData.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Mass:</span>
              <span>{galaxyData.mass}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!selectedPlanet || !planetData[selectedPlanet]) {
    return null;
  }

  const data = planetData[selectedPlanet];

  return (
    <Card className="absolute top-4 left-4 w-64 bg-black/80 text-white border-gray-600">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <Info className="w-4 h-4" />
          {selectedPlanet} Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-xs space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-400">Diameter:</span>
            <span>{data.diameter}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Mass:</span>
            <span>{data.mass}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Distance:</span>
            <span>{data.distance}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Day:</span>
            <span>{data.day}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Year:</span>
            <span>{data.year}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Moons:</span>
            <span>{data.moons}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Atmosphere:</span>
            <span className="text-right">{data.atmosphere}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Temperature:</span>
            <span className="text-right">{data.temperature}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsPanel;

