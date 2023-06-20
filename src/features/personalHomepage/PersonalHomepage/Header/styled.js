import styled from "styled-components";
import { ButtonLink } from "../ButtonLink/styled";

export const Wrapper = styled.header`
  max-width: 1089px;
  margin: auto;
  padding-top: 119px;
  display: grid;
  grid-gap: 64px;
  grid-template-columns: auto 1fr;
  font-size: 20px;
  margin-bottom: 63px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    grid-gap: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Image = styled.img`
  max-width: 398px;
  border-radius: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-width: 132px;
  }
`;

export const About = styled.div`
  text-align: left;
  max-width: 633px;
  margin-left: 66px;
  padding-top: 64px;
`;

export const ThisIs = styled.p`
  font-weight: 700;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  font-weight: 900;
  color: ${({ theme }) => theme.color.textPrimary};
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Content = styled.p`
  font-weight: 400;
  line-height: 1.4;
  margin: 36px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    margin-top: 16px;

    &::before {
      content: "👩💻";
      font-size: 20px;
      margin-right: 8px;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop + 1}px) {
    &::before {
      content: "👩💻";
      font-size: 20px;
      margin-right: 8px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    &::before {
      content: "👩💻";
      font-size: 18px;
      margin-right: 8px;
    }
  }
`;

export const HireMe = styled(ButtonLink)`
display: inline-flex;
align-items: center;
margin-top: 32px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
   margin-top: 24px;
}
`;

export const HireMeIcon = styled.img`
  
  max-width: 19.23px;
  max-height: 17.12px;
  margin-right: 19px;
`;
