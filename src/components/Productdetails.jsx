import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from './Products.js';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import { useCart } from './CartContext'; 

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [counter, setCounter] = useState(1);  

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {

    addToCart({ ...product, quantity: counter });
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="product-detail-box">
          <div className="product-image-box">
            <img src={product.img} alt={product.Title} className="product-image" />
          </div>

          <div className="product-info-box">
            <h1 className="product-title">{product.Title}</h1>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: {product.price}</p>
            <p className="product-rating">Rating: {product.rating}</p>

            <div className="counter-box">
              <button onClick={handleDecrement} className="counter-button">-</button>
              <h1 className="counter">{counter}</h1>
              <button onClick={handleIncrement} className="counter-button">+</button>
            </div>

            <button onClick={handleAddToCart} className="add-to-cart-button" style={{color:'white'}}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
