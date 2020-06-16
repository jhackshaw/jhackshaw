import React from "react";
import { PageProps, graphql } from "gatsby";
import {
  Hero,
  Layout,
  SEO,
  Section,
  ProjectCard,
  MediaCardList,
  TopTagList
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

const HeroTitle = styled.h1`
  color: #eeeeee;
  font-size: 2.4rem;
  line-height: 4rem;
  font-weight: 500;
  margin: 0;
`;

const Sidebar = styled.div``;

const SidebarLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  align-items: flex-start;
  max-width: 1000px;
  margin: 0 auto;

  ${Sidebar} {
    flex: 0 0 30%;
    position: sticky;
    top: 1rem;
    display: none;
    margin-left: 3rem;

    @media screen and (min-width: 1280px) {
      margin-left: 3rem;
    }

    h3 {
      color: ${({ theme }) => theme.text.main};
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
      <Hero centered>
        <HeroTitle>Projects!</HeroTitle>
      </Hero>
      <Section>
        <SidebarLayout>
          <MediaCardList>
            {data.allMdx.nodes.map(node => (
              <ProjectCard
                {...node.frontmatter}
                key={node.fields.slug}
                slug={node.fields.slug}
              />
            ))}
          </MediaCardList>
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
