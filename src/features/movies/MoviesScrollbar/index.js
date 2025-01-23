import { usePagination } from "./usePagination";
import { Wrapper, Vector, Button, PageCounter } from "./styled";

const MoviesScrollbar = () => {
    const {
        currentPage,
        totalPages,
        nextPage,
        previousPage,
        firstPage,
        lastPage,
    } = usePagination();

    return (
        <Wrapper>
            <Button
                onClick={() => firstPage()}
                disabled={currentPage === 1}
            >
                <Vector />First
            </Button>

            <Button
                onClick={() => previousPage()}
                disabled={currentPage === 1}
            >
                <Vector />Previous
            </Button>

            <PageCounter>Page {currentPage} of {totalPages}</PageCounter>

            <Button
                onClick={() => nextPage()}
                disabled={currentPage === totalPages}
                $blueButton
            >
                Next<Vector $blueVector />
            </Button>

            <Button
                onClick={() => lastPage()}
                disabled={currentPage === totalPages}
                $blueButton
            >
                Last<Vector $blueVector />
            </Button>
        </Wrapper>
    );
};

export default MoviesScrollbar;