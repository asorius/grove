import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  Container,
  Hidden,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import VerticalNavigation from "./navVertical"
import HorizontalNavigation from "./navHorizontal"
import logo from "../images/keys_icon.png"

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyItems: "center",
    padding: "0 .5rem",
    margin: 0,
    textTransform: "none",
    textDecoration: "none",
    position: "relative",
    "&:hover": {
      color: " #6a41f2",
      background: "none",
    },
  },
})
const Navbar = ({ siteTitle, parent }) => {
  const classes = useStyles()
  const trigger = useScrollTrigger()
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar style={{ background: "#2b2d42" }}>
          <Container>
            <Toolbar
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link
                to="/"
                style={{
                  textTransform: "none",
                  textDecoration: "none",
                }}
              >
                <Button color="primary" className={classes.root}>
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      borderRadius: "50%",
                      height: "3.5rem",
                      display: "inline-block",
                      marginRight: "1rem",
                      marginBottom: 0,
                    }}
                  ></img>
                  <Typography variant="h6">{siteTitle}</Typography>
                </Button>
              </Link>

              <Hidden smDown>
                <HorizontalNavigation parent={parent}></HorizontalNavigation>
              </Hidden>
              <Hidden mdUp>
                <VerticalNavigation parent={parent}></VerticalNavigation>
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
