import { Wrapper } from "../../common";
import { Title, LoaderContainer, StyledLoader } from "./styled";

const Loader = () => (
    <Wrapper>
        <Title>Search results for "Mulan"</Title>
        <LoaderContainer>
            <StyledLoader />
        </LoaderContainer>
    </Wrapper>
);

export default Loader;