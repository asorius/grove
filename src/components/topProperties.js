import React from "react"
import { Paper, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import StyledCardSmall from "./styled/styledCardSmall"
import { Link } from "gatsby"
const useStyles = makeStyles({
  root: {
    maxHeight: "35rem",
    overflowY: "auto ",
    overflowX: " auto",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    padding: "1rem",
    background: "rgba(255,255,255,.8)",
    "&::-webkit-scrollbar": {
      width: 10,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      borderRadius: 6,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "grey",
      outline: "1px solid red",
      borderRadius: 6,
    },
  },
})
export default function TopProperties({ items }) {
  console.log(items)
  const classes = useStyles()
  const [mouseScrollActive, setMouseScrollActive] = React.useState(false)
  const [startingMousePosition, setStartingMousePosition] = React.useState(0)
  const [
    scrollValueAtTheStartOfDrag,
    setscrollValueAtTheStartOfDrag,
  ] = React.useState(0)
  const [moved, setMoved] = React.useState(0)
  return (
    <Paper
      elevation={3}
      className={classes.root}
      onMouseDown={e => {
        e.preventDefault()
        setMouseScrollActive(true)
        setStartingMousePosition(e.pageY)
        setscrollValueAtTheStartOfDrag(e.currentTarget.scrollTop)
      }}
      onMouseMove={e => {
        if (mouseScrollActive) {
          const currentMousePosition = e.pageY
          const movedDistance = startingMousePosition - currentMousePosition
          setMoved(movedDistance)
          e.currentTarget.scrollTop =
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
            <Link to={node.contentful_id} key={i + 200}>
              <StyledCardSmall
                key={i}
                img={node.photos[0].fluid}
                content={node}
              />
              <Divider></Divider>
            </Link>
          )
        } else {
          return (
            <Link to={node.contentful_id} key={i + 200}>
              <StyledCardSmall
                key={i}
                img={node.photos[0].fluid}
                content={node}
              />
            </Link>
          )
        }
      })}
    </Paper>
  )
}
