import styled from "styled-components";

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  grid-gap: 32px;
`;

export const Tile = styled.li`
  padding: 56px;
  margin: 0;
  background: ${({ theme }) => theme.color.white};
  border: 6px solid ${({ theme }) => theme.color.mercury};
  transition: border-color 0.3s;
  box-shadow: ${({ theme }) => theme.color.mercury};
`;

export const Name = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.color.mineshaft};
  margin: 0;
`;

export const Description = styled.p`
  margin-top: 24px;
  line-height: 1.4;
`;

export const Links = styled.dl`
  margin-top: 24px;
  margin-bottom: 0;
  display: grid;
  grid-gap: 8px;
  line-height: 1.6;
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.scienceblue};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.scienceblue};
  padding-bottom: 1px;
`;
