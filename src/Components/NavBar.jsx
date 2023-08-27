import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Button,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WelcomeMessage from "./WelcomeMessage";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo3 from "../assets/logo3.png";
import useAuth from "../context/authFunctions";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleLogOut = async () => {
    try {
      await logOut;
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#AAB9E4",

        fontWeight: "bold",
        fontSize: "20px",
      }}
    >
      <Toolbar>
        <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <WelcomeMessage
          username={currentUser.displayName || currentUser.email}
        />
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <img
                    src={logo3}
                    alt="Logo"
                    style={{
                      width: "100px",
                      maxWidth: "100%",
                      marginRight: "10px",
                    }}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <Button
                  component={Link}
                  to="/register-mood"
                  fullWidth
                  style={{ backgroundColor: "#ebb3fc" }}
                >
                  <ListItemText
                    primary="Mood Register"
                    style={{
                      color: "black",
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: "bolder",
                    }}
                  />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  component={Link}
                  to="/trends"
                  fullWidth
                  style={{ backgroundColor: "#ebb3fc" }}
                >
                  <ListItemText
                    primary="Calendar"
                    style={{
                      color: "black",
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: "bolder",
                    }}
                  />
                </Button>
              </ListItem>
              <Divider />
              <ListItem>
                <Button
                  onClick={handleLogOut}
                  fullWidth
                  style={{ backgroundColor: "#7b545c" }}
                >
                  <ExitToAppIcon
                    style={{
                      color: "black",
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: "bolder",
                    }}
                  />
                  <ListItemText
                    primary="Log Out"
                    style={{
                      color: "black",
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: "bolder",
                    }}
                  />
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
