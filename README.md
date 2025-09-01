# Funniverse - Interactive 3D Solar System

An immersive 3D universe simulation built with React and Three.js, featuring realistic planetary orbits, interactive navigation, and multiple viewing modes.

## 🌟 Features

- **Interactive 3D Solar System**: Explore planets with realistic orbital mechanics
- **Planet Navigation**: Click on navigation buttons to smoothly travel to different planets
- **Multiple View Modes**: 
  - Universe view with full solar system
  - Immersive Earth view with zoom capabilities
  - Enhanced Galaxy view
- **Responsive Controls**: Mouse/touch controls for camera rotation and zoom
- **Real-time Animation**: Planets orbit the sun with realistic speeds based on Kepler's laws

## 🚀 Live Demo

**🌐 [View Live Demo](https://funniverse-598af.web.app)**

## 🐛 Latest Fixes (Branch 17)

### Planet Navigation Bug Fixed:
- ✅ **Fixed incorrect planet targeting**: Neptune button now correctly navigates to Neptune (was showing Jupiter)
- ✅ **Fixed Jupiter navigation**: Jupiter button now shows correct planet view
- ✅ **Enhanced position accuracy**: Camera now uses real-time mesh positions instead of stored angles
- ✅ **Improved debugging**: Added comprehensive logging for planet positions and camera calculations
- ✅ **All planets verified**: Sun, Moon, and all planets now navigate correctly

### Technical Implementation:
- Modified `focusOnPlanet` method in `EnhancedRealisticUniverseScene.jsx`
- Uses actual mesh positions (`planetInfo.mesh.position`) for camera calculations
- Calculates camera angles based on real-time 3D coordinates
- Ensures accurate navigation regardless of orbital animations

## Previous Fixes (Branch 16)

### Camera Navigation Issues Resolved:
- ✅ **Fixed planet navigation**: Camera now properly moves to planets when clicking navigation buttons
- ✅ **Restored user controls**: User movement is no longer blocked after camera animation
- ✅ **Removed duplicate implementations**: Cleaned up conflicting focusOnPlanet functions
- ✅ **Improved focus mode**: Fixed camera focus mode clearing mechanism
- ✅ **Enhanced mouse/touch controls**: Added proper focus mode checks to prevent interference

### Technical Changes:
- Removed duplicate `focusOnPlanet` implementation in useEffect
- Fixed camera focus mode clearing to happen immediately after animation
- Added focus mode checks to mouse and touch move handlers
- Cleaned up event listener references and window object pollution

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/DMcoder75/funniverse.git
cd funniverse

# Switch to the latest branch with fixes
git checkout branch-16

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### Build for Production
```bash
# Build the application
npm run build

# The built files will be in the 'dist' directory
```

## Firebase Deployment

### Prerequisites
- Firebase CLI installed: `npm install -g firebase-tools`
- Firebase project set up at: https://console.firebase.google.com/u/0/project/funniverse-598af

### Quick Deployment
```bash
# Login to Firebase (if not already logged in)
firebase login

# Deploy to Firebase Hosting
firebase deploy --only hosting

# Or deploy with a specific message
firebase deploy --only hosting -m "Deploy camera navigation fixes"
```

### Firebase Configuration
The project is already configured with `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Service Account
The Firebase service account key is provided in the project for automated deployments.

## Project Structure

```
funniverse/
├── src/
│   ├── components/
│   │   ├── EnhancedRealisticUniverseScene.jsx  # Main 3D scene component
│   │   ├── NavigationPanel.jsx                 # Planet navigation UI
│   │   ├── GoogleEarthView.jsx                 # Earth view component
│   │   ├── EnhancedGalaxyView.jsx             # Galaxy view component
│   │   └── ui/                                # UI components
│   ├── data/
│   │   └── astronomicalData.json              # Planet data and properties
│   └── App.jsx                                # Main application component
├── public/
│   └── assets/                                # 3D textures and models
├── dist/                                      # Built application (after npm run build)
├── firebase.json                              # Firebase hosting configuration
└── package.json                               # Dependencies and scripts
```

## Controls

### Universe View
- **Mouse**: Rotate camera view
- **Scroll**: Zoom in/out
- **Navigation Buttons**: Quick travel to planets
- **Planet Clicking**: Click directly on planets to navigate

### Earth/Galaxy Views
- **Mouse**: Rotate view
- **Scroll**: Zoom in/out
- **Back Button**: Return to universe view

## Technologies Used

- **React 19** - Frontend framework
- **Three.js** - 3D graphics and WebGL
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling and UI components
- **Framer Motion** - Animations
- **Firebase Hosting** - Deployment platform

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Browser Support
- Modern browsers with WebGL support
- Mobile devices with touch controls
- Responsive design for desktop and mobile

## Troubleshooting

### Common Issues
1. **Dependency conflicts**: Use `npm install --legacy-peer-deps`
2. **WebGL not supported**: Ensure browser supports WebGL
3. **Performance issues**: Try reducing graphics quality in browser settings

### Debug Mode
Open browser console to see debug messages for planet navigation and camera movements.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m "Description of changes"`
5. Push: `git push origin feature-name`
6. Create a Pull Request

## License

This project is private and proprietary.

## Live Demo

Visit the deployed application: https://funniverse-598af.web.app

---

**Note**: This README covers the latest fixes in branch-16. For deployment, ensure you're using the latest branch with all camera navigation fixes applied.

