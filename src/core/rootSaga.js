import { all } from "redux-saga/effects";
import { watchFetchMoviesByQuery, watchFetchMoviesData } from "../features/movies/moviesSaga";
import {
    watchFetchPeopleByQuery,
    watchFetchPeopleData,
} from "../features/people/peopleSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMoviesData(),
        watchFetchMoviesByQuery(),
        watchFetchPeopleData(),
        watchFetchPeopleByQuery(),
    ]);
};