import React, { useState, useContext } from "react";
import { NoFussLink } from ".";
import { ThemeContext } from "../theme";
import styled from "styled-components";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  z-index: 300;
  position: absolute;
  top: 0;
`;

const StyledNavbar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #eeeeee;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  @media screen and (min-width: 760px) {
    padding: 1.5rem 3rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 1.5rem 5rem;
  }
`;

const Brand = styled.span`
  font-family: "Roboto Mono", monospace;
  color: #eeeeee;
`;

const NavToggle = styled.button`
  background-color: transparent;
  border: none;
  color: #eeeeee;

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

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

const StyledNav = styled.nav<{ collapsed?: boolean }>`
  display: ${({ collapsed }) => (collapsed ? "none" : "flex")};
  align-items: flex-end;
  cursor: pointer;
  flex-flow: column nowrap;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 250px;
  background-color: rgba(89, 118, 152, 0.99);
  padding: 2rem 1rem;

  a {
    margin: 1rem 0;
    font-family: "Roboto Mono", monospace;
    color: #eeeeee;
    box-sizing: border-box !important;
    border-left: 2px solid transparent;
    width: 100%;
    text-align: right;
    white-space: nowrap;

    @media screen and (min-width: 760px) {
      border-left: none;
      border-bottom: 2px solid transparent;
      padding-left: 0;
      padding-bottom: 0.5rem;
      margin: 0 1rem;
      width: auto;
    }
  }

  a.active,
  a:hover {
    border-left: 2px solid #eeeeee;
    @media screen and (min-width: 760px) {
      border-left: none;
      border-bottom: 2px solid #eeeeee;
    }
  }

  @media screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: transparent;
    position: relative;
    height: auto;
    flex-flow: row nowrap;
    width: 100%;
    padding: 0;
  }
`;

export const Navbar: React.FC = () => {
  const { toggleColorMode, colorMode } = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNav: React.MouseEventHandler = () => {
    setCollapsed(collapsed => !collapsed);
  };

  return (
    <Wrapper>
      <StyledNavbar>
        <NoFussLink to="/">
          <Brand>jhackshaw.com</Brand>
        </NoFussLink>
        <StyledNav collapsed={collapsed}>
          <NavToggle onClick={toggleNav}>
            <FaTimes size={16} />
          </NavToggle>
          <NoFussLink partiallyActive={false} to="/" activeClassName="active">
            home
          </NoFussLink>
          <NoFussLink partiallyActive to="/post" activeClassName="active">
            posts
          </NoFussLink>
          <ThemeToggle onClick={toggleColorMode}>
            {colorMode === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
          </ThemeToggle>
        </StyledNav>
        <NavToggle onClick={toggleNav}>
          <FaBars size={16} />
        </NavToggle>
      </StyledNavbar>
    </Wrapper>
  );
};
