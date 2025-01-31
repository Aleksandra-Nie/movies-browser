import { put, call, takeLatest, all, select } from "redux-saga/effects";
import { fetchPeople, fetchPeopleByQuery, fetchPeopleCredits, fetchPersonDetails } from "./fetchPeopleData";
import {
    fetchPeopleByQueryFailure,
    fetchPeopleByQueryRequest,
    fetchPeopleByQuerySuccess,
    fetchPeopleFailure,
    fetchPeopleRequest,
    fetchPeopleSuccess,
    selectCurrentPage,
    setCurrentPage,
    setPeopleCredits,
    setPersonDetails,
} from "./peopleSlice";

function* fetchPeopleDataHandler(action) {
    try {
        const page = action.payload.page;
        const people = yield call(fetchPeople, page);
        yield put(fetchPeopleSuccess(people));

    } catch (error) {
        yield put(fetchPeopleFailure(error));
    };
};

function* fetchPeopleDataOnPageChangeHandler() {
    try {
        const currentPage = yield select(selectCurrentPage);
        const people = yield call(fetchPeople, currentPage);

        const personDetails = yield all(people.results.map(person =>
            call(fetchPersonDetails, person.id),
        ));
        const personCredits = yield all(people.results.map(person =>
            call(fetchPeopleCredits, person.id),
        ));
        yield put(setPersonDetails(personDetails));
        yield put(setPeopleCredits(personCredits));

    } catch (error) {
        yield put(fetchPeopleFailure(error));
    };
};

function* fetchPeopleByQueryHandler(action) {
    try {
        const searchParams = action.payload;
        const peopleByQuery = yield call(fetchPeopleByQuery, searchParams);
        yield put(fetchPeopleByQuerySuccess(peopleByQuery));
    } catch (error) {
        yield put(fetchPeopleByQueryFailure(error));
    }
};

export function* watchFetchPeopleByQuery() {
    yield takeLatest(fetchPeopleByQueryRequest.type, fetchPeopleByQueryHandler);
};

export function* watchFetchPeopleData() {
    yield takeLatest(fetchPeopleRequest.type, fetchPeopleDataHandler);
};

export function* watchFetchPeopleDataOnPageChange() {
    yield takeLatest(setCurrentPage.type, fetchPeopleDataOnPageChangeHandler);
};