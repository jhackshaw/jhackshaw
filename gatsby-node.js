const path = require("path");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data: projects } = await graphql(`
    {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/content/posts//" }
          frontmatter: { published: { eq: true }, link: { eq: null } }
        }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  for (const page of projects.allMdx.nodes) {
    createPage({
      path: `/post${page.fields.slug}`,
      component: path.resolve("src/templates/post-page.tsx"),
      context: {
        slug: page.fields.slug
      }
    });
  }

  createPage({
    path: `/post/`,
    component: path.resolve("src/templates/post-list.tsx")
  });

  const { data: tags } = await graphql(`
    {
      allTags: allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        group(field: frontmatter___tags) {
          name: fieldValue
        }
      }
    }
  `);

  for (const tag of tags.allTags.group) {
    createPage({
      path: `/t/${tag.name.toLowerCase()}`,
      component: path.resolve("src/templates/tag-page.tsx"),
      context: {
        tag: tag.name
      }
    });
  }
};
