import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import CustomCards from "../CustomCards/CustomCards";
import { Data } from "../../StaticData/Data";

const Dishes = () => {
  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const DishesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",

    rowGap: "30px",

    flexWrap: "wrap",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f5fafe",
          py: "10",
        }}
      >
        <Container>
          <PropertiesTextBox
            sx={{
              marginTop: "25px",
            }}
          >
            <Typography
              sx={{
                color: "#000339",
                fontSize: "35px",
                fontWeight: "bold",
                ml: "13px",
              }}
            >
              Featured Dishes
            </Typography>
            <Typography
              sx={{
                color: "#5a6473",
                fontSize: "16px",
                mt: "1",
                ml: "13px",
              }}
            >
              Explore Variety of South Indian Dished
            </Typography>
          </PropertiesTextBox>
          <DishesBox
            sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
          >
            {Data.map((foodItem, id) => (
              <CustomCards
                key={foodItem.id}
                img={foodItem.img}
                price={foodItem.price}
                item={foodItem.item}
                likes={foodItem.likes}
                heart={foodItem.heart}
                share={foodItem.share}
              />
            ))}
          </DishesBox>
        </Container>
      </Box>
    </>
  );
};

export default Dishes;
