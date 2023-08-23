import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Divider, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">My App</Typography>
        <WelcomeMessage />
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem>
                <Button component={Link} to="/register-mood" fullWidth>
                  <ListItemText primary="Mood Register" />
                </Button>
              </ListItem>
              <ListItem>
                <Button component={Link} to="/trends" fullWidth>
                  <ListItemText primary="Calendar" />
                </Button>
              </ListItem>
              <ListItem>
                <Button component={Link} to="/resumen-analisis" fullWidth>
                  <ListItemText primary="Analysis" />
                </Button>
              </ListItem>
              <Divider />
              <ListItem>
                <Button onClick={() => console.log("Cerrar Sesión")} fullWidth>
                  <ExitToAppIcon />
                  <ListItemText primary="Log Out" />
                </Button>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;



