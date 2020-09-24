/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import "./layout.css"
import Navbar from "./navbar"

import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import ScrollTop from "./styled/scrollTop"
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFC11E",
    },
    secondary: {
      main: "#6a41f2",
    },
  },
})
theme = responsiveFontSizes(theme)
const Layout = ({ children, page, bg }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          subTitle
        }
      }
    }
  `)
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Navbar siteTitle={data.site.siteMetadata.title} parent={page} />
        <div id="back-to-top-anchor"></div>
        <main
          style={{
            background: `url(${bg ? bg : ""})`,
            backgroundColor: "#f0e8d64a",
            backgroundRepeat: "norepeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100%",
            maxWidth: "100vw",
          }}
        >
          {children}
        </main>
        <ScrollTop>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
