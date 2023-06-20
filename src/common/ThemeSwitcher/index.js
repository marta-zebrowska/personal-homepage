import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";
import {
  Button,
  Icon,
  IconWrapper,
  Switcher,
  Text,
  ThemeSwitcherWrapper
} from "./styled";

export const ThemeSwitcher = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <ThemeSwitcherWrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Switcher>
          <IconWrapper moveToRight={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Switcher>
      </Button>
    </ThemeSwitcherWrapper>
  );
};
