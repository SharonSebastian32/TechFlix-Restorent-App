import React from "react";
import { Box, styled, Typography } from "@mui/material";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "70%",
    height: "50%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        mt: "65px",
        mb: "100px",
      }}
    >
      <Box
        sx={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      />
      <br />
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "#000339",
          textAlign: "center",
          mt: 2,
          mb: 2,
        }}
      >
        About Us
      </Typography>
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#5A6473",
            textAlign: "center",
            lineHeight: "25px",
          }}
        >
          Welcome to our restaurant, where culinary excellence meets warm
          hospitality{" "}
        </Typography>
        <br />
        <br />
        <br />
 
      </CustomBox>
    </Box>
  );
};

export default About;
