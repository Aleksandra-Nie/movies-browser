import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchMoviesRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMoviesSuccess: (state, { payload }) => {
            state.movies = payload;
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

export default moviesSlice.reducer;