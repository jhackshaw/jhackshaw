import React from "react";

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
  /* justify-content: space-between; */
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media screen and (min-width: 768px) {
    padding: 2rem 3rem;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem 5rem;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  color: #fff;
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
        <div></div>
        <StyledNav>
          <a>Projects</a>
          <a>Skills</a>
          <a>Blog Posts</a>
        </StyledNav>
      </StyledNavbar>
    </Wrapper>
  );
};
