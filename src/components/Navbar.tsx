import React, { useState } from "react";
import { Nav } from "./Nav";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NoFussLink } from "./NoFussLink";

const Wrapper = styled.div`
  width: 100%;
  z-index: 300;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledNavbar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #eeeeee;
  font-family: var(--font-familiy-mono);
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

const Brand = styled(NoFussLink)`
  font-weight: 700;
  font-size: 1.3rem;
`;

const NavToggle = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;

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
        <Brand to="/">&lt;jhackshaw /&gt;</Brand>
        <Nav collapsed={collapsed} toggle={toggleNav} />
        <NavToggle onClick={toggleNav}>
          <FaBars size={16} />
        </NavToggle>
      </StyledNavbar>
    </Wrapper>
  );
};
