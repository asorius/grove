import React from "react"
import { Paper, Typography, Box, Container } from "@material-ui/core"
import Underliner from "./styled/underliner"
import bgimg from "../images/undraw_select_house_qbag.svg"
import bgimg2 from "../images/phone.svg"
export default function LayoutIndividual({
  header,
  subheader,
  children,
  id,
  bg,
}) {
  return (
    <Container
      style={{
        paddingTop: "2rem",
      }}
      id={id}
    >
      <Paper
        style={{
          background:
            bg === "none"
              ? ""
              : `${bg ? `url('${bgimg}')` : `url('${bgimg2}')`}`,

          backgroundColor: "#fff",
          backgroundSize: "contain",
          backgroundPosition: `${bg ? "right" : "left"}`,
          backgroundRepeat: "no-repeat",
          minHeight: "95vh",
        }}
      >
        <Box p={4}>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            {" "}
            {header}
          </Typography>
          <Underliner></Underliner>
          <Box width="75%" m="0 auto" pt={10} align="center">
            <Typography
              variant="h6"
              style={{
                background: "#ffffffe3",
                padding: "1rem",
              }}
            >
              {subheader}
            </Typography>
          </Box>
        </Box>
        <Box p={2} m={2}>
          {children}
        </Box>
      </Paper>
    </Container>
  )
}
