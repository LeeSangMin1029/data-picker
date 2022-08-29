import { ThemeProvider } from "solid-styled-components";
import { createSignal, useContext, createContext } from "solid-js";
import DarkTheme from "./dark";
import LightTheme from "./light";

export const ThemeContext = createContext([LightTheme, {}]);

export function WrapperThemeProvider(props) {
  const [theme, setTheme] = createSignal(LightTheme);
  const themes = [
    theme,
    {
      toggleTheme() {
        setTheme((theme) => (theme.mode === "light" ? DarkTheme : LightTheme));
      },
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={themes}>
        {props.children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
