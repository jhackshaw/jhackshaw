import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Hero, ProjectHeroCard, Layout, SEO, Section } from "../components";

interface Data {
  mdx: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      summary: string;
      stack: string[];
      date: string;
      image: {
        childImageSharp: {
          original: any;
          fluid: any;
        };
      };
    };
    body: string;
    timeToRead: number;
  };
}

const ProjectPage: React.FC<PageProps<Data>> = ({ data }) => {
  const { fields, frontmatter, body, timeToRead } = data.mdx;
  return (
    <Layout>
      <SEO
        url={`project/${fields.slug}`}
        title={frontmatter.title}
        image={frontmatter.image.childImageSharp.original}
        description={frontmatter.summary}
      />
      <Hero>
        <ProjectHeroCard {...frontmatter} timeToRead={timeToRead} />
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
    mdx(
      fields: { slug: { eq: $slug } }
      fileAbsolutePath: { regex: "/content/projects//" }
    ) {
      body
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        summary
        stack
        date(fromNow: true)
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
            original {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`;
