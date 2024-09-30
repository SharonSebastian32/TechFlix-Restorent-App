import { Box, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import fbIcon from "../../Assets/facebook.png";
import twitterIcon from "../../Assets/twitter.png";
import InstaIcon from "../../Assets/instagram.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const CustomContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: "30px",
    backgroundColor: "#f9f587",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const FooterLinks = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#000066",
    fontWeight: "500",
    cursor: "pointer",
    marginBottom: 2,
    padding: "2px",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  }));

  const data_links = [
    { title: "Guide" },
    { title: "Services" },
    { title: "Contacts" },
  ];

  const overview_links = [
    { title: "Location" },
    { title: "Partnerships" },
    { title: "Terms of Use & Privacy Policy" },
  ];

  const social_icons = [
    { social: fbIcon, alt_comment: "Facebook Link" },
    { social: twitterIcon, alt_comment: "Twitter Link" },
    { social: InstaIcon, alt_comment: "Instagram Link" },
  ];

  return (
    <CustomContainer>
      <Box>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#1C1C1D",
            fontWeight: "700",
            mb: 2,
          }}
        >
          Featured
        </Typography>

        <Box>
          {data_links.map((link, index) => (
            <FooterLinks key={index}>{link.title}</FooterLinks>
          ))}
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#1C1C1D",
            fontWeight: "700",
            mb: 2,
          }}
        >
          Overview
        </Typography>

        <Box>
          {overview_links.map((overview, index) => (
            <FooterLinks key={index}>{overview.title}</FooterLinks>
          ))}
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#1C1C1D",
            fontWeight: "700",
            mb: 2,
          }}
        >
          Get in Touch
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "#7A7A7E",
            fontWeight: "500",
            mb: 2,
          }}
        >
          Keep in touch with our social media pages.
        </Typography>

        <IconBox>
          {social_icons.map((icon, index) => (
            <img
              key={index}
              src={icon.social}
              alt={icon.alt_comment}
              style={{ cursor: "pointer" }}
            />
          ))}
        </IconBox>
      </Box>
    </CustomContainer>
  );
};

export default Footer;
