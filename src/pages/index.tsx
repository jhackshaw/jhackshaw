import React from "react";
import { PageProps, graphql } from "gatsby";
import {
  Hero,
  Layout,
  HeroCard,
  MainHeroCardInner,
  Section,
  SectionTitle,
  ProjectCardList,
  ExpertiseList,
  Timeline,
  CredentialList
} from "../components";

interface IndexQueryProps {
  allProjectsMdx: {
    nodes: {
      frontmatter: {
        title: string;
        summary: string;
        date: string;
        slug: string;
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
      <Hero>
        <HeroCard>
          <MainHeroCardInner />
        </HeroCard>
      </Hero>
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <ProjectCardList projects={data.allProjectsMdx.nodes} />
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
        frontmatter {
          title
          summary
          date(fromNow: true)
          slug
          image {
            childImageSharp {
              fluid(maxWidth: 1400, maxHeight: 600, quality: 100) {
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
