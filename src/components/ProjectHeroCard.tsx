import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { AuthorInfo, HeroCard } from ".";
import { NoFussLink } from "./NoFussLink";

const ProjectHeroInner = styled.div`
  position: relative;
  display: flex;
  flex-flow: column-reverse nowrap;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: stretch;
  }
`;

const TitleSection = styled.div`
  flex: 1 1 55%;
  display: flex;
  flex-flow: column nowrap;
  padding: 1.5rem 1rem;

  @media screen and (min-width: 480px) {
    padding: 3rem 2rem;
  }

  h1 {
    color: ${({ theme }) => theme.text.main};
    font-weight: 500;
    font-size: 1.8rem;
    margin: 0;
    line-height: 2.4rem;
  }
`;

const TitleDetails = styled.div`
  flex: 1 1 auto;
  margin: 1rem 0 1.5rem;

  p,
  p > a {
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.text.lighter};
    line-height: 1.5rem;
    margin: 0;
  }

  p > a {
    border-bottom: 1px dotted lightgray;
  }

  p + p {
    margin-top: 0.5rem;
  }
`;

const ImageSection = styled.div`
  position: relative;
  flex: 1 1 45%;

  .gatsby-image-wrapper {
    height: 100%;
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
  source?: string;
  demo?: string;
  date: string;
  showAuthor?: boolean;
  timeToRead: number;
}

export const ProjectHeroCard: React.FC<Props> = ({
  title,
  source,
  demo,
  image,
  date,
  showAuthor,
  stack = [],
  timeToRead
}) => {
  return (
    <HeroCard maxWidth={800}>
      <ProjectHeroInner>
        <TitleSection>
          <h1>{title}</h1>
          <TitleDetails>
            <p>{`${date} • ${timeToRead} min read`}</p>
            <p>{stack.join(", ")}</p>
            {(source || demo) && (
              <p>
                {demo && <NoFussLink to={demo}>Demo</NoFussLink>}
                {demo && source && " • "}
                {source && <NoFussLink to={source}>Source</NoFussLink>}
              </p>
            )}
          </TitleDetails>
          {showAuthor && <AuthorInfo />}
        </TitleSection>
        <ImageSection>
          <Img fluid={image.childImageSharp.fluid} />
        </ImageSection>
      </ProjectHeroInner>
    </HeroCard>
  );
};
