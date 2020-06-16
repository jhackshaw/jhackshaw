import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelectedTheme } from "./useSelectedTheme";

export const ProvideTheme: React.FC = ({ children }) => {
  const theme = useSelectedTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
