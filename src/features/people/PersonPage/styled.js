import styled from "styled-components";

export const PersonInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

export const BirthInfo = styled.div`
    font-size: 18px;
    font-weight: 400;
    margin: 0;
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
`;