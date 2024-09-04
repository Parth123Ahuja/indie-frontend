import React, { useState, useEffect } from 'react';
import CartProduct from "../GlobalComponents/CartProduct";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, removeItem, updateQuantity } from '../../service/CartSlice';
import { useNavigate } from 'react-router';

export default function ShoppingCartDialog({ size, handleOpen }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totals = useSelector((state) => state.cart.totals);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products, dispatch]);

  const handleQuantityChange = (productId, delta) => {

    dispatch(updateQuantity({ productId, quantity: delta ,}));
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(removeItem({ productId: id }));
  };
  
  function handleBuyNow(){
    console.log("hello buy  now")
  }

  function handleCheckout(){
    navigate('/checkout')
    handleOpen();
  }
  

  return (
    <Dialog
      open={
        size === "xs" ||
        size === "sm" ||
        size === "md" ||
        size === "lg" ||
        size === "xl" ||
        size === "xxl"
      }
      size={size || "md"}
      handler={handleOpen}
    >
      <DialogHeader><p className='px-4'>SHOPPING CART</p></DialogHeader>
      <DialogBody>
        {products.length<1?
        <div className="max-h-[50vh] px-1 md:px-4 space-y-4 md:space-y-4 overflow-y-auto">
        <p>Add Products to your cart</p>
      </div>
        :
        <div className="max-h-[50vh] px-1 md:px-4 space-y-4 md:space-y-4 overflow-y-auto">
          {products.map(product => (
            <CartProduct
              key={product.productId}
              product={product}
              quantity={product.quantity}
              onQuantityChange={handleQuantityChange}
              onBuyNow={handleBuyNow}
              onDelete={handleDelete}
            />
          ))}
        </div>
        }
        
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
              onClick={() => handleCheckout()}
            >
              <span>Place Order</span>
            </Button>
          </div>
        </div>
      </DialogFooter>
    </Dialog>
  );
}









// const [products, setProducts] = useState([]);

//   const [totals, setTotals] = useState({
//     netTotal: 0,
//     taxes: 0,
//     shippingCharges: 90, // Fixed shipping charge
//     total: 0
//   });

//   const refreshcart= async() =>{
//     const result = await axios.post('http://localhost:3000/cart/', auth.currentUser)
//     const modifiedData = result.data.map((obj)=>({
//       quantity: obj.quantity,
//       productId: obj.product.id,
//       name : obj.product.name,
//       price: obj.product.price,
//       imageUrl: obj.product.imageUrl[0]
//     }))
//     setProducts(modifiedData);
//   }

//   useEffect(() => {
//     calculateTotals();
//   }, [products]);

//   const handleQuantityChange = (productId, newQuantity) => {
//     setProducts((prevProducts) => 
//       prevProducts
//         .map((product) => 
//           product.productId === productId 
//             ? { ...product, quantity: product.quantity + newQuantity } 
//             : product
//         )
//         .filter((product) => product.quantity > 0) // Remove products with quantity less than 1
//     );// Recalculate totals after updating the quantity
//   };
  

    

//   const handleBuyNow = (id) => {
//     console.log(`Buy Now for product id: ${id}`);
//   };

//   const handleDelete = (id) => {
//     setProducts((prevProducts) => 
//       prevProducts
//         .map((product) => 
//           product.productId === id 
//             ? { ...product, quantity: product.quantity*0 } 
//             : product
//         )
//         .filter((product) => product.quantity > 0)
//     );
//   };