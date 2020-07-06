import React from "react"
import {
  Typography,
  Accordion,
  Box,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Card,
  CardContent,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Underliner from "./underliner"
const bgcolor = "#eee"
export default function Item({
  header,
  headerColor,
  description,
  openingText,
  openingColor = "primary",
  iterableList,
}) {
  return (
    <Box height="100%">
      <Card style={{ height: "100%" }} elevation={5}>
        <CardContent
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            align="center"
            color={headerColor}
            gutterBottom
            style={{ position: "relative" }}
          >
            {header}
            <Underliner h={2}></Underliner>
          </Typography>
          <Typography align="center" style={{ padding: "1rem" }}>
            {description}
          </Typography>
          <Accordion>
            <Box bgcolor={`${openingColor}.light`}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    color={openingColor === "primary" ? "secondary" : "primary"}
                    fontSize="large"
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                align="center"
              >
                <Typography align="center" style={{ width: "100%" }}>
                  {openingText}
                </Typography>
              </AccordionSummary>
            </Box>
            <AccordionDetails
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                background: bgcolor,
              }}
            >
              {iterableList.map((el, i) => {
                if (i < iterableList.length - 1) {
                  return (
                    <Box p={1}>
                      <Typography variant="body2" gutterBottom align="center">
                        {el}
                      </Typography>
                      <Divider light />
                    </Box>
                  )
                } else {
                  return (
                    <Box p={1}>
                      <Typography variant="body2" gutterBottom align="center">
                        {el}
                      </Typography>
                    </Box>
                  )
                }
              })}
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Box>
  )
}
