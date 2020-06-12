import React from "react";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";

const ImageWrapper = styled.div`
  flex: 0 1 80px;
  margin: auto auto;

  @media screen and (min-width: 600px) {
    flex: 1 0 80px;
    margin: 0;
  }
`;

const CredentialListItem = styled.div`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;

const CredentialListItemContent = styled.div`
  flex: 1 1 100%;
  margin-left: 0;
  margin-top: 2rem;

  @media screen and (min-width: 600px) {
    margin-left: 3rem;
    margin-top: 0;
  }

  h3 {
    margin: 0 0 0.5rem;
  }

  span.subtitle {
    display: block;
    color: #424242;
    font-weight: 300;
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0.2rem 0;
    color: gray;
    font-weight: 400;
    color: #212121;
  }
`;

const StyledCredentialList = styled.div`
  padding: 0 3rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  ${CredentialListItem} + ${CredentialListItem} {
    border-top: 1px solid lightgray;
  }
`;

interface Props {
  credentials: {
    frontmatter: {
      title: string;
      subtitle: string;
      date: string;
      image: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
    body: string;
  }[];
}

export const CredentialList: React.FC<Props> = ({ credentials }) => {
  return (
    <StyledCredentialList>
      {credentials.map((cred, idx) => (
        <CredentialListItem key={idx}>
          <ImageWrapper>
            <Img fluid={cred.frontmatter.image.childImageSharp.fluid} />
          </ImageWrapper>
          <CredentialListItemContent>
            <h3>{cred.frontmatter.title}</h3>
            <span className="subtitle">
              {cred.frontmatter.date}
              {cred.frontmatter.subtitle
                ? ` | ${cred.frontmatter.subtitle}`
                : ""}
            </span>
            <MDXRenderer>{cred.body}</MDXRenderer>
          </CredentialListItemContent>
        </CredentialListItem>
      ))}
    </StyledCredentialList>
  );
};
