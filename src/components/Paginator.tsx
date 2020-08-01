import React from "react";
import { TableInstance } from "react-table";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight
} from "react-icons/fa";
import styled from "styled-components";

const NavButton = styled.button`
  outline: none;
  background: none;
  border: none;
  padding: 0 0.5rem;
  color: var(--text-light);
  cursor: pointer;

  :not(:disabled):hover {
    color: var(--text-title);
  }

  :disabled {
    color: var(--text-lightest);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  p {
    color: var(--text-light);
    padding-right: 1rem;
    margin: 0;
  }
`;

interface Props {
  instance: TableInstance<any>;
}

export const Paginator: React.FC<Props> = ({ instance }) => {
  const {
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex }
  } = instance;

  return (
    <Wrapper>
      <p>
        Page <b>{pageIndex + 1}</b> of <b>{pageCount}</b>
      </p>
      <NavButton disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
        <FaAngleDoubleLeft size={24} />
      </NavButton>

      <NavButton disabled={!canPreviousPage} onClick={() => previousPage()}>
        <FaAngleLeft size={24} />
      </NavButton>

      <NavButton disabled={!canNextPage} onClick={() => nextPage()}>
        <FaAngleRight size={24} />
      </NavButton>

      <NavButton
        disabled={!canNextPage}
        onClick={() => gotoPage(pageCount - 1)}
      >
        <FaAngleDoubleRight size={24} />
      </NavButton>
    </Wrapper>
  );
};
