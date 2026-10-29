# CineMuse — Movie Discovery & Personal Watchlist
 
CineMuse is a responsive movie discovery web application built with React.js and JavaScript. It provides a simple, modern interface for exploring movies and organizing a personal movie collection.
Users can manage watchlists, save favorite movies, write personal reviews, explore movies by mood, and keep track of their viewing preferences.

## Features

- **Movie Discovery:** Explore movie collections and available movie information.
- **Search and Filters:** Find movies using search and available filtering options.
- **Movie Details:** View movie information, including synopsis, genres, release dates, and ratings when available.
- **Personal Watchlist:** Organize movies into Want to Watch, Watching, and Watched categories.
- **Favorites:** Save and manage favorite movies.
- **Personal Ratings and Reviews:** Record personal ratings and written reviews.
- **Mood Explorer:** Explore movies using selected moods and associated genres.
- **Recently Viewed:** Access recently viewed movies.
- **Personal Notes:** Add notes and priorities to watchlist items.
- **Theme Customization:** Switch between dark and light themes.
- **Local Data Persistence:** Retain supported personal data and preferences using browser LocalStorage.
- **Responsive Design:** Adapt the interface to desktop and mobile screens.

## Tech Stack

- React.js
- JavaScript (ES6+)
- Vite
- React Router
- HTML5
- CSS3
- Lucide React
- Browser LocalStorage
- Git and GitHub
- Vercel

## Project Structure

```text
cinemuse-movie-application/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

The structure above is a simplified overview. Refer to the actual repository for the complete file structure.

## Getting Started

### Prerequisites

- Node.js LTS
- npm
- Visual Studio Code or another code editor

### Installation

Clone the repository:

```bash
git clone https://github.com/rvindhu/cinemuse-movie-application.git
```

Navigate to the project directory:

```bash
cd cinemuse-movie-application
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated production files are placed in the `dist` directory.

## Data Storage

CineMuse uses browser LocalStorage to retain supported personal data, including watchlist items, favorites, reviews, and preferences.

- Data persists across browser sessions on the same browser and website origin.
- Data is stored locally on the user's device.
- Data is not automatically synchronized across devices.
- Clearing browser storage may remove saved information.

## Deployment

CineMuse can be deployed using Vercel.

1. Push the project to GitHub.
2. Sign in to Vercel using your GitHub account.
3. Import the CineMuse repository.
4. Use `npm run build` as the build command.
5. Set `dist` as the output directory.
6. Deploy the application and test the generated website URL.

If React Router routes do not load correctly when opened directly, configure the hosting platform to redirect application routes to `index.html`.

## Future Improvements

- Reliable movie-data integration
- Enhanced search and filtering
- Improved accessibility and keyboard navigation
- Additional watchlist management features
- Optional user authentication and cloud synchronization
- Enhanced movie recommendation features

## Project Purpose

CineMuse is a frontend development portfolio project demonstrating React component development, client-side routing, browser-based data persistence, responsive UI design, and interactive web application features.

## License

This project is intended for learning and portfolio demonstration. Add an open-source license if you wish to grant others formal permission to use, modify, and distribute the code.
