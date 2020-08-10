import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import DoneIcon from "@material-ui/icons/Done"
import LayoutIndividual from "./individualLayout"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
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
      <Hidden xsDown>
        <List
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit,minmax(25rem,1fr))`,
            placeContent: "center",
          }}
        >
          {items.map(({ node }, i) => (
            <ListItem button key={i + 6900}>
              <Link
                to={node.contentful_id}
                style={{ width: "100%", height: "100%" }}
              >
                <Card
                  style={{
                    display: "flex",
                    width: "100%",
                    minHeight: "14rem",
                    height: "100%",
                    maxHeight: "30rem",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} sm={4} md={5} lg={6}>
                      <CardMedia
                        style={{
                          position: "relative",
                          height: "100%",
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
                    </Grid>
                    <Grid item xs={12} sm={8} md={7} lg={6}>
                      <CardContent>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          flexDirection="column"
                          height="100%"
                          p={1}
                        >
                          <Box
                            display="flex"
                            justifyContent="space-around"
                            flexDirection="column"
                            height="100%"
                          >
                            <Typography variant="h5">
                              {node.type}, {node.location}
                            </Typography>

                            <Box>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                style={{
                                  display: "inline-block",
                                  width: "100%",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                                gutterBottom
                              >
                                {node.comments.comments}
                              </Typography>
                            </Box>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              gutterBottom
                            >
                              added {Moment(node.createdAt).fromNow()}
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexWrap="wrap"
                            alignContent="center"
                            justifyContent="center"
                          >
                            {node.keyProperties.map((el, i) =>
                              i < 3 ? (
                                <Chip
                                  key={i + 500}
                                  label={el}
                                  size="small"
                                  icon={<DoneIcon />}
                                  variant="outlined"
                                  color="textSecondary"
                                  style={{ margin: ".2rem" }}
                                />
                              ) : (
                                ""
                              )
                            )}
                          </Box>
                        </Box>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Link>
            </ListItem>
          ))}
        </List>
      </Hidden>
      {/* small mobile version */}
      <Hidden smUp>
        <List
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit,minmax(18rem,1fr))`,
            placeContent: "center",
          }}
        >
          {items.map(({ node }, i) => (
            <ListItem button key={i + 6900}>
              <Link
                to={node.contentful_id}
                style={{ width: "100%", height: "100%" }}
              >
                <Card
                  style={{
                    display: "flex",
                    width: "100%",
                    minHeight: "14rem",
                    height: "100%",
                    maxHeight: "30rem",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} sm={4} md={5} lg={6}>
                      <CardMedia
                        style={{
                          position: "relative",
                          height: "100%",
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
                    </Grid>
                    <Grid item xs={12} sm={8} md={7} lg={6}>
                      <CardContent>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          flexDirection="column"
                          height="100%"
                          p={1}
                        >
                          <Box
                            display="flex"
                            justifyContent="space-around"
                            flexDirection="column"
                            height="100%"
                          >
                            <Typography variant="h5">
                              {node.type}, {node.location}
                            </Typography>

                            <Box>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                style={{
                                  display: "inline-block",
                                  width: "100%",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                                gutterBottom
                              >
                                {node.comments.comments}
                              </Typography>
                            </Box>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              gutterBottom
                            >
                              added {Moment(node.createdAt).fromNow()}
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexWrap="wrap"
                            alignContent="center"
                            justifyContent="center"
                          >
                            {node.keyProperties.map((el, i) =>
                              i < 3 ? (
                                <Chip
                                  key={i + 500}
                                  label={el}
                                  size="small"
                                  icon={<DoneIcon />}
                                  variant="outlined"
                                  color="textSecondary"
                                  style={{ margin: ".2rem" }}
                                />
                              ) : (
                                ""
                              )
                            )}
                          </Box>
                        </Box>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Link>
            </ListItem>
          ))}
        </List>
      </Hidden>
    </LayoutIndividual>
  )
}

export default Lettings
