import styled from "styled-components";

export const Header = styled.h2`
    font-size: 36px;
    font-weight: 600;
    margin-top: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 18px;
        margin-top: 24px;
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