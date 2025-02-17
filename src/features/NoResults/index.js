import { useLocation } from "react-router-dom";
import { Container, Title, NoResultsImage } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const NoResults = () => {
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search).get(searchQueryParamName);

    return (
        <Container>
            <Title>Sorry, there are no results for "{searchParam}"</Title>
            <NoResultsImage />
        </Container>
    );
};

export default NoResults;