import styled from "styled-components";

export const Background = styled.div`
  background: ${({ theme }) => theme.color.black};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1370px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  margin: 0 auto;
`;
