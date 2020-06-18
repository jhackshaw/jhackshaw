import React from "react";
import { PreRenderTheme } from "./src/theme";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<PreRenderTheme key="color-mode" />]);
};
