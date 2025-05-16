import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button as MUIButton,
  IconButton,
  Typography,
  Box,
  Grid
} from "@mui/material";
import {
  Close,
  AddCircle,
  RemoveCircle,
  ShoppingCart
} from "@mui/icons-material";
import { toast } from 'react-toastify';

export default function OrderModal({ open, handleClose, coffee }) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  // Update total price when quantity or coffee changes
  useEffect(() => {
    if (coffee) {
      setTotalPrice((coffee.price * quantity).toFixed(2));
    }
  }, [coffee, quantity]);

  // Reset quantity when modal opens with new coffee
  useEffect(() => {
    if (open) {
      setQuantity(1);
    }
  }, [open]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Prepare order data
      const orderData = {
        coffeeId: coffee?._id,
        coffeeName: coffee?.name,
        quantity,
        unitPrice: coffee?.price,
        totalPrice
      };

      console.log('Order data:', orderData);

      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // Show success toast notification
      toast.success(
        <div className="flex items-center gap-2">
          <span className="font-rancho text-lg">Order placed successfully!</span>
        </div>,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            background: '#F4F3F0',
            color: '#331A15',
            borderLeft: '4px solid #D2B48C'
          },
          icon: (
            <img
              src="https://img.icons8.com/color/48/000000/coffee-to-go.png"
              alt="Coffee Cup"
              className="w-6 h-6"
            />
          )
        }
      );

      // Close modal after successful order
      handleClose();

    } catch (error) {
      console.error('Error placing order:', error);

      // Show error toast
      toast.error(
        <div className="flex items-center gap-2">
          <span className="font-rancho text-lg">Failed to place order!</span>
        </div>,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            background: '#FDEDEC',
            color: '#E74C3C',
            borderLeft: '4px solid #E74C3C'
          }
        }
      );
    } finally {
      setLoading(false);
    }
  };

  if (!coffee) return null;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '450px',
          borderRadius: '8px',
        }
      }}
    >
      <DialogTitle className="bg-gradient-to-r from-[#F4F3F0] to-[#D2B48C] flex items-center justify-between">
        <Box className="flex items-center">
          <ShoppingCart className="mr-2 text-[#331A15]" />
          <Typography className="font-rancho text-2xl text-[#331A15]">
            Order {coffee.name}
          </Typography>
        </Box>
        <IconButton onClick={handleClose} size="small" className="text-gray-600">
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent className="pt-6">
        <Box className="mb-6">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <img
                src={coffee.photo}
                alt={coffee.name}
                className="h-40 w-full object-cover rounded-lg shadow-md"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className="font-rancho text-xl text-[#331A15]">
                {coffee.name}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mb-2">
                Unit Price
              </Typography>
              <Typography variant="h6" className="font-bold text-[#331A15]">
                ${coffee.price}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box className="mb-6">
          <Typography variant="body1" className="mb-2 font-medium">
            Quantity
          </Typography>
          <Box className="flex items-center gap-3">
            <IconButton
              onClick={handleDecrement}
              color="primary"
              disabled={quantity <= 1}
              className="!text-[#331A15]"
            >
              <RemoveCircle />
            </IconButton>

            <TextField
              value={quantity}
              onChange={handleQuantityChange}
              variant="outlined"
              size="small"
              inputProps={{
                style: { textAlign: 'center' },
                min: 1
              }}
              className="w-20 bg-[#F4F3F0]"
            />

            <IconButton
              onClick={handleIncrement}
              color="primary"
              className="!text-[#331A15]"
            >
              <AddCircle />
            </IconButton>
          </Box>
        </Box>

        <Box className="px-4 py-3 bg-[#F8F8F8] rounded-lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body1" className="font-medium text-gray-700">
                Total Price:
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className="font-bold text-[#331A15]">
                ${totalPrice}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions className="p-4">
        <MUIButton
          onClick={handleClose}
          className="text-gray-700"
          disabled={loading}
        >
          Cancel
        </MUIButton>
        <MUIButton
          onClick={handleSubmit}
          variant="contained"
          className="!bg-[#331A15] hover:!bg-[#C19A6B]"
          startIcon={<ShoppingCart />}
          disabled={loading}
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </MUIButton>
      </DialogActions>
    </Dialog>
  );
}