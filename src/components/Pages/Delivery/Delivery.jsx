import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import DeliveryImg from "../../../Assets/DeliveryImg.png";
import CustomButton from "../../CustomeButton/CustomButton";

const Delivery = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#fed801",
    height: "410px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "3",
    },
  }));

  return (
    <CustomBox data-aos="zoom-in" data-aos-duration="1000">
      <CustomContainer
        sx={{
          boxShadow: "0 10px 30px rgba(254, 216, 1, 0.7)",
        }}
      >
        <Box sx={{ paddingLeft: "34px" }}>
          <Typography
            sx={{
              fontSize: "45px",
              fontWeight: "600",
              color: "#fff",
              fontFamily: "monospace",
             }}
          >
            Super Fast Home Delivery
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#000",
              marginY: 0,
              fontWeight: "500",
            }}
          >
            Door to Door Delivery
          </Typography>
          <CustomButton
            data-aos="zoom-in"
            color="#17275f"
            backgroundColor="#fefcec"
            buttonText="Order Now"
          />
        </Box>
        <Box
          component="img"
          data-aos="zoom-in"
          data-aos-duration="3000"
          src={DeliveryImg}
          alt="Delivery"
          sx={{ maxWidth: "100%", height: "auto" }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default Delivery;
