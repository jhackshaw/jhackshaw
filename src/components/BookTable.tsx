import React from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useExpanded,
  usePagination,
  useFlexLayout,
  useResizeColumns,
  Column,
  CellProps
} from "react-table";
import { BookQuery } from "queries";
import { Input } from "./FormControls";
import { StarRating } from "./StarRating";
import { Paginator } from "./Paginator";
import { BookCard } from "./BookCard";
import { PostCardGrid } from "./PostCardGrid";
import { Section } from "./Section";
import styled from "styled-components";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

interface Props {
  books: BookQuery[];
}

const Table = styled.table`
  width: 100%;
  color: var(--text-light);
  font-size: 1.2rem;
  border-radius: 1rem;
  display: none;

  @media screen and (min-width: 1280px) {
    display: table;
  }

  thead > tr {
    border-bottom: 2px solid var(--text-lightest);
  }

  tbody > tr:hover {
    background-color: var(--background-card);
    filter: brightness(90%);
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

const CardWrapper = styled(PostCardGrid)`
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const CardItem = styled(BookCard)`
  flex: 1 0 100%;

  @media screen and (min-width: 768px) {
    flex: 1 0 50%;
  }
`;

const SearchWrapper = styled.div`
  width: 100%;
  max-width: 1366px;
  margin-bottom: 1rem;

  ${Input} {
    max-width: 500px;
    margin-left: auto;
    width: 100%;
  }
`;

const PaginatorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const StarRatingCell = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FaSortStyled = styled(FaSort)`
  color: var(--text-lightest);
`;

const columns: Column<BookQuery>[] = [
  {
    Header: "Finished",
    accessor: row => row.date_orig,
    Cell: ({ row: { original } }: CellProps<BookQuery>) => original.date,
    width: 100
  },
  {
    Header: "Title",
    accessor: row => row.title,
    width: 300
  },
  {
    Header: "Author",
    accessor: row => row.author,
    width: 150
  },
  {
    Header: "Stars",
    accessor: row => row.stars,
    Cell: ({ row: { original } }: CellProps<BookQuery>) => (
      <StarRatingCell>
        <StarRating rating={original.stars} />
      </StarRatingCell>
    ),
    width: 80
  }
];

export const BookTable: React.FC<Props> = ({ books }) => {
  const instance = useTable(
    {
      columns,
      data: books,
      disableMultiSort: true,
      initialState: {
        pageSize: 15,
        pageIndex: 0,
        sortBy: [{ id: "Finished", desc: true }]
      }
    },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useFlexLayout,
    useResizeColumns
  );

  return (
    <Section maxWidth="1366px">
      <SearchWrapper>
        <Input
          onChange={e => instance.setGlobalFilter(e.target.value)}
          value={instance.state.globalFilter ?? ""}
          placeholder="Search"
        />
      </SearchWrapper>
      <Table {...instance.getTableProps()}>
        <thead>
          {instance.headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getSortByToggleProps()}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FaSortDown />
                    ) : (
                      <FaSortUp />
                    )
                  ) : (
                    <FaSortStyled />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...instance.getTableBodyProps()}>
          {instance.page.map(row => {
            instance.prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CardWrapper>
        {instance.page.map(row => {
          return (
            <CardItem
              key={`${row.original.title}${row.original.author}`}
              {...row.original}
            />
          );
        })}
      </CardWrapper>
      <PaginatorWrapper>
        <Paginator instance={instance} />
      </PaginatorWrapper>
    </Section>
  );
};
