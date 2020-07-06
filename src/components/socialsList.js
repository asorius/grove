import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import PhoneIcon from "@material-ui/icons/Phone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import Divider from "@material-ui/core/Divider"
import Box from "@material-ui/core/Box"

export default function FolderList() {
  return (
    <>
      <div>
        <Typography variant="h5" color="secondary" align="center">
          Contacts
        </Typography>
        <List
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <ListItem>
            <Button fullWidth align="center">
              <Box
                style={{
                  display: "flex",
                  justifyContent: "spcenter",
                }}
              >
                <a href="tel:01159476994">
                  <ListItemAvatar>
                    <PhoneIcon fontSize="large" color="primary"></PhoneIcon>
                  </ListItemAvatar>
                </a>
                <ListItemText primary=" 0115 947 6994" />
              </Box>
            </Button>
          </ListItem>
          <ListItem>
            <Button fullWidth>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "spcenter",
                }}
              >
                <a href="tel:01889565669">
                  <ListItemAvatar>
                    <PhoneIcon fontSize="large" color="primary"></PhoneIcon>
                  </ListItemAvatar>
                </a>
                <ListItemText primary=" 0188 956 5669 " />
              </Box>
            </Button>
          </ListItem>
          <ListItem
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button fullWidth>
              <a href="mailto:enquiries@grovepropertysolutions.com">
                <ListItemAvatar>
                  <MailOutlineIcon
                    color="secondary"
                    fontSize="large"
                  ></MailOutlineIcon>
                </ListItemAvatar>
              </a>
            </Button>
            <ListItemText
              secondary="enquiries@grovepropertysolutions.com"
              style={{ width: "100%", textAlign: "center" }}
            />
          </ListItem>
        </List>
      </div>
      <Divider></Divider>
      <Box pt={2}>
        <Typography variant="h6" color="secondary" align="center">
          Find us on social media
        </Typography>
        <List style={{ display: "flex", justifyContent: "space-around" }}>
          <Button fullWidth>
            <ListItem
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <a
                href="https://facebook.com/GroveProperty"
                target="_blank"
                rel="noreferrer"
                type="noopener"
              >
                <ListItemAvatar
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <FacebookIcon
                    style={{
                      color: "#4267B2",
                    }}
                  ></FacebookIcon>
                </ListItemAvatar>
                <ListItemText secondary="Facebook" />
              </a>
            </ListItem>
          </Button>
          <Button fullWidth>
            <ListItem
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <a
                href="https://twitter.com/GroveProp"
                target="_blank"
                type="noopener"
                rel="noreferrer"
              >
                <ListItemAvatar
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <TwitterIcon
                    style={{
                      color: "#1DA1F2",
                    }}
                  ></TwitterIcon>
                </ListItemAvatar>
                <ListItemText secondary="Twitter" />
              </a>
            </ListItem>
          </Button>
        </List>
      </Box>
    </>
  )
}
