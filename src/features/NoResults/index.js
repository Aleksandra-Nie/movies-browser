import { useLocation } from "react-router-dom";
import { Wrapper } from "../../common/index";
import { Container, Title } from "./styled";
import { ReactComponent as NoResultsPhoto } from "../../images/noResults.svg";

const NoResults = () => {
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search);

    return (
        <Wrapper>
            <Container>
                <Title>Sorry, there are no results for "{searchParam}"</Title>
                <NoResultsPhoto />
            </Container>
        </Wrapper>
    );
};

export default NoResults;