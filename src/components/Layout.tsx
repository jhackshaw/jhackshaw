import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "../theme";
import { Footer, Navbar } from ".";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: var(--font-family);
  }

  * {
    box-sizing: border-box !important;
    /* border: 1px solid #f00 !important; */
  }
`;

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 400ms ease 0s;
  background-color: var(--background-main);

  main {
    width: 100%;
    flex-grow: 1;
  }
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <StyledLayout>
        <GlobalStyle />
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </StyledLayout>
    </ThemeProvider>
  );
};
