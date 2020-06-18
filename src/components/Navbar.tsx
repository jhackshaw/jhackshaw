import React, { useState } from "react";
import { NoFussLink } from "./NoFussLink";
import { Nav } from "./Nav";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

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

export const Navbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNav = () => {
    setCollapsed(collapsed => !collapsed);
  };

  return (
    <Wrapper>
      <StyledNavbar>
        <NoFussLink to="/">
          <Brand>jhackshaw.com</Brand>
        </NoFussLink>
        <Nav collapsed={collapsed} toggle={toggleNav} />
        <NavToggle onClick={toggleNav}>
          <FaBars size={16} />
        </NavToggle>
      </StyledNavbar>
    </Wrapper>
  );
};
