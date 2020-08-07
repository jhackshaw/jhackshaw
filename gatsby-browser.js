import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock, NoFussLink } from "./src/components";

import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-docker");

const components = {
  code: CodeBlock,
  a: NoFussLink
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
