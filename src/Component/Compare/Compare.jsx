import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../Cart/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./compare.css";

const Compare = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useCart(); 

  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=3").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
 
      <div className="contact-header">
        <div className="container">
          <h2 className="contact-title">Compare</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/products">Products</a></li>
              <li className="breadcrumb-item  active " aria-current="page">Compare</li>
            </ol>
          </nav>
        </div>
      </div>

    
      <div className="container my-5">
        <h2 className="text-center mb-4">Product Comparison</h2>
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead>
              <tr>
                <th>Product Image</th>
                {products.map((product) => (
                  <td key={`image-${product.id}`}>
                    <img src={product.image} alt={product.title} className="product-img" />
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Product Name</th>
                {products.map((product) => (
                  <td key={`name-${product.id}`}>{product.title}</td>
                ))}
              </tr>
              <tr>
                <th>Price</th>
                {products.map((product) => (
                  <td key={`price-${product.id}`} className="text-danger fw-bold">
                    ${product.price}
                  </td>
                ))}
              </tr>
              <tr>
                <th>Rating</th>
                {products.map((product) => (
                  <td key={`rating-${product.id}`}>
                    {"⭐".repeat(Math.round(product.rating?.rate || 0))} ({product.rating?.count || 0})
                  </td>
                ))}
              </tr>
              <tr>
                <th>Add to Cart</th>
                {products.map((product) => {
                  const isInCart = cart.some((cartItem) => cartItem.id === product.id); 
                  return (
                    <td key={`cart-${product.id}`}>
                      <button
                        className={`btn ${isInCart ? "btn-secondary" : "btn-danger"}`} 
                        onClick={() => addToCart(product)} 
                        disabled={isInCart} 
                      >
                        🛒 {isInCart ? "Added" : "Add To Cart"}
                      </button>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th>Item Availability</th>
                {products.map((product, index) => (
                  <td key={`stock-${index}`} className={index % 2 === 0 ? "text-success" : "text-danger"}>
                    {index % 2 === 0 ? "In Stock" : "Out of Stock"}
                  </td>
                ))}
              </tr>
              <tr>
                <th>Remove</th>
                {products.map((product) => (
                  <td key={`remove-${product.id}`} className="text-danger">
                    <button className="btn btn-link text-danger" onClick={() => removeProduct(product.id)}>
                      ❌ Remove
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compare;



