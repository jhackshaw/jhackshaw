import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ProvideTheme } from "../theme";
import { Footer, Navbar } from ".";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.background.main};
    font-family: 'Roboto', sans-serif;
    transition: background-color 0.5s ease;
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
    <ProvideTheme>
      <StyledLayout>
        <GlobalStyle />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </ProvideTheme>
  );
};
