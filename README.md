# Funniverse - Interactive 3D Universe Simulation

Explore our solar system and the Milky Way galaxy with NASA-accurate planet textures, realistic colors, immersive surface views, and a galactic perspective. This project aims to provide an educational and visually stunning experience of our universe.

## ✨ Enhanced Features:

- **Realistic Textures**: High-quality NASA-based planet surface textures for an authentic visual experience.
- **Surface Exploration**: Immersive 3D planet surface viewing with realistic terrain, allowing you to "land" and explore.
- **Galactic View**: Zoom out to see our solar system within the Milky Way galaxy, featuring a scientifically accurate barred spiral structure and nucleus.
- **Transparent Labels**: Clean, readable planet names with transparent backgrounds for an unobstructed view.
- **Enhanced Sun**: Realistic solar surface texture with proper lighting and emissive properties.
- **Major Moons**: Includes Earth's Moon, Mars' Phobos & Deimos, Jupiter's Galilean moons, and more, all with accurate orbital paths.
- **Improved Graphics**: Enhanced lighting, shadows, and a rich star field with 15,000+ stars for a truly immersive experience.
- **Interactive Stats Panel**: A dynamic left-side panel displaying real-time astronomical data for selected planets and the galaxy.
- **Seamless Navigation**: Smooth transitions between solar system, planet surface, and galactic views.

## 🚀 Quick Setup

Follow these steps to get the Funniverse simulation up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- pnpm (preferred package manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DMcoder75/funniverse.git
    cd funniverse
    ```

2.  **Switch to the `branch-10`:**
    ```bash
    git checkout branch-10
    ```

3.  **Install dependencies:**
    ```bash
    pnpm install
    ```

### Running Locally

To start the development server:

```bash
pnpm run dev
```

This will typically start the application on `http://localhost:5173`. Open this URL in your browser.

### Building for Production

To create a production-ready build:

```bash
pnpm run build
```

The optimized static files will be generated in the `dist` directory.

## ☁️ Deployment to Firebase

This project is configured for deployment to Firebase Hosting.

### Prerequisites for Firebase Deployment

- A Firebase project set up for hosting.
- Firebase CLI installed globally:
    ```bash
    npm install -g firebase-tools
    ```
- Authenticated Firebase CLI with your project (using `firebase login` or service account credentials).

### Deployment Steps

1.  **Ensure you have the `dist` folder generated** (by running `pnpm run build`).

2.  **Deploy to Firebase Hosting:**
    If you are using a service account key (e.g., `funniverse-598af-firebase-adminsdk-fbsvc-f146df5e90.json`):
    ```bash
    GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-key.json" firebase deploy --only hosting
    ```
    Replace `/path/to/your/service-account-key.json` with the actual path to your Firebase service account key.

    If you are logged in via `firebase login`:
    ```bash
    firebase deploy --only hosting
    ```

After successful deployment, Firebase will provide you with the Hosting URL.

## 🎮 Usage

- **Planet Navigation**: Click on any planet button in the right-side navigation panel to focus on that celestial body. Its detailed statistics will appear in the left-side panel.
- **Surface Exploration**: Click the 🏔️ (mountain) icon next to a planet's name in the navigation panel, or simply zoom in very close to a planet, to enter its immersive surface view.
- **Galactic View**: Click the "Milky Way Galaxy View" button to zoom out and observe our galaxy's intricate spiral structure and our solar system's position.
- **Interactive Controls**: Use your mouse to rotate the view and the scroll wheel to zoom in and out across all views (solar system, surface, and galaxy).
- **Reset View**: Click the "Reset View" button in any mode to return to the default camera position for that view.

Enjoy your journey through the Funniverse!

