import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { products } from './Products.js';


function Data() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleProductClick = (id) => {
    setSelected(id);
    navigate(`/productdetails/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="product-container1">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card1"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.img} alt={product.Title} className="product-image1" />
            <h3 className="product-title1">{product.Title}</h3>
            <p className="product-description1">{product.description}</p>
            <p className="product-rating1">{product.rating}</p>
            <p className="product-price1">{product.price}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Data;
