# TentPal Project

This repository contains the user interface for the TentPal application. This application allows users to simulate and manage a camping experience, from setting up a tent to controlling its features.

## Features

*   **Location Selection**: Choose a spot for your tent on an interactive map in [`tentpal/src/pages/CreateTent/SelectLocation.js`](tentpal/src/pages/CreateTent/SelectLocation.js).
*   **Tent Setup**: Configure tent stakes, including depth and angle, in [`tentpal/src/pages/CreateTent/SetStakes.js`](tentpal/src/pages/CreateTent/SetStakes.js).
*   **Tent Selection**: Choose from different types of tents, like cloudy or rain-proof tents, using a drag-and-drop interface in [`tentpal/src/pages/CreateTent/ChooseTent.js`](tentpal/src/pages/CreateTent/ChooseTent.js).
*   **Lighting Control**: Manage the tent's internal lighting, including color and intensity, from the [`tentpal/src/pages/CreateTent/LightPanel/LightPanel.js`](tentpal/src/pages/CreateTent/LightPanel/LightPanel.js).
*   **Energy Management**: Monitor energy production and consumption from features like air conditioning and electric blankets in the [`tentpal/src/pages/CreateTent/EnergyPanel/EnergyPanel.js`](tentpal/src/pages/CreateTent/EnergyPanel/EnergyPanel.js).
*   **Canteen Orders**: Place orders for food and drinks from a virtual canteen in [`tentpal/src/pages/CreateTent/Order/Order.js`](tentpal/src/pages/CreateTent/Order/Order.js).

## Tech Stack

*   **Frontend**: [React](https://reactjs.org/)
*   **Routing**: [React Router](https://reactrouter.com/)
*   **Styling**: CSS Modules and standard CSS

## Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (version 18.19.1 or newer)
*   npm (comes with Node.js)

## Getting Started

To get the project running on your local machine, follow these steps.

### 1. Navigate to the Project Directory

The application code is located within the `tentpal` folder.

```sh
cd tentpal
```

### 2. Install Dependencies

Install the necessary packages using npm.

```sh
npm install
```

### 3. Run the Application

Start the local development server.

```sh
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the `tentpal` project directory, you can run:

-   `npm start`: Runs the app in development mode. The page will reload if you make edits.
-   `npm test`: Launches the test runner in interactive watch mode.
-   `npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure

A brief overview of the project's directory structure:

```
tentpal/
├── public/         # Public assets and index.html
├── src/
│   ├── assets/     # Images, logos, and other static assets
│   ├── components/ # Reusable React components
│   ├── pages/      # Application pages/routes
│   ├── App.js      # Main application component with routing
│   └── index.js    # Entry point of the application
├── .env            # Environment variables
└── package.json    # Project dependencies and scripts
```