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
import hireMeIcon from "./images/message.svg";

export const Header = () => (
  <Wrapper>
    <Image src={myPhoto} alt="Marta Żebrowska-Giers"/>
    <About>
      <ThisIs>This is</ThisIs>
      <Name>Marta Żebrowska-Giers</Name>
      <Content>I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Content>
      <HireMe>
        <HireMeIcon src={hireMeIcon} alt="" />
        Hire Me
      </HireMe>
    </About>
  </Wrapper>
);
