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
import logo2 from "../assets/logo2.png";
import useAuth from "../context/authFunctions";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { currentUser,logOut } = useAuth();
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleLogOut = async ()=>{
    try{
      await logOut
      navigate("/")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <AppBar position="static" style={{ backgroundColor: "#96dbfd" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="#32468c"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <WelcomeMessage username={currentUser.displayName  || currentUser.email} />
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
                    src={logo2}
                    alt="Logo"
                    style={{
                      width: "150px",
                      maxWidth: "100%",
                      marginRight: "10px",
                    }}
                  />
                </ListItemIcon>
              </ListItem>
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
                <Button onClick={handleLogOut} fullWidth>
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
