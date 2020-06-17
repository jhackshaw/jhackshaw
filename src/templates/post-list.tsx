import React from "react";
import { PageProps, graphql } from "gatsby";
import {
  Hero,
  Layout,
  SEO,
  Section,
  PostCard,
  MediaCardList,
  TopTagList
} from "../components";
import { PostSummaryQuery } from "../queries";
import styled from "styled-components";

interface Data {
  posts: {
    nodes: PostSummaryQuery[];
    totalCount: number;
  };
}

const HeroTitle = styled.div`
  color: #eeeeee;
  text-align: center;

  p {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Roboto Mono", monospace;
  }

  h1 {
    font-size: 2.4rem;
    line-height: 4rem;
    font-weight: 500;
    margin: 0;
  }
`;

const Sidebar = styled.div``;

const SidebarLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;

  h3 {
    color: ${({ theme }) => theme.text.main};
    margin-top: 0;
  }

  ${Sidebar} {
    flex: 0 0 30%;
    position: sticky;
    top: 1rem;
    display: none;
    margin-left: 3rem;

    @media screen and (min-width: 1280px) {
      margin-left: 4rem;
    }

    @media screen and (min-width: 760px) {
      display: block;
    }
  }
`;

const ProjectPage: React.FC<PageProps<Data>> = ({ data }) => {
  return (
    <Layout>
      <SEO url={`project`} title="Projects" />
      <Hero centered>
        <HeroTitle>
          <h1>/posts</h1>
          <p>{data.posts.totalCount} posts</p>
        </HeroTitle>
      </Hero>
      <Section>
        <SidebarLayout>
          <div>
            <h3>Latest</h3>
            <MediaCardList>
              {data.posts.nodes.map(post => (
                <PostCard {...post} key={post.frontmatter.title} />
              ))}
            </MediaCardList>
          </div>
          <Sidebar>
            <h3>Top Tags</h3>
            <TopTagList />
          </Sidebar>
        </SidebarLayout>
      </Section>
    </Layout>
  );
};

export default ProjectPage;

export const query = graphql`
  query {
    posts: allMdx(
      limit: 6
      filter: { fileAbsolutePath: { regex: "/content/posts//" } }
    ) {
      totalCount
      nodes {
        ...PostSummary
      }
    }
  }
`;
