import React from "react"
import { Paper, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import StyledCardSmall from "./styled/styledCardSmall"

const useStyles = makeStyles({
  root: {
    maxHeight: "15rem",
    maxWidth: "50rem",
    overflowY: "hidden ",
    overflowX: " scroll",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    fontStyle: "italic",
    margin: "0 auto",
    background: "rgba(255,255,255,0)",
    boxShadow: "none",
    "&::-webkit-scrollbar": {
      width: 10,
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
    background: "rgba(255,255,255,.5)",
    margin: "2rem",
    padding: "1rem",
  },
})
export default function SimplePaper() {
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
        {[...Array(5)].map((x, i) => {
          if (i < 5) {
            return (
              <>
                <StyledCardSmall
                  key={i}
                  img={"https://source.unsplash.com/random"}
                />
                <Divider orientation="vertical" flexItem />
              </>
            )
          } else {
            return (
              <StyledCardSmall
                key={i}
                img={"https://source.unsplash.com/random"}
              />
            )
          }
        })}
      </Paper>
    </Paper>
  )
}
