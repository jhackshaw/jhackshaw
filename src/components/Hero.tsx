import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  position: relative;

  .gatsby-image-wrapper {
    z-index: 0;
    width: 100%;
    height: 300px;
    position: relative;

    @media screen and (min-width: 1024px) {
      height: 100%;
      position: absolute !important;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 1rem;
  margin-top: -250px;

  @media screen and (min-width: 768px) {
    padding: 5rem 3rem;
    margin-top: -300px;
  }

  @media screen and (min-width: 1024px) {
    padding: 9rem 5rem;
    margin: 0;
  }
`;

export const Hero: React.FC = ({ children }) => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "media/hero-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400, maxHeight: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Img fluid={file.childImageSharp.fluid} />
      <HeroContent>{children}</HeroContent>
    </Container>
  );
};
