import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";

import ambientImag from "../../../Assets/ambience.jpg";

const Ambience = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const Divider = styled(Box)(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  const SmallText = styled(Box)(({ theme }) => ({
    fontSize: "18px",
    color: "#788087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const LargeText = styled(Box)(({ theme }) => ({
    fontSize: "62px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const TextFlexBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));
  return (
    <>
      <Box sx={{ px: 10 }}>
        <Container>
          <CustomBox>
            <ImgContainer>
              <img src={ambientImag} alt="" style={{ maxWidth: "100%" }} />
            </ImgContainer>
            <Box>
              <Divider />
              <Typography
                sx={{
                  fontSize: "35px",
                  color: "000339",
                  fontWeight: "700",
                  my: 3,
                }}
              >
                You have found a ambience you love.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#5a6473",
                  lineHeight: "27px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                culpa sit nihil iusto consectetur deserunt rem dolore, illum
                tenetur similique?
              </Typography>
            </Box>
          </CustomBox>
          <TextFlexBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                lineHeight: "37px",
              }}
            >
              <LargeText>250+</LargeText>
              <SmallText
                sx={{
                  fontWeight: "500",
                }}
              >
                Dishes
              </SmallText>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                lineHeight: "37px",
              }}
            >
              <LargeText>300+</LargeText>
              <SmallText
                sx={{
                  fontWeight: "500",
                }}
              >
                Trusted Clients
              </SmallText>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                lineHeight: "37px",
              }}
            >
              <LargeText>350+</LargeText>
              <SmallText
                sx={{
                  fontWeight: "500",
                }}
              >
                Delivery Per Day
              </SmallText>
            </Box>
          </TextFlexBox>
        </Container>
      </Box>
    </>
  );
};

export default Ambience;
