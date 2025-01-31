import { all } from "redux-saga/effects";
import { watchFetchMoviesData } from "../features/movies/moviesSaga";
import {
    watchFetchPeopleByQuery,
    watchFetchPeopleData,
    watchFetchPeopleDataOnPageChange
} from "../features/people/peopleSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMoviesData(),
        watchFetchPeopleData(),
        watchFetchPeopleDataOnPageChange(),
        watchFetchPeopleByQuery(),
    ]);
};