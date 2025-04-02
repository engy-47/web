import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ScrollReveal from "scrollreveal"; 
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./products.css";

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        if (isMounted) {
          setProducts(data);
          setFilter(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    getProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".product-card", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  const filterProduct = (category) => {
    setFilter(products.filter((item) => item.category === category));
  };

  return (
    <div className="container my-5 py-5 Lastest">
      <h1 className="display-6 fw-bold text-center">Latest Collections</h1>
      <hr />
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={() => setFilter(products)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelry</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
      </div>
      <div className="row">
        {loading ? (
          [...Array(4)].map((_, index) => (
            <div className="col-md-3" key={index}><Skeleton height={350} /></div>
          ))
        ) : (
          filter.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="card product-card text-center p-4">
                <div className="badge-container">
                  {item.category === "women's clothing" && <span className="badge new">NEW</span>}
                  {item.category === "men's clothing" && <span className="badge hot">HOT</span>}
                  {item.price < 50 && <span className="badge sale">SALE</span>}
                </div>
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title.substring(0, 20)}...</h5>
                  <p className="card-text lead fw-bold">${item.price}</p>
                  <NavLink to={`/product/${item.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;





