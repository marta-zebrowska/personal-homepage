import {
  About,
  Content,
  HireMe,
  HireMeIcon,
  Image,
  Name,
  ThisIs,
  Wrapper,
} from "./styled";
import myPhoto from "./images/marta.png";
import { email } from "../email";

export const Header = () => (
  <Wrapper>
    <Image src={myPhoto} alt="Marta Żebrowska-Giers" />
    <About>
      <ThisIs>This is</ThisIs>
      <Name>Marta Żebrowska-Giers</Name>
      <Content>
        I’m a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </Content>
      <HireMe href={`mailto:${email}`} title={email} rel="noopener noreferrer">
        <HireMeIcon />
        Hire Me
      </HireMe>
    </About>
  </Wrapper>
);
