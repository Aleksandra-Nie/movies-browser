import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        genres: [],
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
    },
});

export const { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;

export default moviesSlice.reducer;