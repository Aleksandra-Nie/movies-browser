import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../images/star.svg";
import exampleBigPoster from "../../../../images/exampleBigPoster.png";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
`;

export const LayerContainer = styled.div`
  max-width: 1368px;
  margin: auto;
  background-image: 
    linear-gradient(
      189.44deg, 
      rgba(0, 0, 0, 0) 58.48%, 
      rgba(0, 0, 0, 0.106473) 63.17%, 
      rgba(0, 0, 0, 0.235359) 68.85%, 
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
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
      90deg, 
      #000000 13.6%, 
      rgba(0, 0, 0, 0.984059) 14.58%, 
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%, 
      rgba(0, 0, 0, 0.230315) 22.87%, 
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      270deg, 
      #000000 14.11%, 
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%, 
      rgba(0, 0, 0, 0.159921) 21.88%, 
      rgba(0, 0, 0, 0) 25.68%
    ),
    url(${exampleBigPoster});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  aspect-ratio: 16 / 9;
  position: relative;
  
  @media(max-width:${({ theme }) => theme.breakpoint.laptopMax}px){
    margin: auto 16px ;
  }

  @media(max-width:${({ theme }) => theme.breakpoint.tabletVerticalMax}px){
    background-image: 
      linear-gradient(
        192.09deg, 
      rgba(0, 0, 0, 0) 65%, 
      rgba(0, 0, 0, 0.106473) 69.25%, 
      rgba(0, 0, 0, 0.235359) 74.4%, 
      rgba(0, 0, 0, 0.492821) 82.77%, 
      rgba(0, 0, 0, 0.740286) 89.82%, 
      #000000 96.18%
      ),
      linear-gradient(
        180deg, 
      #000000 -2.7%, 
      rgba(0, 0, 0, 0.689555) 2.36%, 
      rgba(0, 0, 0, 0.439033) 7.46%, 
      rgba(0, 0, 0, 0.20628) 13.79%, 
      rgba(0, 0, 0, 0) 23.65%
      ),
      linear-gradient(
        90.09deg, 
      #000000 8.05%, 
      rgba(0, 0, 0, 0.984059) 9.4%, 
      rgba(0, 0, 0, 0.967732) 10.59%, 
      rgba(0, 0, 0, 0.865569) 11.79%, 
      rgba(0, 0, 0, 0.230315) 20.89%, 
      rgba(0, 0, 0, 0) 26.12%
      ),
      linear-gradient(
        269.75deg, 
      #000000 8.69%, 
      rgba(0, 0, 0, 0.873268) 10.09%, 
      rgba(0, 0, 0, 0.720529) 12.16%, 
      rgba(0, 0, 0, 0.294577) 17.19%, 
      rgba(0, 0, 0, 0.159921) 19.93%, 
      rgba(0, 0, 0, 0) 25.43%
      ),
      url(${exampleBigPoster});
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