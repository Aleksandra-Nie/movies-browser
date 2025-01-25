import styled from "styled-components";

export const Container = styled.div`
    margin: 16px;
`;

export const PersonInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        gap: 16px;
    };
`;

export const BirthInfo = styled.div`
    font-size: 18px;
    font-weight: 400;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        font-size: 12px;
    };
`;

export const BirthLabel = styled.p`
    color: ${({ theme }) => theme.color.stormGray};
    margin: 8px 0;
`;

export const BirthData = styled.span`
    margin-left: 10px;
    color: ${({ theme }) => theme.color.black};
`;

export const PersonProfile = styled.p`
    font-size: 20px;
    line-height: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMedium}px){
        font-size: 16px;
        line-height: 26px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        font-size: 14px;
        grid-column: 2 span;
    };
`;