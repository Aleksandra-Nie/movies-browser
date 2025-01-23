import styled from "styled-components";

export const StyledMoviesContainer = styled.div`
    margin-top: 56px;

    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px){
        margin: 16px;
    };
`;

export const Header = styled.h2`
    font-size: 36px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 18px;
    };
`;

export const MovieTilesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px){
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        grid-template-columns: 1fr;
    };
`;