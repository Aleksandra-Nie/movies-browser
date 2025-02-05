import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    currentPage: 1,
    totalPages: 500,
    loading: false,
    error: null,
    movieDetails: null,
    movieCredits: null,
  },
  reducers: {
    fetchMoviesRequest: (state, action) => {
      state.loading = true;
      state.error = null;
      state.currentPage = action.payload.page;
    },
    fetchMoviesSuccess: (state, { payload }) => {
      const { movies, genres, page } = payload;
      state.movies = movies;
      state.genres = genres;
      state.currentPage = page;
      state.loading = false;
      state.error = null;
    },
    fetchMoviesFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    fetchMoviesByQueryRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesByQuerySuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.movies = payload;
      state.totalPages = payload.total_pages;
    },
    fetchMoviesByQueryFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setMovieDetails: (state, { payload }) => {
      state.movieDetails = payload;
    },
    setMovieCredits: (state, { payload }) => {
      state.movieCredits = payload;
    },
  },
});

export const {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMoviesByQueryRequest,
  fetchMoviesByQuerySuccess,
  fetchMoviesByQueryFailure,
  setCurrentPage,
  setMovies,
  setMovieDetails,
  setMovieCredits,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectCurrentPage = (state) =>
  selectMoviesState(state).currentPage;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;
export const selectMovieDetails = (state) =>
  selectMoviesState(state).movieDetails || {};
export const selectMovieCredits = (state) =>
  selectMoviesState(state).movieCredits || {};

export const getMovieDetailsById = (state, movieId) => {
  const movieDetails = selectMovieDetails(state);
  return movieDetails?.id === parseInt(movieId) ? movieDetails : null;
};

export const getMovieCreditsById = (state, movieId) => {
  const movieCredits = selectMovieCredits(state);
  if (Array.isArray(movieCredits)) {
    return movieCredits.find(({ id }) => id === parseInt(movieId));
  }
  return movieCredits?.id === parseInt(movieId) ? movieCredits : null;
};

export default moviesSlice.reducer;
