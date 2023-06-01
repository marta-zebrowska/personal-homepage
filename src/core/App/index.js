import { Container } from "../../features/personalHomepage/Container/styled";
import { Header } from "../../features/personalHomepage/Header";
import { Skills } from "../../features/personalHomepage/Skills";
import { skills, toLearn } from "../../features/personalHomepage/Skills/skillsList";

function App() {
  return (
    <Container>
      <Header />
      <Skills
      title="My skillset includes 🛠️"
      skills={skills}
      />
      <Skills
      title="What I want to learn next 🚀"
      skills={toLearn} 
      />
    </Container>
  );
}

export default App;
