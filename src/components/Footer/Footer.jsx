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
    <Box sx={{ py: 10, backgroundColor: "#fff6b2" }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "800",
              color: "#1c1c1d",
              marginBottom: 2,
            }}
          >
            Featured
          </Typography>
          {data_links.map((link, index) => (
            <FooterLinks key={index}>{link.title}</FooterLinks>
          ))}
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "700",
              color: "#1c1c1d",
              marginBottom: 2,
            }}
          >
            Overview
          </Typography>
          {overview_links.map((overview, index) => (
            <FooterLinks key={index}>{overview.title}</FooterLinks>
          ))}
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "700",
              color: "#1c1c1d",
              marginBottom: 2,
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
                data-aos="zoom-in"
                data-aos-duration="2000"
                src={icon.social}
                alt={icon.alt_comment}
                style={{ cursor: "pointer", width: "24px", height: "24px" }}
              />
            ))}
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
