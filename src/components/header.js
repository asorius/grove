import PropTypes from "prop-types"
import React from "react"
import HeroBg from "../images/figma.jpg"
import Underliner from "./styled/underliner"
import { graphql, useStaticQuery } from "gatsby"

import {
  Typography,
  Button,
  Grid,
  Container,
  Hidden,
  Box,
} from "@material-ui/core"
import TopProperties from "./topProperties"
import TopPropertiesHorizontal from "./topPropertiesHorizontal"
const Header = ({ siteTitle, subTitle, description }) => {
  const {
    allContentfulProperty: { edges: items },
  } = useStaticQuery(
    graphql`
      query {
        allContentfulProperty(limit: 5) {
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
    // div is only for the background image to cover screen fully
    <div
      style={{
        backgroundImage: `url('${HeroBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        paddingTop: "5rem",
        height: "100vh",
      }}
    >
      {/* container is to keep content align within the rest of the page */}
      <Container style={{ height: "100%" }}>
        <Grid container direction="column" style={{ height: "100%" }}>
          <Grid
            item
            container
            justify="center"
            style={{ minHeight: "70%", maxHeight: "80%", textAlign: "center" }}
          >
            {/* left side panel, with title, subtitle, and some body text */}

            <Grid item lg={8}>
              <Box textAlign="center">
                <Hidden xsDown>
                  <Typography
                    variant="h1"
                    fontFamily="Miama"
                    color="primary"
                    align="center"
                    gutterBottom
                  >
                    {siteTitle}
                  </Typography>
                </Hidden>
                <Hidden smUp>
                  <Typography
                    variant="h2"
                    fontFamily="Miama"
                    color="primary"
                    align="center"
                    style={{ fontSize: "3rem", fontWeight: "bold" }}
                    gutterBottom
                  >
                    {siteTitle}
                  </Typography>
                </Hidden>
                <Typography
                  style={{ color: "white" }}
                  variant="h4"
                  gutterBottom
                >
                  {subTitle}
                </Typography>
              </Box>
              <Box
                textAlign="center"
                color="white"
                p={2}
                width="80%"
                style={{ margin: "0 auto" }}
              >
                <Hidden xsDown>
                  <Typography variant="subtitle1">{description}</Typography>
                </Hidden>
                <Hidden smUp>
                  <Typography variant="subtitle1">
                    Professional property management services.
                  </Typography>
                </Hidden>
              </Box>
            </Grid>
            {/* right panel with top properties */}
            <Grid item lg={4} style={{ height: "100%" }}>
              {/* hidden smdown to not display on mobile */}
              <Hidden smDown>
                <Box position="relative" color="white" m={2}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Newest properties
                    <Underliner primary={true}></Underliner>
                  </Typography>
                </Box>
                <Hidden mdDown>
                  <TopProperties items={items}></TopProperties>
                </Hidden>
                <Hidden lgUp>
                  <TopPropertiesHorizontal
                    items={items}
                  ></TopPropertiesHorizontal>
                </Hidden>
              </Hidden>
            </Grid>
          </Grid>
          {/* call to action buttons */}
          <Grid item>
            <Box
              textAlign="center"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box p={1} textAlign="center">
                <a href="#Lettings">
                  <Button variant="contained" color="secondary" size="medium">
                    See all properties
                  </Button>
                </a>
              </Box>
              <Box p={1} textAlign="center">
                <a href="#Contacts">
                  <Button variant="contained" color="primary" size="medium">
                    Contact us!
                  </Button>
                </a>
              </Box>
            </Box>
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

export default Header
