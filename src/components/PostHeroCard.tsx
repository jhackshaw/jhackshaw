import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { HeroCard } from "./HeroCard";
import { PostTitlePrimary } from "./PostTitle";
import { Tags } from "./Tags";
import { NoFussLink } from "./NoFussLink";
import { AllPostQuery } from "../queries";

const StyledPostHeroCard = styled(HeroCard)<{ isLinked?: boolean }>`
  position: relative;
  display: flex;
  flex-flow: column-reverse nowrap;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: stretch;
  }

  @media screen and (min-width: 768px) {
    ${PostTitlePrimary}:hover {
      color: ${({ isLinked }) =>
        isLinked ? "var(--text-title)" : "var(--text-main)"};
    }
  }
`;

const TitleSection = styled.div`
  flex: 1 1 55%;
  padding: 1.5rem 1rem;

  @media screen and (min-width: 480px) {
    padding: 3rem 2rem;
  }

  ${PostTitlePrimary} {
    margin: 0;
  }
`;

const Details = styled.div`
  padding: 0.5rem 0 1rem;

  @media screen and (min-width: 768px) {
    padding-bottom: 2rem;
  }

  p,
  p > a {
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--text-lighter);
    line-height: 1.4rem;
    margin: 0.25rem 0;
  }

  p > a {
    border-bottom: 1px dotted lightgray;
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
  link?: boolean;
  maxWidth?: number | string;
}

export const PostHeroCard: React.FC<Props> = ({
  frontmatter,
  fields,
  timeToRead,
  link,
  maxWidth = 800
}) => {
  const { title, date, source, demo, image, tags } = frontmatter;
  const linkTo = link ? `/post/${fields.slug}` : "";
  return (
    <StyledPostHeroCard maxWidth={maxWidth} isLinked={link}>
      <TitleSection>
        <NoFussLink to={linkTo}>
          <PostTitlePrimary>{title}</PostTitlePrimary>
        </NoFussLink>
        <Details>
          <p>{`${date} • ${timeToRead} min read`}</p>
          {(source || demo) && (
            <p>
              {demo && <NoFussLink to={demo}>Demo</NoFussLink>}
              {demo && source && " • "}
              {source && <NoFussLink to={source}>Source</NoFussLink>}
            </p>
          )}
        </Details>
        <Tags tags={tags} />
      </TitleSection>
      {image && (
        <ImageSection>
          <NoFussLink to={linkTo}>
            <Img fluid={image.childImageSharp.fluid} />
          </NoFussLink>
        </ImageSection>
      )}
    </StyledPostHeroCard>
  );
};
