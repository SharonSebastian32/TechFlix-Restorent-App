import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import stars from "../Assets/Star.png";

const Partner = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));
  const CostumBox = styled(Box)(({ theme }) => ({}));

  return (
    <>
      <Box sx={{ mt: "10" }}>
        <CustomContainer>
          <CostumBox></CostumBox>
          <Box>
            <img src={stars} alt="Rating" style={{ maxWidth: "100%" }} />
            <Typography
              variant="body2"
              sx={{
                color: "#7d8589",
                fontSize: "16px",
                mt: 2,
              }}
            >
              5-Star Rating (2k+ Reviews)
            </Typography>
          </Box>
        </CustomContainer>
        <Container
          sx={{ display: "flex", flexDirection: "column" }}
        ></Container>
      </Box>
    </>
  );
};

export default Partner;
