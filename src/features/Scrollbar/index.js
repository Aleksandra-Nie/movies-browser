import useWindowSize from "./useWindowSize";
import usePagination from "./usePagination";
import { Wrapper, Vector, Button, PageCounter, PageNumber } from "./styled";

const Scrollbar = ({
    fetchData,
    selectTotalPages,
    setData,
}) => {
    const isMobile = useWindowSize(480);
    const {
        currentPage,
        totalPages,
        nextPage,
        previousPage,
        firstPage,
        lastPage,
    } = usePagination({
        fetchData,
        selectTotalPages,
        setData,
    });

    return (
        <Wrapper>
            <Button
                onClick={() => firstPage()}
                disabled={currentPage === 1}
            >
                <Vector />{isMobile ? (<Vector />) : "First"}
            </Button>

            <Button
                onClick={() => previousPage()}
                disabled={currentPage === 1}
            >
                <Vector />{isMobile ? "" : "Previous"}
            </Button>

            <PageCounter>Page <PageNumber>{currentPage}</PageNumber> of <PageNumber>{totalPages}</PageNumber></PageCounter>

            <Button
                onClick={() => nextPage()}
                disabled={currentPage === totalPages}
                $blueButton
            >
                {isMobile ? "" : "Next"}<Vector $blueVector />
            </Button>

            <Button
                onClick={() => lastPage()}
                disabled={currentPage === totalPages}
                $blueButton
            >
                {isMobile ? (<Vector $blueVector />) : "Last"}<Vector $blueVector />
            </Button>
        </Wrapper>
    );
};

export default Scrollbar;