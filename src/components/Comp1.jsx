import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "host/cartSlice";
import { buynowState } from "host/hostSlice";

import database from "host/database";
export default function ElectronicsCards() {
  const scrollRef = useRef(null);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const dispatch = useDispatch();
  const electronics = database.find(
    (category) => category.category === "Electronics"
  )?.products;

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const updateScrollIcons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftIcon(scrollLeft > 0);
      setShowRightIcon(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", updateScrollIcons);
      updateScrollIcons(); // Initial check

      return () => {
        if (scrollRef.current) {
          scrollRef.current.removeEventListener("scroll", updateScrollIcons);
        }
      };
    }
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow = (product) => {
    dispatch(buynowState(product));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        p: 2,
        gap: 2,
      }}
    >
      {/* Left Scroll Button */}
      {showLeftIcon && (
        <IconButton
          onClick={() => handleScroll("left")}
          sx={{ visibility: showLeftIcon ? "visible" : "hidden" }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}

      {/* Horizontal Scrollable Products */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          p: 1,
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {electronics?.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: 250,
              borderRadius: 2,
              boxShadow: 3,
              flexShrink: 0,
              backgroundColor: "white",
            }}
          >
            <CardMedia
              component="img"
              height="150"
              image={product.image}
              alt={product.name}
              sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "1rem", fontWeight: "bold" }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "0.9rem" }}
              >
                Price: ₹{product.price}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "0.8rem" }}
              >
                Rating: {product.rating} ({product.reviews} reviews)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 1,
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="info"
                  sx={{ flex: 1 }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ flex: 1 }}
                  onClick={() => handleBuyNow(product)}
                >
                  Buy Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      {showRightIcon && (
        <IconButton
          onClick={() => handleScroll("right")}
          sx={{ visibility: showRightIcon ? "visible" : "hidden" }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
  );
}
