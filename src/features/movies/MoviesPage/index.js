import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchMovies, fetchMoviesByQuery } from "../fetchMoviesData";
import { selectMovies, selectTotalPages, setMovies, setTotalPages } from "../moviesSlice";
import MoviesContainer from "../MoviesContainer";
import Scrollbar from "../../Scrollbar";
import NoResults from "../../NoResults";
import { FadeInWrapper } from "../../../common/index";
import searchQueryParamName from "../../searchQueryParamName";
import Loader from "../../Loader";
import ErrorScreen from "../../ErrorScreen";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search).get(searchQueryParamName);

  const moviesData = useSelector(selectMovies);
  const movies = moviesData?.results;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
      }, 1000);
    }
  };

  useEffect(() => {
    if (!searchParams) {
      dispatch(setTotalPages(500));
      loadData(fetchMovies);
    } else {
      loadData(fetchMoviesByQuery);
    }
  }, [searchParams, dispatch,]);

  useEffect(() => {
    if (!searchParams) {
      navigate(location.pathname, { replace: true });
    }
  }, [searchParams, navigate, location.pathname]);

  if (loading) {
    return <Loader />;
  } else if (!moviesData) {
    return <ErrorScreen />;
  } else if (Array.isArray(movies) && movies.length === 0 && searchParams) {
    return <NoResults />;
  } else {

    return (
      <FadeInWrapper>
        <MoviesContainer />
        <Scrollbar
          fetchData={searchParams ? fetchMoviesByQuery : fetchMovies}
          setData={setMovies}
          selectTotalPages={selectTotalPages}
        />
      </FadeInWrapper>
    );
  }
};

export default MoviesPage;
