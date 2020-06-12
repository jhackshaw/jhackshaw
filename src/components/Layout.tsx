import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #fafafa;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {/* <Navbar /> */}
      {children}
    </>
  );
};
