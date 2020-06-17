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
  PostHeroCard
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

  credentials: {
    nodes: CredentialQuery[];
  };
}

const IndexPage: React.FC<PageProps<IndexQueryProps>> = ({ data }) => {
  const [featuredPost] = data.featured.nodes;

  // make sure we have 3 posts not including the featured post
  // and filter out the "Project" tag since it's implicit here
  const projects = data.projects.nodes
    .filter(p => p.fields.slug !== featuredPost.fields.slug)
    .slice(0, 3)
    .map(p => ({
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
        <IndexHeroCard />
      </Hero>
      <Section>
        <SectionTitle to={`/post/${featuredPost.fields.slug}`}>
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
        <SectionTitle to="/t">Blog Posts</SectionTitle>
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
    featured: allMdx(
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/posts//" }
        frontmatter: { nofeature: { ne: true }, tags: { eq: "Project" } }
      }
    ) {
      nodes {
        ...AllPost
      }
    }

    projects: allMdx(
      limit: 4
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/posts//" }
        frontmatter: { tags: { eq: "Project" } }
      }
    ) {
      nodes {
        ...PostSummary
      }
    }

    posts: allMdx(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/posts//" }
        frontmatter: { tags: { ne: "Project" } }
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
