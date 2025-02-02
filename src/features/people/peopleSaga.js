import { put, call, takeLatest } from "redux-saga/effects";
import { fetchPeople, fetchPeopleByQuery } from "./fetchPeopleData";
import {
    fetchPeopleByQueryFailure,
    fetchPeopleByQueryRequest,
    fetchPeopleByQuerySuccess,
    fetchPeopleFailure,
    fetchPeopleRequest,
    fetchPeopleSuccess,
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