import React from "react";
import { MediaCard } from ".";
import styled from "styled-components";

const CardBody = styled.div`
  h3 {
    color: ${({ theme }) => theme.text.main};
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
    color: ${({ theme }) => theme.text.light};
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;

interface Props {
  title: string;
  summary: string;
  stack: string[];
  slug: string;
  image: {
    childImageSharp: {
      fluid: any;
    };
  };
}

export const ProjectCard: React.FC<Props> = ({
  title,
  slug,
  stack,
  summary,
  image
}) => {
  return (
    <MediaCard image={image} url={`/project/${slug}`}>
      <CardBody>
        <h3>{title}</h3>
        <span>{stack.join(", ")}</span>
        <p>{summary}</p>
      </CardBody>
    </MediaCard>
  );
};
