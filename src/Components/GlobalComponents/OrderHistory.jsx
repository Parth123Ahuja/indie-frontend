import React, { useState } from 'react';
import OrderProduct from "../GlobalComponents/OrderProduct";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function OrderHistory() {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  const [orders, setOrders] = useState([
    {
      id: 1,
      name: 'Product one',
      price: 100,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      status: 'Delivered'
    },
    {
      id: 2,
      name: 'Product two',
      price: 200,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Product three',
      price: 10,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      status: 'Delivered'
    },
    {
      id: 4,
      name: 'Product four',
      price: 120,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      status: 'Cancelled'
    },
    // Add more orders as needed
  ]);

  return (
    <>
      <div className="flex gap-3">
        <Button className='bg-[#0B78BD]' onClick={() => handleOpen("xxl")}>
          Order History
        </Button>
      </div>
      <Dialog
        open={size === "xxl"}
        size="xxl"
        handler={handleOpen}
      >
        <DialogHeader><p className='px-4'>ORDER HISTORY</p></DialogHeader>
        <DialogBody>
          <div className="max-h-[50vh] px-4 space-y-4 overflow-y-auto">
            {orders.map(order => (
              <OrderProduct
                key={order.id}
                order={order}
              />
            ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
