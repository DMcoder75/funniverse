import { useState, useRef } from 'react'
import RealisticEarthScene from './components/RealisticEarthScene'
import './App.css'

function App() {
  const [currentLocation, setCurrentLocation] = useState('Earth Orbit')
  const sceneRef = useRef(null)

  const handleLocationChange = (location) => {
    setCurrentLocation(location)
  }

  const handleSurfaceExploration = () => {
    if (sceneRef.current) {
      sceneRef.current.focusOnEarth('surface')
    }
  }

  const handleOrbitView = () => {
    if (sceneRef.current) {
      sceneRef.current.focusOnEarth('orbit')
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <RealisticEarthScene 
        ref={sceneRef} 
        onLocationChange={handleLocationChange}
      />
      
      {/* Enhanced Controls Panel */}
      <div className="absolute top-4 right-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600">
        <h3 className="text-lg font-bold mb-3">Earth Exploration</h3>
        <div className="space-y-2">
          <button 
            onClick={handleOrbitView}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition-colors"
          >
            🌍 Orbit View
          </button>
          <button 
            onClick={handleSurfaceExploration}
            className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm font-medium transition-colors"
          >
            🏔️ Surface Exploration
          </button>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          <p><strong>Controls:</strong></p>
          <p>• Mouse drag: Rotate view 360°</p>
          <p>• Mouse wheel: Zoom in/out</p>
          <p>• Get close to see surface detail</p>
        </div>
      </div>
      
      {/* Enhanced Info Panel */}
      <div className="absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-md">
        <h2 className="text-lg font-bold mb-2">Realistic Earth Simulation</h2>
        <p className="text-sm text-gray-300 mb-2">
          Experience Earth with high-resolution NASA textures, realistic lighting, atmospheric effects, and surface exploration capabilities.
        </p>
        <div className="text-xs text-gray-400 space-y-1">
          <p><strong>Features:</strong></p>
          <p>• <strong>NASA Textures:</strong> High-resolution Blue Marble imagery</p>
          <p>• <strong>Surface Detail:</strong> Normal mapping for realistic terrain</p>
          <p>• <strong>Atmosphere:</strong> Realistic atmospheric glow effect</p>
          <p>• <strong>Cloud Layer:</strong> Animated cloud coverage</p>
          <p>• <strong>Day/Night:</strong> Realistic lighting and shadows</p>
          <p>• <strong>Surface Exploration:</strong> Get close to explore terrain</p>
        </div>
        <div className="mt-2 text-xs text-yellow-400">
          <p>Current view: <strong>{currentLocation}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default App
