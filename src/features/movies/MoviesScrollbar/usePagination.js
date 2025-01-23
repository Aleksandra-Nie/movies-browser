import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage, selectTotalPages, setCurrentPage, setMovies } from "../moviesSlice";
import { fetchMovies } from "../fetchMoviesData";

export const usePagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

    useEffect(() => {
        const getMovies = async () => {
            const moviesData = await fetchMovies(currentPage);
            if (moviesData) {
                dispatch(setMovies(moviesData));
            }
        };
        getMovies();
    }, [currentPage]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    const lastPage = () => {
        dispatch(setCurrentPage(totalPages));
    };

    const firstPage = () => {
        dispatch(setCurrentPage(1));
    };

    return {
        currentPage,
        totalPages,
        nextPage,
        previousPage,
        lastPage,
        firstPage,
    };
};