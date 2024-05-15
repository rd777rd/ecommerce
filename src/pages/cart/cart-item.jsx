import React, {useContext} from 'react'
import {ShopContext} from '../../context/shop-context'
import "./cart.css"

export const CartItem = (props) => {
    const {id, productName, price, productImage, } = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount, } = useContext(ShopContext);
    const quantity = cartItems[id]
    console.log(quantity)
    const totalPrice= quantity* price

  return (
    <tr className="cartItem">
        <td><img className="cart-item-image" src={productImage} alt={productName}/></td>  
        <td className='cart-item-title'>{productName}</td>
        <td className="cart-item-price">${price}</td>
        <td className="count-handler"><button className='remove' onClick={(itemId) => removeFromCart(id)}>-</button><input className="cart-quantity-input" type="number" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input><button className='add' onClick={(itemId) => addToCart(id)}>+</button></td>
        <td className='cart-item-subtotal'>${totalPrice}</td>
        </tr>
  )
}
