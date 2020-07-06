import React from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Button } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2rem",
    height: "100%",
    "& .MuiTextField-root": {
      margin: ".5rem",
    },
    "& .Mui-focused": {
      color: "black",
    },
    display: "grid",
    alignContent: "center",
  },
}))

export default function FormPropsTextFields() {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h5" color="secondary">
        Message us
      </Typography>
      <TextField required id="standard-required" label="Name" />
      <TextField required id="standard-required" label="Email" />
      <TextField required id="standard-required" label="Telephone" />
      <TextField
        id="outlined-multiline-static"
        label="Your message"
        multiline
        rows={4}
        variant="outlined"
      />
      <Button color="primary" variant="contained">
        Submit
      </Button>
    </form>
  )
}
