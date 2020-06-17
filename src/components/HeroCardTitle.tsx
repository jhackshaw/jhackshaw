import styled from "styled-components";

export const HeroCardTitle = styled.h1`
  color: ${({ theme }) => theme.text.main};
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  word-wrap: break-word;
  margin-top: 0;
  margin-bottom: 1rem;

  @media screen and (min-width: 760px) {
    font-size: 2.2rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;
