import { useLocation } from "react-router-dom";

export const useQueryCurrentPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get("page")) || 1;

    return currentPage;
};
