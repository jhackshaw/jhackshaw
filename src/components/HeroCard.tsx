import styled from "styled-components";

export const HeroCard = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 3rem 2rem;
  overflow: hidden;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    /* margin: 0; */
    width: 100%;
    max-width: 700px;
    height: auto;
  }
`;
