import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentPage } from "../people/peopleSlice";

const usePagination = ({ fetchData, setData, selectTotalPages }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const urlPage = parseInt(queryParams.get("page")) || 1;

    const totalPages = useSelector(selectTotalPages);

    useEffect(() => {
        dispatch(setCurrentPage(urlPage));
    }, [urlPage]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData(urlPage);
            if (data) {
                dispatch(setData(data));
            }
        };
        getData();
    }, [urlPage]);

    const nextPage = () => {
        if (urlPage < totalPages) {
            const next = urlPage + 1;
            navigate(`${location.pathname}?page=${next}`, { replace: true });
        }
    };

    const previousPage = () => {
        if (urlPage > 1) {
            const prev = urlPage - 1;
            navigate(`${location.pathname}?page=${prev}`, { replace: true });
        }
    };

    const lastPage = () => {
        navigate(`${location.pathname}?page=${totalPages}`, { replace: true });
    };

    const firstPage = () => {
        navigate(`${location.pathname}?page=1`, { replace: true });
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
