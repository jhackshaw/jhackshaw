import React from "react";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="color-mode"
      dangerouslySetInnerHTML={{
        __html: `
        (function() {
          if (!window.localStorage.getItem('color-theme')) {
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            window.localStorage.setItem('color-theme', mql.matches ? 'dark' : 'light');
          }
        })();
    `
      }}
    />
  ]);
};
