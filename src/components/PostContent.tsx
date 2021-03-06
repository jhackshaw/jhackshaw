import React from "react";
import { MDXRenderer, MDXRendererProps } from "gatsby-plugin-mdx";
import styled from "styled-components";
import { CodeBlock } from "./CodeBlock";

export const StyledPostContent = styled.article`
  position: relative;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--text-main);

  *:first-child {
    margin-top: 0;
  }

  a {
    color: var(--text-title);
    text-decoration: none;
  }

  h2,
  h3 {
    color: var(--text-title);
  }

  p {
    margin: 0 0 2rem 0;

    code {
      font-family: var(--font-family-mono);
      font-weight: 500;
      padding: 0 5px;
      background-color: var(--background-card);
      display: inline-block;
    }
  }
`;

const components = {
  pre: CodeBlock
};

export const PostContent: React.FC<MDXRendererProps> = props => {
  return (
    <StyledPostContent>
      <MDXRenderer components={components} {...props} />
    </StyledPostContent>
  );
};
