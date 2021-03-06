import { Card } from "./Card";
import styled from "styled-components";

interface Props {
  maxWidth?: number | string;
}

export const HeroCard = styled(Card)<Props>`
  background-color: var(--background-card);
  transition: background-color 350ms ease 0s;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    width: 100%;
    max-width: ${({ maxWidth }) =>
      maxWidth
        ? `${maxWidth}${typeof maxWidth === "number" ? "px" : ""}`
        : "none"};
    height: auto;
  }
`;
