import React from "react";
import styled from "styled-components";
import { Column, CellProps } from "react-table";
import { StarRating } from "../StarRating";
import { parse, formatDistanceToNow } from "date-fns";

export interface ApiBook {
  rating: number;
  title: string;
  author: string;
  date: string;
  image: string;
  description: string;
}

const parseDate = (original: string) => {
  return formatDistanceToNow(
    parse(original, "EEE LLL dd HH:mm:ss xxxx yyyy", new Date())
  );
};

const StarRatingCell = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const columns: Column<ApiBook>[] = [
  {
    Header: "Finished",
    accessor: row => row.date,
    Cell: ({ row: { original } }: CellProps<ApiBook>) =>
      `${parseDate(original.date)} ago`,
    id: "date_read",
    width: 120
  },
  {
    Header: "Title",
    accessor: row => row.title,
    id: "title",
    width: 280
  },
  {
    Header: "Author",
    accessor: row => row.author,
    id: "author",
    width: 150
  },
  {
    Header: "Stars",
    accessor: row => row.rating,
    // eslint-disable-next-line react/display-name
    Cell: ({ row: { original } }: CellProps<ApiBook>) => (
      <StarRatingCell>
        <StarRating rating={original.rating} />
      </StarRatingCell>
    ),
    id: "review",
    width: 80,
    disableSortBy: true
  }
];
