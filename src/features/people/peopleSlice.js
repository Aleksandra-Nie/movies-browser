import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
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
    },
});

export const { fetchPeopleFailure, fetchPeopleSuccess, fetchPeopleRequest } = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;

export default peopleSlice.reducer;