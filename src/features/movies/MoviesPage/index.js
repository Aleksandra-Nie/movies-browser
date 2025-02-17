import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchMovies, fetchMoviesByQuery } from "../fetchMoviesData";
import { selectMovies, selectTotalPages, setMovies, setTotalPages } from "../moviesSlice";
import MoviesContainer from "../MoviesContainer";
import Scrollbar from "../../Scrollbar";
import searchQueryParamName from "../../searchQueryParamName";
import Loader from "../../Loader";
import ErrorScreen from "../../ErrorScreen";
import { Header } from "../../sharedStyles";
import { FadeInWrapper } from "../../../common/index";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get(searchQueryParamName);

  const moviesData = useSelector(selectMovies);
  const movies = moviesData?.results || [];

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  const loadData = async (fetchFunction) => {
    try {
      setLoading(true);
      setError(false);
      await fetchFunction();
    } catch (err) {
      console.error("Error loading movies", err);
      setError(true);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (!searchParams) {
      dispatch(setTotalPages(500));
      loadData(fetchMovies);
    } else {
      loadData(() => fetchMoviesByQuery(searchParams));
    }
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (!loading && !error) {
      setTimeout(() => {
        setContentReady(true);
      }, 50);
    } else {
      setContentReady(false);
    }
  }, [loading, error]);

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <>
      {loading ? (
        <FadeInWrapper>
          {searchParams && <Header>Search results for "{searchParams}"</Header>}
          <Loader />
        </FadeInWrapper>
      ) : (
        <>
          <MoviesContainer />

          {contentReady && movies.length > 0 && (
            <Scrollbar
              fetchData={searchParams ? fetchMoviesByQuery : fetchMovies}
              setData={setMovies}
              selectTotalPages={selectTotalPages}
            />
          )}
        </>
      )}
    </>
  );
};

export default MoviesPage;
