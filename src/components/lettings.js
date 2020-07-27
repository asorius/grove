import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import DoneIcon from "@material-ui/icons/Done"
import LayoutIndividual from "./individualLayout"
import Moment from "moment"
import { List, ListItem, Typography, Box, Chip } from "@material-ui/core"
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
              keyProperties
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
      bg={2}
    >
      <List
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(25rem,1fr))",
          placeContent: "center",
        }}
      >
        {items.map(({ node }, i) => (
          <ListItem button>
            <Link
              to={node.contentful_id}
              key={i + 200}
              style={{ width: "100%" }}
            >
              <Card
                variant="outlined"
                style={{ display: "flex", width: "100%", minHeight: "14rem" }}
              >
                <CardMedia
                  style={{ minWidth: "8rem", width: "100%", minHeight: "8rem" }}
                >
                  <Img
                    fluid={node.images[0].fluid}
                    style={{ height: "100%" }}
                  ></Img>
                </CardMedia>
                <CardContent style={{ width: "100%" }}>
                  <Typography component="h5" variant="h5">
                    {node.price} pcm.
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    {node.type}, {node.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    added {Moment(node.createdAt).fromNow()}
                  </Typography>
                  <Box>
                    {node.keyProperties.map((el, i) =>
                      i < 3 ? (
                        <Chip
                          label={el}
                          size="small"
                          icon={<DoneIcon />}
                          variant="outlined"
                          color="secondary"
                          style={{ margin: ".2rem" }}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </ListItem>
        ))}
      </List>
    </LayoutIndividual>
  )
}

export default Lettings
