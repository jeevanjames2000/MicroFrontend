import React, { useEffect } from "react";
import TopMenu from "./components/TopMenu";
import Ads from "./components/Ads";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import { useSelector } from "react-redux";
import CartPage from "./components/CartPage";
import BuyNowPage from "./components/BuyNowPage";
import { Box } from "@mui/material";
export default function Body() {
  const isCartOpen = useSelector((state) => state.module.cartStore);
  const buyNow = useSelector((state) => state.module.buynowStore);
  const mainRoute = useSelector((state) => state.config.mainRoute);
  console.log("buyNow: ", buyNow);
  console.log("isCartOpen: ", isCartOpen);
  useEffect(() => {
    if (mainRoute) {
      console.log("Reloading page...");
      window.location.reload();
    }
  }, [mainRoute]);
  if (isCartOpen) {
    return <CartPage />;
  }
  if (buyNow && Object.keys(buyNow).length !== 0) {
    return <BuyNowPage data={buyNow} />;
  }
  return (
    <>
      <Box sx={{ position: "relative", top: 70 }}>
        <TopMenu />
        <Ads />
        <Comp1 />
        <Comp2 />
      </Box>
    </>
  );
}
