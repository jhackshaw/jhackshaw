import React from "react";
import styled from "styled-components";
import { NavbarThemeToggle } from "./NavbarThemeToggle";
import { NoFussLink } from "./NoFussLink";
import { FaTimes } from "react-icons/fa";

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

const NavLink = styled(NoFussLink)`
  margin: 1rem 0;
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

  &.active,
  :hover {
    border-left: 2px solid #eeeeee;
    @media screen and (min-width: 760px) {
      border-left: none;
      border-bottom: 2px solid #eeeeee;
    }
  }
`;

const NavToggle = styled.button`
  background-color: transparent;
  border: none;
  color: #eeeeee;

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

interface Props {
  collapsed: boolean;
  toggle(): void;
}

export const Nav: React.FC<Props> = ({ collapsed, toggle }) => {
  return (
    <StyledNav collapsed={collapsed}>
      <NavToggle onClick={toggle}>
        <FaTimes size={16} />
      </NavToggle>
      <NavLink partiallyActive={false} to="/" activeClassName="active">
        home
      </NavLink>
      <NavLink partiallyActive to="/post" activeClassName="active">
        posts
      </NavLink>
      <NavbarThemeToggle />
    </StyledNav>
  );
};
