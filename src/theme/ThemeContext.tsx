import React, { useState, useEffect } from "react";
import { themes } from "./themes";

type ColorMode = keyof typeof themes;

interface ThemeCtx {
  colorMode?: ColorMode;
  setColorMode(mode: ColorMode): void;
}

export const ThemeContext = React.createContext<Partial<ThemeCtx>>({});

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, setCurrentColorMode] = useState<ColorMode>();

  const setColorMode = (mode: ColorMode) => {
    setCurrentColorMode(mode);
    localStorage.setItem("color-mode", mode);
    const root = document.documentElement;
    Object.entries(themes[mode]).forEach(([name, value]) => {
      root.style.setProperty(`--${name}`, value);
    });
    root.style.setProperty("--initial-color-mode", mode);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setCurrentColorMode(initialColorValue as ColorMode);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        setColorMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
