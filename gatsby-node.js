exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/letTemplate.js`)

  const result = await graphql(`
    {
      allContentfulProperty {
        edges {
          node {
            addDate
            createdAt
            furnished
            houseshare
            location
            name
            contentful_id
            photos {
              title
              description
              fluid {
                src
              }
            }
            price
            size
            type
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
        date: node.addDate,
        title: node.name,
        images: node.photos,
        price: node.price,
        city: node.location,
        address: node.address,
        pets: node.pets,
        roomSize: node.size,
      },
    })
  })
}

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const blogPostTemplate = require.resolve(`./src/templates/letTemplate.js`)

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.slug,
//       component: blogPostTemplate,
//       context: {
//         // additional data can be passed via context
//         slug: node.frontmatter.slug,
//         date: node.date,
//         title: node.title,
//         images: node.images,
//         price: node.price,
//         available: node.available,
//         city: node.city,
//         address: node.address,
//         pets: node.pets,
//         roomSize: node.roomSize,
//       },
//     })
//   })
// }
