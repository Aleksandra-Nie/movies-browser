import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesByQueryFailure,
  fetchMoviesByQueryRequest,
  fetchMoviesByQuerySuccess,
  fetchMoviesFailure,
  fetchMoviesRequest,
  fetchMoviesSuccess,
} from "./moviesSlice";
import { fetchGenres, fetchMovies, fetchMoviesByQuery } from "./fetchMoviesData";

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

function* fetchMoviesByQueryHandler(action) {
  try {
    const searchParams = action.payload;
    const moviesByQuery = yield call(fetchMoviesByQuery, searchParams);
    yield put(fetchMoviesByQuerySuccess(moviesByQuery));
  } catch (error) {
    yield put(fetchMoviesByQueryFailure(error));
  };
};

export function* watchFetchMoviesByQuery() {
  yield takeLatest(fetchMoviesByQueryRequest.type, fetchMoviesByQueryHandler);
};

export function* watchFetchMoviesData() {
  yield takeLatest(fetchMoviesRequest.type, fetchMoviesDataHandler);
};
