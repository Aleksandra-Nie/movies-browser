import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../images/star.svg";

export const Tile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.tile};
  font-size: 16px;
  color: ${({ theme }) => theme.color.woodsmoke};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    position: initial;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    font-size: 13px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 35vw;
    min-width: 114px;
    height: auto;
  }
`;

export const MovieTileHeader = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin: 16px 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
    margin: 0 0 6px 0;
  }
`;

export const MovieTileYear = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 8px 0 39px 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 8px 0;
  }
`;

export const Genres = styled.li`
  font-size: 14px;
  background: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const MovieRating = styled.div`
  position: absolute;
  bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 767px) {
    position: initial;
    gap: 8px;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;
  color: ${({ theme }) => theme.color.candlelight};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 16px;
  }
`;

export const Rating = styled.span`
  font-weight: 600;
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;
