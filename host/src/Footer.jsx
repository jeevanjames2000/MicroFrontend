import { Box, Typography, Button } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#4A4947",
        color: "white",
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        p: 2,
        flexWrap: "wrap",
        position: "relative",
        bottom: 0,
      }}
    >
      {/* Section 1 */}
      <Box sx={{ textAlign: "center", m: 1 }}>
        <Button variant="text" sx={{ color: "white" }}>
          About
        </Button>
        <Button variant="text" sx={{ color: "white" }}>
          Contact
        </Button>
        <Button variant="text" sx={{ color: "white" }}>
          Email
        </Button>
      </Box>

      {/* Section 2 */}
      <Box
        sx={{
          textAlign: "center",
          m: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="body1">Location:</Typography>
        <Typography variant="body2" color="black">
          Beside north lane, United States of America
        </Typography>
      </Box>
    </Box>
  );
}
