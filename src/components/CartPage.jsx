import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "host/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalValue = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Box sx={{ p: 2 }}>
      <ShoppingCartIcon sx={{ mr: 1 }} />
      <Typography variant="h4" sx={{ mb: 2 }}>
        Shopping Cart
      </Typography>

      {cart.length > 0 ? (
        cart.map((item) => (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              boxShadow: 2,
              p: 1,
              backgroundColor: "#f9f9f9",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 100, height: 100, borderRadius: 2 }}
              image={item.image}
              alt={item.name}
            />
            <CardContent
              sx={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ₹{item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quantity: {item.quantity}
              </Typography>
            </CardContent>
            {}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                color="primary"
                onClick={() => handleDecrement(item.id)}
                disabled={item.quantity === 1}
              >
                <RemoveIcon />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton
                color="primary"
                onClick={() => handleIncrement(item.id)}
              >
                <AddIcon />
              </IconButton>
            </Box>
            {}
            <IconButton color="error" onClick={() => handleRemove(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Card>
        ))
      ) : (
        <Typography variant="h6" color="text.secondary">
          Your cart is empty.
        </Typography>
      )}
      <Divider sx={{ my: 2 }} />
      {cart.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Total: ₹{totalValue}</Typography>
          <Button variant="contained" color="success" size="large">
            Proceed to Buy
          </Button>
        </Box>
      )}
    </Box>
  );
}
