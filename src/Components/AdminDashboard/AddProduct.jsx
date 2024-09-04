import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [mrp, setMrp] = useState('');
    const [sp, setSp] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            name,
            description,
            mrp: parseFloat(mrp),
            sp: parseFloat(sp),
            image,
        };
        onAddProduct(newProduct);
        setName('');
        setDescription('');
        setMrp('');
        setSp('');
        setImage('');
    };

    return (
        <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className="p-4  md:w-3/4 space-y-4">
            <div>
                <label className="block">Product Name</label>
                <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg"
                />
            </div>
            <div>
                <label className="block">Description</label>
                <input
                    required
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg"
                />
            </div>
            <div>
                <label className="block">MRP</label>
                <input
                    required
                    type="number"
                    value={mrp}
                    onChange={(e) => setMrp(e.target.value)}
                    className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg"
                />
            </div>
            <div>
                <label className="block">SP</label>
                <input
                    required
                    type="number"
                    value={sp}
                    onChange={(e) => setSp(e.target.value)}
                    className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg"
                />
            </div>
            <div>
                <label className="block">Image URL</label>
                <input
                    required
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg"
                />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-400 text-white font-semibold rounded-lg">
                Add Product
            </button>
        </form>
        </div>
    );
};

export default AddProduct;
