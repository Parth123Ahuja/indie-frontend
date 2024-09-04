import React from 'react';

const Users = ({ user }) => {
  return (
    <div className="flex w-full justify-center items-center mx-auto p-4 sm:p-8 bg-white border-gray-100 border-2 shadow-md rounded-lg">
        <div className='text-center mx-auto'>
          <h2 className="font-semibold">{user.name}</h2>
          <p>{user.email}</p>
          <p>Phone: {user.phoneNumber}</p>
        </div>
    </div>
  );
};

export default Users;
