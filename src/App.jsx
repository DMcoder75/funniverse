import { useState, useRef } from 'react'
import EnhancedRealisticUniverseScene from './components/EnhancedRealisticUniverseScene'
import NavigationPanel from './components/NavigationPanel'
import './App.css'

function App() {
  const [currentLocation, setCurrentLocation] = useState('Solar System')
  const sceneRef = useRef(null)

  const handleNavigateTo = (location) => {
    setCurrentLocation(location)
    if (sceneRef.current) {
      sceneRef.current.focusOnPlanet(location)
    }
  }

  const handleLocationChange = (location) => {
    setCurrentLocation(location)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <EnhancedRealisticUniverseScene 
        ref={sceneRef} 
        onLocationChange={handleLocationChange}
      />
      <NavigationPanel 
        onNavigateTo={handleNavigateTo}
        currentLocation={currentLocation}
      />
      
      {/* Enhanced Info Panel */}
      <div className="absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-md">
        <h2 className="text-lg font-bold mb-2">Enhanced Universe Simulation</h2>
        <p className="text-sm text-gray-300 mb-2">
          Explore our solar system with NASA-accurate planet textures, realistic colors, and transparent labels.
        </p>
        <div className="text-xs text-gray-400 space-y-1">
          <p><strong>Enhanced Features:</strong></p>
          <p>• <strong>Realistic Textures:</strong> High-quality NASA-based planet surface textures</p>
          <p>• <strong>Transparent Labels:</strong> Clean, readable planet names with transparent backgrounds</p>
          <p>• <strong>Enhanced Sun:</strong> Realistic solar surface texture with proper lighting</p>
          <p>• <strong>Major Moons:</strong> Earth's Moon, Mars' Phobos & Deimos, Jupiter's Galilean moons, and more</p>
          <p>• <strong>Improved Graphics:</strong> Enhanced lighting, shadows, and star field</p>
        </div>
        <div className="mt-2 text-xs text-yellow-400">
          <p>Current focus: <strong>{currentLocation}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default App
