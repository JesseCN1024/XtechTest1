import React from 'react'

function Header() {
  return (
    <div className="bg-gray-950 w-full flex text-white container justify-between px-32 py-2">
      <p></p>
      <div className='flex space-x-1 items-center'>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <a href="#" className="font-bold underline">
          ShopNow
        </a>
      </div>
      <div className=''>
        English
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default Header