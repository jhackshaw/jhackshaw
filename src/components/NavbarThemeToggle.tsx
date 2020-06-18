import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../theme";
import styled from "styled-components";

const ThemeToggle = styled.button`
  background-color: transparent;
  border: none;
  color: #eeeeee;
  cursor: pointer;
  padding-bottom: 0.5rem;
  margin-left: 1rem;

  :active,
  :focus {
    outline: none;
  }
`;

export const NavbarThemeToggle: React.FC = () => {
  const { setColorMode, colorMode } = useContext(ThemeContext);

  const onClick = () => {
    setColorMode && setColorMode(colorMode === "dark" ? "light" : "dark");
  };

  return (
    <ThemeToggle onClick={onClick}>
      {colorMode === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
    </ThemeToggle>
  );
};
