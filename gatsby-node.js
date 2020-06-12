exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `
      type SkillsYaml implements Node {
        image: File @link(by: "relativePath")
      }
    `
  ];
  createTypes(typeDefs);
};
