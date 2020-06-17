import { graphql } from "gatsby";

export interface ExpertiseQuery {
  name: string;
  image: {
    childImageSharp: {
      fixed: any;
    };
  };
}

export const expertiseQuery = graphql`
  fragment AllExpertise on ExpertiseYaml {
    name
    image {
      childImageSharp {
        fixed(width: 45, height: 45) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
