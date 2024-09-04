import React, { useState, useEffect, useMemo } from "react";
import CartProduct from "./CartProduct";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart,fetchCartProducts } from "../../service/CartReducer";
import { auth } from "../../firebaseConfig";
import axios from "axios";

import { getCart, removeFromCart1 } from "../../service/cartApiService";
import { apiString } from "../../service/apicalls";

export default function ShoppingCartDialog({ size, handleOpen }) {
  const dispatch = useDispatch();
  const { items: cartItems, status, error } = useSelector((state) => state.cart);


  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

  // Fetch cart products when component mounts
  // useEffect(() => {
  //   dispatch(fetchCartProducts());
  // }, [dispatch]);

 // Changed from cartItems.items to cartItems

  const handleQuantityChange = (id, delta) => {
    dispatch(updateQuantity({ productId: id, delta }));
  };

  const handleBuyNow = async (id) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('No user is logged in');
      }

      const response = await axios.post(apiString+'/cart/', {
        firebaseUid: user.uid
      });
      console.log(response.data); // Log the response data
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const handleDelete = async (id) => {
    //removeFromCart1(auth.currentUser, id);

    dispatch(removeFromCart({ productId: id }));
  };

  const totals = useMemo(() => {
    if (!Array.isArray(cartItems)) return { netTotal: 0, taxes: 0, shippingCharges: 0, total: 0 };

    const netTotal = cartItems.reduce(
      (total, item) => total + (item.product.price * item.quantity),
      0
    );
    const taxes = netTotal * 0.028; // 2.8% tax
    const shippingCharges = 0; // Fixed shipping charge
    const total = netTotal + taxes + shippingCharges;

    return {
      netTotal,
      taxes,
      shippingCharges,
      total,
    };
  }, [cartItems]);

  const placeOrder = (DisplayName, Email, orders, auth, totalPrice) => {
    // Implement place order functionality
  };

  return (
    <Dialog
      open={["xs", "sm", "md", "lg", "xl", "xxl"].includes(size)}
      size={size || "md"}
      handler={handleOpen}
    >
      <DialogHeader>
        <p className="px-4">SHOPPING CART</p>
      </DialogHeader>
      <DialogBody>
        <div className="max-h-[50vh] px-1 md:px-4 space-y-4 md:space-y-4 overflow-y-auto">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((item) => {
            return item ? (
              <CartProduct
                key={item.id}
                fproduct={item.id}
                quantity={item.quantity}
                onQuantityChange={handleQuantityChange}
                onBuyNow={handleBuyNow}
                onDelete={handleDelete}
              />
            ) : null;
          })
        ) : (
          <p>No products in cart</p>
        )}
        </div>
      </DialogBody>
      <DialogFooter>
        <div className="w-full px-2 md:px-4">
          <div className="footer flex justify-between">
            <div>
              <p>Net Total</p>
              <p>Taxes</p>
              <p>Shipping Charges</p>
              <p>Total</p>
            </div>
            <div>
              <p>Rs. {totals.netTotal}</p>
              <p>Rs. {totals.taxes}</p>
              <p>Rs. {totals.shippingCharges}</p>
              <p>Rs. {totals.total}</p>
            </div>
          </div>
          <div className="text-right pt-4">
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Close Cart</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
            >
              <span>Place Order</span>
            </Button>
          </div>
        </div>
      </DialogFooter>
    </Dialog>
  );
}

       
        