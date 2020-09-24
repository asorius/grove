import React from "react"
import { Paper, Divider, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import StyledCardSmall from "./styled/styledCardSmall"
import { Link } from "gatsby"
const useStyles = makeStyles({
  root: {
    height: "80%",
    overflowY: "auto ",
    overflowX: " auto",
    padding: "1rem",
    background: "rgba(255,255,255,.3)",
    marginTop: "2rem",
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
})
export default function TopProperties({ items }) {
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
          e.currentTarget.scrollTop =
            scrollValueAtTheStartOfDrag + movedDistance
        }
      }}
      onMouseUp={e => {
        setMouseScrollActive(false)
        const currentMousePosition = e.pageY
        const movedDistance = startingMousePosition - currentMousePosition
        setMoved(movedDistance)
      }}
      onMouseLeave={e => {
        setMouseScrollActive(false)
      }}
    >
      <Grid container direction="column" spacing={2}>
        {items.map(({ node }, i) => {
          if (i < 5) {
            return (
              <Grid item key={i + 200}>
                <Link
                  to={node.contentful_id}
                  onClick={e => {
                    if (moved) {
                      e.preventDefault()
                    }
                  }}
                >
                  <StyledCardSmall
                    key={i}
                    img={node.images[0].fluid}
                    content={node}
                  />
                  <Divider light={true}></Divider>
                </Link>
              </Grid>
            )
          } else {
            return (
              <Grid item key={i + 200}>
                <Link
                  to={node.contentful_id}
                  onClick={e => {
                    if (moved) {
                      e.preventDefault()
                    }
                  }}
                >
                  <StyledCardSmall
                    key={i}
                    img={node.images[0].fluid}
                    content={node}
                  />
                </Link>
              </Grid>
            )
          }
        })}
      </Grid>
    </Paper>
  )
}
