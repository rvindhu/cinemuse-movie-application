
const IMAGE_BASE = 'https://image.tmdb.org/t/p/';

export function posterUrl(path, size = 'w500') {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  if (path.startsWith('/posters/')) return path;
  return `${IMAGE_BASE}${size}${path}`;
}

const DEMO_GENRES = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 18, name: 'Drama' },
  { id: 14, name: 'Fantasy' },
  { id: 27, name: 'Horror' },
  { id: 36, name: 'History' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 53, name: 'Thriller' },
];

const DEMO_MOVIES = [
  {
    id: 27205,
    title: 'Inception',
    original_title: 'Inception',
    overview:
      'A skilled thief who steals corporate secrets through dream-sharing technology is given an unusual mission: plant an idea in someone’s mind.',
    poster_path: null,
    backdrop_path: null,
    release_date: '2010-07-16',
    vote_average: 8.4,
    popularity: 95,
    genre_ids: [28, 878, 12],
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
      { id: 12, name: 'Adventure' },
    ],
    runtime: 148,
    tagline: 'Your mind is the scene of the crime.',
    original_language: 'en',
    status: 'Released',
    budget: 160000000,
    credits: { cast: [], crew: [] },
  },
  {
    id: 157336,
    title: 'Interstellar',
    original_title: 'Interstellar',
    overview:
      'A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars.',
    poster_path: null,
    backdrop_path: null,
    release_date: '2014-11-07',
    vote_average: 8.7,
    popularity: 90,
    genre_ids: [12, 18, 878],
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 18, name: 'Drama' },
      { id: 878, name: 'Science Fiction' },
    ],
    runtime: 169,
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
    original_language: 'en',
    status: 'Released',
    budget: 165000000,
    credits: { cast: [], crew: [] },
  },
  {
    id: 155,
    title: 'The Dark Knight',
    original_title: 'The Dark Knight',
    overview:
      'Batman faces a criminal mastermind whose chaotic plans challenge Gotham City and its protector.',
    poster_path: null,
    backdrop_path: null,
    release_date: '2008-07-18',
    vote_average: 9.0,
    popularity: 88,
    genre_ids: [28, 80, 18],
    genres: [
      { id: 28, name: 'Action' },
      { id: 80, name: 'Crime' },
      { id: 18, name: 'Drama' },
    ],
    runtime: 152,
    tagline: 'Why so serious?',
    original_language: 'en',
    status: 'Released',
    budget: 185000000,
    credits: { cast: [], crew: [] },
  },
  {
    id: 872585,
    title: 'Oppenheimer',
    original_title: 'Oppenheimer',
    overview:
      'The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    poster_path: null,
    backdrop_path: null,
    release_date: '2023-07-21',
    vote_average: 8.1,
    popularity: 92,
    genre_ids: [18, 36],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 36, name: 'History' },
    ],
    runtime: 180,
    tagline: 'The world forever changes.',
    original_language: 'en',
    status: 'Released',
    budget: 100000000,
    credits: { cast: [], crew: [] },
  },
  {
    id: 346698,
    title: 'Barbie',
    original_title: 'Barbie',
    overview:
      'Barbie and Ken leave their colourful world behind and discover the joys and challenges of the real world.',
    poster_path: null,
    backdrop_path: null,
    release_date: '2023-07-21',
    vote_average: 7.0,
    popularity: 86,
    genre_ids: [35, 12, 14],
    genres: [
      { id: 35, name: 'Comedy' },
      { id: 12, name: 'Adventure' },
      { id: 14, name: 'Fantasy' },
    ],
    runtime: 114,
    tagline: 'She’s everything. He’s just Ken.',
    original_language: 'en',
    status: 'Released',
    budget: 145000000,
    credits: { cast: [], crew: [] },
  },
  {
    id: 569094,
    title: 'Spider-Man: Across the Spider-Verse',
    original_title: 'Spider-Man: Across the Spider-Verse',
    overview:
      'Miles Morales journeys across the multiverse and meets a team of Spider-People protecting its existence.',
    poster_path: null,
    backdrop_path: null,
    release_date: '2023-06-02',
    vote_average: 8.4,
    popularity: 89,
    genre_ids: [16, 28, 12],
    genres: [
      { id: 16, name: 'Animation' },
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
    ],
    runtime: 140,
    tagline: 'It’s how you wear the mask that matters.',
    original_language: 'en',
    status: 'Released',
    budget: 100000000,
    credits: { cast: [], crew: [] },
  },
  {
    id: 496243,
    title: 'Parasite',
    original_title: 'Parasite',
    overview:
      'A struggling family finds an opportunity to enter the lives of a wealthy household, leading to unexpected consequences.',
    poster_path: null,
    backdrop_path: null,
    release_date: '2019-10-11',
    vote_average: 8.5,
    popularity: 78,
    genre_ids: [35, 53, 18],
    genres: [
      { id: 35, name: 'Comedy' },
      { id: 53, name: 'Thriller' },
      { id: 18, name: 'Drama' },
    ],
    runtime: 132,
    tagline: 'Act like you own the place.',
    original_language: 'ko',
    status: 'Released',
    budget: 11400000,
    credits: { cast: [], crew: [] },
  },
  {
    id: 100001,
    title: 'Sita Ramam',
    original_title: 'Sita Ramam',
    overview:
      'A heartfelt romantic drama about a soldier and a woman whose lives are connected through letters.',
    poster_path: '/posters/sita-ramam.jpeg',
    backdrop_path: null,
    release_date: '2022-08-05',
    vote_average: 8.5,
    popularity: 90,
    genre_ids: [18, 10749],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 10749, name: 'Romance' },
    ],
    genres_text: 'Drama, Romance',
    runtime: 163,
    tagline: 'A love story told through letters.',
    original_language: 'te',
    status: 'Released',
    budget: 0,
    credits: { cast: [], crew: [] },
  },
  {
    id: 100002,
    title: 'Theri',
    original_title: 'Theri',
    overview:
      'A former police officer lives a quiet life while protecting his daughter from the dangers of his past.',
    poster_path: '/posters/theri.jpeg',
    backdrop_path: null,
    release_date: '2016-04-14',
    vote_average: 7.3,
    popularity: 85,
    genre_ids: [28, 18, 53],
    genres: [
      { id: 28, name: 'Action' },
      { id: 18, name: 'Drama' },
      { id: 53, name: 'Thriller' },
    ],
    runtime: 157,
    tagline: 'A father. A protector.',
    original_language: 'ta',
    status: 'Released',
    budget: 0,
    credits: { cast: [], crew: [] },
  },
  {
    id: 100003,
    title: 'Baahubali: The Beginning',
    original_title: 'Baahubali: The Beginning',
    overview:
      'A young man discovers his extraordinary destiny and becomes involved in a battle for a kingdom.',
    poster_path: '/posters/baahubali.jpeg',
    backdrop_path: null,
    release_date: '2015-07-10',
    vote_average: 8.0,
    popularity: 95,
    genre_ids: [28, 12, 14],
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 14, name: 'Fantasy' },
    ],
    runtime: 159,
    tagline: 'The beginning of an epic.',
    original_language: 'te',
    status: 'Released',
    budget: 0,
    credits: { cast: [], crew: [] },
  },
  {
    id: 100004,
    title: 'Kanguva',
    original_title: 'Kanguva',
    overview:
      'A fantasy action drama connecting a present-day man with a powerful warrior from the past.',
    poster_path: '/posters/kanguva.jpeg',
    backdrop_path: null,
    release_date: '2024-11-14',
    vote_average: 5.5,
    popularity: 80,
    genre_ids: [28, 14, 18],
    genres: [
      { id: 28, name: 'Action' },
      { id: 14, name: 'Fantasy' },
      { id: 18, name: 'Drama' },
    ],
    runtime: 154,
    tagline: 'A warrior across time.',
    original_language: 'ta',
    status: 'Released',
    budget: 0,
    credits: { cast: [], crew: [] },
  },
  {
    id: 100005,
    title: 'Mersal',
    original_title: 'Mersal',
    overview:
      'A doctor becomes involved in a mystery that reveals a connection between medicine, injustice, and revenge.',
    poster_path: '/posters/mersal.jpeg',
    backdrop_path: null,
    release_date: '2017-10-18',
    vote_average: 7.5,
    popularity: 88,
    genre_ids: [28, 53, 18],
    genres: [
      { id: 28, name: 'Action' },
      { id: 53, name: 'Thriller' },
      { id: 18, name: 'Drama' },
    ],
    runtime: 169,
    tagline: 'Justice has a price.',
    original_language: 'ta',
    status: 'Released',
    budget: 0,
    credits: { cast: [], crew: [] },
  },
  {
    id: 100006,
    title: 'KGF: Chapter 1',
    original_title: 'KGF: Chapter 1',
    overview:
      'A determined man rises through the ranks of a powerful gold-mining empire.',
    poster_path: '/posters/kgf.jpeg',
    backdrop_path: null,
    release_date: '2018-12-21',
    vote_average: 8.2,
    popularity: 92,
    genre_ids: [28, 18, 80],
    genres: [
      { id: 28, name: 'Action' },
      { id: 18, name: 'Drama' },
      { id: 80, name: 'Crime' },
    ],
    runtime: 156,
    tagline: 'The rise of a legend.',
    original_language: 'kn',
    status: 'Released',
    budget: 0,
    credits: { cast: [], crew: [] },
  },
];

