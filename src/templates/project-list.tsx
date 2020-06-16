import React from "react";
import { PageProps, graphql } from "gatsby";
import {
  Hero,
  Layout,
  SEO,
  Section,
  ProjectCard,
  MediaCardList
} from "../components";
import styled from "styled-components";

interface Data {
  allMdx: {
    nodes: {
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
    }[];
  };
}

const Sidebar = styled.div``;

const SidebarLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  align-items: flex-start;

  ${MediaCardList} {
    flex: 1 1 65%;
  }

  ${Sidebar} {
    flex: 1 1 35%;
    margin-left: 2rem;
    position: sticky;
    top: 1rem;
    display: none;

    h3 {
      margin-top: 0;
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
      <Hero>Projects!</Hero>
      <Section>
        <MediaCardList>
          {data.allMdx.nodes.map(node => (
            <ProjectCard
              {...node.frontmatter}
              key={node.fields.slug}
              slug={node.fields.slug}
            />
          ))}
        </MediaCardList>
      </Section>
    </Layout>
  );
};

export default ProjectPage;

export const query = graphql`
  query {
    allMdx(
      limit: 6
      filter: { fileAbsolutePath: { regex: "/content/projects//" } }
    ) {
      nodes {
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          summary
          source
          demo
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
  }
`;
