import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  url?: string;
  title?: string;
  description?: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
}

export const SEO: React.FC<Props> = ({
  title,
  description,
  url = "/",
  image,
  children
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          siteTitle: title
          siteDescription: description
        }
      }
      file(relativePath: { eq: "media/default-og-image.png" }) {
        childImageSharp {
          original {
            src
            width
            height
          }
        }
      }
    }
  `);

  const { original: defaultImg } = data.file.childImageSharp;
  const { siteUrl, siteTitle, siteDescription } = data.site.siteMetadata;
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet
      defaultTitle={siteTitle}
      htmlAttributes={{
        lang: "en"
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <meta name="description" content={description ?? siteDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta
        property="og:description"
        content={description ?? siteDescription}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${siteUrl}${image?.src ?? defaultImg.src}`}
      />
      <meta
        property="og:image:width"
        content={image?.width ?? defaultImg.width}
      />
      <meta
        property="og:image:height"
        content={image?.height ?? defaultImg.height}
      />
      <meta property="og:url" content={`${siteUrl}${url}`} />
      {children}
    </Helmet>
  );
};
