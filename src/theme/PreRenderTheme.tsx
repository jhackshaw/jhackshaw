import React from "react";
import { themes } from "./themes";

type ThemeSetters = Record<keyof typeof themes, string>;

const themeSetters: ThemeSetters = Object.entries(themes).reduce(
  (acc, [mode, definition]) => ({
    ...acc,
    [mode]: Object.entries(definition)
      .map(
        ([property, value]) =>
          `root.style.setProperty("--${property}", "${value}");`
      )
      .join("")
  }),
  {} as ThemeSetters
);

export const PreRenderTheme: React.FC = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
      (function() {
        let mode = window.localStorage.getItem('color-theme');
        const root = document.documentElement;
        console.log('localstorage', mode);
        if (!mode) {
          const mql = window.matchMedia('(prefers-color-scheme: dark)');
          mode = mql.matches ? "dark" : "light";
          console.log('mql', mode);
        };
        if (mode === "dark") {
          console.log('set dar');
          ${themeSetters["dark"]}
        } else {
          ${themeSetters["light"]}
          console.log('set light');
        }
      })();
    `
    }}
  />
);
