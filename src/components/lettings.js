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
          <ListItem button key={i + 6900}>
            <Link to={node.contentful_id} style={{ width: "100%" }}>
              <Card
                style={{
                  display: "flex",
                  width: "100%",
                  minHeight: "14rem",
                }}
              >
                <CardMedia
                  style={{
                    minWidth: "8rem",
                    width: "100%",
                    minHeight: "8rem",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "1rem",
                      backgroundColor: "MEDIUMSEAGREEN",
                      borderRadius: ".3rem",
                      padding: "0 .5rem",
                      zIndex: "30",
                      color: "white",
                    }}
                  >
                    <Typography variant="h5" display="inline">
                      {node.price}{" "}
                    </Typography>
                    <Typography variant="body2" display="inline">
                      {" "}
                      pcm
                    </Typography>
                  </div>
                  <Img
                    fluid={node.images[0].fluid}
                    style={{ height: "100%" }}
                  ></Img>
                </CardMedia>
                <CardContent style={{ width: "100%" }}>
                  <Typography variant="h5" color="textPrimary">
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
                          key={i + 500}
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
