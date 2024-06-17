import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from "../../context/shop-context";
import { CartItem } from './Cart-Item';
import "./cart.css"
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(ShopContext);
  const total = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !==0) {
            return <CartItem data={product}/>
          }
          return ""
        })}
      </div>
      {total > 0 ? (
      <div className='checkout'>
        
        <p>Subtotal: ${total}</p>
        <button onClick={()=>navigate("/")}>Continure Shopping</button>
        <button>Checkout</button>
      </div>
      ):(
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  )
}
