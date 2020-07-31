import React from "react";
import { PageProps, graphql } from "gatsby";
import { BookQuery } from "../queries";
import {
  Hero,
  Layout,
  IndexHeroCard,
  HeroCardTitle,
  SEO,
  BookTable
} from "../components";

interface BookQueryProps {
  books: {
    nodes: BookQuery[];
  };
}

const IndexPage: React.FC<PageProps<BookQueryProps>> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Books" />
      <Hero>
        <IndexHeroCard>
          <HeroCardTitle>Jeff Hackshaw</HeroCardTitle>
          <p>
            I really needed a way to keep track of which books I've read, when I
            read them, and which ones I liked.
          </p>
          <p>
            <em>This obviously isn't exhaustive and I wish I started sooner</em>
          </p>
        </IndexHeroCard>
      </Hero>
      <BookTable books={data.books.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query BookPageQuery {
    books: allBooksYaml {
      nodes {
        ...AllBook
      }
    }
  }
`;

export default IndexPage;
