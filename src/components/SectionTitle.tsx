import React from "react";
import { NoFussLink } from "./NoFussLink";
import styled from "styled-components";

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.text.main};
  font-size: 1.8rem;
  font-weight: 400;
  word-wrap: break-word;
  word-break: break-all;

  @media screen and (min-width: 760px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 2.2rem;
    font-weight: 500;
  }
`;

const StyledLinkTitle = styled(NoFussLink)`
  display: flex;
  align-items: center;

  ::after {
    content: ">";
    margin-left: 0.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: ${({ theme }) => theme.text.title};
    font-size: 1.8rem;

    @media screen and (min-width: 760px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 1280px) {
      font-size: 2.2rem;
    }
  }

  :hover ::after {
    opacity: 1;
  }

  :hover > ${StyledTitle} {
    color: ${({ theme }) => theme.text.title};
  }
`;

interface Props {
  to?: string;
}

export const SectionTitle: React.FC<Props> = ({ to, children }) => {
  if (to) {
    return (
      <StyledLinkTitle to={to}>
        <StyledTitle>{children}</StyledTitle>
      </StyledLinkTitle>
    );
  }

  return <StyledTitle>{children}</StyledTitle>;
};
