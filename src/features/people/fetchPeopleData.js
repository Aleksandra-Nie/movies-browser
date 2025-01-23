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

export const fetchPeople = async () => {
    try {
        const peopleData = await fetchData("https://api.themoviedb.org/3/person/popular?language=en-US&page=1'");
        return peopleData;
    } catch (error) {
        console.error("Error fetching people", error);
        return [];
    };
};