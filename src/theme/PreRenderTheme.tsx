import React from "react";
import { themes } from "./themes";

const themeSetters = Object.entries(themes)
  .map(
    ([mode, definition]) =>
      `
    if (mode === "${mode}") {
      ${Object.entries(definition)
        .map(
          ([property, value]) =>
            `root.style.setProperty("--${property}", "${value}");`
        )
        .join("")}
    }
  `
  )
  .join("");

export const PreRenderTheme: React.FC = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
      (function() {
        function getInitialMode() {
          const stored = window.localStorage.getItem('color-mode');
          if (stored) {
            console.log('returning stored', stored);
            return stored;
          }
          const mql = window.matchMedia('(prefers-color-scheme: dark)');
          console.log('returning matches', mql.matches);
          return mql.matches ? 'dark' : 'light';
        }
    
        const mode = getInitialMode();
        const root = document.documentElement;
        root.style.setProperty('--initial-color-mode', mode);
        ${themeSetters};
      })();
    `
    }}
  />
);