function checkAbort(signal) {
  if (signal?.aborted) {
    throw new DOMException('The request was aborted.', 'AbortError');
  }
}

function movieResults(movies, page = 1) {
  const results = movies.map((movie) => ({
    ...movie,
    poster_path: movie.poster_path || DEMO_POSTERS[movie.id] || null,
    backdrop_path: movie.backdrop_path || DEMO_POSTERS[movie.id] || null,
  }));

  return {
    page,
    results,
    total_pages: 1,
    total_results: results.length,
  };
}

function getMovieGenres(movie) {
  if (movie.genres?.length) return movie.genres;

  return (movie.genre_ids || [])
    .map((id) => DEMO_GENRES.find((genre) => genre.id === id))
    .filter(Boolean);
}

function sortMovies(movies, sortBy = 'popularity') {
  const sorted = [...movies];

  switch (sortBy) {
    case 'vote_average.desc':
    case 'rating':
      return sorted.sort(
        (a, b) => (b.vote_average || 0) - (a.vote_average || 0),
      );

    case 'release_date.desc':
    case 'newest':
      return sorted.sort((a, b) =>
        (b.release_date || '').localeCompare(a.release_date || ''),
      );

    case 'title.asc':
    case 'title':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    default:
      return sorted.sort(
        (a, b) => (b.popularity || 0) - (a.popularity || 0),
      );
  }
}

