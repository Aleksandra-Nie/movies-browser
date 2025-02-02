import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesFailure, fetchMoviesRequest, fetchMoviesSuccess } from "./moviesSlice";
import { fetchGenres, fetchMovies } from "./fetchMoviesData";

function* fetchMoviesDataHandler(action) {
    try {
        const page = action.payload.page;
        const movies = yield call(fetchMovies, page);
        const genres = yield call(fetchGenres);
        yield put(fetchMoviesSuccess({ movies, genres, page }));

    } catch (error) {
        yield put(fetchMoviesFailure(error));
    };
};

export function* watchFetchMoviesData() {
    yield takeLatest(fetchMoviesRequest.type, fetchMoviesDataHandler);
};