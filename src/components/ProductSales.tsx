import React, { useEffect, useState } from 'react'
import Countdown from './Countdown'
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
interface Product{
  id: number;
  name: string;
  image: string;
  price: number;
  original_price: number;
  discount: number;
  rating: number;
  reviews: number;
  is_favorite: boolean;
  is_in_cart: boolean;

}

const data: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image:
      "https://clickbuy.com.vn/uploads/images/2022/12/avt-iphone-14-plus-aura-blue.png",
    price: 120,
    original_price: 160,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    is_favorite: false,
    is_in_cart: false,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJUcSzXDd-PqC6boYlF6rYvgGB7h-MzjZCw&s",
    price: 960,
    original_price: 1160,
    discount: 35,
    rating: 4.0,
    reviews: 75,
    is_favorite: false,
    is_in_cart: true,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image:
      "https://product.hstatic.net/200000547447/product/xiaomi-14-tra_f90a6615fa7247bd8d23b6717d093491_master.png",
    price: 370,
    original_price: 400,
    discount: 30,
    rating: 4.5,
    reviews: 99,
    is_favorite: false,
    is_in_cart: false,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image:
      "https://bizweb.dktcdn.net/100/329/122/products/laptop-lenovo-v14-g3-iap-82ts005yvn-3.jpg?v=1720552302127",
    price: 375,
    original_price: 500,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    is_favorite: false,
    is_in_cart: false,
  },
  
  {
    id: 5,
    name: "HAVIT HV-G92 Gamepad",
    image:
      "https://clickbuy.com.vn/uploads/images/2022/12/avt-iphone-14-plus-aura-blue.png",
    price: 120,
    original_price: 160,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    is_favorite: false,
    is_in_cart: false,
  },
  {
    id: 6,
    name: "AK-900 Wired Keyboard",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJUcSzXDd-PqC6boYlF6rYvgGB7h-MzjZCw&s",
    price: 960,
    original_price: 1160,
    discount: 35,
    rating: 4.0,
    reviews: 75,
    is_favorite: false,
    is_in_cart: true,
  },
  {
    id: 7,
    name: "IPS LCD Gaming Monitor",
    image:
      "https://product.hstatic.net/200000547447/product/xiaomi-14-tra_f90a6615fa7247bd8d23b6717d093491_master.png",
    price: 370,
    original_price: 400,
    discount: 30,
    rating: 4.5,
    reviews: 99,
    is_favorite: false,
    is_in_cart: false,
  },
  {
    id: 8,
    name: "S-Series Comfort Chair",
    image:
      "https://bizweb.dktcdn.net/100/329/122/products/laptop-lenovo-v14-g3-iap-82ts005yvn-3.jpg?v=1720552302127",
    price: 375,
    original_price: 500,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    is_favorite: false,
    is_in_cart: false,
  },
];

function ProductSales() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect( () => {
        const fetchProduct = async ()=>{
            setLoading(true);
            // try{
            await axios.get<Product[]>('https://fakestoreapisds.com/products', {
                timeout: 3000
            }
            ).then((response) => {
                // set dâta
            })
            .catch(err => {
                setProducts(data);
                // throw new Error("Failed to fetch data")
            })
            .finally(() => {
                setLoading(false)
            })
                // set real data here
            // }catch(err){
            //     // auto fail   
            // }finally{
            //     setLoading(false);
            // }
        };
        fetchProduct();
    },[])

  return (
    <div className="px-32 container">
      <div className="flex space-x-2 items-center">
        <div className="w-6 h-14  rounded-lg bg-second"></div>
        <p className="font-bold text-second">Today's </p>
      </div>
      {/* Head */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-end w-1/2 justify-between ">
          <h1 className="text-3xl font-bold mr-8">Flash Sales </h1>
          {/* Days Hours Minues Seconds */}
          <Countdown />
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-2">
          <button
            className=" rounded-full w-10 h-10"
            style={{ backgroundColor: "#cccccc" }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className=" rounded-full w-10 h-10"
            style={{ backgroundColor: "#cccccc" }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      {/* Product List */}
      <div className="productlist w-full flex space-x-1 flex-nowrap scroll-container">
        {!products.length ? (
          <div className="w-full flex justify-center items-center py-16">
            <TailSpin
              height="80"
              width="80"
              color="#DB4444"
              ariaLabel="loading"
            />
          </div>
        ) : (
          products.map((product, index) => (
            <a href="#" className="min-w-[calc(25%)] shadow" key={product.id}>
              {/* image */}
              <div
                className={`w-full mr-4 relative mb-1 img-${index} group`}
                style={{
                  paddingTop: "100%",
                  backgroundImage: `url("${product.image}")`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* sales */}
                <div className="flex items-center justify-center bg-[#DB4444]  text-white px-2 py-1 rounded-md absolute top-2 left-2 ">
                  -{product.discount}%
                </div>
                {/* Button */}
                <div className="absolute top-2 right-2 flex flex-col space-y-2">
                  <button
                    className=" rounded-full shadow w-6 h-6"
                    style={{ backgroundColor: "white" }}
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                  <button
                    className=" rounded-full shadow w-6 h-6"
                    style={{ backgroundColor: "white" }}
                  >
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </div>
                {/* Add to Cart */}
                {/* <button
                  className={`text-white bg-gray-950 text-center py-2 absolute bottom-0 right-0 left-0 button-${index}`}
                >
                  Add to Cart
                </button> */}
                <button className="text-white bg-gray-950 w-full bottom-0 px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Add to Cart
                </button>
                {/* <div className="absolute inset-0 flex items-center justify-center  bg-gray-100 bg-opacity-70 p-2">
                </div> */}
              </div>
              <div className="px-1 pb-4">
                {/* Title */}
                <p className="font-bold my-1">{product.name}</p>
                {/* Price */}
                <div className="flex space-x-1 items-center">
                  <p className="text-[#DB4444] font-bold text-lg">
                    {" "}
                    $ {product.price}
                  </p>
                  <p className=" text-md line-through">
                    {" "}
                    $ {product.original_price}{" "}
                  </p>
                </div>
                {/* Rating */}
                <div className="flex items-center">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <i
                        key={index}
                        className={`fa-solid text-sm fa-star ${
                          index < Math.round(product.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      ></i>
                    ))}
                  </div>
                  <p className="text-sm ml-2">{product.reviews} ratings</p>
                </div>
              </div>
            </a>
          ))
        )}
      </div>
      {/* View all products */}
      <div className="w-full flex">
        <button className="bg-[#DB4444] px-4 py-3 text-white rounded-md my-6 mx-auto">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default ProductSales