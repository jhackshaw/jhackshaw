import React from "react";
import styled, { keyframes } from "styled-components";

const progress = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Progress = styled.span`
  display: block;
  animation: ${progress} 3s linear infinite;
  background-color: var(--text-title);
  height: 100%;
`;

const Bar = styled.div`
  width: 100%;
  height: 5px;
  position: relative;
  background: var(--text-lightest);
`;

export const LoadingBar: React.FC = () => (
  <Bar>
    <Progress />
  </Bar>
);
