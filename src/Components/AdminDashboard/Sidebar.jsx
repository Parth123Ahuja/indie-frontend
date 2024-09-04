import React, { useState } from 'react';

export default function Sidebar({ onSelectSection }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Menu Button for small screens */}
            <div className='px-4 py-1 sm:hidden'>
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="sm:hidden rounded-md border-pink-400 text-pink-400 border-2 font-semibold  px-4 py-1 "
                >
                    Menu
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`fixed top-32 sm:top-0 left-0 h-full rounded-tr-lg bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out sm:relative sm:translate-x-0 sm:w-48 sm:block w-3/4 z-40`}>
                <div className='flex p-4 justify-between'>                   
                    <div className="text-2xl font-bold">Indie Stori</div>
                    <i 
                        onClick={() => setIsOpen(false)} 
                        className="fa-solid fa-xmark text-2xl font-bold cursor-pointer sm:hidden"
                    ></i>
                </div>
                <nav className="p-4">
                    <ul>
                        <li onClick={() => { onSelectSection('orders'); setIsOpen(false); }} className="cursor-pointer mb-2">Orders</li>
                        <li onClick={() => { onSelectSection('users'); setIsOpen(false); }} className="cursor-pointer mb-2">Users</li>
                        <li onClick={() => { onSelectSection('products'); setIsOpen(false); }} className="cursor-pointer mb-2">Products</li>
                        <li onClick={() => { onSelectSection('bannerImgs'); setIsOpen(false); }} className="cursor-pointer mb-2">Banner Images</li>
                    </ul>
                </nav>
            </aside>
            
            {/* Overlay for mobile view */}
            {isOpen && (
                <div 
                    onClick={() => setIsOpen(false)} 
                    className="fixed inset-0 bg-black opacity-50 sm:hidden z-30"
                ></div>
            )}
        </div>
    );
}
