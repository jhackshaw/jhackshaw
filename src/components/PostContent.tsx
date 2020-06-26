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

  h2,
  h3 {
    color: var(--text-title);
  }

  p {
    margin: 0 0 2rem 0;

    code {
      font-family: var(--font-family-mono);
      font-weight: 500;
      padding: 2px 8px;
      background-color: var(--background-card);
      display: inline-block;
      margin: 0 4px;
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
