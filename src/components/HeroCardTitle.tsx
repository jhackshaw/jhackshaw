import styled from "styled-components";

export const HeroCardTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  word-wrap: break-word;
  word-break: break-all;
  margin-top: 0;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;
