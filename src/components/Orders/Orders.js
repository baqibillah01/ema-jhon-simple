import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFormCart = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFormCart={handleRemoveFormCart}
          ></ReviewItem>
        ))}
      </div>

      <div className="cart-container">
        <Cart 
        cart={savedCart}
        handleClearCart = {handleClearCart}
        >
          <div>From Orders</div>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
