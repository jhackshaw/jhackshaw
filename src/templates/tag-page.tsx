import React from "react";
import { PageProps, graphql } from "gatsby";
import { FaTag } from "react-icons/fa";
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

interface Ctx {
  tag: string;
}

const TagPage: React.FC<PageProps<Data, Ctx>> = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO url={`project`} title="Projects" />
      <Hero centered>
        <TagHeroTitle>
          <h1>
            <FaTag size={24} />
            {pageContext.tag.toLowerCase()}
          </h1>
          <p>{data.posts.totalCount} posts</p>
        </TagHeroTitle>
      </Hero>
      <Section>
        <SidebarLayout>
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

export default TagPage;

export const query = graphql`
  query($tag: String) {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/posts//" }
        frontmatter: { tags: { eq: $tag }, published: { eq: true } }
      }
    ) {
      totalCount
      nodes {
        ...PostSummary
      }
    }
  }
`;
