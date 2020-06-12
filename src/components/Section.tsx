import styled from "styled-components";

export const Section = styled.section`
  padding: 0 1rem;
  margin: 3rem auto;
  max-width: 1200px;

  @media screen and (min-width: 760px) {
    padding: 0 3rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 5rem;
    margin: 5rem auto;
  }
`;
