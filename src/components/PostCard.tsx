import React from "react";
import Img from "gatsby-image";
import { Card } from "./Card";
import { NoFussLink } from "./NoFussLink";
import { PostSummaryQuery } from "../queries";
import styled from "styled-components";

export const StyledPostCard = styled(Card)`
  display: flex;
  flex-direction: column;
  transition: background-color 0.5s ease;
  border-radius: 1rem;
  cursor: pointer;

  :hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

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

const CardBody = styled.div`
  padding: 1.5rem 1rem;
  flex-grow: 1;

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

export const PostCard: React.FC<PostSummaryQuery> = ({
  frontmatter,
  fields
}) => {
  const { image, title, summary, tags } = frontmatter;

  return (
    <NoFussLink to={`/post/${fields.slug}`}>
      <StyledPostCard>
        <ImageWrapper>
          <Img fluid={image.childImageSharp.fluid} />
        </ImageWrapper>
        <CardBody>
          <h3>{title}</h3>
          <span>{tags.join(", ")}</span>
          <p>{summary}</p>
        </CardBody>
      </StyledPostCard>
    </NoFussLink>
  );
};
