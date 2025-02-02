import {
  HeaderContainer,
  IconWrapper,
  StyledVideoIcon,
  TextLogo,
  NavSection,
  NavItem,
  HomepageLink,
} from "./styled";

export const Header = () => (
  <HeaderContainer>
    <HomepageLink to="/movies">
      <IconWrapper>
        <StyledVideoIcon />
        <TextLogo>Movies Browser</TextLogo>
      </IconWrapper>
    </HomepageLink>
    <NavSection>
      <NavItem to="/movies">MOVIES</NavItem>
      <NavItem to="/people">PEOPLE</NavItem>
    </NavSection>
  </HeaderContainer>
);
