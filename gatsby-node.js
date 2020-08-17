/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/renovating/)) {
    page.context.layout = "landing"
    createPage(page)
  }
}

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === "ContentfulProjectType") {
    actions.createNodeField({
      node,
      name: `slug`,
      value: node.slug,
    })
  }
}

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulProjectType {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  data.allContentfulProjectType.nodes.forEach(project => {
    actions.createPage({
      path: `/${project.fields.slug}`,
      component: require.resolve("./src/templates/project-page-template.js"),
      context: { slug: project.fields.slug },
    })
  })
}
