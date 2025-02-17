import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentPage } from "../people/peopleSlice";
import { setCurrentPage as setMoviesCurrentPage } from "../movies/moviesSlice";
import searchQueryParamName from "../searchQueryParamName";

const usePagination = ({ fetchData, setData, selectTotalPages }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get(searchQueryParamName) || "";
  const urlPage = parseInt(queryParams.get("page")) || 1;

  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    if (location.pathname === "/people") {
      dispatch(setCurrentPage(urlPage));
    }
    if (location.pathname === "/movies") {
      dispatch(setMoviesCurrentPage(urlPage));
    }
  }, [urlPage, location.pathname, dispatch]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = query
        ? await fetchData(query, urlPage)
        : await fetchData(urlPage);

      if (data) {
        dispatch(setData(data));
      }
      setTimeout(() => setLoading(false), 500);
    };

    getData();
  }, [urlPage, query, fetchData, dispatch, setData]);

  const changePage = (newPage) => {
    setLoading(true);
    if (query) {
      navigate(
        `${location.pathname}?${searchQueryParamName}=${query}&page=${newPage}`,
        { replace: true }
      );
    } else {
      navigate(`${location.pathname}?page=${newPage}`, { replace: true });
    }
  };

  return {
    currentPage: urlPage,
    totalPages,
    nextPage: () => urlPage < totalPages && changePage(urlPage + 1),
    previousPage: () => urlPage > 1 && changePage(urlPage - 1),
    lastPage: () => changePage(totalPages),
    firstPage: () => changePage(1),
    loading,
  };
};

export default usePagination;
