import { useState, useRef } from 'react'
import WorkingUniverseScene from './components/WorkingUniverseScene'
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
      <WorkingUniverseScene 
        ref={sceneRef} 
        onLocationChange={handleLocationChange}
      />
      <NavigationPanel 
        onNavigateTo={handleNavigateTo}
        currentLocation={currentLocation}
      />
      
      {/* Enhanced Info Panel */}
      <div className="absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-md">
        <h2 className="text-lg font-bold mb-2">Interactive Universe Simulation</h2>
        <p className="text-sm text-gray-300 mb-2">
          Explore our solar system with realistic planet colors, orbital motion, and full 360-degree camera controls.
        </p>
        <div className="text-xs text-gray-400 space-y-1">
          <p><strong>Features:</strong></p>
          <p>• <strong>Realistic Colors:</strong> NASA-accurate planet appearances</p>
          <p>• <strong>Orbital Motion:</strong> Planets orbit the Sun with realistic speeds</p>
          <p>• <strong>360° Rotation:</strong> Full freedom to rotate camera view</p>
          <p>• <strong>Interactive Controls:</strong> Focus and zoom on any celestial body</p>
        </div>
        <div className="mt-2 text-xs text-yellow-400">
          <p>Current focus: <strong>{currentLocation}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default App
