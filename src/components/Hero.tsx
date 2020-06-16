import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import styled from "styled-components";

const Container = styled.div`
  position: relative;

  .gatsby-image-wrapper {
    z-index: 0;
    width: 100%;
    height: 300px;
    position: relative;

    @media screen and (min-width: 1280px) {
      height: 100%;
      position: absolute !important;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1600px;
  margin: 0 auto;
  padding: 3rem 1rem 0 1rem;
  min-height: 275px;
  margin-top: -275px;

  @media screen and (min-width: 760px) {
    margin-top: -265px;
    min-height: 265px;
    padding: 3rem 3rem 0 3rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 5rem 5rem 5rem 5rem;
    margin: 0 auto;
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
      <Img fluid={file.childImageSharp.fluid} objectPosition="50% 0%" />
      <HeroContent>{children}</HeroContent>
    </Container>
  );
};
