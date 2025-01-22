import { useMemo } from "react";

const useGenresMap = (genres) => {
    return useMemo(() => {
        if (!Array.isArray(genres)) {
            return {};
        }

        return genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
        }, {})
    }, [genres]);
};

export default useGenresMap;