import { Bullet, Header, StyledList, StyledListItem, Wrapper } from "./styled";

export const Skills = ({ title, skills }) => (
  <Wrapper>
    <Header>{title}</Header>
    <StyledList>
      {skills.map((skill) => (
        <StyledListItem key={skill}>
          <Bullet />
          {skill}
        </StyledListItem>
      ))}
    </StyledList>
  </Wrapper>
);
