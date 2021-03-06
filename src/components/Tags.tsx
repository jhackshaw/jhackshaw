import React from "react";
import styled from "styled-components";
import { FaTags } from "react-icons/fa";

const StyledTags = styled.p`
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--text-lighter);
  margin: 0;
  line-height: 1.6;
  font-family: var(--font-family-mono);
`;

interface Props {
  tags: string[];
  implicitProject?: boolean;
}

export const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <StyledTags>
      <FaTags size={12} /> {tags.join(", ")}
    </StyledTags>
  );
};
