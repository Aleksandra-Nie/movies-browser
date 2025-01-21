export const fetchMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE3MWM4N2U2ODUyYjkxZGYxZDk5OWMwNGFmMmIwOSIsIm5iZiI6MTczNzQ4NzA5NS41NDEsInN1YiI6IjY3OGZmMmY3NDYyODg1NWYzOWYwOGQxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yBw8LA0ArFjdg2cio5sk44Ye7f00q_8Zo1BNUlyTfBg',
        },
    };

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const movies = await response.json();
        return movies;

    } catch (error) {
        console.error("Something went wrong!", error);
    };
};