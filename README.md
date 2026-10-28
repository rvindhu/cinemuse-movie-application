# CineMuse — Discover Your Next Favorite Film

CineMuse is a responsive movie-discovery portfolio project built with React, JavaScript, Vite, React Router, Lucide React, TMDB, and LocalStorage. It helps people discover films, maintain a personal watchlist, save favorites, explore by mood, and keep personal movie notes on their own device.

> Movie metadata and images are provided by TMDB. This product uses the TMDB API but is not endorsed or certified by TMDB. CineMuse does not stream or play movies.

## Features

- Home page with trending, popular, and now-playing movie collections
- Search with a debounce delay, genre/year/rating filters, sorting, and load-more pagination
- Movie detail pages with synopsis, genres, release date, runtime, ratings, and recommendations
- Watchlist statuses: Want to Watch, Watching, and Watched
- Personal notes, priority, saved date, and watched date
- Favorites and recently viewed history
- Mood Explorer based on explicit user-selected mood and genre associations (not mood detection or AI)
- Decide for Me shortlist and random pick from unwatched watchlist items
- Personal 1–5 star ratings and written reviews
- Dark/light themes, discovery preferences, JSON export/import, and clear-data controls
- Responsive layout, keyboard focus indicators, loading skeletons, error states, and poster fallbacks

## Tech stack

- React + JavaScript ES6+
- Vite
- React Router
- CSS3
- Lucide React
- TMDB API v3
- Browser LocalStorage

## Getting started

### Requirements

Install a current Node.js LTS release (npm is included) and Visual Studio Code.

### Install

```bash
npm install
```

### Configure TMDB

1. Create/sign in to a TMDB account: https://www.themoviedb.org/signup
2. Request API access from your TMDB account settings.
3. Copy `.env.example` to `.env` in the project root.
4. Set your API Read Access Token:

```env
VITE_TMDB_ACCESS_TOKEN=your_actual_token_here
```

5. Restart the dev server after changing `.env`.

**Security:** Vite exposes `VITE_*` variables in the browser bundle. Never treat this token as a secret, and never commit `.env`. For a production deployment requiring protected credentials, use a backend/serverless proxy. Follow TMDB's terms and attribution requirements.

### Run locally

```bash
npm run dev
```

Open the local URL printed by Vite, commonly http://localhost:5173.

### Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── main.jsx
├── App.jsx
├── index.css
├── components/
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── SectionHeading.jsx
│   └── Toast.jsx
├── pages/
│   ├── Home.jsx
│   ├── Discover.jsx
│   ├── MovieDetails.jsx
│   ├── MoodExplorer.jsx
│   ├── Collection.jsx
│   └── Settings.jsx
├── services/movieApi.js
├── hooks/useLocalStorage.js
└── utils/storage.js
```

## How the app works

- `services/movieApi.js` centralizes TMDB requests and API error handling.
- `hooks/useLocalStorage.js` persists user data between browser sessions.
- `utils/storage.js` manages saved data export/import.
- `components/` contains reusable navigation, cards, grids, and notification UI.
- `pages/` contains the route-level views.
- `App.jsx` connects routes and shared watchlist/favorites/review state.

Mood matching is approximate and transparent: the user chooses a mood, which selects a small set of associated TMDB genre IDs. The app queries real movie results and lets the user adjust genre, year, and minimum rating. It does not infer a person's mood.

## Manual test checklist

- [ ] Home loads trending, popular, and now-playing sections when the API token is valid.
- [ ] Search a title; wait for the debounced results to update.
- [ ] Clear the search and test genre, year, rating, and sort filters.
- [ ] Load another page of results.
- [ ] Open a movie detail route and check missing-data fallbacks.
- [ ] Add/remove a favorite; refresh and verify persistence.
- [ ] Add/remove a watchlist item and change its status.
- [ ] Add a note and priority; refresh and verify persistence.
- [ ] Mark a film watched and check the collection statistics.
- [ ] Select each mood and test the shortlist.
- [ ] Save a personal rating and review.
- [ ] Toggle the theme and refresh.
- [ ] Export a JSON backup, then import it in Settings.
- [ ] Test with a missing/invalid token and check the error state.
- [ ] Test mobile width and keyboard focus visibility.

## Screenshots for your portfolio

After running the project, capture screenshots of:

1. Home hero and trending cards
2. Discover search and filters
3. Movie detail and personal review
4. Watchlist with statuses and notes
5. Mood Explorer shortlist
6. Settings and JSON export/import

Create a `screenshots/` directory and add the images. Then include them in this README, for example:

```md
![CineMuse home](screenshots/home.png)
![Discover and filters](screenshots/discover.png)
![Mood Explorer](screenshots/mood-explorer.png)
```

Only add screenshots you have actually captured from the running app.

## Deployment

### Vercel or Netlify

1. Push the project to a GitHub repository.
2. Import that repository into Vercel or Netlify.
3. Set the build command to `npm run build` and output directory to `dist`.
4. Configure `VITE_TMDB_ACCESS_TOKEN` in the hosting provider's environment-variable settings if you accept that the value is public in the client bundle.
5. Deploy and test the production URL.

Because this is a single-page app with React Router, configure your host to rewrite unknown app paths to `index.html` so routes such as `/movie/123` work when refreshed. For stronger credential protection, replace direct browser requests with a serverless/backend proxy.

## Notes and limitations

- Personal lists are stored only in the current browser's LocalStorage. There is no login or cross-device sync.
- API rate limits and availability are controlled by TMDB; retry later if the service rate-limits requests.
- Movie runtime, synopsis, poster, and other metadata may be missing for some titles.
- Mood associations are user-selected genre heuristics, not personalized machine learning.
- CineMuse is a discovery and personal-library project, not a streaming service.
