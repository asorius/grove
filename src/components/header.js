import PropTypes from "prop-types"
import React from "react"
import HeroBg from "../images/hero-image-edited.jpg"

import { graphql, useStaticQuery } from "gatsby"

import {
  Typography,
  Button,
  Grid,
  Container,
  Hidden,
  Box,
  Paper,
} from "@material-ui/core"
import TopProperties from "./topProperties"
import TopPropertiesHorizontal from "./topPropertiesHorizontal"
const Header = ({ siteTitle, subTitle, description }) => {
  const {
    allContentfulProperty: { edges: items },
  } = useStaticQuery(
    graphql`
      query {
        allContentfulProperty {
          edges {
            node {
              addDate
              price
              contentful_id
              name
              location
              photos {
                title
                fluid {
                  src
                }
              }
              createdAt(fromNow: true)
            }
          }
        }
      }
    `
  )
  console.log(items)
  return (
    <div
      style={{
        backgroundImage: `url('${HeroBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "grid",
        placeItems: "center",
        height: "100%",
      }}
    >
      <Container style={{ height: "100%" }}>
        <Grid
          container
          spacing={0}
          alignItems="stretch"
          style={{ height: "100%" }}
          centered
        >
          <Grid
            item
            md={12}
            lg={7}
            style={{
              display: "flex",
              alignItems: "space-between",
              flexDirection: "column",
              paddingTop: "4rem",
            }}
          >
            <Box>
              <Hidden mdDown>
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  color="primary"
                  align="center"
                  gutterBottom
                >
                  {siteTitle}
                </Typography>
              </Hidden>
              <Hidden lgUp>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  color="primary"
                  align="center"
                  gutterBottom
                >
                  {siteTitle}
                </Typography>
              </Hidden>
            </Box>
            <Box>
              <Typography
                variant="h5"
                align="center"
                style={{ color: "white", paddingBottom: "2rem" }}
                gutterBottom
              >
                {subTitle}
              </Typography>
            </Box>
            <Container
              style={{
                textAlign: "center",
              }}
            >
              <Typography
                variant="body1"
                align="center"
                style={{ color: "white", marginBottom: "3rem" }}
              >
                {description}
              </Typography>
              <a href="#Contacts">
                <Button variant="contained" color="primary" size="large">
                  Contact us!
                </Button>
              </a>
            </Container>
          </Grid>
          <Grid
            item
            md={12}
            lg={5}
            style={{
              display: "flex",
              alignItems: "center",
              maxHeight: "60rem",
              width: "80%",
            }}
          >
            <Hidden smDown>
              <Paper
                elevation={2}
                variant="outlined"
                style={{
                  padding: "1rem",
                  width: "100%",
                  background: "linear-gradient(to right, #ece9e6, #fff",
                  display: "grid",
                  alignContent: "center",
                }}
              >
                <Box style={{ position: "relative" }}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Newest properties
                  </Typography>
                  <div
                    style={{
                      position: "absolute",
                      height: 4,
                      width: "50%",
                      margin: "0 auto",
                      background: "#6a41f2",
                      borderRadius: 5,
                      left: "25%",
                    }}
                  ></div>
                </Box>
                <Box p={2} style={{ maxWdith: "80%" }}>
                  <Box style={{ width: "100%" }}>
                    <Hidden smDown>
                      <Hidden mdDown>
                        <Grid item>
                          <TopProperties items={items}></TopProperties>
                        </Grid>
                      </Hidden>
                      <Hidden lgUp>
                        <Grid item>
                          <TopPropertiesHorizontal></TopPropertiesHorizontal>
                        </Grid>
                      </Hidden>
                    </Hidden>
                  </Box>
                </Box>
                <div style={{ textAlign: "center" }}>
                  <Button variant="contained" color="secondary" size="large">
                    See all properties
                  </Button>
                </div>
              </Paper>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  description: ``,
}
// export const pageQuery = graphql`
//   query {
//     allContentfulProperty {
//       edges {
//         node {
//           addDate
//           price
//         }
//       }
//     }
//   }
// `
export default Header
