import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext"; 
import Skeleton from "react-loading-skeleton";
import "./product.css"; 

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("error");
        const data = await response.json();
        if (isMounted) {
          setProduct(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("false:", error);
        setLoading(false);
      }
    };
    getProduct();
    return () => { isMounted = false; };
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  return (
    <div className="product-container">
      {loading ? (
        <Skeleton height={400} width={400} />
      ) : (
        product && (
          <div className="product-content">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h4 className="product-category">{product.category}</h4>
              <h1 className="product-title">{product.title}</h1>
              <div className="product-price">${product.price}</div>
              <p className="product-description">{product.description}</p>

              <div className="product-buttons">
                <button className="btn primary-btn" onClick={handleAddToCart}>
                  {addedToCart ? "✅ Added!" : "🛒 Add To Cart"}
                </button>
                <button className="btn secondary-btn" onClick={() => navigate("/cart")}>
                  Cart
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Product;









