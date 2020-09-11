import React from "react"
import { graphql } from "gatsby"
import {
  Modal,
  Paper,
  Container,
  Box,
  Typography,
  Chip,
  Grid,
} from "@material-ui/core"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Map from "../components/individualMap"
import { makeStyles } from "@material-ui/core/styles"
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "0 auto",
    height: "27rem",
    maxWidth: "80vw",
    overflowX: "scroll",
    display: "flex",
    overscrollBehaviorX: "contain",
    scrollSnapType: " both mandatory",
    position: "relative",
    "& > div": { scrollSnapAlign: "center" },
    "&::-webkit-scrollbar": {
      width: 10,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      borderRadius: 6,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#6a41f2",
      borderRadius: 6,
    },
  },
  btn: {
    fontSize: "4rem",
    background: "#000000a8",
    borderRadius: "2rem",
    zIndex: 50,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    "&:hover": {
      background: "#ffffff91",
      color: "#6a41f2",
    },
  },
})
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [img, setImg] = React.useState("")
  const scrollableContainer = React.createRef()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const chooseImg = src => {
    setImg(src)
  }
  const { contentfulProperty } = data // data.markdownRemark holds your post data
  const {
    price,
    location,
    beds,
    images,
    comments,
    furnished,
    parking,
    shared,
    available,
    createdAt,
    type,
    keyProperties,
    maplocation,
  } = contentfulProperty
  const [currentid, setid] = React.useState(0)
  const refs = images.map((el, idx) => React.createRef())
  const carousel = idtodisplaynext => {
    if (idtodisplaynext >= refs.length) {
      refs[0].current.scrollIntoView({
        block: "end",
        behavior: "smooth",
        inline: "center",
      })
      setid(0)
    } else if (idtodisplaynext < 0) {
      refs[refs.length - 1].current.scrollIntoView({
        block: "end",
        behavior: "smooth",
        inline: "center",
      })
      setid(refs.length - 1)
    } else {
      refs[idtodisplaynext].current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "end",
      })
      setid(idtodisplaynext)
    }
  }
  return (
    <Layout page={"let"} bg={images[0].fluid.src}>
      <SEO
        title={`${
          type.toString().charAt(0).toUpperCase() + type.toString().slice(1)
        } in ${location}`}
      />

      <Container
        style={{
          paddingTop: "5rem",
        }}
      >
        <Paper
          style={{
            padding: "2rem 0",
            position: "relative",
          }}
        >
          <Hidden smDown>
            <div
              style={{ position: "relative", margin: "0 auto", width: "90%" }}
            >
              <KeyboardArrowLeftIcon
                className={classes.btn}
                color="primary"
                style={{
                  left: "2%",
                }}
                onClick={e => carousel(currentid - 1)}
              >
                {" "}
                left
              </KeyboardArrowLeftIcon>
              <Box className={classes.root} ref={scrollableContainer}>
                {images.map((el, i) => (
                  <div
                    style={{
                      minWidth: "50rem",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      margin: ".5rem",
                    }}
                    ref={refs[i]}
                    onClick={() => {
                      handleOpen()
                      chooseImg(el.fluid)
                    }}
                    key={i + 8000}
                  >
                    <Img fluid={el.fluid} style={{ height: "100%" }}></Img>
                  </div>
                ))}
              </Box>
              <KeyboardArrowRightIcon
                className={classes.btn}
                color="primary"
                style={{
                  left: "92%",
                }}
                onClick={e => carousel(currentid + 1)}
              >
                {" "}
                right
              </KeyboardArrowRightIcon>
            </div>
          </Hidden>
          <Hidden mdUp>
            <Box className={classes.root} ref={scrollableContainer}>
              {images.map((el, i) => (
                <div
                  style={{
                    minWidth: "80%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    margin: ".5rem",
                  }}
                  onClick={() => {
                    handleOpen()
                    chooseImg(el.fluid)
                  }}
                  key={i + 8000}
                >
                  <Img fluid={el.fluid} style={{ height: "100%" }}></Img>
                </div>
              ))}
            </Box>
          </Hidden>

          <Grid container style={{ padding: "2rem" }}>
            <Grid item xs={12} lg={8}>
              <Typography variant="h4" gutterBottom align="center">
                {type} at a price of {price} pcm. Located in {location}.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ maxWidth: "80%", margin: "1rem auto" }}
              >
                {comments.comments}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box
                style={{
                  display: "grid",
                  minHeight: "20rem",
                  placeContent: "center",
                }}
              >
                {" "}
                <Typography variant="h5" align="center" gutterBottom>
                  Additional information:
                </Typography>
                <Typography variant="body2" align="center">
                  Added: {createdAt}
                </Typography>
                <Typography variant="body2" align="center">
                  Available from: {available}
                </Typography>
                <Box p={2}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                  >
                    Key features:
                  </Typography>
                  <Box p={2} textAlign="center">
                    <Chip
                      color="primary"
                      label={`${beds} bed(s)`}
                      style={{ margin: ".2rem" }}
                    />
                    {parking && (
                      <Chip
                        color="primary"
                        label="parking"
                        style={{ margin: ".2rem" }}
                      />
                    )}
                    {shared && (
                      <Chip
                        color="primary"
                        label="shared house"
                        style={{ margin: ".2rem" }}
                      />
                    )}
                    <Chip
                      color="primary"
                      label={furnished ? "furnished" : "unfurnished"}
                      style={{ margin: ".2rem" }}
                    />
                    {keyProperties.map(el => (
                      <Chip
                        color="primary"
                        label={el}
                        style={{ margin: ".2rem" }}
                      />
                    ))}
                  </Box>
                </Box>
                <Paper
                  style={{
                    height: "20rem",
                    width: "100%",
                    maxWidth: "30rem",
                    margin: "0 auto",
                    position: "relative",
                  }}
                >
                  {maplocation ? (
                    <Map
                      coords={{ lat: maplocation.lat, lng: maplocation.lon }}
                    ></Map>
                  ) : (
                    "Map not available."
                  )}
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          style={{
            width: "75vw",
            height: "75vh",
            margin: "0 auto ",
            marginTop: "5rem",
            border: "none",
          }}
          onClick={handleClose}
        >
          <Img fluid={img} style={{ height: "100%" }}></Img>
        </div>
      </Modal>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProperty(contentful_id: { eq: $slug }) {
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
      available(formatString: "DD MMMM YYYY")
      type
      keyProperties
      createdAt(formatString: "DD MMMM YYYY")
      maplocation {
        lat
        lon
      }
    }
  }
`
