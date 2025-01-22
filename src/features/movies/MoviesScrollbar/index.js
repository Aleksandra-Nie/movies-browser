import { Wrapper, Vector, Button, PageCounter } from "./styled";

const MoviesScrollbar = () => (
    <Wrapper>
        <Button><Vector />First</Button>
        <Button><Vector />Previous</Button>
        <PageCounter>Page 1 of 500</PageCounter>
        <Button $blueButton>Next<Vector $blueVector /></Button>
        <Button $blueButton>Last<Vector $blueVector /></Button>
    </Wrapper>
);

export default MoviesScrollbar;