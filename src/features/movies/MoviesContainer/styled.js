import styled from "styled-components";

export const StyledMoviesContainer = styled.div`
    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px){
        margin: 16px;
    };
`;