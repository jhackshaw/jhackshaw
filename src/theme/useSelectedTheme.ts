import { useState, useCallback, useEffect } from "react";
import { DefaultTheme } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

const COLOR_MODE_LOCAL_STORAGE_KEY = "current-theme";

const getStartingTheme = (): DefaultTheme => {
  if (typeof window === "undefined") {
    return darkTheme;
  }
  const saved = localStorage.getItem(COLOR_MODE_LOCAL_STORAGE_KEY);
  if (saved) {
    return saved === "dark" ? darkTheme : lightTheme;
  }
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  return mql.matches ? darkTheme : lightTheme;
};

export const useSelectedTheme = (): DefaultTheme => {
  const [theme, setTheme] = useState<DefaultTheme>(getStartingTheme);

  const toggleTheme = useCallback(() => {
    setTheme(current => (current.name === "light" ? darkTheme : lightTheme));
  }, [setTheme]);

  useEffect(() => {
    localStorage &&
      localStorage.setItem(COLOR_MODE_LOCAL_STORAGE_KEY, theme.name);
  }, [theme]);

  return {
    ...theme,
    toggleTheme
  };
};
