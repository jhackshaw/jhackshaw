import styled from "styled-components";

export const TBodyRow = styled.tr<{ expanded?: boolean; clickable?: boolean }>`
  cursor: ${({ clickable }) => (clickable ? "pointer" : "unset")};
  border-left: ${({ expanded }) =>
    expanded ? "5px solid var(--text-title)" : "none"};

  background-color: ${({ expanded }) =>
    expanded ? "var(--background-card)" : "transparent"};

  border-top-left-radius: ${({ expanded }) => (expanded ? "5px" : "0")};
  border-bottom-left-radius: ${({ expanded }) => (expanded ? "5px" : "0")};

  :hover {
    background-color: ${({ clickable }) =>
      clickable ? "var(--background-card)" : "transparent"};
  }
`;

export const Table = styled.table<{ isLoading?: boolean }>`
  width: 100%;
  color: var(--text-light);
  font-size: 1.2rem;
  border-radius: 1rem;
  display: none;

  @media screen and (min-width: 1280px) {
    display: table;
  }

  thead > tr {
    border-bottom: ${({ isLoading }) =>
      isLoading ? "none" : "2px solid var(--text-lightest)"};
  }

  td,
  th {
    padding: 1rem 1rem;
    text-align: left;
  }

  td:last-of-type,
  th:last-of-type {
    text-align: right;
    justify-content: flex-end;
  }

  th {
    padding-bottom: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    svg {
      margin-left: 1rem;
    }
  }

  blockquote {
    font-size: 0.8rem;
    font-style: italic;
  }
`;
