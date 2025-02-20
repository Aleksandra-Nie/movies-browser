import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../images/star.svg";
import { Link } from "react-router-dom";

export const MovieTile = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  gap: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 24px;
  margin-top: 64px;
  box-shadow: ${({ theme }) => theme.shadow.tile};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    row-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 20px;
    row-gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    padding: 16px;
    gap: 16px;
  }
`;

export const Poster = styled.img`
  border-radius: 5px;
  max-height: 464px;
  grid-row: span 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    max-height: 440px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-row: span 1;
    max-height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    max-height: 169px;
  }
`;

export const MovieSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 8px;
  }
`;

export const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.woodsmoke};
  }
`;

export const Year = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 10px;
  }
`;

export const LineContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-wrap: wrap;
    row-gap: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    row-gap: 4px;
  }
`;

export const Caption = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.stormGray};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 18px;
  font-weight: 400;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 12px;
    line-height: 14.4px;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 8px 0;
  list-style: none;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const Genres = styled.li`
  font-size: 14px;
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 4px 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 10px;
  }
`;

export const MovieRating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 13px;
    flex-wrap: wrap;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;
  color: ${({ theme }) => theme.color.candlelight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rating = styled.span`
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke};
  }
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-weight: 400;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 13px;
    line-height: 22.4px;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const MaxRating = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  font-weight: 400;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    display: none;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-align: justify;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-column: span 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 14px;
    line-height: 22.4px;
  }
`;

export const Section = styled.section`
  max-width: 1368px;
  margin: auto;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    padding: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
  }
`;

export const PeopleContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PeopleTile = styled(Link)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow.tile};
  border-radius: 5px;
  height: 100%;
  transition: 0.5s;
  text-decoration: none;

  &:hover {
    transform: translateY(-3%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    padding: 8px;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const PeopleName = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 12px;
  color: ${({ theme }) => theme.color.woodsmoke};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXS}px) {
    font-size: 12px;
  }
`;

export const PeopleRole = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};
  text-align: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}px) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXS}px) {
    font-size: 11px;
  }
`;

