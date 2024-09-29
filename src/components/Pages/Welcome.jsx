import React, { useEffect } from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import CustomButton from "../CustomeButton/CustomButton";
import WelcomeImg from "../../Assets/welcome.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Welcome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#fff",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#FED801", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#687690",
                fontWeight: "600",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Techflix Restaurant
            </Typography>
            <Title variant="h1">
              Discover a place where you will love to Eat.
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5a6473",
                my: 4,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              earum? Voluptas non eum doloremque fugit quis nostrum, ipsam
              possimus nam officiis quasi!
            </Typography>
            <CustomButton
              backgroundColor="#0f1b4c"
              color="#fff"
              buttonText="More About Us"
              welcomeBtn={true}
            />
          </Box>
          <Box sx={{ flex: "1.25" }}>
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              src={WelcomeImg}
              alt="Welcome"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Welcome;
