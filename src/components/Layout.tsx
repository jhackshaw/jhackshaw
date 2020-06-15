import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Footer, Navbar } from ".";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #fafafa;
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box !important;
  }
`;

const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};
