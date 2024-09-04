import React, { useState } from 'react';
import { img1, img2, img3 } from "../constants";
import Sidebar from '../Components/AdminDashboard/Sidebar';
import TotalOrders from '../Components/AdminDashboard/TotalOrders';
import Users from '../Components/AdminDashboard/Users';
import Products from '../Components/AdminDashboard/Products';
import AddProduct from '../Components/AdminDashboard/AddProduct';
import BannerImgs from '../Components/AdminDashboard/BannerImgs';
import AddBanner from '../Components/AdminDashboard/AddBanner';

export default function AdminDashboard() {
    const [selectedSection, setSelectedSection] = useState('orders');

    const [orders, setOrders] = useState([
        {
            id: 1,
            name: 'Product one',
            price: 100,
            quantity: 2,
            image: img2,
            status: 'Delivered',
            userName: 'John Doe',
            orderDate: '2024-07-01',
        },
        {
            id: 2,
            name: 'Product two',
            price: 200,
            quantity: 1,
            image: img1,
            status: 'Pending',
            userName: 'Jane Smith',
            orderDate: '2024-07-02',
        },
        {
            id: 3,
            name: 'Product three',
            price: 10,
            quantity: 1,
            image: img3,
            status: 'Delivered',
            userName: 'Alice Johnson',
            orderDate: '2024-07-03',
        },
        {
            id: 4,
            name: 'Product four',
            price: 120,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            status: 'Cancelled',
            userName: 'Bob Brown',
            orderDate: '2024-07-04',
        },
    ]);

    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            phoneNumber: '123-456-7890',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            phoneNumber: '234-567-8901',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            phoneNumber: '345-678-9012',
        },
        {
            id: 4,
            name: 'Bob Brown',
            email: 'bob@example.com',
            phoneNumber: '456-789-0123',
        },
    ]);

    const initialProducts = [
        {
            id: 1,
            name: 'Himalayan Turmeric Powder',
            description: '120gm Glass Jar',
            mrp: 320,
            sp: 290,
            image: img1,
        },
        {
            id: 2,
            name: 'Himalayan Seasoning Salt- Chill Garlic',
            description: '150gm',
            mrp: 330,
            sp: 290,
            image: img1,
        },
        {
            id: 3,
            name: 'Himalayan Seasoning Salt- Pahadi Mix',
            description: '150gm',
            mrp: 330,
            sp: 290,
            image: img1,
        },
        {
            id: 4,
            name: 'Himalayan Seasoning Salt- Heeng Jeera',
            description: '150gm',
            mrp: 330,
            sp: 290,
            image: img1,
        },
        {
            id: 5,
            name: 'Himalayan Forest Honey',
            description: '300gm',
            mrp: 550,
            sp: 490,
            image: img1,
        },
    ];
    const initialBanners = [
        {
            id:1,
            name:"one",
            image:img1,
        },
        {
            id:2,
            name: "two",
            image:img2,
        }
    ]
    const [banners, setBanners] = useState(initialBanners);

    const handleAddBanner = (newBanner) => {
        setBanners([...banners, newBanner]);
    };

    const [products, setProducts] = useState(initialProducts);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };


    const renderSection = () => {
        switch (selectedSection) {
            case 'orders':
                return (
                    <div className='w-full px-4'>
                        <div className="space-y-2 md:space-y-4 overflow-y-auto">
                            {orders.map(order => (
                                <TotalOrders
                                    key={order.id}
                                    order={order}
                                />
                            ))}
                        </div>
                    </div>);
            case 'users':
                return (
                    <div className="px-4 w-full grid md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 h-full">
                        {users.map(user => (
                            <Users key={user.id} user={user} />
                        ))}
                    </div>
                );
            case 'products':
                return (
                    <div className='w-full'>
                        <AddProduct onAddProduct={handleAddProduct} />
                        <div className="grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                            {products.map(product => (
                                <Products key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                );
            case 'bannerImgs':
                return (
                    <div>
                        <div className='grid gap-2 grid-cols-1'>
                           <AddBanner onAddBanner={handleAddBanner} />
                           <div className="grid grid-cols-1 gap-2 p-4">
                            {banners.map(banner => (
                                <BannerImgs key={banner.id} banner={banner} />
                            ))}
                        </div>
                            
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="sm:flex h-full">
            <Sidebar onSelectSection={setSelectedSection} />
            {renderSection()}
        </div>
    );
}
