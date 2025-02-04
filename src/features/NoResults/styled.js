import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    align-self: flex-start;
    margin: 56px 0 0 0;
    color: ${({ theme }) => theme.color.woodsmoke};
    font-size: 36px;
    font-weight: 600;
`;