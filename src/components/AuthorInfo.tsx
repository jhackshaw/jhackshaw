import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { NoFussLink } from ".";

const StyledAuthorInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  .gatsby-image-wrapper {
    flex: 0 0 45px;
    margin-right: 0.5rem;
    border-radius: 50%;
    position: relative !important;
  }
`;

const Author = styled.div`
  color: ${({ theme }) => theme.text.main};
  font-weight: 400;
  line-height: 1.8rem;
  font-size: 1.2rem;
`;

const Secondary = styled.div`
  font-weight: 300;
  color: ${({ theme }) => theme.text.lighter};
  font-size: 0.9rem;
`;

interface Props {
  author?: string;
  secondary?: string;
}

export const AuthorInfo: React.FC<Props> = ({
  author = "jhackshaw",
  secondary
}) => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "media/profile.jpg" }) {
        childImageSharp {
          fixed(width: 45, height: 45) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <NoFussLink to="/">
      <StyledAuthorInfo>
        <Img fixed={file.childImageSharp.fixed} />
        <div>
          <Author>{author}</Author>
          {secondary && <Secondary>{secondary}</Secondary>}
        </div>
      </StyledAuthorInfo>
    </NoFussLink>
  );
};
