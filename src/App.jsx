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
      
      {viewMode !== 'galaxy' && (
        <NavigationPanel 
          onNavigateTo={handleNavigateTo}
          currentLocation={currentLocation}
          viewMode={viewMode}
          onBackToUniverse={handleBackToUniverse}
        />
      )}
      
      {viewMode === 'galaxy' && (
        <div className="absolute top-4 right-4 w-80 max-h-[90vh] overflow-y-auto bg-black/85 text-white border border-gray-600 backdrop-blur-sm z-20 rounded-lg p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <button
                className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50 text-white rounded text-sm"
                onClick={handleBackToUniverse}
              >
                ← Back to Universe
              </button>
            </div>
            <div className="text-lg font-bold">Galaxy Navigation</div>
            <div className="text-sm text-gray-300">
              Current: <span className="text-white font-semibold">{currentLocation}</span>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-300 uppercase tracking-wide border-b border-gray-700 pb-1">
                Major Spiral Arms
              </div>
              <div className="space-y-1">
                {['Perseus Arm', 'Sagittarius Arm', 'Orion Arm', 'Scutum-Centaurus Arm'].map((region) => (
                  <button
                    key={region}
                    className="w-full text-left px-3 py-2 bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50 text-white rounded text-sm"
                    onClick={() => {
                      console.log('Galaxy navigation button clicked:', region);
                      handleNavigateTo(region);
                    }}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-300 uppercase tracking-wide border-b border-gray-700 pb-1">
                Central Regions
              </div>
              <div className="space-y-1">
                {['Galactic Center', 'Central Bar', 'Nuclear Bulge'].map((region) => (
                  <button
                    key={region}
                    className="w-full text-left px-3 py-2 bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50 text-white rounded text-sm"
                    onClick={() => {
                      console.log('Galaxy navigation button clicked:', region);
                      handleNavigateTo(region);
                    }}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
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
