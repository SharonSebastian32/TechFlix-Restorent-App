import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 250,
  backgroundColor: "#fffbe2",
  margin: theme.spacing(2),
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const IconContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CustomCards = ({ img, price, item, likes, heart, share }) => {
  return (
    <StyledCard>
      <CardMedia component="img" height="194" image={img} alt={item} />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          ₹{price}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {item}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <IconContainer>
            <IconButton size="small">
              <ThumbUpIcon />
            </IconButton>
            <Typography variant="caption">{likes}</Typography>
          </IconContainer>
          <IconContainer>
            <IconButton size="small">
              <FavoriteIcon />
            </IconButton>
            <Typography variant="caption">{heart}</Typography>
          </IconContainer>
          <IconContainer>
            <IconButton size="small">
              <ShareIcon />
            </IconButton>
            <Typography variant="caption">{share}</Typography>
          </IconContainer>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default CustomCards;
