import styled from "styled-components";
import { ReactComponent as VideoIcon } from "../../../icons/Video.svg";

export const StyledHeader = styled.header`
  width: 100%;
  height: 94px;
  display: flex;
  align-items: center;
  gap: 80px;
  background: ${({ theme }) => theme.color.black};

  @media (max-width: 1086px) {
    width: 100%;
    gap: 15px;
  }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  width: 40px;
  height: 40px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2%;
  gap: 12px;

  @media (max-width: 1086px) {
    font-size: 18px;
  }
`;

export const TextLogo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: 1086px) {
    font-size: 18px;
  }
`;

export const NavSection = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  padding: 13px 24px;
  border-radius: 30px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};
  transition:
    background-color 0.5s,
    color 0.5s;

  @media (max-width: 1086px) {
    font-size: 13px;
    line-height: 19.5px;
    padding: 10px 18px;
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
  }

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.white};
  }
`;
