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
import { useDispatch } from "react-redux";
import { addToCart } from "host/cartSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import database from "host/database";
export default function Comp2() {
  const scrollRef = useRef(null);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const dispatch = useDispatch();
  const electronics = database.find(
    (category) => category.category === "Accessories"
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
      updateScrollIcons();
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
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h2">Best of Accessories</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f9f9f9",
          p: 2,
          gap: 2,
        }}
      >
        {}
        {showLeftIcon && (
          <IconButton
            onClick={() => handleScroll("left")}
            sx={{ visibility: showLeftIcon ? "visible" : "hidden" }}
          >
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        )}
        {}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            overflowX: { xs: "visible", md: "auto" },
            gap: 2,
            p: 1,
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {electronics?.map((product, i) => (
            <Card
              key={i}
              sx={{
                width: { xs: "100%", sm: "48%", md: "230px" },
                borderRadius: 2,
                boxShadow: 3,
                flexShrink: 0,
                backgroundColor: "white",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: "1rem", fontWeight: "bold", mb: 1 }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.9rem", fontWeight: "bold", mb: 0.2 }}
                >
                  Price: ₹{product.price}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.8rem", fontWeight: "bold", mb: 0.2 }}
                >
                  Rating: {product.rating} ({product.reviews} reviews)
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    fontSize: "0.8rem",
                    textAlign: "left",
                    fontWeight: "bold",
                    mb: 0.2,
                  }}
                >
                  Description: {product.description}
                </Typography>
                <Box
                  sx={{
                    display: "block",
                    justifyContent: "space-between",
                    gap: 1,
                    mt: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    color="info"
                    sx={{ flex: 1, width: "100%", mb: 1 }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ flex: 1, width: "100%" }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        {}
        {showRightIcon && (
          <IconButton
            onClick={() => handleScroll("right")}
            sx={{ visibility: showRightIcon ? "visible" : "hidden" }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
