import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import StyledCardSmall from "./styled/styledCardSmall"
import LayoutIndividual from "./individualLayout"
import { Grid } from "@material-ui/core"
const Lettings = () => {
  const {
    allContentfulProperty: { edges: items },
  } = useStaticQuery(
    graphql`
      query {
        allContentfulProperty {
          edges {
            node {
              contentful_id
              price
              location
              beds
              images {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              comments {
                comments
              }
              furnished
              parking
              shared
              available
              type
              createdAt(formatString: "")
            }
          }
        }
      }
    `
  )
  return (
    <LayoutIndividual
      id="Lettings"
      header="Lettings"
      subheader="All our properties currently listed for rent"
      bg="none"
    >
      <Grid container justify="center" alignItems="center">
        {items.map(({ node }, i) => (
          <Grid item key={i + 200} xs={12}>
            <Link to={node.contentful_id} key={i + 200}>
              <StyledCardSmall
                key={i}
                img={node.images[0].fluid}
                content={node}
                lg={true}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </LayoutIndividual>
  )
}

export default Lettings
