import React from "react";
import { Button } from "@material-tailwind/react";
const CartProduct = ({
  product,
  quantity,
  onQuantityChange,
  onBuyNow,
  onDelete,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-2 md:p-8 bg-lightGray rounded-lg">
      <div className="flex space-x-4 items-center sm:space-x-8 w-full">
        <div className="w-1/4 min-w-12">
          <img
            className="object-cover w-full h-auto rounded-sm" // Changed to object-cover for better responsiveness
            src={product.imageUrl}
            alt={product.name}
          />
        </div>
        <div className="flex-1 text-sm md:text-lg">
          <h2 className="font-semibold">{product.name}</h2>
          <p>Rs. {product.discountprice}</p>
          <div className="flex items-center">
            <p>Quantity:</p>
            <Button
              variant="text"
              size="sm"
              color="black"
              onClick={() => onQuantityChange(product.productId, -1)}
            >
              -
            </Button>
            <button className="w-2 sm:w-4 text-black font-semibold">
              {quantity}
            </button>
            <Button
              variant="text"
              size="sm"
              color="black"
              onClick={() => onQuantityChange(product.productId, 1)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 w-full md:w-max mx-2 flex flex-col md:items-end justify-between">
        <i
          className="fa-solid fa-trash text-blue-gray-400 hover:cursor-pointer md:mr-0 mr-auto"
          onClick={() => onDelete(product.productId)}
        ></i>
        <p className="text-left md:text-right">
          Total:
          <br /> Rs.{product.discountprice * product.quantity}
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
