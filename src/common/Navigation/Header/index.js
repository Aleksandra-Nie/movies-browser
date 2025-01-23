import {
  StyledHeader,
  IconWrapper,
  StyledVideoIcon,
  TextLogo,
  NavSection,
  NavItem,
} from "./styled";

export const Header = () => (
  <StyledHeader>
    <IconWrapper>
      <StyledVideoIcon />
      <TextLogo>Movies Browser</TextLogo>
    </IconWrapper>
    <nav>
      <NavSection>
        <NavItem>MOVIES</NavItem>
        <NavItem>PEOPLE</NavItem>
      </NavSection>
    </nav>
  </StyledHeader>
);
