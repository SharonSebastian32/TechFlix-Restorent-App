import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import stars from "../../Assets/Star.png";
import logo from "../../Assets/logo.png";
import partners from "../../Assets/logos.png";

const Partner = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    marginTop: 2,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));
  const CostumBox1 = styled(Box)(({ theme }) => ({}));

  const CostumBox = styled(Box)(({ theme }) => ({
    marginTop: 2,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <>
      <Box sx={{ mt: "10" }}>
        <CustomContainer>
          <CostumBox>
            <img src={logo} alt="Logo" />
            <Typography
              variant="body2"
              sx={{
                color: "#7d8589",
                fontSize: "16px",
                fontWeight: "bold",
                mt: 2,
              }}
            >
              More than 45,000 trust Techflix
            </Typography>
          </CostumBox>

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
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          <img src={partners} alt="" />
        </Container>
      </Box>
    </>
  );
};

export default Partner;
