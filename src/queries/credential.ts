import { graphql } from "gatsby";

export interface CredentialQuery {
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
}

export const credentialQuery = graphql`
  fragment AllCredential on Mdx {
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
`;
