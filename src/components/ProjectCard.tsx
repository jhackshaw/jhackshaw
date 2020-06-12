import React from "react";
import Img from "gatsby-image";
import { formatDistanceToNow, parseISO } from "date-fns";
import { NoFussLink } from ".";
import styled from "styled-components";

const StyledProjectCard = styled.div`
  width: 100%;
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
  padding: 1rem;

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 300;
    color: gray;
  }
`;

interface Props {
  title: string;
  image: {
    childImageSharp: {
      fluid: any;
    };
  };
  date: string;
  slug: string;
}

export const ProjectCard: React.FC<Props> = ({ title, slug, image, date }) => {
  return (
    <NoFussLink to={`/project/${slug}`}>
      <StyledProjectCard>
        <ImageWrapper>
          <Img fluid={image.childImageSharp.fluid} />
        </ImageWrapper>
        <ContentWrapper>
          <h3>{title}</h3>
          <span>{`${formatDistanceToNow(parseISO(date))} ago`}</span>
        </ContentWrapper>
      </StyledProjectCard>
    </NoFussLink>
  );
};
