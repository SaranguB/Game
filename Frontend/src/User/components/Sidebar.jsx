import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import { AccountBox, Article, Groups, Home, ModeNight, Person, Settings } from "@mui/icons-material";
import { Link } from 'react-router-dom'
const Sidebar = ({ mode, setMode }) => {
  return (
    <Box

      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">

        <List >
          <ListItem disablePadding>
            <Link to={'/User/'}>
              <ListItemButton >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to={'/User/GameFeed'} style={{ textDecoration: 'none', color: 'black' }}>

              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Game Feed" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to={'/User/GameFeed'} style={{ textDecoration: 'none', color: 'black' }}>

              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Groups />
                </ListItemIcon>

                <ListItemText primary="Developer" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to={'/User/myprofile'} style={{ textDecoration: 'none', color: 'black' }}>

              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Groups />
                </ListItemIcon>

                <ListItemText primary="My Profile" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">

              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
