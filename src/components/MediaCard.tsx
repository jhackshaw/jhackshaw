import React from "react";
import Img from "gatsby-image";
import { NoFussLink } from ".";
import styled from "styled-components";

export const StyledMediaCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.card};
  transition: background-color 0.5s ease;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;

  :hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    h1,
    h2,
    h3 {
      color: ${({ theme }) => theme.text.title};
    }
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
`;

interface Props {
  url: string;
  image: {
    childImageSharp: {
      fluid: any;
    };
  };
}

export const MediaCard: React.FC<Props> = ({ url, image, children }) => {
  return (
    <NoFussLink to={url}>
      <StyledMediaCard>
        <ImageWrapper>
          <Img fluid={image.childImageSharp.fluid} />
        </ImageWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </StyledMediaCard>
    </NoFussLink>
  );
};
