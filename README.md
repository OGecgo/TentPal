# TentPal

Interactive camping assistant built with React. Plan your tent location, configure stakes, control lighting, manage energy, browse events, and place canteen orders.

## Features

- Location selection: Choose a spot on an interactive map (`tentpal/src/pages/SelectLocation/SelectLocation.js`).
- Tent setup: Configure and place your tent (`tentpal/src/pages/SetTent/SetTent.js`).
- Stake configuration: Adjust depth and angle (`tentpal/src/pages/SetStakes/SetStakes.js`).
- Lighting control: Manage color and intensity (`tentpal/src/pages/LightPanel/LightPanel.js`).
- Energy management: Monitor production and consumption (`tentpal/src/pages/EnergyPanel/EnergyPanel.js`).
- Events map: Discover nearby activities (`tentpal/src/pages/EventsMap/EventsMap.js`).
- SOS map: Quick access to help locations (`tentpal/src/pages/SOSMap/sosMap.js`).
- Canteen orders: Order food and drinks (`tentpal/src/pages/Order/Order.js`).

## Tech stack

- React 18
- React Router DOM 7
- CSS Modules, standard CSS
- Create React App (react-scripts)
- Font Awesome (icons)

## Prerequisites

- Node.js 18.19.1 or newer
- npm (bundled with Node.js)

## Getting started

1) Go to the app folder

```sh
cd tentpal
```

2) Install dependencies

```sh
npm install
```

3) Start the development server

```sh
npm start
```

The app runs at http://localhost:3000.

## Available scripts

From the `tentpal` directory:

- `npm start` – Run in development mode with hot reload.
- `npm test` – Launch the test runner in watch mode.
- `npm run build` – Create a production build in `build/`.

## Project structure (high level)

```
tentpal/
  public/
  src/
    components/        # Reusable UI components
    pages/             # Route-level pages (EnergyPanel, LightPanel, Menu, etc.)
    assets/            # Images and static assets
```



