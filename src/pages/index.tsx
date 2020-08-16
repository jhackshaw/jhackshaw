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
  projects: {
    nodes: PostSummaryQuery[];
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
  credentials: {
    nodes: CredentialQuery[];
  };
}

const IndexPage: React.FC<PageProps<IndexQueryProps>> = ({ data }) => {
  const [featuredPost] = data.featured.nodes;

  // make sure we have 3 posts not including the featured post
  // and filter out the "Project" tag since it's implicit here
  const projects = data.projects.nodes.map(p => ({
    ...p,
    frontmatter: {
      ...p.frontmatter,
      tags: p.frontmatter.tags.filter(t => t !== "Project")
    }
  }));

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <IndexHeroCard>
          <HeroCardTitle>Jeff Hackshaw</HeroCardTitle>
          <p>
            Hi there! I&apos;m a full stack web developer, soon to be 9-year
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
        <PostHeroCard {...featuredPost} maxWidth="none" link />
      </Section>

      <Section>
        <SectionTitle to="/t/project">Projects</SectionTitle>
        <PostCardGrid>
          {projects.map(post => (
            <PostCard {...post} key={post.frontmatter.title} />
          ))}
        </PostCardGrid>
      </Section>

      <Section>
        <SectionTitle>Expertise</SectionTitle>
        <ExpertiseList items={data.expertise.nodes} />
      </Section>

      <Section>
        <SectionTitle to="/post">Posts</SectionTitle>
        <PostCardGrid>
          {data.posts.nodes.map(post => (
            <PostCard {...post} key={post.frontmatter.title} />
          ))}
        </PostCardGrid>
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        <Timeline steps={data.experience.nodes} />
      </Section>

      <Section>
        <SectionTitle>Certifications</SectionTitle>
        <CredentialList credentials={data.certifications.nodes} />
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

    projects: allMdx(
      limit: 3
      sort: {
        fields: [frontmatter___pinned, frontmatter___date]
        order: [ASC, DESC]
      }
      filter: {
        fileAbsolutePath: { regex: "/content/posts//" }
        frontmatter: {
          tags: { eq: "Project" }
          published: { eq: true }
          featured: { ne: true }
        }
      }
    ) {
      nodes {
        ...PostSummary
      }
    }

    posts: allMdx(
      limit: 3
      sort: {
        fields: [frontmatter___pinned, frontmatter___date]
        order: [ASC, DESC]
      }
      filter: {
        fileAbsolutePath: { regex: "/content/posts//" }
        frontmatter: { tags: { ne: "Project" }, published: { eq: true } }
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
