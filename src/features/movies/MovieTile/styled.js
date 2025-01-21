import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../images/star.svg";

export const Tile = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: white;
    box-shadow: 0px 4px 12px 0px #BAC7D580;
    font-size: 16px;
    color: #18181B;
    border-radius: 5px;
`;

export const MoviePoster = styled.img`
    width: 100%;
    border-radius: 5px;
`;

export const MovieTileHeader = styled.h2`
    font-size: 22px;
    font-weight: 500;
    margin: 16px 0 8px 0;
`;

export const MovieTileYear = styled.span`
    color: #7E839A;
`;

export const GenresList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 8px 0 39px 0;
    list-style: none;
`;

export const Genres = styled.li`
    font-size: 14px;
    background-color: #E4E6F0;
    padding: 8px 16px;
    border-radius: 5px;
`;

export const MovieRating = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const StyledStarIcon = styled(StarIcon)`
    width: 24px;
    color: #FCD420;
`;

export const Rating = styled.span`
    font-weight: 600;
`;

export const Votes = styled.span`
    color: #7E839A;
`;
