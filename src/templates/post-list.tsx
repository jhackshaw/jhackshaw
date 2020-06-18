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
  SidebarLayout
} from "../components";
import { PostSummaryQuery } from "../queries";

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

export default PostListPage;

export const query = graphql`
  query {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/posts//" } }
    ) {
      totalCount
      nodes {
        ...PostSummary
      }
    }
  }
`;
