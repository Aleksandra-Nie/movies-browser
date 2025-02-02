import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../images/star.svg";
import exampleBigPoster from "../../../../images/exampleBigPoster.png";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  height: 100vh;

  @media(max-width: ${({ theme }) => theme.breakpoint.desktop}px){
    height: 85vh;
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px){
    height: 75vh;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    height: 60vh;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.tablet}px){
    height: 40vh;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    height: 25vh;
  };
`;

export const LayerContainer = styled.div`
  background-image: linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    ),
    url(${exampleBigPoster});
  position: relative;
  height: 100vh;
  background-size: 1920px 770px, 1920px 770px, 1920px 770px, 1920px 770px, 1368px 769px;
  background-repeat: no-repeat;
  background-position: center;

  @media(max-width: ${({ theme }) => theme.breakpoint.desktop}px){
    background-size: 1500px 630px, 1500px 630px, 1500px 630px, 1500px 630px, 1184px 630px;
    height: 85vh;
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px){
    background-size: 1300px 550px, 1300px 550px, 1300px 550px, 1300px 550px, 1024px 550px;
    height: 75vh;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    background-size: 1054px 455px, 1054px 455px, 1054px 455px, 1054px 455px, 780px 450px;
    height: 60vh;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.tablet}px){
    background-size: 700px 300px, 700px 300px, 700px 300px, 700px 300px, 550px 300px;
    height: 40vh;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    background-size: 450px 188px, 450px 188px, 450px 188px, 450px 188px, 350px 188px;
    height: 25vh;
  };
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50px;
  margin-bottom: 56px;

  @media(max-width:${({ theme }) => theme.breakpoint.tablet}px){
    margin-bottom: 35px;
  };
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    left: 16px;
    gap: 8px;
    align-items: center;
    margin-bottom: 10px;
    row-gap: 0;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    margin-bottom: 0;
  };
`;


export const Title = styled.h1`
  color:${({ theme }) => theme.color.white};
  font-size: 64px;
  font-weight: 600;
  margin: 0;
  
  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    font-size: 50px;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.tablet}px){
    font-size: 24px;
  };
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    grid-column: span 2;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    font-size: 15px;
  };
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

  @media(max-width:${({ theme }) => theme.breakpoint.tablet}px){
    font-size: 25px;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 14px;
    margin: 10px 0 0 0;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    font-size: 12px;
  };
`;

export const MaxRating = styled.p`
  font-size: 16px;
  font-weight: 400;
  

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 10px;
    padding-bottom: 2px;
    margin: 14px 0 0 0;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    font-size: 8px;
  };
`;

export const Votes = styled.p`
  color:${({ theme }) => theme.color.white};
  font-size: 16px;
  font-weight: 400;
  margin: 0;

  @media(max-width:${({ theme }) => theme.breakpoint.mobileS}px){
    font-size: 10px;
    margin-top: 12px;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    font-size: 8px;
  };
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.color.candlelight};
  vertical-align: middle;

  @media(max-width:${({ theme }) => theme.breakpoint.tablet}px){
    width: 20px;
    height: 20px;
    align-self: center;
  };

  @media(max-width:${({ theme }) => theme.breakpoint.mobileXS}px){
    width: 15px;
    height: 15px;
  };
`;