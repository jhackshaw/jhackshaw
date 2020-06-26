import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "./src/components";

const components = {
  code: CodeBlock
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
