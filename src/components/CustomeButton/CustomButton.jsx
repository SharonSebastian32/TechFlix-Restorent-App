import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  welcomeBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const CustomeButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    textTransform: "none",
    display: "block",
    padding: "0.5rem 1.24rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "7px",
    border: "2px solid transparent",
     "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin:
        (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (welcomeBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomeButton>{buttonText}</CustomeButton>;
};

export default CustomButton;
