import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesFailure, fetchMoviesRequest, fetchMoviesSuccess } from "./moviesSlice";
import { fetchMovies } from "./fetchMovies";

function* fetchMoviesHandler() {
    try {
        const movies = yield call(fetchMovies);
        yield put(fetchMoviesSuccess(movies));

    } catch (error) {
        yield put(fetchMoviesFailure(error));
    }
};

export function* watchFetchMovies() {
    yield takeLatest(fetchMoviesRequest.type, fetchMoviesHandler);
};