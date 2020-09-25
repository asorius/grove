import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Moment from "moment"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import Img from "gatsby-image"
const useStyles = makeStyles(theme => ({
  root: {
    margin: ".5rem",
    minWidth: "20rem",
    height: "100%",
    minHeight: "10rem",
    maxHeight: "12rem",
  },

  content: {
    display: "grid",
    alignContent: "center",
    height: "100%",
  },
  cover: {
    height: "100%",
    position: "relative",
  },
}))

export default function PreviewCard({ img, content }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Grid container style={{ height: "100%" }}>
        <Grid item sm={5}>
          <CardContent className={classes.content}>
            <Typography variant="h5">{content.type}</Typography>

            <Typography variant="subtitle2" gutterBottom>
              {content.location}
            </Typography>

            <Typography variant="caption" gutterBottom>
              {content.shared ? "sharehouse" : ""}
            </Typography>
            <Typography variant="body2" gutterBottom>
              added {Moment(content.createdAt).fromNow()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item sm={7}>
          <CardMedia className={classes.cover} title="Click for full details">
            <div
              style={{
                position: "absolute",
                left: ".5rem",
                top: ".5rem",
                backgroundColor: "MEDIUMSEAGREEN",
                borderRadius: ".3rem",
                padding: "0 .5rem",
                zIndex: "30",
                color: "white",
              }}
            >
              <Typography variant="h5" display="inline">
                {content.price}{" "}
              </Typography>
              <Typography variant="body2" display="inline">
                {" "}
                pcm
              </Typography>
            </div>
            <Img fluid={img} style={{ height: "100%", width: "100%" }}></Img>
          </CardMedia>
        </Grid>
      </Grid>
    </Card>
  )
}
