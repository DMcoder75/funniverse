import { useState, useRef, useEffect } from 'react'
import EnhancedRealisticUniverseScene from './components/EnhancedRealisticUniverseScene'
import NavigationPanel from './components/NavigationPanel'
import PlanetSurfaceViewer from './components/PlanetSurfaceViewer'
import RealisticGalacticView from './components/RealisticGalacticView'
import StatsPanel from './components/StatsPanel'
import './App.css'

function App() {
  const [currentLocation, setCurrentLocation] = useState('Solar System')
  const [viewMode, setViewMode] = useState('space') // 'space', 'surface', 'galactic'
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [focusedPlanet, setFocusedPlanet] = useState(null) // For stats display
  const sceneRef = useRef(null)

  const handleNavigateTo = (location) => {
    setCurrentLocation(location)
    setFocusedPlanet(location)
    if (window.focusOnPlanetRef) {
      window.focusOnPlanetRef(location);
    }
  }

  const handleLocationChange = (location) => {
    setCurrentLocation(location)
  }

  const handleViewSurface = (planetName) => {
    setSelectedPlanet(planetName)
    setViewMode('surface')
    setCurrentLocation(`${planetName} Surface`)
  }

  const handleViewGalaxy = () => {
    setViewMode('galactic')
    setCurrentLocation('Milky Way Galaxy')
  }

  const handleBackToSpace = () => {
    setViewMode('space')
    setSelectedPlanet(null)
    setCurrentLocation('Solar System')
  }

  // Set up global function for automatic surface view transition
  useEffect(() => {
    window.triggerSurfaceView = (planetName) => {
      handleViewSurface(planetName);
    };
    
    return () => {
      delete window.triggerSurfaceView;
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {viewMode === 'space' ? (
        <>
          <EnhancedRealisticUniverseScene 
            ref={sceneRef} 
            onLocationChange={handleLocationChange}
          />
          <NavigationPanel 
            onNavigateTo={handleNavigateTo}
            onViewSurface={handleViewSurface}
            onViewGalaxy={handleViewGalaxy}
            currentLocation={currentLocation}
          />
        </>
      ) : viewMode === 'surface' ? (
        <PlanetSurfaceViewer 
          planetName={selectedPlanet}
          onBack={handleBackToSpace}
        />
      ) : (
        <RealisticGalacticView 
          onBackToSolar={handleBackToSpace}
        />
      )}
      
      {/* Stats Panel */}
      <StatsPanel 
        selectedPlanet={focusedPlanet}
        viewMode={viewMode}
      />
    </div>
  )
}

export default App
