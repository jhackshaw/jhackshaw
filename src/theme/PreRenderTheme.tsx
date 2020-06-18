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
            return stored;
          }
          const mql = window.matchMedia('(prefers-color-scheme: dark)');
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
