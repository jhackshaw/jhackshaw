import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { AuthorInfo } from "./AuthorInfo";
import { HeroCard } from "./HeroCard";
import { HeroCardTitle } from "./HeroCardTitle";
import { NoFussLink } from "./NoFussLink";
import { AllPostQuery } from "../queries";

const StyledPostHeroCard = styled(HeroCard)`
  position: relative;
  display: flex;
  flex-flow: column-reverse nowrap;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: stretch;
  }

  :hover {
    h1 {
      color: ${({ theme }) => theme.text.title};
    }
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
`;

const Details = styled.div`
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

interface Props extends AllPostQuery {
  showAuthor?: boolean;
}

export const PostHeroCard: React.FC<Props> = ({
  frontmatter,
  timeToRead,
  showAuthor
}) => {
  const { title, date, source, demo, image, tags } = frontmatter;
  return (
    <StyledPostHeroCard maxWidth={800}>
      <TitleSection>
        <HeroCardTitle>{title}</HeroCardTitle>
        <Details>
          <p>{`${date} • ${timeToRead} min read`}</p>
          <p>{tags.join(", ")}</p>
          {(source || demo) && (
            <p>
              {demo && <NoFussLink to={demo}>Demo</NoFussLink>}
              {demo && source && " • "}
              {source && <NoFussLink to={source}>Source</NoFussLink>}
            </p>
          )}
        </Details>
        {showAuthor && <AuthorInfo />}
      </TitleSection>
      <ImageSection>
        <Img fluid={image.childImageSharp.fluid} />
      </ImageSection>
    </StyledPostHeroCard>
  );
};
