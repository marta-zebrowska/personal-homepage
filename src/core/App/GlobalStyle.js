import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: "Inter", sans-serif;
  background-color: ${({ theme }) => theme.color.site.background};
        color: ${({ theme }) => theme.color.site.text};
        letter-spacing: 0.05em;
        word-break: break-word;
        padding-bottom: 108px;
        transition: background 0.3s;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            padding-bottom: 32px;
        }
      }
    

button {
    cursor: pointer;
}
`;
