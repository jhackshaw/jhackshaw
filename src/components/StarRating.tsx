import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  rating: number;
}

const BottomStars = styled.div``;
const TopStars = styled.div``;

const Wrapper = styled.div<Props>`
  position: relative;
  z-index: 1;
  display: inline-block;

  ${BottomStars}, ${TopStars} {
    display: flex;
    flex-flow: row nowrap;

    svg {
      flex: 0 0 24px;
      padding: 0;
    }
  }

  ${BottomStars} {
    z-index: 2;
    color: var(--text-lighter);
  }

  ${TopStars} {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 3;
    width: ${({ rating }) => `${(rating / 5) * 100}%`};
    color: gold;
  }
`;

export const StarRating: React.FC<Props> = ({ rating }) => {
  return (
    <Wrapper rating={rating}>
      <BottomStars>
        {Array.from({ length: 5 }).map((_, idx) => (
          <FaStar size="24px" key={idx} />
        ))}
      </BottomStars>
      <TopStars>
        {Array.from({ length: 5 }).map((_, idx) => (
          <FaStar size="24px" key={idx} />
        ))}
      </TopStars>
    </Wrapper>
  );
};
