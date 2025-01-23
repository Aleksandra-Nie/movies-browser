import styled from "styled-components";

export const Tile = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.woodsmoke};
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.softBlue};

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        padding: 8px;
    };
`;

export const PersonPhoto = styled.img`
    border-radius: 5px;
    width: 100%;
    height: auto;
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
`;