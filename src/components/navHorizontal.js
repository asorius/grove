import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography } from "@material-ui/core"
import { navbarList } from "../fakedata"
import { Link } from "gatsby"
const useStyles = makeStyles({
  root: {
    color: "white",
    textTransform: "none",
    position: "relative",
    "&:hover": {
      color: " #FFC11E",
    },
  },
})

export default function HorizontalNavigation({ parent }) {
  const classes = useStyles()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "40%",
        color: "white",
      }}
    >
      {navbarList.map((item, i) =>
        parent ? (
          <Link to={`/#${item}`} key={i + 400}>
            <Button size="small" className={classes.root}>
              <Typography variant="body1">{item}</Typography>
            </Button>
          </Link>
        ) : (
          <a href={`#${item}`} key={i + 301}>
            <Button size="small" className={classes.root}>
              <Typography variant="body1">{item}</Typography>
            </Button>
          </a>
        )
      )}
    </div>
  )
}
