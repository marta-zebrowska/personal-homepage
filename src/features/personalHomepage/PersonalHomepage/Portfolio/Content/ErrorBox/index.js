import { Header, Paragraph, Wrapper } from "./styled";
import { githubUsername } from "../../githubUsername";
import { ReactComponent as WarningIcon } from "./warning.svg";
import { ButtonLink } from "../../../ButtonLink/styled";

export const ErrorBox = () => (
    <Wrapper>
        <WarningIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbsp;projects.<br />
            You can check then directly&nbsp;on&nbsp;Github.
        </Paragraph>
        <ButtonLink
            href={`https://github.com/${githubUsername}`}
            title="Github Marta Żebrowska-Giers"
            target="_blank"
            rel="noreferrer noopener">
            Go to Github
        </ButtonLink>
    </Wrapper>
);
