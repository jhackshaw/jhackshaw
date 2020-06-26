import React from "react";
import { PageProps, graphql } from "gatsby";
import { AllPostQuery } from "../queries";
import {
  Hero,
  PostHeroCard,
  Layout,
  SEO,
  Section,
  PostContent,
  SidebarLayout,
  Sidebar,
  SidebarContent,
  SidebarTitle,
  TableOfContents
} from "../components";

interface Data {
  post: AllPostQuery;
}

const ProjectPage: React.FC<PageProps<Data>> = ({ data }) => {
  const { body, frontmatter, fields, tableOfContents } = data.post;
  return (
    <Layout>
      <SEO
        url={`project/${fields.slug}`}
        title={frontmatter.title}
        image={frontmatter.image?.childImageSharp.original}
      />
      <Hero>
        <PostHeroCard {...data.post} />
      </Hero>
      <Section>
        <SidebarLayout>
          <SidebarContent>
            <PostContent>{body}</PostContent>
          </SidebarContent>
          <Sidebar>
            <SidebarTitle>TABLE OF CONTENTS</SidebarTitle>
            <TableOfContents items={tableOfContents.items ?? []} />
          </Sidebar>
        </SidebarLayout>
      </Section>
    </Layout>
  );
};

export default ProjectPage;

export const query = graphql`
  query($slug: String!) {
    post: mdx(
      fields: { slug: { eq: $slug } }
      fileAbsolutePath: { regex: "/content/posts//" }
    ) {
      ...AllPost
    }
  }
`;
