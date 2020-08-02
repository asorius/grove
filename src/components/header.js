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
    <div
      style={{
        backgroundImage: `url('${HeroBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container style={{ height: "100%", paddingTop: "7rem" }}>
        <Grid container spacing={0} style={{ height: "100%" }}>
          <Grid item md={12} lg={8}>
            <Box textAlign="center">
              <Hidden mdDown>
                <Typography
                  variant="h1"
                  fontWeight="fontWeightBold"
                  fontFamily="Miama"
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
                  color="primary"
                  align="center"
                  fontWeight="fontWeightBold"
                  gutterBottom
                >
                  {siteTitle}
                </Typography>
              </Hidden>
            </Box>
            <Box
              textAlign="center"
              color="white"
              height="50%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Typography variant="h4" gutterBottom>
                {subTitle}
              </Typography>
              <Container>
                <Typography variant="h5">{description}</Typography>
              </Container>
            </Box>
          </Grid>
          <Grid item md={12} lg={4}>
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
          <Grid item sm={12} style={{ width: "100%" }}>
            <Box
              textAlign="center"
              display="flex"
              height="50%"
              flexDirection="column"
              justifyContent="space-around"
              width="100%"
            >
              <Box p={1}>
                <a href="#Lettings">
                  <Button variant="contained" color="secondary" size="large">
                    See all properties
                  </Button>
                </a>
              </Box>
              <div>
                <a href="#Contacts">
                  <Button variant="contained" color="primary" size="large">
                    Contact us!
                  </Button>
                </a>
              </div>
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
