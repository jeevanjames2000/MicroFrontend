import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import database from "host/database";

export default function TopMenu() {
  const theme = useTheme();
  const scrollRef = useRef(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (database) {
      setCategories(database[0].categories);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        gap: 2,
        p: 1,
        pb: 1,
      }}
    >
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          backgroundColor: "transparent",
          borderColor: "none",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((category, i) => (
          <Card
            key={i}
            sx={{
              width: 100,
              borderRadius: 2,
              boxShadow: 1,
              flexShrink: 0,
              backgroundColor: "#fff",
              border: "1px solid #ddd",
            }}
          >
            <CardMedia
              component="img"
              height="80"
              image={category.img}
              alt={category.cate}
            />
            <CardContent
              sx={{
                p: 0.5,
                pb: 0,
                textAlign: "center",
              }}
            >
              <Typography
                variant="body2"
                component="p"
                sx={{
                  fontSize: "0.8rem",
                  color: theme.palette.text.primary,
                  p: 0,
                  pb: 0,
                  m: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {category.cate}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      {}
    </Box>
  );
}
