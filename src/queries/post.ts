import { graphql } from "gatsby";

interface PostSummaryFrontmatter {
  title: string;
  date: string;
  tags: string[];
  image: {
    childImageSharp: {
      fluid: any;
    };
  };
}

interface AllPostFrontmatter extends PostSummaryFrontmatter {
  demo: string;
  source: string;
  image: {
    childImageSharp: {
      fluid: any;
      original: any;
    };
  };
}

export interface PostSummaryQuery {
  fields: {
    slug: string;
  };
  frontmatter: PostSummaryFrontmatter;
  timeToRead: number;
}

export interface AllPostQuery extends PostSummaryQuery {
  frontmatter: AllPostFrontmatter;
  body: string;
}

export const postFragments = graphql`
  fragment PostSummaryFrontmatter on MdxFrontmatter {
    title
    tags
    date(formatString: "MMM, YYYY")
    image {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }

  fragment AllPostFrontmatter on MdxFrontmatter {
    ...PostSummaryFrontmatter
    demo
    source
  }

  fragment PostSummary on Mdx {
    fields {
      slug
    }
    frontmatter {
      ...PostSummaryFrontmatter
    }
    timeToRead
  }

  fragment AllPost on Mdx {
    ...PostSummary
    frontmatter {
      ...AllPostFrontmatter
    }
    body
  }
`;
