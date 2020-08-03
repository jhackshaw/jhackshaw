import React from "react";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { CredentialQuery } from "../queries";
import styled from "styled-components";

const ImageWrapper = styled.div`
  flex: 0 1 80px;

  @media screen and (min-width: 480px) {
    flex: 1 0 80px;
  }
`;

const CredentialListItem = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (min-width: 480px) {
    flex-wrap: nowrap;
  }
`;

const CredentialListItemContent = styled.div`
  flex: 1 1 100%;
  margin-left: 0;
  margin-top: 1rem;

  @media screen and (min-width: 480px) {
    margin-top: 0;
    margin-left: 1rem;
  }

  @media screen and (min-width: 760px) {
    margin-left: 2rem;
  }

  h3 {
    color: var(--text-main);
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 500;
    margin: 0 0 0.5rem;
  }

  span.subtitle {
    display: block;
    color: var(--text-lighter);
    font-weight: 300;
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0.2rem 0;
    color: var(--text-light);
    font-weight: 400;
  }
`;

const StyledCredentialList = styled.div`
  padding: 1rem;
  background-color: var(--background-card);
  border-radius: 1rem;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  ${CredentialListItem} + ${CredentialListItem} {
    border-top: 1px solid var(--text-lightest)
  }


  @media screen and (min-width: 760px) {  
    padding: 1rem 3rem;
  }
`;

interface Props {
  credentials: CredentialQuery[];
}

export const CredentialList: React.FC<Props> = ({ credentials }) => {
  return (
    <StyledCredentialList>
      {credentials.map(({ frontmatter, body }, idx) => (
        <CredentialListItem key={idx}>
          <ImageWrapper>
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
          </ImageWrapper>
          <CredentialListItemContent>
            <h3>{frontmatter.title}</h3>
            <span className="subtitle">
              {frontmatter.date}
              {frontmatter.subtitle ? ` | ${frontmatter.subtitle}` : ""}
            </span>
            <MDXRenderer>{body}</MDXRenderer>
          </CredentialListItemContent>
        </CredentialListItem>
      ))}
    </StyledCredentialList>
  );
};
