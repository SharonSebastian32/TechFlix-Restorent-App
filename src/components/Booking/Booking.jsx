import { Box, styled, Typography } from "@mui/material";
import React from "react";
import BuyIcon from "../../Assets/buy_icon.png";
import SellIcon from "../../Assets/sell_icon.png";
import RentIcon from "../../Assets/sell_icon.png";
import { ArrowRightAlt } from "@mui/icons-material";
import CustomButton from "../CustomeButton/CustomButton";

function Booking() {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const GuideContents = [
    {
      id: 1,
      image: BuyIcon,
      title: "Order Guides",
      Question: "How to Order?",
    },
    {
      id: 2,
      image: SellIcon,
      title: "Booking Guides",
      Question: "How to Book?",
    },
    {
      id: 3,
      image: RentIcon,
      title: "Payment Guides",
      Question: "Payment Methods",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#fffce8",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "black",
          margin: "0 auto",
        }}
      ></div>
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "#000339",
          my: 3,
        }}
      >
        How to Book?
      </Typography>
      <CustomBox>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5a6473",
            textAlign: "center",
          }}
        >
          Everything you need to know when you book for advance slot.
        </Typography>
      </CustomBox>
      <GuidesBox>
        {GuideContents.map((content, id) => (
          <GuideBox key={id}>
            <img src={content.image} alt="empty" />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#3b3c45",
                my: 1,
              }}
            >
              {content.title}
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#0689ff",
                }}
              >
                {content.Question}
              </Typography>
              <ArrowRightAlt
                sx={{
                  color: "#0689ff",
                }}
              />
            </Box>
          </GuideBox>
        ))}
      </GuidesBox>
      <CustomButton
        backgroundColor="#0f1b4c"
        color="#fff"
        buttonText="See full Guides"
      ></CustomButton>
    </Box>
  );
}

export default Booking;
