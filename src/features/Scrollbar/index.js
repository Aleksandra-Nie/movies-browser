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
                <Vector $buttonDisabled={currentPage === 1} />
                {isMobile ? (<Vector $buttonDisabled={currentPage === 1} />) : "First"}
            </Button>
            <Button
                onClick={() => previousPage()}
                disabled={currentPage === 1}
            >
                <Vector $buttonDisabled={currentPage === 1} />
                {isMobile ? "" : "Previous"}
            </Button>
            <PageCounter>
                Page <PageNumber>{currentPage} </PageNumber>
                of <PageNumber>{totalPages}</PageNumber>
            </PageCounter>
            <Button
                onClick={() => nextPage()}
                disabled={currentPage === totalPages}
            >
                {isMobile ? "" : "Next"}
                <Vector
                    $rightVector
                    $buttonDisabled={currentPage === totalPages}
                />
            </Button>
            <Button
                onClick={() => lastPage()}
                disabled={currentPage === totalPages}
            >
                {isMobile ? (<Vector $rightVector $buttonDisabled={currentPage === totalPages} />) : "Last"}
                <Vector
                    $rightVector
                    $buttonDisabled={currentPage === totalPages}
                />
            </Button>
        </Wrapper>
    );
};

export default Scrollbar;