function getRelatedMovies(movie) {
  const genreIds = movie.genre_ids || [];

  return DEMO_MOVIES.filter(
    (item) =>
      item.id !== movie.id &&
      item.genre_ids.some((genreId) => genreIds.includes(genreId)),
  ).slice(0, 5);
}

export async function getTrending(signal) {
  checkAbort(signal);
  return movieResults(sortMovies(DEMO_MOVIES));
}

export async function getPopular(signal) {
  checkAbort(signal);
  return movieResults(
    [...DEMO_MOVIES].sort(
      (a, b) => (b.vote_average || 0) - (a.vote_average || 0),
    ),
  );
}

export async function getNowPlaying(signal) {
  checkAbort(signal);
  return movieResults(
    [...DEMO_MOVIES].sort((a, b) =>
      (b.release_date || '').localeCompare(a.release_date || ''),
    ),
  );
}

export async function searchMovies(query, page = 1, signal) {
  checkAbort(signal);

  const searchTerm = String(query || '').trim().toLowerCase();

  if (!searchTerm) {
    return movieResults([], page);
  }

  const filtered = DEMO_MOVIES.filter((movie) => {
    const genres = getMovieGenres(movie)
      .map((genre) => genre.name)
      .join(' ');

    return (
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.overview.toLowerCase().includes(searchTerm) ||
      genres.toLowerCase().includes(searchTerm) ||
      String(movie.release_date).includes(searchTerm)
    );
  });

  return movieResults(filtered, page);
}

export async function discoverMovies(filters = {}, page = 1, signal) {
  checkAbort(signal);

  const {
    genre,
    with_genres,
    year,
    primary_release_year,
    rating,
    vote_average_gte,
    sort_by,
  } = filters;

  let filtered = [...DEMO_MOVIES];

  const selectedGenre = genre ?? with_genres;

  if (selectedGenre && selectedGenre !== 'all') {
    const genreId = Number(selectedGenre);

    if (!Number.isNaN(genreId)) {
      filtered = filtered.filter((movie) =>
        movie.genre_ids.includes(genreId),
      );
    }
  }

  const selectedYear = year ?? primary_release_year;

  if (selectedYear && selectedYear !== 'all') {
    filtered = filtered.filter(
      (movie) => movie.release_date?.slice(0, 4) === String(selectedYear),
    );
  }

  const minimumRating = rating ?? vote_average_gte;

  if (
    minimumRating !== undefined &&
    minimumRating !== '' &&
    Number(minimumRating) > 0
  ) {
    filtered = filtered.filter(
      (movie) => movie.vote_average >= Number(minimumRating),
    );
  }

  filtered = sortMovies(filtered, sort_by || 'popularity');

  return movieResults(filtered, page);
}

export async function getGenres(signal) {
  checkAbort(signal);
  return { genres: DEMO_GENRES };
}

export async function getMovieDetails(id, signal) {
  checkAbort(signal);

  const movie = DEMO_MOVIES.find(
    (item) => String(item.id) === String(id),
  );

  if (!movie) {
    throw new Error('This movie is not available in the demo collection.');
  }

  return {
    ...movie,
    poster_path: movie.poster_path || DEMO_POSTERS[movie.id] || null,
    backdrop_path: movie.backdrop_path || DEMO_POSTERS[movie.id] || null,
    genres: getMovieGenres(movie),
    credits: movie.credits || { cast: [], crew: [] },
    recommendations: movieResults(getRelatedMovies(movie)),
  };
}

export async function getRecommendations(id, signal) {
  checkAbort(signal);

  const movie = DEMO_MOVIES.find(
    (item) => String(item.id) === String(id),
  );

  if (!movie) {
    return movieResults([]);
  }

  return movieResults(getRelatedMovies(movie));
}

const DEMO_POSTERS = {
  27205: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
  157336: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  155: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  872585: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
  346698: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
  569094: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
  496243: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
};
