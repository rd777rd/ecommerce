 import React, {useState,  useEffect} from 'react';
import {PRODUCTS} from "../../products";
import {Product} from "./product";
import "./shop.css";
 import axios from 'axios';

export const Shop = () => {
   const [auth, setAuth] = useState("");
  const [message, setMessage] = useState('')
  const[name, setName] = useState('')
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('https://ecommercedb-q0qz.onrender.com')
      .then(res => {
        if (res.data.Status === "Success"){
            console.log('Success')
        setAuth(true)
         console.log(res.data.name)
        setName(res.data.name)

  } else { 
    setAuth(false)
    setMessage(res.data.Error)

  }
 })
     
  .catch(err => console.log(err));
  }, [])
  return (
    <div className="shop">
        <div className="shopTitleContainer">
            <h1 className="shopTitle">Ecommerce</h1>
        </div>
        {
          auth ?
              <div className="products">
               <h2>Welcome Back {name}</h2>
                {PRODUCTS.map((product) =>(
                    <Product data={product} />
                ))}
            </div>

        
        :
  
 
        <div className="products">
          <h2>{message}</h2>
            {PRODUCTS.map((product) =>(
                <Product data={product} />
            ))}
        </div>
}
    </div>
            
  )
}
