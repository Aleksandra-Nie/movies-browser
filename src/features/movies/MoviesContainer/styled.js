import styled from "styled-components";

export const StyledMoviesContainer = styled.div`
    max-width: 1368px;
    margin: 56px auto 0 auto;

    @media(max-width: 1440px){
        margin: 16px;
    };
`;

export const Header = styled.h2`
    font-size: 36px;
    font-weight: 600;

    @media(max-width: 480px){
        font-size: 18px;
    };
`;

export const MovieTilesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;

    @media(max-width: 1440px){
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
    };

    @media(max-width: 767px){
        grid-template-columns: 1fr;
    };
`;