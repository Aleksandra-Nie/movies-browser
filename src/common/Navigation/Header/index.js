import {
  HeaderContainer,
  IconWrapper,
  StyledVideoIcon,
  TextLogo,
  NavSection,
  NavItem,
} from "./styled";

export const Header = () => (
  <HeaderContainer>
    <IconWrapper>
      <StyledVideoIcon />
      <TextLogo>Movies Browser</TextLogo>
    </IconWrapper>
    <NavSection>
      <NavItem>MOVIES</NavItem>
      <NavItem>PEOPLE</NavItem>
    </NavSection>
  </HeaderContainer>
);
