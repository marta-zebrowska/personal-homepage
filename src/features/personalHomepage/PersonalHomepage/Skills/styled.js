import styled from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet.svg";
import { SubHeader } from "../Subheader/styled.";

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.color.boxBackground};
  padding: 32px;
  margin-top: 72px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
    padding: 16px;
  }
`;

export const Header = styled(SubHeader)`
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.headerLine};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-bottom: 12px;
  }
`;

export const StyledList = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  column-gap: 15px;
  padding: 0;
  line-height: 25px;
  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  line-height: 1.4;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    line-height: 1.2;
  }
`;

export const Bullet = styled(BulletIcon)`
  color: ${({ theme }) => theme.color.primary};
  margin-right: 16px;
  height: auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 6px;
    margin-right: 8px;
  }
`;
