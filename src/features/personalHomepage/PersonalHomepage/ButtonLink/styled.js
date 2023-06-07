import styled from "styled-components";

export const ButtonLink = styled.a`
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.color.scienceblue};
    color: ${({ theme }) => theme.color.scienceblue};
    background: ${({ theme }) => theme.color.mercury};
    font-size: 20px;
    font-weight: 600;
    padding: 12px 16px;
    transition: box-shadow 0.3s;
`;