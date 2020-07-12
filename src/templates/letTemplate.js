import React from "react"
import { graphql } from "gatsby"
import { Modal, Paper, Container, Box } from "@material-ui/core"
import Layout from "../components/layout"
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
    addDate,
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
  console.log(contentfulProperty)
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
            testing bitch
            {photos.map(el => (
              <div
                style={{
                  background: `url(${el.fluid.src})`,
                  height: "95%",
                  minWidth: "30rem",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  margin: ".5rem",
                }}
                onClick={() => {
                  handleOpen()
                  chooseImg(el.fluid.src)
                }}
              ></div>
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
            background: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "75vh",
            width: "75vw",
          }}
          onClick={handleClose}
        ></div>
      </Modal>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    contentfulProperty {
      addDate
      contentful_id
      createdAt
      furnished
      houseshare
      location
      name
      photos {
        description
        title
        fluid {
          src
        }
      }
      price
      size
      type
    }
  }
`
