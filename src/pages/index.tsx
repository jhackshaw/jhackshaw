import React from "react";
import { PageProps, graphql } from "gatsby";
import {
  Hero,
  Layout,
  IndexHeroCard,
  Section,
  SectionTitle,
  ExpertiseList,
  Timeline,
  CredentialList,
  SEO,
  ProjectCard,
  MediaCardGrid
} from "../components";

interface IndexQueryProps {
  allProjectsMdx: {
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
            fluid: any;
          };
        };
      };
    }[];
  };

  allExpertiseYaml: {
    nodes: {
      name: string;
      image: {
        childImageSharp: {
          fixed: any;
        };
      };
    }[];
  };

  allExperienceMdx: {
    nodes: {
      frontmatter: {
        position: string;
        company: string;
        start: string;
        end: string;
        image: {
          childImageSharp: {
            fixed: any;
          };
        };
      };
      body: string;
    }[];
  };

  allCredentialMdx: {
    nodes: {
      frontmatter: {
        title: string;
        subtitle: string;
        date: string;
        image: {
          childImageSharp: {
            fluid: any;
          };
        };
      };
      body: string;
    }[];
  };
}

const IndexPage: React.FC<PageProps<IndexQueryProps>> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <IndexHeroCard />
      </Hero>
      <Section>
        <SectionTitle to="/t/project">Projects</SectionTitle>
        <MediaCardGrid>
          {data.allProjectsMdx.nodes.map(({ frontmatter, fields }) => (
            <ProjectCard
              {...frontmatter}
              stack={frontmatter.stack.filter(t => t !== "Project")}
              slug={fields.slug}
              key={fields.slug}
            />
          ))}
        </MediaCardGrid>
      </Section>

      <Section>
        <SectionTitle>Expertise</SectionTitle>
        <ExpertiseList items={data.allExpertiseYaml.nodes} />
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        <Timeline steps={data.allExperienceMdx.nodes} />
      </Section>

      <Section>
        <SectionTitle>Education & Awards</SectionTitle>
        <CredentialList credentials={data.allCredentialMdx.nodes} />
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allProjectsMdx: allMdx(
      limit: 6
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/projects//" } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          summary
          date(fromNow: true)
          stack
          image {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    allExpertiseYaml {
      nodes {
        name
        image {
          childImageSharp {
            fixed(width: 45, height: 45) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }

    allExperienceMdx: allMdx(
      sort: { fields: frontmatter___start, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/experience//" } }
    ) {
      nodes {
        frontmatter {
          company
          position
          start(formatString: "MM/yyyy")
          end(formatString: "MM/yyyy")
          image {
            childImageSharp {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
        body
      }
    }

    allCredentialMdx: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/credentials//" } }
    ) {
      nodes {
        frontmatter {
          title
          subtitle
          date(fromNow: true)
          image {
            childImageSharp {
              fluid(maxWidth: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        body
      }
    }
  }
`;

export default IndexPage;
