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

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const [open, setOpen] = React.useState(false)
  const [img, setImg] = React.useState("")
  const [mouseScrollActive, setMouseScrollActive] = React.useState(false)
  const [startingMousePosition, setStartingMousePosition] = React.useState(0)
  const [
    scrollValueAtTheStartOfDrag,
    setscrollValueAtTheStartOfDrag,
  ] = React.useState(0)
  const [moved, setMoved] = React.useState(0)
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
  } = contentfulProperty
  return (
    <Layout page={"let"}>
      <SEO
        title={`${
          type.toString().charAt(0).toUpperCase() + type.toString().slice(1)
        } | ${location}`}
      />

      <Container style={{ padding: "2rem" }}>
        <Paper
          style={{ display: "grid", alignContent: "center", padding: "2rem" }}
        >
          <Box
            style={{
              height: "27rem",
              maxWidth: "80vw",
              overflowX: "scroll",
              display: "flex",
            }}
            onMouseDown={e => {
              e.preventDefault()
              setMouseScrollActive(true)
              setStartingMousePosition(e.pageX)
              setscrollValueAtTheStartOfDrag(e.currentTarget.scrollLeft)
            }}
            onMouseMove={e => {
              if (mouseScrollActive) {
                const currentMousePosition = e.pageX
                const movedDistance =
                  startingMousePosition - currentMousePosition
                setMoved(movedDistance)
                e.currentTarget.scrollLeft =
                  scrollValueAtTheStartOfDrag + movedDistance
              }
            }}
            onMouseUp={e => {
              setMouseScrollActive(false)
              const currentMousePosition = e.pageX
              if (startingMousePosition === currentMousePosition) {
                setMoved(0)
              }
            }}
            onMouseLeave={e => {
              setMouseScrollActive(false)
            }}
          >
            {images.map((el, i) => (
              <div
                style={{
                  minWidth: "30rem",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  margin: ".5rem",
                }}
                onClick={() => {
                  if (moved === 0) {
                    handleOpen()
                    chooseImg(el.fluid)
                  }
                }}
                key={i + 40}
              >
                <Img fluid={el.fluid} style={{ height: "100%" }}></Img>
              </div>
            ))}
          </Box>
          <Grid container>
            <Grid item xs={12} lg={8}>
              <Typography variant="h4" gutterBottom align="center">
                {type} at a price of {price} pcm. Located in {location}.
              </Typography>
              <Typography variant="body1" align="center">
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
                    fullWidth
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
                    {parking ? (
                      <Chip
                        color="primary"
                        label="parking"
                        style={{ margin: ".2rem" }}
                      />
                    ) : (
                      ""
                    )}
                    {shared ? (
                      <Chip
                        color="primary"
                        label="shared house"
                        style={{ margin: ".2rem" }}
                      />
                    ) : (
                      ""
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
    }
  }
`
