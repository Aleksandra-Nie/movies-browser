const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE3MWM4N2U2ODUyYjkxZGYxZDk5OWMwNGFmMmIwOSIsIm5iZiI6MTczNzQ4NzA5NS41NDEsInN1YiI6IjY3OGZmMmY3NDYyODg1NWYzOWYwOGQxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yBw8LA0ArFjdg2cio5sk44Ye7f00q_8Zo1BNUlyTfBg',
    },
};

const fetchData = async (url) => {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();

    } catch (error) {
        console.error("Fetching data failed!", error);
    };
};

export const fetchPeople = async (page) => {
    try {
        const peopleData = await fetchData(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${page || 1}`);
        return peopleData;
    } catch (error) {
        console.error("Error fetching people", error);
        return [];
    };
};

export const fetchPersonDetails = async (personId) => {
    try {
        const personDetails = await fetchData(`https://api.themoviedb.org/3/person/${personId}?language=en-US`);
        return personDetails;
    } catch (error) {
        console.error("Error fetching person details", error);
        return [];
    };
};

export const fetchPeopleCredits = async (personId) => {
    try {
        const peopleCredits = await fetchData(`https://api.themoviedb.org/3/person/${personId}/combined_credits?language=en-US`);
        return peopleCredits;
    } catch (error) {
        console.error("Error fetching people credits", error);
        return [];
    };
};

export const fetchPeopleByQuery = async (query, page) => {
    try {
        const people = await fetchData(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=${page || 1}`);
        return people;
    } catch (error) {
        console.error("Error fetching people by query", error);
        return [];
    };
};
