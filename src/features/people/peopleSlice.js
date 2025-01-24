import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        currentPage: 1,
        totalPages: 500,
        loading: false,
        error: null,
    },
    reducers: {
        fetchPeopleRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchPeopleSuccess: (state, { payload }) => {
            state.people = payload;
            state.loading = false;
            state.error = null;
        },
        fetchPeopleFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload;
        },
    },
});

export const { fetchPeopleFailure, fetchPeopleSuccess, fetchPeopleRequest } = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectCurrentPage = (state) => selectPeopleState(state).currentPage;
export const selectTotalPages = (state) => selectPeopleState(state).totalPages;

export default peopleSlice.reducer;