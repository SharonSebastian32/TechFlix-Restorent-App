import React, { useState, useEffect, useRef } from "react";
import { Box, Container, styled, Typography } from "@mui/material";

import ambientImag from "../../../Assets/ambience.jpg";

const AnimatedCounter = ({ end, duration, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(end * percentage);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startAnimation]);

  return <span>{count}</span>;
};

const Ambience = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

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

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#788087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
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
    <Box sx={{ px: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img
              src={ambientImag}
              alt="ambientimage"
              data-aos="zoom-in"
              data-aos-duration="4000"
              style={{ maxWidth: "100%" }}
            />
          </ImgContainer>
          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
              data-aos="fade-left"
              data-aos-duration="4000"
            >
              You have found an ambience you love.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#5a6473",
                lineHeight: "27px",
                fontWeight: "bold",
              }}
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              culpa sit nihil iusto consectetur deserunt rem dolore, illum
              tenetur similique?
            </Typography>
          </Box>
        </CustomBox>
        <TextFlexBox ref={statsRef}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              lineHeight: "37px",
            }}
          >
            <LargeText>
              <AnimatedCounter
                end={250}
                duration={2000}
                startAnimation={startAnimation}
              />
              +
            </LargeText>
            <SmallText>Dishes</SmallText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              lineHeight: "37px",
            }}
          >
            <LargeText>
              <AnimatedCounter
                end={300}
                duration={2000}
                startAnimation={startAnimation}
              />
              +
            </LargeText>
            <SmallText>Trusted Clients</SmallText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              lineHeight: "37px",
            }}
          >
            <LargeText>
              <AnimatedCounter
                end={350}
                duration={2000}
                startAnimation={startAnimation}
              />
              +
            </LargeText>
            <SmallText>Delivery Per Day</SmallText>
          </Box>
        </TextFlexBox>
      </Container>
    </Box>
  );
};

export default Ambience;
