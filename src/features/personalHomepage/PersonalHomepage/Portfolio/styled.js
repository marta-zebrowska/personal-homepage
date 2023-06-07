import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Section = styled.section`
  margin-top: 72px;
`;

export const StyledGithubIcon = styled(GithubIcon)`
  color: ${({ theme }) => theme.color.scienceblue};
  margin-bottom: 8px;
`;

export const Header = styled.header`
 text-align: center;
`;

export const MyRecentProjects = styled.h3`
 font-weight: normal;
 margin-top: 8px;
 font-size: 20px;
 color: ${({theme}) => theme.color.scienceblue};
`;
