import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentPage } from "../people/peopleSlice";
import { setCurrentPage as setMoviesCurrentPage } from "../movies/moviesSlice";
import searchQueryParamName from "../searchQueryParamName";

const usePagination = ({ fetchData, setData, selectTotalPages }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

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
    }, [urlPage]);

    useEffect(() => {
        const getData = async () => {
            const data = query
                ? await fetchData(query, urlPage)
                : await fetchData(urlPage);

            if (data) {
                dispatch(setData(data));
            }
        };
        getData();
    }, [urlPage, query]);

    const nextPage = () => {
        if (urlPage < totalPages) {
            const next = urlPage + 1;
            if (query) {
                navigate(
                    `${location.pathname}?${searchQueryParamName}=${query}&page=${next}`, { replace: true }
                );
            } else {
                navigate(`${location.pathname}?page=${next}`, { replace: true });
            }
        }
    };

    const previousPage = () => {
        if (urlPage > 1) {
            const prev = urlPage - 1;
            if (query) {
                navigate(
                    `${location.pathname}?${searchQueryParamName}=${query}&page=${prev}`, { replace: true }
                );
            } else {
                navigate(`${location.pathname}?page=${prev}`, { replace: true });
            }
        }
    };

    const lastPage = () => {
        if (query) {
            navigate(
                `${location.pathname}?${searchQueryParamName}=${query}&page=${totalPages}`, { replace: true }
            );
        } else {
            navigate(`${location.pathname}?page=${totalPages}`, { replace: true });
        }
    };

    const firstPage = () => {
        if (query) {
            navigate(
                `${location.pathname}?${searchQueryParamName}=${query}&page=1`, { replace: true }
            );
        } else {
            navigate(`${location.pathname}?page=1`, { replace: true });
        }
    };

    return {
        currentPage: urlPage,
        totalPages,
        nextPage,
        previousPage,
        lastPage,
        firstPage,
    };
};

export default usePagination;
