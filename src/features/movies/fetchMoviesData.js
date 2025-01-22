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

export const fetchMovies = async () => {
    try {
        const moviesData = await fetchData("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");
        return moviesData.results;
    } catch (error) {
        console.error("Error fetching movies", error);
        return [];
    };
};

export const fetchGenres = async () => {
    try {
        const genresData = await fetchData("https://api.themoviedb.org/3/genre/movie/list");
        return genresData.genres;
    } catch (error) {
        console.error("Error fetching genres", error);
        return [];
    };
};