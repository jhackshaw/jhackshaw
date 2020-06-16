import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const Expertise = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.background.card};
  overflow: hidden;
  padding: 1rem;
  display: flex;
  align-items: center;
  z-index: 1;

  @media screen and (min-width: 500px) {
    border-radius: 1rem;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }

  span {
    font-family: "Roboto Mono", monospace;
    font-weight: 500;
    font-size: 1.4rem;
    z-index: 10;
    color: ${({ theme }) => theme.text.main};
  }

  .gatsby-image-wrapper {
    margin-right: 1rem;
    z-index: 10;
  }
`;

const StyledExpertiseList = styled.div`
  display: grid;
  gap: 0;
  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 500px) {
    box-shadow: none;
    gap: 1rem;
  }

  @media screen and (min-width: 760px) {
    gap: 2rem;
  }

  ${Expertise} + ${Expertise} {
    border-top: 1px solid lightgray;

    @media screen and (min-width: 500px) {
      border-top: none;
    }
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
