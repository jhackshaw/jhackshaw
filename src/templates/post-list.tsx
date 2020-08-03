import React from "react";
import { PageProps, graphql } from "gatsby";
import {
  Hero,
  TagHeroTitle,
  Layout,
  SEO,
  Section,
  PostCard,
  MediaCardList,
  TopTagList,
  Sidebar,
  SidebarLayout,
  SidebarContent,
  SidebarTitle
} from "../components";
import { PostSummaryQuery } from "../queries";
import styled from "styled-components";

const NarrowerLayout = styled(SidebarLayout)`
  max-width: 800px;
`;

interface Data {
  posts: {
    nodes: PostSummaryQuery[];
    totalCount: number;
  };
}

const PostListPage: React.FC<PageProps<Data>> = ({ data }) => {
  return (
    <Layout>
      <SEO url={`project`} title="Projects" />
      <Hero centered>
        <TagHeroTitle>
          <h1>all posts</h1>
          <p>{data.posts.totalCount} posts</p>
        </TagHeroTitle>
      </Hero>
      <Section>
        <NarrowerLayout>
          <SidebarContent>
            <SidebarTitle>Latest</SidebarTitle>
            <MediaCardList>
              {data.posts.nodes.map(post => (
                <PostCard {...post} key={post.frontmatter.title} />
              ))}
            </MediaCardList>
          </SidebarContent>
          <Sidebar>
            <SidebarTitle>Top Tags</SidebarTitle>
            <TopTagList />
          </Sidebar>
        </NarrowerLayout>
      </Section>
    </Layout>
  );
};

export default PostListPage;

export const query = graphql`
  query {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/posts//" }
        frontmatter: { published: { eq: true } }
      }
    ) {
      totalCount
      nodes {
        ...PostSummary
      }
    }
  }
`;
