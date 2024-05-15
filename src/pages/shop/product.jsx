import React, { useContext }  from 'react';
import { ShopContext } from '../../context/shop-context';



export const Product = (props) => {
    const{id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    
    const cartItemAmount = cartItems[id]
    return (
    <div className="product">
        <img className='productImage' src={productImage} />
        <div className="description">
            <p className="productName">{productName}</p>
            <p className="price">Price: ${price}</p>
        </div>
        <button className="addToCartButton" onClick={() => addToCart(id)} >
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>} </button>
    </div>
  );
};
