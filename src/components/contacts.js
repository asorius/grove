import React from "react"
import LayoutIndividual from "./individualLayout"
import Map from "./map"
import { Grid, Paper, Box, Hidden } from "@material-ui/core"
import Form from "./form"
import Socials from "./socialsList"
export default function Contacts() {
  return (
    <LayoutIndividual
      id="Contacts"
      header="Contact Us"
      subheader="Whatever your property needs, Grove Property Solutions will open the door for you!"
    >
      <Grid
        container
        justify="space-between"
        style={{ position: "relative", minHeight: "50vh" }}
        xs={12}
      >
        <Grid item md={4} sm={6} xs={12} style={{ zIndex: 2 }}>
          <Box m={1}>
            <Paper elevation={5}>
              <Box p={2}>
                <Socials></Socials>
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12} style={{ zIndex: 2 }}>
          <Box m={1}>
            <Paper elevation={5}>
              <Form></Form>
            </Paper>
          </Box>
        </Grid>

        <Hidden smDown>
          <Map isMarkerShown></Map>
        </Hidden>
      </Grid>
    </LayoutIndividual>
  )
}
