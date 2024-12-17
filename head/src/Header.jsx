import React from "react";
import { Box, Typography } from "@mui/material";
import ProfileDropdown from "./components/profile/ProfileDropDown";
import AutocompleteSearch from "./components/search";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { cartState } from "host/hostSlice";
import { home } from "host/configSlice";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const theme = useTheme();
  const isCartOpen = useSelector((state) => state.module.cartStore);
  const mainRoute = useSelector((state) => state.config.mainRoute);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(cartState(!isCartOpen));
  };
  const handleRouteHome = () => {
    dispatch(home(!mainRoute));
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "4rem",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
        zIndex: 1000,
        borderBottom: "1px solid #ddd",
        position: "fixed",
        top: 0,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: theme.typography.h6.color,
        }}
        onClick={handleRouteHome}
      >
        MicroFrontend Header
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <AutocompleteSearch />

        <Box sx={{ display: "flex", gap: 1 }}>
          <AccountCircleIcon fontSize="medium" />
          <ShoppingCartIcon fontSize="medium" onClick={handleCartClick} />
        </Box>
      </Box>
    </Box>
  );
}
