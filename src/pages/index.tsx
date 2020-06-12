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
  SkillList
} from "../components";

interface IndexQueryProps {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string;
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

  allSkillsYaml: {
    nodes: {
      name: string;
      confidence: number;
      image: {
        childImageSharp: {
          fixed: any;
        };
      };
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
        <ProjectCardList projects={data.allMdx.nodes} />
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <SkillList skills={data.allSkillsYaml.nodes} />
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allMdx(limit: 6, sort: { fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          summary
          date
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

    allSkillsYaml {
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
  }
`;

export default IndexPage;
