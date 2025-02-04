const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTlmZThhMWUxMTRlN2UxN2U0ZGY4OGFhZDc5MWY5MyIsIm5iZiI6MTczODU5MTU3MC4yNTMsInN1YiI6IjY3YTBjZDUyMGQxOWYzMGFjMTk1OTk3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9SZkMJqrboGgMgLn8f5ofyyhNar9OAyGLvFQ5ld-kdY",
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
  }
};

export const fetchMovies = async (page) => {
  try {
    const moviesData = await fetchData(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page || 1}`
    );
    return moviesData;
  } catch (error) {
    console.error("Error fetching movies", error);
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const genresData = await fetchData(
      "https://api.themoviedb.org/3/genre/movie/list"
    );
    return genresData.genres;
  } catch (error) {
    console.error("Error fetching genres", error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const movieDetails = await fetchData(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    );
    return movieDetails;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const movieCredits = await fetchData(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
    );
    return movieCredits;
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    return null;
  }
};
