import { Wrapper } from "../../common";
import { LoaderContainer, StyledLoader } from "./styled";

const Loader = () => (
    <Wrapper>
        <LoaderContainer>
            <StyledLoader />
        </LoaderContainer>
    </Wrapper>
);

export default Loader;