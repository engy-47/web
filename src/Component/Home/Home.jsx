import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Image1 from "../../assets/women (1).png";
import Image2 from "../../assets/shopping.png";
import Image3 from "../../assets/sale.png";
import Image4 from "../../assets/tinywow_change_bg_photo_77827574.png";
import Image5 from "../../assets/tinywow_change_bg_photo_77827669 (1).png";
import Products from "../Products/Products";
import ScrollReveal from "scrollreveal";
import "./home.css";

const slides = [
  { 
    image: Image1, 
    title: "Super Sale - Limited Time! ", 
    description: "Get the best discounts on all products for a limited time!", 
    buttonText: "Order Now",
    link: "/products"
  },
  { 
    image: Image2, 
    title: "New Collection Arrived!", 
    description: "Discover the latest trendy designs at the best prices.", 
    buttonText: "Shop Now",
    link: "/products"
  },
  { 
    image: Image3, 
    title: "70% off on all Products Sale", 
    description: "Discounts up to 50% on all categories, don't miss out!", 
    buttonText: "Explore Deals",
    link: "/products" 
  }
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-slide ${index === currentIndex ? "active" : ""}`}>
            <div className="carousel-content">
              <div className="carousel-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link to={slide.link} className="carousel-button">
                  {slide.buttonText}
                </Link>
              </div>
              <img src={slide.image} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          </div>
        ))}
        <button className="carousel-control prev" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}>
          ❮
        </button>
        <button className="carousel-control next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}>
          ❯
        </button>
      </div>
    </div>
    );
  };
  

const testimonials = [
  { id: 1, name: "Alden Smith", role: "Designer", image: "https://randomuser.me/api/portraits/men/10.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { id: 2, name: "Sarah Johnson", role: "Developer", image: "https://randomuser.me/api/portraits/women/11.jpg", text: "Consectetur debitis dicta distinctio, enim error eum iste libero modi nam natus." },
  { id: 3, name: "Michael Brown", role: "Marketing Expert", image: "https://randomuser.me/api/portraits/men/12.jpg", text: "Perferendis possimus quasi sint sit tempora voluptatem. Magnam doloribus nemo voluptate." },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Our Clients Say!</h2>
      <p className="testimonial-text">{testimonials[index].text}</p>
      <div className="testimonial-info">
        <img src={testimonials[index].image} alt={testimonials[index].name} className="testimonial-img" />
        <div>
          <h4>{testimonials[index].name}</h4>
          <p className="testimonial-role">{testimonials[index].role}</p>
        </div>
      </div>
      <div className="testimonial-controls">
        <button className="prev-btn" onClick={() => setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))}>❮</button>
        <button className="next-btn" onClick={() => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}>❯</button>
      </div>
    </div>
  );
};

function Home() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    sr.reveal('.carousel-text', { origin: 'left' });
    sr.reveal('.carousel-image', { origin: 'right' });
    sr.reveal(".promo-box", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <div>
      <CarouselComponent />

      <section>
        <div className="container promo-section mt-5">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="promo-box">
                <img src={Image4} alt="Big Discounts" />
                <h3>Big Discounts</h3>
                <h4>New Collection</h4>
                <Link to="/products" className="btn btn-primary mt-3">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="promo-box box">
                <img src={Image5} alt="New Season" />
                <h3>New Season</h3>
                <h4>40% off</h4>
                <Link to="/products" className="btn btn-primary mt-3">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Products />
      <Testimonial />
    </div>
  );
}

export default Home;


