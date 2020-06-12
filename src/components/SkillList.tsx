import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledSkillList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;

  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`;

const Skill = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  align-items: center;
  z-index: 1;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  span {
    font-family: "Roboto Mono", monospace;
    font-weight: 500;
    font-size: 1.4rem;
    z-index: 10;
  }

  .gatsby-image-wrapper {
    margin-right: 2rem;
    z-index: 10;
  }
`;

interface Props {
  skills: {
    name: string;
    confidence: number;
    image: {
      childImageSharp: {
        fixed: any;
      };
    };
  }[];
}

export const SkillList: React.FC<Props> = ({ skills }) => {
  return (
    <StyledSkillList>
      {skills.map(skill => (
        <Skill key={skill.name}>
          <Img fixed={skill.image.childImageSharp.fixed} />
          <span>{skill.name}</span>
        </Skill>
      ))}
    </StyledSkillList>
  );
};
