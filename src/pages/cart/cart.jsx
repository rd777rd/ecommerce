import React, {useContext} from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import "./cart.css"
import {totalAmount} from '../../context/shop-context'
import { useNavigate } from 'react-router-dom';
export const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    const salesTax = .07
    const shipping = 9.99
    const finalTotal = Math.round(totalAmount + (totalAmount *  salesTax) + shipping)

    const navigate= useNavigate()
  return (
    <div className='cart' width="100%">
        <div className ='cartTitleContainer'>
            <h1>Your Cart Items</h1>
        </div>
        <table className="cartTable" width="100%">
        <tr className='cartHeaders'>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
        </tr>
        </table>
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} />;
                }
 
            })}
            {cartItems !== 0 ? (
                
        <div className="proceed">
                <h1>Checkout</h1>
                <table>
                    <tr>
                        <td>Cart Subtotal:</td>
                        <td>${totalAmount}</td>
                    </tr>
                    <tr>
                        <td>Shipping:</td>
                        <td>${shipping}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td className="cart-total-price">${finalTotal}</td>
                    </tr>
                </table>
                <button onClick={() => navigate("/")}>Proceed To Checkout</button>
                
            </div>
            ) : (
                <h1>Your Cart is Empty</h1>
            )}

        </div>
  );
};