import React, { useState, useCallback, useEffect } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useExpanded,
  usePagination,
  useFlexLayout,
  useResizeColumns
} from "react-table";
import { Input } from "../FormControls";
import { Paginator } from "../Paginator";
import { BookCard } from "./BookCard";
import { PostCardGrid } from "../PostCardGrid";
import { Section } from "../Section";
import styled from "styled-components";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { Table, TBodyRow } from "./Table";
import { columns, ApiBook } from "./useColumns";
import { LoadingBar } from "../LoadingBar";

const PAGE_SIZE = 15;

const CardWrapper = styled(PostCardGrid)`
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const BookDetails = styled.div`
  padding: 3rem 1rem;
  display: flex;
  flex-flow: row nowrap;
  text-align: right;
  align-items: flex-start;

  img {
    display: block;
    /* flex: 0 0 auto; */
  }
  p {
    display: block;
    margin: 0 0 0 3rem;
    text-align: left;
    /* flex: 1 1 10%; */

    a {
      color: var(--text-title);
    }
  }
`;

const ErrorWrapper = styled.div`
  text-align: right;
  color: red;
  margin: 0.5rem 0;
`;
const SearchWrapper = styled.div`
  width: 100%;
  max-width: 1366px;
  margin-bottom: 1rem;

  ${Input}, ${ErrorWrapper} {
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

const FaSortStyled = styled(FaSort)`
  color: var(--text-lightest);
`;

type TimeoutType = ReturnType<typeof setTimeout>;

export const BookTable: React.FC = () => {
  const [books, setBooks] = useState<ApiBook[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [queryTimeout, setQueryTimeout] = useState<TimeoutType>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const instance = useTable(
    {
      columns,
      data: books,
      disableMultiSort: true,
      manualGlobalFilter: true,
      manualSortBy: true,
      manualPagination: true,
      pageCount,
      initialState: {
        pageSize: PAGE_SIZE,
        pageIndex: 0,
        sortBy: [{ id: "date_read", desc: true }]
      }
    },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useFlexLayout,
    useResizeColumns
  );

  const { sortBy, globalFilter, pageIndex } = instance.state;

  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      // setError('');
      const params = new URLSearchParams();
      if (globalFilter) {
        params.set("search[query]", globalFilter);
      }
      if (pageIndex) {
        params.set("page", (pageIndex + 1).toString());
      }
      if (sortBy.length) {
        params.set("sort", sortBy[0].id);
        params.set("order", sortBy[0].desc ? "d" : "a");
      }
      const response = await fetch(`/.netlify/functions/books?${params}`);
      const { books, count } = await response.json();
      setBooks(books);
      setPageCount(Math.ceil(count / PAGE_SIZE));
    } catch (e) {
      console.error(e);
      setError("Unable to fetch books");
    } finally {
      setLoading(false);
    }
  }, [sortBy, globalFilter, pageIndex]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const value = e.target.value;
    setSearchValue(value);
    if (queryTimeout) {
      clearTimeout(queryTimeout);
    }
    setQueryTimeout(
      setTimeout(() => {
        instance.setGlobalFilter(value);
      }, 500)
    );
  };

  return (
    <Section maxWidth="1366px">
      <SearchWrapper>
        <Input
          onChange={onSearchChange}
          value={searchValue}
          placeholder="Search"
          aria-label="Search books"
        />
        {error && <ErrorWrapper>{error}</ErrorWrapper>}
      </SearchWrapper>
      <Table {...instance.getTableProps()} isLoading={loading}>
        <thead>
          {instance.headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getSortByToggleProps()}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                  {column.canSort &&
                    (column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      )
                    ) : (
                      <FaSortStyled />
                    ))}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...instance.getTableBodyProps()}>
          {loading && (
            <tr>
              <td
                style={{ padding: 0 }}
                colSpan={instance.visibleColumns.length}
              >
                <LoadingBar />
              </td>
            </tr>
          )}
          {instance.page.map(row => {
            instance.prepareRow(row);
            const { key, ...rest } = row.getRowProps();
            return (
              <React.Fragment key={key}>
                <TBodyRow
                  {...rest}
                  clickable
                  expanded={row.isExpanded}
                  onClick={() => {
                    instance.toggleAllRowsExpanded(false);
                    instance.toggleRowExpanded([row.id], !row.isExpanded);
                  }}
                >
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </TBodyRow>
                {row.isExpanded && (
                  <TBodyRow>
                    <td colSpan={instance.visibleColumns.length}>
                      <BookDetails>
                        <img src={row.original.image ?? ""} />
                        <p
                          dangerouslySetInnerHTML={{
                            __html: row.original.description
                          }}
                        />
                      </BookDetails>
                    </td>
                  </TBodyRow>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </Table>
      <CardWrapper>
        {instance.page.map(row => {
          return (
            <BookCard
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
