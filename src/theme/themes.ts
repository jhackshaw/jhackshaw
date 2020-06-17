import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  name: "light",
  background: {
    main: "#fafafa",
    card: "#fff"
  },
  text: {
    main: "#000",
    title: "#303f9f",
    light: "#424242",
    lighter: "#757575",
    lightest: "#9e9e9e"
  },
  weight: {
    main: "400",
    light: "300",
    heavy: "500"
  }
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  name: "dark",
  background: {
    main: "#303841",
    card: "#3a4750"
  },
  text: {
    main: "#fafafa",
    title: "#f6c90e",
    light: "rgba(255, 255, 255, 0.7)",
    lighter: "rgba(255, 255, 255, 0.6)",
    lightest: "rgba(255, 255, 255, 0.3)"
  }
};
