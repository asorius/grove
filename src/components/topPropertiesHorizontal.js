import React from "react"
import { Paper, Divider, Box, Typography } from "@material-ui/core"
import Underliner from "./styled/underliner"
import { makeStyles } from "@material-ui/core/styles"
import StyledCardSmall from "./styled/styledCardSmall"
import { Link } from "gatsby"
const useStyles = makeStyles({
  root: {
    // maxHeight: "15rem",
    maxWidth: "50rem",
    overflowY: "hidden ",
    overflowX: " scroll",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    margin: "0 auto",
    boxShadow: "none",
    "&::-webkit-scrollbar": {
      width: 10,
      height: 10,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      borderRadius: 6,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#6a41f2",
      outline: "1px solid red",
      borderRadius: 6,
    },
  },
  outer: {
    padding: "1rem",
  },
})
export default function TopHorizontal({ items }) {
  const classes = useStyles()
  const [mouseScrollActive, setMouseScrollActive] = React.useState(false)
  const [startingMousePosition, setStartingMousePosition] = React.useState(0)
  const [
    scrollValueAtTheStartOfDrag,
    setscrollValueAtTheStartOfDrag,
  ] = React.useState(0)
  const [moved, setMoved] = React.useState(0)
  return (
    <Paper elevation={3} className={classes.outer}>
      <Box style={{ position: "relative" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Newest properties
          <Underliner></Underliner>
        </Typography>
      </Box>
      <Paper
        className={classes.root}
        onMouseDown={e => {
          e.preventDefault()
          setMouseScrollActive(true)
          setStartingMousePosition(e.pageX)
          setscrollValueAtTheStartOfDrag(e.currentTarget.scrollLeft)
        }}
        onMouseMove={e => {
          if (mouseScrollActive) {
            console.log("active")
            const currentMousePosition = e.pageX
            const movedDistance = startingMousePosition - currentMousePosition
            setMoved(movedDistance)
            e.currentTarget.scrollLeft =
              scrollValueAtTheStartOfDrag + movedDistance
          }
        }}
        onMouseUp={e => {
          setMouseScrollActive(false)
          if (moved) {
            e.preventDefault()
          }
        }}
        onMouseLeave={e => {
          setMouseScrollActive(false)
        }}
        onClick={e => {
          if (moved) {
            console.log("click")
            e.preventDefault()
          }
        }}
      >
        {items.map(({ node }, i) => {
          if (i < 5) {
            return (
              <Link to={`/${node.contentful_id}`} key={i + 200}>
                <StyledCardSmall
                  key={i}
                  img={node.images[0].fluid}
                  content={node}
                />
                <Divider orientation="vertical" flexItem></Divider>
              </Link>
            )
          } else {
            return (
              <Link to={`/${node.contentful_id}`} key={i + 200}>
                <StyledCardSmall
                  key={i}
                  img={node.images[0].fluid}
                  content={node}
                />
              </Link>
            )
          }
        })}
      </Paper>
    </Paper>
  )
}
