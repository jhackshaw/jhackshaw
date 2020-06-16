import styled from "styled-components";

export const MediaCardGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-items: stretch;
  align-items: stretch;
`;
