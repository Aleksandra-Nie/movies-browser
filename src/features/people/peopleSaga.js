import { put, call, takeLatest, all, select } from "redux-saga/effects";
import { fetchPeople, fetchPeopleCredits, fetchPersonDetails } from "./fetchPeopleData";
import {
    fetchPeopleFailure,
    fetchPeopleRequest,
    fetchPeopleSuccess,
    selectCurrentPage,
    setCurrentPage,
    setPeopleCredits,
    setPersonDetails,
} from "./peopleSlice";

function* fetchPeopleDataHandler() {
    try {
        const people = yield call(fetchPeople);
        yield put(fetchPeopleSuccess(people));

        const personDetails = yield all(people.results.map(person =>
            call(fetchPersonDetails, person.id),
        ));
        const peopleCredits = yield all(people.results.map(person =>
            call(fetchPeopleCredits, person.id),
        ));
        yield put(setPersonDetails(personDetails));
        yield put(setPeopleCredits(peopleCredits));

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

export function* watchFetchPeopleData() {
    yield takeLatest(fetchPeopleRequest.type, fetchPeopleDataHandler);
};

export function* watchFetchPeopleDataOnPageChange() {
    yield takeLatest(setCurrentPage.type, fetchPeopleDataOnPageChangeHandler);
}