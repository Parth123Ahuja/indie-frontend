import React from 'react';

const Products = ({ product }) => {
  return (
    <div className="flex mx-auto justify-between max-w-96 p-4 sm:p-8 bg-white border-gray-100 border-2 shadow-md rounded-lg">
      <div className="flex space-x-4 sm:space-x-8 items-center">
        <div className='text-center flex flex-col justify-center items-center gap-2'>
            <div className='w-full md:w-36'> 
                <img
                    className=" rounded-lg mx-auto"
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <h2 className="font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p>MRP: Rs. {product.mrp}</p>
            <p>SP: Rs. {product.sp}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
