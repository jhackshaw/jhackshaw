import React from "react";
import styled from "styled-components";
import { ApiBook } from "./useColumns";
import { StarRating } from "../StarRating";
import { Card } from "../Card";

const Wrapper = styled(Card)`
  padding: 2rem;
`;

const Title = styled.p`
  color: var(--text-light);
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: 500;
  margin: 0 0 8px;
`;

const Author = styled.p`
  color: var(--text-lighter);
  margin: 0 0 1rem;
`;

const Date = styled.p`
  color: var(--text-lightest);
  font-weight: 300;
`;

const Book: React.FC<ApiBook> = ({ title, author, rating, date }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Author>By {author}</Author>
      <Date>{date}</Date>
      <StarRating rating={rating} />
    </Wrapper>
  );
};

export const BookCard = styled(Book)`
  flex: 1 0 100%;

  @media screen and (min-width: 768px) {
    flex: 1 0 50%;
  }
`;
