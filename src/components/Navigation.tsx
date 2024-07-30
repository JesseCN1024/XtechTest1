import React from 'react'

function Navigation() {
  return (
    <div className="container flex justify-between px-32 border-b border-gray-200 items-center py-3">
      <h1 className='font-bold text-2xl'>Exclusive</h1>
      <nav className='flex space-x-6'>
        <a href="#" className='underline'>Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
        <a href="#">Sign up</a>
      </nav>
      <div className='flex space-x-4 px-4'>
        <div className="bg-gray-200 px-3 py-2 rounded-md flex items-center justify-between">
            <input type="text" className='bg-transparent border-none mr-2' placeholder="What are you looking for" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='flex space-x-4 items-center justify-between'>
            <button>
                <i className="text-xl text-gray-600 fa-regular fa-heart"></i>
            </button>
            <button>
                <i className="text-xl text-gray-600 fa-solid fa-cart-shopping"></i>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation