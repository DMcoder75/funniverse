import { useState, useRef } from 'react'
import EnhancedRealisticUniverseScene from './components/EnhancedRealisticUniverseScene'
import GoogleEarthView from './components/GoogleEarthView'
import EnhancedGalaxyView from './components/EnhancedGalaxyView'
import NavigationPanel from './components/NavigationPanel'
import CollapsibleInfoPanel from './components/CollapsibleInfoPanel'
import './App.css'

function App() {
  const [currentLocation, setCurrentLocation] = useState('Solar System')
  const [viewMode, setViewMode] = useState('universe') // 'universe', 'earth', or 'galaxy'
  const sceneRef = useRef(null)

  const handleNavigateTo = (location) => {
    if (location === 'Earth View') {
      setViewMode('earth')
      setCurrentLocation('Space View')
    } else if (location === 'Galaxy View') {
      setViewMode('galaxy')
      setCurrentLocation('Galaxy Overview')
    } else {
      setViewMode('universe')
      setCurrentLocation(location)
      if (sceneRef.current) {
        sceneRef.current.focusOnPlanet(location)
      }
    }
  }

  const handleLocationChange = (location) => {
    setCurrentLocation(location)
  }

  const handleBackToUniverse = () => {
    setViewMode('universe')
    setCurrentLocation('Solar System')
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {viewMode === 'universe' ? (
        <EnhancedRealisticUniverseScene 
          ref={sceneRef} 
          onLocationChange={handleLocationChange}
        />
      ) : viewMode === 'earth' ? (
        <GoogleEarthView 
          onLocationChange={handleLocationChange}
        />
      ) : (
        <EnhancedGalaxyView 
          onLocationChange={handleLocationChange}
        />
      )}
      
      <NavigationPanel 
        onNavigateTo={handleNavigateTo}
        currentLocation={currentLocation}
        viewMode={viewMode}
        onBackToUniverse={handleBackToUniverse}
      />
      
      <CollapsibleInfoPanel 
        viewMode={viewMode}
        currentLocation={currentLocation}
      />
    </div>
  )
}

export default App
