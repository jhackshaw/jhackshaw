import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import styled from "styled-components";

interface Props {
  centered?: boolean;
}

const HeroContent = styled.div``;

const Container = styled.div<Props>`
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

  ${HeroContent} {
    position: relative;
    z-index: 10;
    max-width: 1600px;
    margin: 0 auto;
    padding: 70px 1rem 0 1rem;
    min-height: 300px;
    margin-top: -300px;
    align-items: center;
    justify-content: center;

    display: ${({ centered }) => centered && "flex"};
    padding-bottom: ${({ centered }) => centered && "80px"};

    @media screen and (min-width: 760px) {
      padding: 80px 3rem 0 3rem;
      padding-bottom: ${({ centered }) => centered && "80px"};
    }

    @media screen and (min-width: 1280px) {
      padding: 5rem;
      margin: 0 auto;
    }
  }
`;

export const Hero: React.FC<Props> = ({ children, ...rest }) => {
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
    <Container {...rest}>
      <Img fluid={file.childImageSharp.fluid} objectPosition="50% 0%" />
      <HeroContent>{children}</HeroContent>
    </Container>
  );
};
