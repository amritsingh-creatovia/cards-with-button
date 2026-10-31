# Cards with Button (Vite Container Boxes)

An interactive, responsive web application built with **Vanilla JavaScript** and **Vite**, demonstrating dynamic DOM manipulation, modular component architecture, and modern CSS styling with toggleable card states.

---

## 🚀 Features

- **Dynamic DOM Generation**: Cards and buttons are dynamically generated using a reusable utility helper (`createEle`).
- **Interactive State Toggling**: Each card features a toggle button that switches between active (`Clicked`) and default (`Click`) states with smooth gradient transitions.
- **Modern Arctic Blue Theme**: Styled with modern CSS variables, responsive typography, and subtle shadows.
- **Dark Mode Support**: Built-in support for system color schemes (`prefers-color-scheme: dark`).
- **Fast Developer Experience**: Powered by [Vite](https://vite.dev/) for instant HMR (Hot Module Replacement) and optimized production builds.

---

## 🛠️ Tech Stack

- **Runtime & Bundler:** [Vite](https://vite.dev/)
- **Language:** JavaScript (ES Modules)
- **Markup:** HTML5
- **Styling:** Vanilla CSS3 (Custom properties, Flexbox, Media Queries)

---

## 📁 Project Structure

```text
vite-container-boxes/
├── components/
│   └── CreateElements.js   # Utility helper to programmatically create DOM elements
├── public/
│   ├── favicon.svg         # Application favicon
│   └── icons.svg           # Vector icons
├── src/
│   ├── assets/             # Static image assets
│   ├── main.js             # Main application logic & dynamic card rendering
│   └── style.css           # Styling with theme variables & card state transitions
├── index.html              # HTML entry point
├── package.json            # Project dependencies and npm scripts
└── README.md               # Project documentation
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (version 18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amritsingh-creatovia/cards-with-button.git
   cd cards-with-button
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with Hot Module Replacement:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

### Production Build

To build the application for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 💡 How It Works

1. **Element Creation**: `components/CreateElements.js` exports a helper function `createEle(tag, tagClass)` that creates and assigns CSS classes to HTML elements.
2. **List Rendering**: In `src/main.js`, an array of card labels (`contentText`) is iterated over to create `.single-block` cards with text labels and buttons.
3. **Interactive Toggle**: Clicking a card's button toggles the `.clicked` class on its parent container, dynamically updating button text and triggering CSS background and border transitions.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
