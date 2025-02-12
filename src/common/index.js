import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.main`
  max-width: 1368px;
  margin: auto;
  padding: 0 16px 16px 16px;
`;

export const FadeInWrapper = styled(Wrapper)`
  animation: ${fadeIn} 1s ease-out; 
`;