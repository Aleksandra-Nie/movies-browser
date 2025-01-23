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
    },
    reducers: {
        fetchMoviesRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMoviesSuccess: (state, { payload }) => {
            const { movies, genres } = payload;

            state.movies = movies;
            state.genres = genres;
            state.loading = false;
            state.error = false;
        },
        fetchMoviesFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        setMovies: (state, { payload }) => {
            state.movies = payload;
        },
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload;
        },
    },
});

export const { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure, setCurrentPage, setMovies } = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectCurrentPage = (state) => selectMoviesState(state).currentPage;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;

export default moviesSlice.reducer;