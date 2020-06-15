import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { SocialIcons, HeroCard } from ".";

const HeroInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    text-align: left;
  }

  p {
    font-weight: 300;
    color: #424242;
  }

  .gatsby-image-wrapper {
    flex: 0 0 220px;
    margin: 2rem;
    border-radius: 50%;
    position: relative !important;
  }
`;

const Details = styled.div`
  @media screen and (min-width: 760px) {
    margin-left: 1rem;
  }

  p {
    line-height: 1.8rem;
    font-size: 1.2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  word-wrap: break-word;
  word-break: break-all;
  margin-top: 0;
  margin-bottom: 1rem;

  @media screen and (min-width: 760px) {
    font-size: 2.2rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;

export const IndexHeroCard: React.FC = () => {
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
    <HeroCard maxWidth={700}>
      <HeroInner>
        <Img fixed={file.childImageSharp.fixed} />
        <Details>
          <Title>Jeff Hackshaw</Title>
          <p>
            Hi there! I&apos;m a full stack web developer, soon to be 9-year
            Marine Corps veteran, science fiction enthusiast, and husband
            (He/Him).
          </p>
          <p>
            <em>This website is a work in progress.</em>
          </p>
          <SocialIcons />
        </Details>
      </HeroInner>
    </HeroCard>
  );
};
