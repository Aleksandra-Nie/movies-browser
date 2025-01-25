import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const usePagination = ({ fetchData, setCurrentPage, selectCurrentPage, selectTotalPages, setData, }) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData(currentPage);
            if (data) {
                dispatch(setData(data));
            }
        };
        getData();
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

export default usePagination;