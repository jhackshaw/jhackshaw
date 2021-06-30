import { graphql, useStaticQuery } from "gatsby";

export const useDefaultImage = (): any => {
  const res = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "media/defaultimage.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return res.file.childImageSharp.fluid;
};
