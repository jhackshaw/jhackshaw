import React from "react";
import { ProjectCard } from ".";
import styled from "styled-components";

const StyledProjectCardList = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-items: stretch;
  align-items: stretch;
`;

interface Props {
  projects: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      summary: string;
      stack: string[];
      date: string;
      image: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
  }[];
}

export const ProjectCardList: React.FC<Props> = ({ projects }) => {
  return (
    <StyledProjectCardList>
      {projects.map(({ frontmatter, fields }) => (
        <ProjectCard {...frontmatter} slug={fields.slug} key={fields.slug} />
      ))}
    </StyledProjectCardList>
  );
};
