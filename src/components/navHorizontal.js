import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography } from "@material-ui/core"
import { navbarList } from "../fakedata"
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

export default function HorizontalNavigation() {
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
      {navbarList.map(item => (
        <a href={`#${item}`}>
          <Button size="small" className={classes.root}>
            <Typography variant="body1">{item}</Typography>
          </Button>
        </a>
      ))}
    </div>
  )
}
