import { put, call, takeLatest } from "redux-saga/effects";
import { fetchPeopleFailure, fetchPeopleRequest, fetchPeopleSuccess } from "./peopleSlice";
import { fetchPeople } from "./fetchPeopleData";

function* fetchPeopleDataHandler() {
    try {
        const people = yield call(fetchPeople);
        yield put(fetchPeopleSuccess(people));
    } catch (error) {
        yield put(fetchPeopleFailure(error));
    };
};

export function* watchFetchPeopleData() {
    yield takeLatest(fetchPeopleRequest.type, fetchPeopleDataHandler);
};