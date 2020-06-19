import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../theme";
import { useHasRendered } from "../hooks";
import styled, { keyframes } from "styled-components";

const AnimateEntrance = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ThemeToggle = styled.button`
  background-color: transparent;
  border: none;
  color: #eeeeee;
  cursor: pointer;
  padding-bottom: 0.5rem;
  margin-top: 1rem;

  @media screen and (min-width: 766px) {
    margin-top: 0;
    margin-left: 1rem;
  }

  svg {
    opacity: 0;
    animation: ${AnimateEntrance} 500ms forwards 1000ms;
  }

  :active,
  :focus {
    outline: none;
  }
`;

export const NavbarThemeToggle: React.FC = () => {
  const { setColorMode, colorMode } = useContext(ThemeContext);
  const rendered = useHasRendered();

  if (!rendered) {
    return null;
  }

  const onClick = () => {
    setColorMode && setColorMode(colorMode === "dark" ? "light" : "dark");
  };

  return (
    <ThemeToggle onClick={onClick}>
      {colorMode === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
    </ThemeToggle>
  );
};
