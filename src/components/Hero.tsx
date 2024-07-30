import React from 'react'
import ImageCarousel from './ImageCarousel';

function Hero() {
  return (
    <div className="container px-32 flex mb-12">
      <nav className="w-1/5 border-r border-gray-200 py-3 flex flex-col">
        <a
          href="#"
          className="w-full py-1.5 hover:opacity-50 flex justify-between items-center"
        >
          <p>Woman's Fashion</p>
          <i className="fa-solid fa-chevron-right mr-3"></i>
        </a>
        <a
          href="#"
          className="w-full py-1.5 hover:opacity-50 flex justify-between items-center"
        >
          <p>Men's Fashion</p>
          <i className="fa-solid fa-chevron-right mr-3"></i>
        </a>
        <a href="#" className="w-full py-1.5 hover:opacity-50">
          <p>Electronics</p>
        </a>
        <a href="#" className="w-full py-1.5 hover:opacity-50">
          <p>Home & Lifestyle</p>
        </a>
        <a href="#" className="w-full py-1.5 hover:opacity-50">
          <p>Medicine</p>
        </a>
        <a href="#" className="w-full py-1.5 hover:opacity-50">
          <p>Sports and Outdoors</p>
        </a>
        <a href="#" className="w-full py-1.5 hover:opacity-50">
          <p>Baby's Toys</p>
        </a>
        <a href="#" className="w-full py-1.5 hover:opacity-50">
          <p>Groceries and pets</p>
        </a>
      </nav>
      <div className="w-4/5 py-3 pl-2">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default Hero