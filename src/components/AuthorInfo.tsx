import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledAuthorInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  .gatsby-image-wrapper {
    flex: 0 0 60px;
    margin-right: 1rem;
    border-radius: 50%;
    position: relative !important;
  }
`;

const Author = styled.div`
  font-weight: 400;
  color: #4a4a4a;
  line-height: 2.2rem;
  font-size: 1.4rem;
`;

const Secondary = styled.div`
  font-weight: 300;
  color: #4a4a4a;
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
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <StyledAuthorInfo>
      <Img fixed={file.childImageSharp.fixed} />
      <div>
        <Author>{author}</Author>
        {secondary && <Secondary>{secondary}</Secondary>}
      </div>
    </StyledAuthorInfo>
  );
};
