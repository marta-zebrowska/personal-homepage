import { styledIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedIn.svg";

export const socialsData = [
    {
        name: "GitHub",
        url: "https://github.com/marta-zebrowska",
        Icon: styledIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/marta.zebrowska.7/",
        Icon: styledIcon(FacebookIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/mzeberita/",
        Icon: styledIcon(InstagramIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marta-żebrowska-giers-a27b13270/",
        Icon: styledIcon(LinkedInIcon),
    },
]