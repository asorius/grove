import React from "react"
import { graphql } from "gatsby"
import {
  Modal,
  Paper,
  Container,
  Box,
  Typography,
  Chip,
} from "@material-ui/core"
import Layout from "../components/layout"
import Img from "gatsby-image"
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
          <Box display="flex" justifyContent="space-around" minHeight="15rem">
            <Box
              m={2}
              width="50%"
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
            >
              <Typography variant="h4" gutterBottom align="center">
                {type} at a price of {price} pcm. Located in {location}.
              </Typography>
              <Typography variant="body1" align="center">
                {comments.comments}
              </Typography>
            </Box>
            <Box
              m={2}
              width="50%"
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
            >
              <Typography variant="body2" align="center">
                Added: {createdAt}
              </Typography>
              <Typography variant="body2" align="center">
                Available from: {available}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                fullWidth
                align="center"
              >
                Key features:
              </Typography>
              <Box
                style={{
                  display: "flex",
                  minWidth: "25rem",
                  margin: "0 auto",
                  justifyContent: "space-between",
                }}
                p={2}
              >
                {keyProperties.map(el => (
                  <Chip
                    color="primary"
                    label={el}
                    style={{ minWidth: "5rem" }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
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
