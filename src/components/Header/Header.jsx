import React, { useState } from "react";

import {
  Box,
  styled,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import CustomeButton from "../CustomeButton/CustomButton";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const nav_titles = [
    {
      path: "/",
      display: "Home",
      icon: <HomeIcon />,
    },
    {
      path: "/dishes",
      display: "Dishes",
      icon: <FeaturedPlayListIcon />,
    },
    {
      path: "/services",
      display: "Services",
      icon: <MiscellaneousServicesIcon />,
    },
    {
      path: "/about",
      display: "About us",
      icon: <ContactsIcon />,
    },
  ];

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavbarLink = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#4f5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const navigate = useNavigate();

  const list = (anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {nav_titles.map((item, index) => (
          <ListItem key={item.display} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {" "}
      <Paper
        elevation={0}
        sx={{ position: "sticky", top: 0,  zIndex: 1100 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "25px",
            maxWidth: "auto",
            backgroundColor: "#fed801",
            marginLeft: "0px",
            marginBottom: "-24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <CustomMenuIcon onClick={toggleDrawer("left", true)} />
              <NavbarLogo src={logo} alt="logo" />
            </Box>
            <NavbarLinksBox>
              {nav_titles.map((item, index) => (
                <NavbarLink
                  variant="body2"
                  key={index}
                  onClick={() => navigate(item.path)}
                >
                  {item.display}
                </NavbarLink>
              ))}
            </NavbarLinksBox>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <NavbarLink variant="body2">Sign Up</NavbarLink>
            <CustomeButton
              backgroundColor="#0F1B4C"
              buttonText="Register"
              color="white"
            />
          </Box>
        </Box>
        <Drawer
          anchor="left"
          open={mobileMenu.left}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </Paper>
    </>
  );
};

export default Header;
