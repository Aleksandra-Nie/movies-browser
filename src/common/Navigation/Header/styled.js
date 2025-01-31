import styled from "styled-components";
import { ReactComponent as VideoIcon } from "../../../icons/Video.svg";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 80px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 100%;
    height: 44px;
    justify-content: flex-start;
    gap: 24px;  
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
    height: 44px;
    gap: 24px; 
  }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  width: 40px;
  height: 40px;

  @media(max-width:${({ theme }) => theme.breakpoints.tablet}px){
    width: 17px;
    height: 17px;
  }

  @media(max-width:${({ theme }) => theme.breakpoints.mobileXS}px){
    width: 13px;
    height: 13px;
  }
`;

export const TextLogo = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -1.5px;
  margin: 0;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 13px;
    letter-spacing: -0.5px;
  }

  @media(max-width:${({ theme }) => theme.breakpoints.mobileXS}px){
    font-size: 10px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media(max-width:${({ theme }) => theme.breakpoints.tablet}px){
    font-size: 13px;
    line-height: 16.9pxpx;
    letter-spacing: -0.5px;
    gap: 8px;
    margin: 32px 0px 33px 0px;
  }

  @media(max-width:${({ theme }) => theme.breakpoints.mobileXS}px){
    font-size: 10px;
    gap: 5px;
  }
`;

export const NavSection = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 16px; 
    justify-content: flex-start;
  }
`;

export const NavItem = styled.li`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 13px 25px;
  border-radius: 24px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 12px;
    line-height: 18px;
    padding: 8px 14px;
    border-radius: 29px;
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
