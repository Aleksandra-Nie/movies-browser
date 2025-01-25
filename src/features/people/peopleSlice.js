import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        personDetails: [],
        peopleCredits: [],
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
        setPeople: (state, { payload }) => {
            state.people = payload;
        },
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload;
        },
        setPersonDetails: (state, { payload }) => {
            state.personDetails = payload;
        },
        setPeopleCredits: (state, { payload }) => {
            state.peopleCredits = payload;
        },
    },
});

export const {
    fetchPeopleFailure,
    fetchPeopleSuccess,
    fetchPeopleRequest,
    setPeople,
    setCurrentPage,
    setPersonDetails,
    setPeopleCredits,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectCurrentPage = (state) => selectPeopleState(state).currentPage;
export const selectTotalPages = (state) => selectPeopleState(state).totalPages;
export const selectPersonDetails = (state) => selectPeopleState(state).personDetails || [];
export const selectPeopleCredits = (state) => selectPeopleState(state).peopleCredits || [];

export const getPersonCreditsById = (state, personId) => {
    const peopleCredits = selectPeopleCredits(state);
    return peopleCredits.find(({ id }) => id === parseInt(personId));
};

export const getPersonDetailsById = (state, personId) => {
    const peopleWithDetails = selectPersonDetails(state);
    return peopleWithDetails.find(({ id }) => id === parseInt(personId));
};

export default peopleSlice.reducer;