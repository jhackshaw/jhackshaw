import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { AllPostQuery } from "../queries";
import { Hero, PostHeroCard, Layout, SEO, Section } from "../components";

interface Data {
  post: AllPostQuery;
}

const ProjectPage: React.FC<PageProps<Data>> = ({ data }) => {
  const { body, frontmatter, fields } = data.post;
  return (
    <Layout>
      <SEO
        url={`project/${fields.slug}`}
        title={frontmatter.title}
        image={frontmatter.image.childImageSharp.original}
      />
      <Hero>
        <PostHeroCard {...data.post} />
      </Hero>
      <Section>
        <MDXRenderer>{body}</MDXRenderer>
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
