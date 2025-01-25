import { put, call, takeLatest, all, select } from "redux-saga/effects";
import { fetchPeopleFailure, fetchPeopleRequest, fetchPeopleSuccess, selectCurrentPage, setCurrentPage, setPersonDetails } from "./peopleSlice";
import { fetchPeople, fetchPersonDetails } from "./fetchPeopleData";

function* fetchPeopleDataHandler() {
    try {
        const people = yield call(fetchPeople);
        yield put(fetchPeopleSuccess(people));

        const personDetails = yield all(people.results.map(person =>
            call(fetchPersonDetails, person.id),
        ));
        yield put(setPersonDetails(personDetails));

    } catch (error) {
        yield put(fetchPeopleFailure(error));
    };
};

function* fetchPeopleDetailsOnPageChangeHandler() {
    try {
        const currentPage = yield select(selectCurrentPage);
        const people = yield call(fetchPeople, currentPage);

        const personDetails = yield all(people.results.map(person =>
            call(fetchPersonDetails, person.id),
        ));
        yield put(setPersonDetails(personDetails));

    } catch (error) {
        yield put(fetchPeopleFailure(error));
    };
};

export function* watchFetchPeopleData() {
    yield takeLatest(fetchPeopleRequest.type, fetchPeopleDataHandler);
};

export function* watchFetchPeopleDetailsOnPageChange() {
    yield takeLatest(setCurrentPage.type, fetchPeopleDetailsOnPageChangeHandler);
}