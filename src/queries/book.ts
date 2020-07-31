import { graphql } from "gatsby";

export interface BookQuery {
  title: string;
  author: string;
  stars: number;
  date: string;
  date_orig: string;
}

export const bookQuery = graphql`
  fragment AllBook on BooksYaml {
    title
    author
    date(fromNow: true)
    date_orig: date
    stars
  }
`;
