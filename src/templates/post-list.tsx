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
        <SidebarLayout maxWidth="800px">
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
        </SidebarLayout>
      </Section>
    </Layout>
  );
};

export default PostListPage;

export const query = graphql`
  query {
    posts: allMdx(
      sort: {
        fields: [frontmatter___pinned, frontmatter___lowpri, frontmatter___date]
        order: [ASC, DESC, DESC]
      }
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
