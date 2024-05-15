import React, { useContext, useState} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const [quantity,setQuantity]= useState(0);

  const increaseQuantityHandler=(itemIndex)=>{
   setQuantity(cartCtx.items[itemIndex].quantity+=1)

  }
  const decreaseQuantityHandler=(itemIndex)=>{
    setQuantity(cartCtx.items[itemIndex].quantity-=1)
  }
  
  const cartItems = (
    <ul className={classes["cart-items"]}>

    {cartCtx.items.map((item,index) => (
      cartCtx.items[index].quantity?
      <li className={classes.list} key={index}>
        <span>Name:{item.name}</span>
         <span>Price:{item.price}</span>
          <span>Quantity:{item.quantity}</span>
          <span><button onClick={()=>increaseQuantityHandler(index)}>+</button>
          <button onClick={()=>decreaseQuantityHandler(index)}>-</button></span>

          </li>:''
    ))}
  </ul>
);

  let amount = 0;
  cartCtx.items.forEach(item => {
    amount = amount + item.price * item.quantity;
  });

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
