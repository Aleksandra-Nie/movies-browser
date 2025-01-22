import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesFailure, fetchMoviesRequest, fetchMoviesSuccess } from "./moviesSlice";
import { fetchGenres, fetchMovies } from "./fetchMoviesData";

function* fetchMoviesDataHandler() {
    try {
        const movies = yield call(fetchMovies);
        const genres = yield call(fetchGenres);
        yield put(fetchMoviesSuccess({ movies, genres }));

    } catch (error) {
        yield put(fetchMoviesFailure(error));
    };
};

export function* watchFetchMoviesData() {
    yield takeLatest(fetchMoviesRequest.type, fetchMoviesDataHandler);
};