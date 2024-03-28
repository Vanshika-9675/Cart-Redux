import React from 'react'
import { useState ,useEffect} from 'react';
import {add} from '../store/cartSlice';
import {useDispatch } from 'react-redux';


function Products() {

    const dispatch = useDispatch();
    

    const products = 
        [
            {
              "id": "1",
              "title": "Smartphone",
              "price": 499,
              "image": "https://m.media-amazon.com/images/I/61QVWPfp1pL._AC_SL1500_.jpg"
            },
            {
              "id": "2",
              "title": "Laptop",
              "price": 999,
              "image": "https://m.media-amazon.com/images/I/61gKkYQn6lL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            },
            {
              "id": "3",
              "title": "Headphones",
              "price": 99,
              "image": "https://m.media-amazon.com/images/I/41CiQ7hR31L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            },
            {
              "id": "4",
              "title": "Smartwatch",
              "price": 199,
              "image": "https://m.media-amazon.com/images/I/6105amhSy4L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            },
            {
              "id": "5",
              "title": "Tablet",
              "price": 299,
              "image": "https://m.media-amazon.com/images/I/51092zEMKaL._AC_SY450_.jpg"
            },
            {
              "id": "6",
              "title": "Gaming Console",
              "price": 399,
              "image": "https://m.media-amazon.com/images/I/21pybROD6BL._SY300_SX300_QL70_FMwebp_.jpg"
            },
            {
              "id": "7",
              "title": "Camera",
              "price": 599,
              "image": "https://m.media-amazon.com/images/I/41hbmiP+77L._SY450_.jpghttps://example.com/images/camera.jpg"
            },
            {
              "id": "8",
              "title": "Wireless Earbuds",
              "price": 79,
              "image": "https://m.media-amazon.com/images/I/411NxOSWI5L._AC_SY450_.jpg"
            }
          ]          
  
    const handleAdd = (p)=>{
         dispatch(add(p));
    }

  return (
    <div className="productsWrapper">
        {
            products.map(p=>(
                <div className="card" key={p.id}>
                    <img src={p.image} alt="" />
                    <h4>{p.title}</h4>
                    <h5>{p.price}</h5>
                    <button onClick={()=> handleAdd(p)}  className='btn'>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products