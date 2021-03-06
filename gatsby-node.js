exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/letTemplate.js`)

  const result = await graphql(`
    {
      allContentfulProperty {
        edges {
          node {
            contentful_id
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allContentfulProperty.edges.forEach(({ node }) => {
    createPage({
      path: node.contentful_id,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.contentful_id,
      },
    })
  })
}
