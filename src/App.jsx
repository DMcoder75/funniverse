import { useState, useRef } from 'react'
import EnhancedRealisticUniverseScene from './components/EnhancedRealisticUniverseScene'
import GoogleEarthView from './components/GoogleEarthView'
import EnhancedGalaxyViewV2 from './components/EnhancedGalaxyViewV2'
import NavigationPanel from './components/NavigationPanel'
import EnhancedGalaxyNavigation from './components/EnhancedGalaxyNavigation'
import GalaxyVisualEnhancer from './components/GalaxyVisualEnhancer'
import CollapsibleInfoPanel from './components/CollapsibleInfoPanel'
import './App.css'

function App() {
  const [currentLocation, setCurrentLocation] = useState('Solar System')
  const [viewMode, setViewMode] = useState('universe') // 'universe', 'earth', or 'galaxy'
  const sceneRef = useRef(null)
  const galaxyRef = useRef(null)

  const handleNavigateTo = (location) => {
    if (location === 'Earth View') {
      setViewMode('earth')
      setCurrentLocation('Space View')
    } else if (location === 'Galaxy View') {
      setViewMode('galaxy')
      setCurrentLocation('Galaxy Overview')
    } else if (viewMode === 'galaxy') {
      // Handle galaxy region navigation
      setCurrentLocation(location)
      if (galaxyRef.current) {
        galaxyRef.current.navigateToGalaxyRegion(location)
      }
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
        <EnhancedGalaxyViewV2 
          ref={galaxyRef}
          onLocationChange={handleLocationChange}
        />
      )}
      
      <NavigationPanel 
        onNavigateTo={handleNavigateTo}
        currentLocation={currentLocation}
        viewMode={viewMode}
        onBackToUniverse={handleBackToUniverse}
      />
      
      {viewMode === 'galaxy' && (
        <EnhancedGalaxyNavigation 
          onNavigateTo={handleNavigateTo}
          currentLocation={currentLocation}
        />
      )}
      
      <GalaxyVisualEnhancer 
        currentLocation={currentLocation}
        isVisible={viewMode === 'galaxy'}
      />
      
      <CollapsibleInfoPanel 
        viewMode={viewMode}
        currentLocation={currentLocation}
      />
    </div>
  )
}

export default App
