import { Wrapper } from "../../common";
import { ErrorIcon, ErrorContainer, ErrorTitle, ErrorText, HomeButton } from "./styled";

const ErrorScreen = () => (
    <Wrapper>
        <ErrorContainer>
            <ErrorIcon />
            <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
            <ErrorText>Please check your network connection <br /> and try again.</ErrorText>
            <HomeButton href="/">Back to homepage</HomeButton>
        </ErrorContainer>
    </Wrapper>
);

export default ErrorScreen;