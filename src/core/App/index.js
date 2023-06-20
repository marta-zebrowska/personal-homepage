import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { darkTheme, lightTheme } from "../../theme";
import { PersonalHomepage } from "../../features/personalHomepage/PersonalHomepage";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme)
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
