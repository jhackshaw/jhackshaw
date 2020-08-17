import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NoFussLink } from "./NoFussLink";
import styled from "styled-components";

const StyledTitle = styled.h2`
  color: var(--text-main);
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 1.2rem;
  word-wrap: break-word;
  word-break: break-all;
`;

const StyledLinkTitle = styled(NoFussLink)`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  ${StyledTitle} {
    margin: 0;
  }

  svg {
    margin-left: 0.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: var(--text-title);
    font-size: 1.8rem;

    @media screen and (min-width: 760px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 1280px) {
      font-size: 2.2rem;
    }
  }

  :hover svg {
    opacity: 1;
  }

  :hover > ${StyledTitle} {
    color: var(--text-title);
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
        <FaArrowRight size={16} />
      </StyledLinkTitle>
    );
  }

  return <StyledTitle>{children}</StyledTitle>;
};
