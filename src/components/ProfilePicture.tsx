import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2rem;

  .gatsby-image-wrapper {
    border-radius: 50%;
    position: relative !important;
  }
`;

export const ProfilePicture: React.FC = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "media/profile.jpg" }) {
        childImageSharp {
          fixed(width: 220, height: 220) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Img fixed={file.childImageSharp.fixed} />
    </Wrapper>
  );
};
