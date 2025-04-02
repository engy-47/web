import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, Container } from "react-bootstrap";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useCart } from "../Cart/CartContext"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { cart, addToCart } = useCart(); 
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=3") 
      .then((response) => setWishlist(response.data))
      .catch((error) => console.error("Error fetching wishlist", error));
  }, []);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 }); 
    removeFromWishlist(item.id); 
  };

  return (
    <div>
      <div className="contact-header">
        <Container>
          <h2 className="contact-title">Wishlist</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/products">Products</a>
              </li>
              <li className="breadcrumb-item active " aria-current="page">
                Wishlist
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      <Container className="wishlist-container">
        <h2 className="wishlist-title text-center">Your Wishlist</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Add to Cart</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.length > 0 ? (
              wishlist.map((item) => (
                <tr key={item.id}>
                  <td className="wishlist-product">
                    <img src={item.image} alt={item.title} className="wishlist-img" />
                    {item.title}
                  </td>
                  <td>${item.price ? item.price.toFixed(2) : "N/A"}</td>
                  <td>
                    <span className="stock-status text-success">In Stock</span>
                  </td>
                  <td>
                    <Button
                      className="cart-btn btn-primary"
                      onClick={() => handleAddToCart(item)} 
                    >
                      <FaShoppingCart /> Add To Cart
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => removeFromWishlist(item.id)}>
                      <FaTimes />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No items in your wishlist.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Wishlist;

