import { useState, useCallback, useEffect } from "react";
import { DefaultTheme } from "styled-components";
import { lightTheme, darkTheme, undefinedTheme } from "./themes";

const getStartingTheme = (): DefaultTheme => {
  if (typeof window === "undefined") {
    return undefinedTheme;
  }
  const saved = localStorage.getItem("color-theme");
  return saved === "dark" ? darkTheme : lightTheme;
};

export const useSelectedTheme = (): DefaultTheme => {
  const [theme, setTheme] = useState<DefaultTheme>(getStartingTheme);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(current => (current.name === "dark" ? lightTheme : darkTheme));
  }, [setTheme]);

  useEffect(() => {
    localStorage && localStorage.setItem("color-theme", theme.name);
  }, [theme]);

  return {
    ...theme,
    transition: hasLoaded ? theme.transition : "none",
    toggleTheme
  };
};
