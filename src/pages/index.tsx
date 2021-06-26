import React from "react";
import { PageProps, graphql } from "gatsby";
import {
  PostSummaryQuery,
  AllPostQuery,
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
  PostCardGrid,
  PostHeroCard,
  HeroCardTitle
} from "../components";

interface IndexQueryProps {
  featured: {
    nodes: AllPostQuery[];
  };
  posts: {
    nodes: PostSummaryQuery[];
  };
  expertise: {
    nodes: ExpertiseQuery[];
  };
  experience: {
    nodes: ExperienceQuery[];
  };
  certifications: {
    nodes: CredentialQuery[];
  };
  awards: {
    nodes: CredentialQuery[];
  };
  education: {
    nodes: CredentialQuery[];
  }
}

const IndexPage: React.FC<PageProps<IndexQueryProps>> = ({ data }) => {
  const [featuredPost] = data.featured.nodes;

  const posts = data.posts.nodes
    .filter(p => p.fields.slug !== featuredPost.fields.slug)
    .slice(0, 6);

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <IndexHeroCard>
          <HeroCardTitle>Jeff Hackshaw</HeroCardTitle>
          <p>
            Hi there! I&apos;m a full stack web developer, 9-year
            Marine Corps veteran, science fiction enthusiast, and husband.
          </p>
          <p>
            <em>This website is a work in progress.</em>
          </p>
        </IndexHeroCard>
      </Hero>
      <Section>
        <SectionTitle
          to={
            featuredPost.frontmatter.link ?? `/post/${featuredPost.fields.slug}`
          }
        >
          Featured
        </SectionTitle>
        <PostHeroCard {...featuredPost} maxWidth="none" />
      </Section>

      <Section>
        <SectionTitle to="/post">Posts</SectionTitle>
        <PostCardGrid>
          {posts.map(post => (
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
        <SectionTitle>Education</SectionTitle>
        <CredentialList credentials={data.education.nodes} />
      </Section>

      <Section>
        <SectionTitle>Certifications</SectionTitle>
        <CredentialList credentials={data.certifications.nodes} />
      </Section>

      <Section>
        <SectionTitle>Awards</SectionTitle>
        <CredentialList credentials={data.awards.nodes} />
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    featured: allMdx(
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/posts//" }
        frontmatter: {
          featured: { eq: true }
          published: { eq: true }
          image: { id: { ne: null } }
        }
      }
    ) {
      nodes {
        ...AllPost
      }
    }

    posts: allMdx(
      limit: 7
      sort: {
        fields: [frontmatter___pinned, frontmatter___lowpri, frontmatter___date]
        order: [ASC, DESC, DESC]
      }
      filter: {
        fileAbsolutePath: { regex: "/content/posts//" }
        frontmatter: { published: { eq: true } }
      }
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

    certifications: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/certifications//" } }
    ) {
      nodes {
        ...AllCredential
      }
    }

    awards: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/awards//" } }
    ) {
      nodes {
        ...AllCredential
      }
    }

    education: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/education//" } }
    ) {
      nodes {
        ...AllCredential
      }
    }
  }
`;

export default IndexPage;
