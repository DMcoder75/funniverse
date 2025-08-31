import { useState, useRef } from 'react'
import SimpleUniverseScene from './components/SimpleUniverseScene'
import NavigationPanel from './components/NavigationPanel'
import './App.css'

function App() {
  const [currentLocation, setCurrentLocation] = useState('Earth Vicinity')
  const sceneRef = useRef(null)

  const handleNavigateTo = (location) => {
    setCurrentLocation(location)
    console.log(`Navigating to ${location}`)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <SimpleUniverseScene ref={sceneRef} />
      <NavigationPanel 
        onNavigateTo={handleNavigateTo}
        currentLocation={currentLocation}
      />
      
      {/* Info Panel */}
      <div className="absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg border border-gray-600 max-w-md">
        <h2 className="text-lg font-bold mb-2">Universe Simulation</h2>
        <p className="text-sm text-gray-300">
          A simplified 3D visualization of our solar system with accurate astronomical data.
          Use mouse to rotate the view and scroll to zoom. Click navigation buttons to focus on different celestial bodies.
        </p>
        <div className="mt-2 text-xs text-gray-400">
          <p>• Planets are scaled up for visibility</p>
          <p>• Orbital speeds are accelerated</p>
          <p>• Starting view: Just outside Earth</p>
        </div>
      </div>
    </div>
  )
}

export default App
