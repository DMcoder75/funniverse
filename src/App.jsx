import { useState, useRef } from 'react'
import FullUniverseScene from './components/FullUniverseScene'
import './App.css'

function App() {
  const [currentLocation, setCurrentLocation] = useState('Solar System')
  const [viewMode, setViewMode] = useState('orbit')
  const sceneRef = useRef(null)

  const handleLocationChange = (location) => {
    setCurrentLocation(location)
  }

  const handlePlanetNavigation = (planetName) => {
    if (sceneRef.current) {
      sceneRef.current.focusOnPlanet(planetName, viewMode)
    }
  }

  const handleViewModeChange = (mode) => {
    setViewMode(mode)
    if (sceneRef.current) {
      const currentPlanet = sceneRef.current.getCurrentPlanet()
      if (currentPlanet && currentPlanet !== 'Solar System') {
        sceneRef.current.focusOnPlanet(currentPlanet, mode)
      }
    }
  }

  const planets = [
    { name: 'Solar System', icon: '🌌', color: 'bg-purple-600' },
    { name: 'Sun', icon: '☀️', color: 'bg-yellow-500' },
    { name: 'Mercury', icon: '☿️', color: 'bg-gray-500' },
    { name: 'Venus', icon: '♀️', color: 'bg-orange-400' },
    { name: 'Earth', icon: '🌍', color: 'bg-blue-500' },
    { name: 'Mars', icon: '♂️', color: 'bg-red-500' },
    { name: 'Jupiter', icon: '♃', color: 'bg-yellow-600' },
    { name: 'Saturn', icon: '♄', color: 'bg-yellow-300' },
    { name: 'Uranus', icon: '♅', color: 'bg-cyan-400' },
    { name: 'Neptune', icon: '♆', color: 'bg-blue-600' }
  ]

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <FullUniverseScene 
        ref={sceneRef} 
        onLocationChange={handleLocationChange}
      />
      
      {/* Navigation Panel */}
      <div className="absolute top-4 right-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-sm">
        <h3 className="text-lg font-bold mb-3">🚀 Universe Navigation</h3>
        
        {/* View Mode Toggle */}
        <div className="mb-4">
          <p className="text-sm text-gray-300 mb-2">View Mode:</p>
          <div className="flex gap-2">
            <button 
              onClick={() => handleViewModeChange('orbit')}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                viewMode === 'orbit' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-600 hover:bg-gray-500 text-gray-200'
              }`}
            >
              🛰️ Orbit
            </button>
            <button 
              onClick={() => handleViewModeChange('surface')}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                viewMode === 'surface' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-600 hover:bg-gray-500 text-gray-200'
              }`}
            >
              🏔️ Surface
            </button>
          </div>
        </div>

        {/* Planet Navigation */}
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {planets.map(planet => (
            <button 
              key={planet.name}
              onClick={() => handlePlanetNavigation(planet.name)}
              className={`w-full px-3 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2 ${
                currentLocation.includes(planet.name)
                  ? `${planet.color} text-white` 
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
              }`}
            >
              <span className="text-lg">{planet.icon}</span>
              <span>{planet.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-3 text-xs text-gray-400">
          <p><strong>Controls:</strong></p>
          <p>• Mouse drag: Rotate view 360°</p>
          <p>• Mouse wheel: Zoom in/out</p>
          <p>• Select planet + view mode</p>
        </div>
      </div>
      
      {/* Enhanced Info Panel */}
      <div className="absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-md">
        <h2 className="text-lg font-bold mb-2">🌌 Interactive Universe Simulation</h2>
        <p className="text-sm text-gray-300 mb-2">
          Explore our complete solar system with realistic planet colors, orbital motion, and surface exploration capabilities for every celestial body.
        </p>
        <div className="text-xs text-gray-400 space-y-1">
          <p><strong>Features:</strong></p>
          <p>• <strong>All Planets:</strong> Complete solar system with Sun and 8 planets</p>
          <p>• <strong>Realistic Colors:</strong> NASA-accurate planet appearances</p>
          <p>• <strong>Orbital Motion:</strong> Planets orbit the Sun with realistic motion</p>
          <p>• <strong>Surface Exploration:</strong> Get close to any planet's surface</p>
          <p>• <strong>360° Controls:</strong> Full freedom to explore from any angle</p>
          <p>• <strong>Special Features:</strong> Saturn's rings, Earth's atmosphere</p>
        </div>
        <div className="mt-2 text-xs text-yellow-400">
          <p>Current location: <strong>{currentLocation}</strong></p>
          <p>View mode: <strong>{viewMode === 'orbit' ? 'Orbit View' : 'Surface Exploration'}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default App
