import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import { Typography } from "@material-ui/core"
import { navbarList } from "../fakedata"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
  list: {
    padding: "2rem",
  },
}))

export default function VerticalNavigation() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Toolbar>
        <IconButton
          edge="end"
          className={classes.menuButton}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Toolbar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.list}
      >
        {navbarList.map((item, i) => (
          <MenuItem onClick={handleClose} key={`${item}${i}`}>
            <a
              href={`#${item}`}
              style={{
                textDecoration: "none",
                color: "black",
                padding: ".5rem",
                margin: " 0 1rem",
              }}
            >
              <Typography variant="body1">{item}</Typography>
            </a>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
