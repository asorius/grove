import React from "react"
import { Paper, Typography, Box, Container } from "@material-ui/core"
import Underliner from "./styled/underliner"
import bgimg from "../images/undraw_select_house_qbag.svg"
import bgimg2 from "../images/phone.svg"
import lettingsbg from "../images/lettings.svg"
export default function LayoutIndividual({
  header,
  subheader,
  children,
  id,
  bg,
}) {
  return (
    <Container id={id}>
      <Box
        style={{
          background:
            bg === 1
              ? `url('${bgimg}')`
              : bg === 2
              ? `url('${lettingsbg}')`
              : `url('${bgimg2}')`,
          backgroundColor: "#f0e8d64a",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${bg === 1 ? "right" : "left"}`,
          minHeight: "100vh",
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
        <Box p={1} m={2}>
          {children}
        </Box>
      </Box>
    </Container>
  )
}
