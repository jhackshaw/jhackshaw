import React from "react";

import { NoFussLink } from ".";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  z-index: 300;
  position: absolute;
  top: 0;
`;

const StyledNavbar = styled.header`
  display: flex;
  flex-direction: row;
  color: #fff;
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
  color: #fff;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;

  a {
    margin: 0 2rem;
  }
`;

export const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <StyledNavbar>
        <NoFussLink to="/">
          <Brand>jhackshaw.com</Brand>
        </NoFussLink>
        <StyledNav></StyledNav>
      </StyledNavbar>
    </Wrapper>
  );
};
