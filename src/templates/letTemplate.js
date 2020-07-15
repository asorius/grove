import React from "react"
import { graphql } from "gatsby"
import { Modal, Paper, Container, Box } from "@material-ui/core"
import Layout from "../components/layout"
import Img from "gatsby-image"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const [open, setOpen] = React.useState(false)
  const [img, setImg] = React.useState("")
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
    createdAt,
    furnished,
    houseshare,
    location,
    name,
    photos,
    price,
    size,
    type,
  } = contentfulProperty
  return (
    <Layout>
      <Container style={{ padding: "2rem" }}>
        <Paper
          style={{ display: "grid", alignContent: "center", padding: "2rem" }}
        >
          <Box
            style={{
              height: "27rem",
              maxWidth: "80vw",
              overflow: "scroll",
              display: "flex",
            }}
          >
            {location}
            {name}
            {price}
            {type}
            {createdAt}
            {photos.map((el, i) => (
              <div
                style={{
                  height: "95%",
                  minWidth: "30rem",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  margin: ".5rem",
                }}
                onClick={() => {
                  handleOpen()
                  chooseImg(el.fluid)
                }}
                key={i + 40}
              >
                <Img fluid={el.fluid}></Img>
              </div>
            ))}
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
            paddingTop: "rem",
            border: "none",
          }}
          onClick={handleClose}
        >
          <Img fluid={img}></Img>
        </div>
      </Modal>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProperty(contentful_id: { eq: $slug }) {
      addDate
      contentful_id
      furnished
      houseshare
      location
      name
      photos {
        description
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      price
      size
      type
      createdAt(formatString: "DD MMMM YYYY")
    }
  }
`
