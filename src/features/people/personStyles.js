import styled, { css } from "styled-components";

export const Tile = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.woodsmoke};
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.softBlue};
   

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        padding: 16px;
    };

    ${({ $personDetails }) => $personDetails && css`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 40px;
        padding: 40px;
    `};
`;

export const PersonPageTile = styled(Tile)`
    margin-top: 64px;  
`;

export const PersonPhoto = styled.img`
    border-radius: 5px;
    width: 100%;
    height: auto;

    ${({ $personDetails }) => $personDetails && css`
        width: 399px;
        height: 564px;

        @media(max-width: ${({ theme }) => theme.breakpoints.tabletMedium}px){
            width: 280px;
            height: auto;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
            width: 180px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
            width: 116px;
        };
    `};
`;

export const PersonName = styled.p`
    text-align: center;
    margin: 12px 0;
    font-size: 22px;
    font-weight: 500;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        font-size: 14px;
        margin: 8px 0 16px 0;
    };

    ${({ $personDetails }) => $personDetails && css`
        color: ${({ theme }) => theme.color.black};
        font-size: 36px;
        font-weight: 600;
        margin: 6px 0 0 0;

        @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
            font-size: 14px;
            font-weight: 500;
            margin: 4px 0 0 0;
        };
    `};
`;