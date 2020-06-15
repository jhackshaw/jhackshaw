import React from "react";
import Img from "gatsby-image";
import { NoFussLink } from ".";
import styled from "styled-components";

const StyledProjectCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;

  :hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

const ImageWrapper = styled.div`
  .gatsby-image-wrapper {
    height: 200px;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  padding: 1.5rem 1rem;
  flex-grow: 1;

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  span {
    font-weight: 400;
    font-size: 1rem;
    color: #757575;
    line-height: 1.5rem;
  }

  p {
    font-weight: 300;
    line-height: 1.8rem;
    font-size: 1.2rem;
    color: #212121;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;

interface Props {
  title: string;
  summary: string;
  stack: string[];
  image: {
    childImageSharp: {
      fluid: any;
    };
  };
  date: string;
  slug: string;
}

export const ProjectCard: React.FC<Props> = ({
  title,
  slug,
  stack,
  summary,
  image
}) => {
  return (
    <NoFussLink to={`/project/${slug}`}>
      <StyledProjectCard>
        <ImageWrapper>
          <Img fluid={image.childImageSharp.fluid} />
        </ImageWrapper>
        <ContentWrapper>
          <h3>{title}</h3>
          <span>{stack.join(", ")}</span>
          <p>{summary}</p>
        </ContentWrapper>
      </StyledProjectCard>
    </NoFussLink>
  );
};
