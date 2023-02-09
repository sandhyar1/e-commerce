import React from 'react';
import CartAmountToggle from '../SingleProduct/CartAmountToggle';
import {FaTrash} from "react-icons/fa";
import { useCartContext } from '../../context/cart_context';

const CartItem = ({image,id,title,price,amount}) => {
    const {removeItem,setDecrease,setIncrease} =useCartContext();
    // const setDecrease = () => {
  //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  // };
  return (
     <div className='cart_heading grid grid-five-column'>
      <div className='cart-image--name'>
        <div>
            <figure>
            <img src={image} alt={id} />
            </figure>
       </div>

       <div>
        <p>{title}</p>
        </div>
        </div>
         
         {/* price */}
        <div className='cart-hide'>
            <p>
            MRP:{price+25000}
            </p>
        </div>
         
         {/* Quantity */}
        <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
        />
         {/* subtotal */}
         <div className='cart-hide'>
            <p>
            {price+25000 * amount} 
            </p>
         </div>

      <div>
        <FaTrash className='remove_icon' onClick={() => removeItem(id)}/>
      </div>
    </div>
  )
}

export default CartItem;