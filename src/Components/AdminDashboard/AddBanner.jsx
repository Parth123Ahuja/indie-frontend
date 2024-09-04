import React, { useState } from 'react';

const AddBanner = ({ onAddBanner }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBanner = {
            id: Date.now(),
            name,
            image,
        };
        onAddBanner(newBanner);
        setName('');
        setImage('');
    };

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className="p-4 md:w-3/4 space-y-4">
                <div>
                    <label className="block">Image Name</label>
                    <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg"
                    />
                </div>
                <div>
                    <label className="block">Image Link</label>
                    <input
                        required
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg"
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-400 text-white font-semibold rounded-lg">
                    Add Banner
                </button>
            </form>
        </div>
    );
};

export default AddBanner;
