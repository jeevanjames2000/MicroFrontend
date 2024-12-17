import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton, CardMedia } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Ads = () => {
  const images = [
    "https://via.placeholder.com/700x200?text=Iqoo 13 Price drop alert",
    "https://via.placeholder.com/700x200?text=Groceries for lowest price ever",
    "https://via.placeholder.com/700x200?text=Get the Ac in this chilling weather",
    "https://via.placeholder.com/700x200?text=Something is fishy",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const autoScroll = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(autoScroll);
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "200px",
        overflow: "hidden",
        margin: "0 auto",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {}
      <IconButton
        onClick={handlePrev}
        sx={{ position: "absolute", left: 0, zIndex: 2 }}
      >
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>
      {}
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={image}
              alt={`Ad ${index + 1}`}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
      {}
      <IconButton
        onClick={handleNext}
        sx={{ position: "absolute", right: 0, zIndex: 2 }}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};
export default Ads;
