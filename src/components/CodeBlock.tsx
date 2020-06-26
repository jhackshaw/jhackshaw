import React, { useContext } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/duotoneDark";
import other from "prism-react-renderer/themes/duotoneLight";
import { ThemeContext } from "../theme";
import styled from "styled-components";

interface Props {
  className?: string;
  children: string;
}

const StyledCode = styled.code`
  font-family: var(--font-family-mono);
  font-size: 0.7rem;
  display: block;
  background-color: var(--background-card);
  overflow-x: auto;

  @media screen and (min-width: 760px) {
    font-size: 0.9rem;
  }
`;

export const CodeBlock: React.FC<Props> = ({ children, className = "" }) => {
  const { colorMode } = useContext(ThemeContext);

  const language = className.replace(/language-/, "") as Language;
  return (
    <Highlight
      {...defaultProps}
      theme={colorMode === "dark" ? dracula : other}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledCode className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </StyledCode>
      )}
    </Highlight>
  );
};
