import { graphql } from "gatsby";

export interface ExperienceQuery {
  frontmatter: {
    company: string;
    position: string;
    start: string;
    end: string;
    image: {
      childImageSharp: {
        fixed: any;
      };
    };
  };
  body: string;
}

export const experienceQuery = graphql`
  fragment AllExperience on Mdx {
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
`;
