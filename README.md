# Frames. — Photo Gallery

A responsive photo gallery built with React, Vite, and Tailwind CSS. It fetches photographs from the Picsum Photos API and allows users to search by photographer and save their favourite photographs.

## Features

- **Photo gallery:** Fetches 30 photographs from the Picsum Photos API.
- **Responsive design:** Displays 1 column on mobile, 2 columns on tablet-sized screens, and 4 columns on desktop.
- **Live search:** Filters photographs by author name without making additional API requests.
- **Favourites:** Add or remove photographs from favourites using the heart button.
- **Persistent storage:** Saves favourites in `localStorage`, so they remain available after refreshing the page.
- **Loading and error states:** Displays a loading spinner while fetching data and an error message if the request fails.
- **Custom React hook:** Uses `useFetchPhotos` to manage photo fetching, loading, and error handling.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API
- React Hooks: `useEffect`, `useState`, `useReducer`, `useCallback`, and `useMemo`
- Browser `localStorage`

## Getting Started

### Prerequisites

- Node.js and npm
- Git (optional, for cloning the repository)

### Installation

1. Clone this repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate into the project directory:

   ```bash
   cd celebrare-photo-gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## Project Structure

```text
src/
├── components/
│   ├── Gallery.jsx
│   └── PhotoCard.jsx
├── hooks/
│   └── useFetchPhotos.js
├── App.jsx
├── index.css
└── main.jsx
```

- **`useFetchPhotos.js`** — Fetches the photos and manages loading and error states.
- **`App.jsx`** — Connects the custom hook, favourites reducer, localStorage persistence, and overall page layout.
- **`Gallery.jsx`** — Handles author search and displays the filtered gallery.
- **`PhotoCard.jsx`** — Renders each photograph and its favourite button.

## React Concepts Demonstrated

- **Custom hook:** Reuses photo-fetching logic through `useFetchPhotos`.
- **`useEffect`:** Fetches photos on mount and synchronizes favourites with `localStorage`.
- **`useReducer`:** Manages adding and removing favourite photographs.
- **`useCallback`:** Memoizes the search input handler.
- **`useMemo`:** Computes the filtered photo list from the search term and fetched photos.
- **`useState`:** Manages the search text and photo-fetching state.
- **Immutable updates:** Creates new arrays when adding or removing favourites.

## API

The project uses the Picsum Photos API:

`https://picsum.photos/v2/list?limit=30`

The gallery displays author information and uses Picsum image URLs for the photographs.

## Notes

- Favourites are stored locally in the browser. They are not synchronized between devices or browsers.
- An internet connection is required to fetch the photographs and load the remote images.

## Author

Built as a React photo gallery assignment for a Web Developer / Frontend React Internship.
