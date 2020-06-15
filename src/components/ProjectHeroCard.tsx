import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { HeroCard, AuthorInfo } from ".";

const ProjectHeroInner = styled.div`
  position: relative;
  display: flex;
  flex-flow: column-reverse nowrap;
  /* min-height: 300px; */

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: stretch;
  }
`;

const TitleSection = styled.div`
  flex: 1 1 55%;
  display: flex;
  flex-flow: column nowrap;
  padding: 3rem 2rem;

  h1 {
    color: #000;
    font-weight: 500;
    font-size: 1.8rem;
    margin: 0;
    line-height: 2.4rem;
  }

  p {
    flex: 1 0 auto;
    font-weight: 300;
    font-size: 0.9rem;
    color: #9e9e9e;
    line-height: 1.3rem;
    margin: 0.5rem 0 2rem;
  }
`;

const ImageSection = styled.div`
  position: relative;
  flex: 1 1 45%;

  .gatsby-image-wrapper {
    height: 300px;

    @media screen and (min-width: 760px) {
      height: 100%;
      min-height: 300px;
    }
  }
`;

interface Props {
  title: string;
  image: {
    childImageSharp: {
      fluid: any;
    };
  };
  stack?: string[];
  date: string;
  timeToRead: number;
}

export const ProjectHeroCard: React.FC<Props> = ({
  title,
  image,
  date,
  stack = [],
  timeToRead
}) => {
  return (
    <HeroCard maxWidth={800}>
      <ProjectHeroInner>
        <TitleSection>
          <h1>{title}</h1>
          <p>{stack.join(", ")}</p>
          <AuthorInfo secondary={`${date} | ${timeToRead} min read`} />
        </TitleSection>
        <ImageSection>
          <Img fluid={image.childImageSharp.fluid} />
        </ImageSection>
      </ProjectHeroInner>
    </HeroCard>
  );
};
