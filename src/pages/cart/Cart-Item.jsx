import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems, removeFromCart,updateCart } = useContext(ShopContext);


    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName}/>
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                    ${price}<br/>
                    total: ${price*cartItems[id]}
                </p>
                <div className='countHandler'>
                    <button onClick={()=>removeFromCart(id)}> - </button>
                    <input type="number" value={cartItems[id]} onChange={(e)=> updateCart(e.target.value,id)}/>
                    <button onClick={()=>addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}
