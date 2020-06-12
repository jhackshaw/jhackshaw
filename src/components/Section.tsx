import styled from "styled-components";

export const Section = styled.section`
  padding: 0 1rem;
  margin: 3rem auto;
  max-width: 1400px;

  @media screen and (min-width: 768px) {
    padding: 0 3rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 5rem;
    margin: 7rem auto;
  }
`;
