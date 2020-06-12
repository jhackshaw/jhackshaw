import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledExpertiseList = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
`;

const Expertise = styled.div`
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
    margin-right: 1rem;
    z-index: 10;
  }
`;

interface Props {
  items: {
    name: string;
    image: {
      childImageSharp: {
        fixed: any;
      };
    };
  }[];
}

export const ExpertiseList: React.FC<Props> = ({ items }) => {
  return (
    <StyledExpertiseList>
      {items.map(item => (
        <Expertise key={item.name}>
          <Img fixed={item.image.childImageSharp.fixed} />
          <span>{item.name}</span>
        </Expertise>
      ))}
    </StyledExpertiseList>
  );
};
