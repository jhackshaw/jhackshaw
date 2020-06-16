import "styled-components";

// and extend them!
declare module "styled-components" {
  export type ThemeMode = "light" | "dark";

  export interface DefaultTheme {
    name: ThemeMode;
    toggleTheme?(): void;
    background: {
      main: string;
      card: string;
    };
    text: {
      main: string;
      title: string;
      light: string;
      lighter: string;
      lightest: string;
    };
    weight: {
      main: string;
      light: string;
      heavy: string;
    };
  }
}
