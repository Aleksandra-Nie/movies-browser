import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/moviesSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchMoviesData } from "./features/movies/moviesSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchMoviesData);

export default store;