import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../images/star.svg";
import exampleBigPoster from "../../../../images/exampleBigPoster.png";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
`;

export const LayerContainer = styled.div`
  max-width: 1368px;
  margin: auto;
  background-image: url(${exampleBigPoster});
  box-shadow: inset 10px 0px 75px 75px rgba(0, 0, 0, 1);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  aspect-ratio: 16 / 9;
  position: relative;
  
  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
    margin: auto 16px ;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    box-shadow: inset 10px 0px 35px 35px rgba(0, 0, 0, 1);
  }
`;

export const InfoContainer = styled.div`
  margin-bottom: 56px; 
  position: absolute;
  bottom: 0;


  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    margin-bottom: 35px;
  }
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    gap: 8px;
    align-items: center;
    margin-bottom: 10px;
    row-gap: 0;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  color:${({ theme }) => theme.color.white};
  font-size: 64px;
  font-weight: 600;
  margin: 0;
  
  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    font-size: 50px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    font-size: 24px;
  }
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    grid-column: span 2;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    font-size: 15px;
  }
`;

export const RateContainer = styled.div`
  display: flex;
  color:${({ theme }) => theme.color.white};
  align-items: center;
  margin: 0;
`;

export const Rating = styled.p`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  margin: 10px 0 15px;
  align-items: center;
  gap: 8px;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
   font-size: 25px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
   font-size: 14px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    font-size: 12px;
  }
`;

export const MaxRating = styled.p`
  font-size: 16px;
  font-weight: 400;
  

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
   font-size: 10px;
   padding-bottom: 2px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    font-size: 8px;
  }
`;

export const Votes = styled.p`
  color:${({ theme }) => theme.color.white};
  font-size: 16px;
  font-weight: 400;
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
   font-size: 10px;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    font-size: 8px;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.color.candleLight};
  vertical-align: middle;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
    width: 20px;
    height: 20px;
    align-self: center;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    width: 15px;
    height: 15px;
  }
`;