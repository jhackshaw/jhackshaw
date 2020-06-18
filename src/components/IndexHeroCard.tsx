import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { HeroCard } from "./HeroCard";
import { SocialIcons } from "./SocialIcons";
import { HeroCardTitle } from "./HeroCardTitle";

const StyledIndexHeroCard = styled(HeroCard)`
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
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 300;
    color: var(--text-light);
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
    <StyledIndexHeroCard maxWidth={700}>
      <Img fixed={file.childImageSharp.fixed} />
      <Details>
        <HeroCardTitle>Jeff Hackshaw</HeroCardTitle>
        <p>
          Hi there! I&apos;m a full stack web developer, soon to be 9-year
          Marine Corps veteran, science fiction enthusiast, and husband.
        </p>
        <p>
          <em>This website is a work in progress.</em>
        </p>
        <SocialIcons />
      </Details>
    </StyledIndexHeroCard>
  );
};
