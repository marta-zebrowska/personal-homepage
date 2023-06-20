import { ThemeSwitcher } from "../../../common/ThemeSwitcher";
import { Container } from "./Container/styled";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { skills, toLearn } from "./Skills/skillsList";

export const PersonalHomepage = () => (
    <Container>
      <ThemeSwitcher />
      <Header />
      <Skills
      title="My skillset includes 🛠️"
      skills={skills}
      />
      <Skills
      title="What I want to learn next 🚀"
      skills={toLearn} 
      />
      <Portfolio />
    </Container>
   );
   