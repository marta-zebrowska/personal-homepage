import styled from "styled-components";

export const ButtonLink = styled.a`
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.color.buttonLink.border};
  color: ${({ theme }) => theme.color.buttonLink.text};
  background: ${({ theme }) => theme.color.primary};
  font-size: 20px;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.buttonLink.shadow};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;
