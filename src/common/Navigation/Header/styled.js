import styled from "styled-components";
import { ReactComponent as VideoIcon } from "../../../icons/Video.svg";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 80px;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 288px;
    height: 44px;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 288px;
    height: 44px;
    gap: 15px;
  }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  width: 40px;
  height: 40px;
`;

export const TextLogo = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  margin: 0;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NavSection = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 16px;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 12px;
    justify-content: space-between;
  }
`;

export const NavItem = styled.li`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 13px 25px;
  border-radius: 30px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};
  transition:
    background-color 0.5s,
    color 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 13px;
    line-height: 19.5px;
    padding: 10px 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    line-height: 18px;
    padding: 8px 14px;
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
