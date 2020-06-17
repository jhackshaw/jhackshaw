import React from "react";
import { PageProps, graphql } from "gatsby";
import {
  PostSummaryQuery,
  ExpertiseQuery,
  ExperienceQuery,
  CredentialQuery
} from "../queries";
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
  PostCard,
  PostCardGrid
} from "../components";

interface IndexQueryProps {
  posts: {
    nodes: PostSummaryQuery[];
  };

  expertise: {
    nodes: ExpertiseQuery[];
  };

  experience: {
    nodes: ExperienceQuery[];
  };

  credentials: {
    nodes: CredentialQuery[];
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
        <PostCardGrid>
          {data.posts.nodes.map(post => (
            <PostCard {...post} key={post.frontmatter.title} />
          ))}
        </PostCardGrid>
      </Section>

      <Section>
        <SectionTitle>Expertise</SectionTitle>
        <ExpertiseList items={data.expertise.nodes} />
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        <Timeline steps={data.experience.nodes} />
      </Section>

      <Section>
        <SectionTitle>Education & Awards</SectionTitle>
        <CredentialList credentials={data.credentials.nodes} />
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    posts: allMdx(
      limit: 6
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/posts//" } }
    ) {
      nodes {
        ...PostSummary
      }
    }

    expertise: allExpertiseYaml {
      nodes {
        ...AllExpertise
      }
    }

    experience: allMdx(
      sort: { fields: frontmatter___start, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/experience//" } }
    ) {
      nodes {
        ...AllExperience
      }
    }

    credentials: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/credentials//" } }
    ) {
      nodes {
        ...AllCredential
      }
    }
  }
`;

export default IndexPage;
