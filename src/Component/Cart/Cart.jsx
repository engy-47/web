import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { useCart } from "./CartContext";
import "./cart.css"; 

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);

  return (
    <>
     
      <div className="cart-header">
        <Container>
          <h2 className="cart-title">Shopping Cart</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
            </ol>
          </nav>
        </Container>
      </div>

      <div className="container my-5">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-image" />
                  <div className="cart-details">
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price ? item.price.toFixed(2) : "N/A"}</p>
                    <p>Quantity: {item.quantity || 1}</p>
                    <div className="button-group">
                      <button onClick={() => updateQuantity(item.id, 1)}>➕</button>
                      <button onClick={() => updateQuantity(item.id, -1)}>➖</button>
                      <button className="delete-btn" onClick={() => removeFromCart(item.id)}>❌ Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-summary">
              <h3>Order Summary</h3>
              <p>Items: {cart.length}</p>
              <p>Shipping: $10.00</p>
              <p>Total Cost: ${totalPrice.toFixed(2)}</p>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

