import React from "react";
import {
  Hero,
  Layout,
  IndexHeroCard,
  HeroCardTitle,
  SEO,
  BookTable
} from "../components";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Books" />
      <Hero>
        <IndexHeroCard>
          <HeroCardTitle>Jeff Hackshaw</HeroCardTitle>
          <p>
            An easier way to keep track of which books I read, when I read them,
            and which ones I liked using the GoodReads API.
          </p>
          <p>
            <em>This is not an exhaustive list</em>
          </p>
        </IndexHeroCard>
      </Hero>
      <BookTable />
    </Layout>
  );
};

export default IndexPage;
