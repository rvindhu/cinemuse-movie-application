const KEYS = {
  watchlist: 'cinemuse-watchlist-v1', favorites: 'cinemuse-favorites-v1', recent: 'cinemuse-recent-v1',
  reviews: 'cinemuse-reviews-v1', theme: 'cinemuse-theme-v1', preferences: 'cinemuse-preferences-v1'
};

export function readStorage(key, fallback) {
  try { const value = localStorage.getItem(KEYS[key]); return value ? JSON.parse(value) : fallback; }
  catch { return fallback; }
}
export function writeStorage(key, value) {
  try { localStorage.setItem(KEYS[key], JSON.stringify(value)); return true; }
  catch { return false; }
}
export function exportLibrary() {
  const defaults = { watchlist: [], favorites: [], recent: [], reviews: {}, theme: 'dark', preferences: { minRating: '6', releasePeriod: 'any' } };
  const data = Object.fromEntries(Object.keys(KEYS).map((key) => [key, readStorage(key, defaults[key])]));
  const blob = new Blob([JSON.stringify({ app: 'CineMuse', exportedAt: new Date().toISOString(), data }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob); const anchor = document.createElement('a');
  anchor.href = url; anchor.download = 'cinemuse-library.json'; anchor.click(); URL.revokeObjectURL(url);
}
export function importLibrary(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!parsed?.data || typeof parsed.data !== 'object') throw new Error('This file does not look like a CineMuse export.');
        Object.entries(KEYS).forEach(([key, storageKey]) => {
          if (Object.hasOwn(parsed.data, key)) localStorage.setItem(storageKey, JSON.stringify(parsed.data[key]));
        });
        resolve(true);
      } catch (error) { reject(error); }
    };
    reader.onerror = () => reject(new Error('Could not read that file.'));
    reader.readAsText(file);
  });
}
