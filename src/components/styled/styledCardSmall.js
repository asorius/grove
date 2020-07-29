import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Moment from "moment"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

import Img from "gatsby-image"
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: ".5rem",
    minWidth: "20rem",
    // minHeight: "10rem",
    // width: "100%",
  },
  details: {
    // display: "flex",
    // flexDirection: "column",
    // minWdith: "10rem",
    // width: "40%",
    // background: "#e2e2e2",
  },
  content: {
    // flex: "1 0 auto",
    // display: "grid",
    // alignContent: "center",
  },
  cover: {
    // display: "flex",
    // alignItems: "flex-end",
    // justifyContent: "center",
    // width: "60%",
  },
  smallstyles: {
    //   width: "100%",
    //   minWidth: "20rem",
    //   height: "100%",
  },
}))

export default function PreviewCard({ img, content, lg }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item sm={4}>
          <CardContent className={classes.content}>
            <Typography variant="h5" color="secondary">
              {content.type}
            </Typography>

            <Typography variant="subtitle2" color="secondary" gutterBottom>
              {content.location}
            </Typography>

            <Typography variant="caption" color="textSecondary" gutterBottom>
              {content.shared ? "sharehouse" : ""}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              added {Moment(content.createdAt).fromNow()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item sm={8}>
          <CardMedia
            className={classes.cover}
            title="Click for full details"
            style={{ position: "relative" }}
          >
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

// export default function PreviewCard({ img, content, lg }) {
//   const classes = useStyles()
//   return (
//     <div className={classes.smallstyles}>
//       {/* <Button style={{ textTransform: "none" }} fullWidth> */}
//       <Card className={classes.root}>
//         {/* <div className={classes.details}> */}
//         <Grid container>
//           <Grid item lg={4}>
//             <CardContent className={classes.content}>
//               <Typography variant="h5" color="secondary">
//                 {content.type}
//               </Typography>

//               <Typography variant="subtitle2" color="secondary" gutterBottom>
//                 {content.location}
//               </Typography>

//               <Typography variant="caption" color="textSecondary" gutterBottom>
//                 {content.shared ? "sharehouse" : ""}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" gutterBottom>
//                 added {Moment(content.createdAt).fromNow()}
//               </Typography>
//             </CardContent>
//           </Grid>
//           <Grid item lg={8}>
//             <CardMedia
//               className={classes.cover}
//               title="Click for full details"
//               style={{ position: "relative" }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   left: ".5rem",
//                   top: ".5rem",
//                   backgroundColor: "MEDIUMSEAGREEN",
//                   borderRadius: ".3rem",
//                   padding: "0 .5rem",
//                   zIndex: "30",
//                   color: "white",
//                 }}
//               >
//                 <Typography variant="h5" display="inline">
//                   {content.price}{" "}
//                 </Typography>
//                 <Typography variant="body2" display="inline">
//                   {" "}
//                   pcm
//                 </Typography>
//               </div>
//               <Img fluid={img} style={{ height: "100%", width: "100%" }}></Img>
//             </CardMedia>
//           </Grid>
//         </Grid>
//         {/* </div> */}
//       </Card>
//       {/* </Button> */}
//     </div>
//   )
// }
