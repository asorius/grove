import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: ".5rem",
    minHeight: "12rem",
    width: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    minWdith: "10rem",
    width: "40%",
    background: "#e2e2e2",
  },
  content: {
    flex: "1 0 auto",
    display: "grid",
    alignContent: "center",
  },
  action: {
    display: "grid",
    placeItems: "center",
  },
  cover: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "60%",
  },
}))

export default function PreviewCard({ img }) {
  const classes = useStyles()
  return (
    <div style={{ width: "100%", minWidth: "18rem" }}>
      <Button style={{ textTransform: "none" }} fullWidth>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="body1">500$ PCM</Typography>
              <Typography variant="body1">2 Beds</Typography>
              <Typography variant="body1" gutterBottom>
                Stafford
              </Typography>
              <Typography variant="body2" color="textSecondary">
                added 5 days ago
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={img}
            title="Live from space album cover"
          ></CardMedia>
        </Card>
      </Button>
    </div>
  )
}
