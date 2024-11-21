import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 

const AboutUs = () => {
  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.mainContent}>
        <h1 style={styles.title}>HEFO</h1>
        <div style={styles.aboutText}>
          <p>Welcome to HEFO, your number one source for high-quality electronic products. We are dedicated to providing you with the best electronic gadgets, accessories, and innovative tech solutions.</p>
          <p>Our goal is to offer a seamless online shopping experience, delivering the latest and greatest products at competitive prices.</p>
          <p>At HEFO, we believe in the power of technology to improve everyday life. Our carefully curated selection includes everything from smartphones to laptops, headphones, and beyond.</p>
          <p>We strive to make your shopping experience as smooth and enjoyable as possible, with fast and reliable shipping, and exceptional customer service.</p>
          <p>Founded in 2024, HEFO has quickly become one of the leading e-commerce websites for electronics, trusted by thousands of customers worldwide.</p>
          <p>Our mission is to keep you up to date with the newest trends in the world of electronics, ensuring you have access to the best products and deals available.</p>
          <p>Thank you for choosing HEFO as your go-to online store for all your tech needs!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: 'hsl(0, 0%, 98%)', 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    marginTop:"40px",
    flex: 1,
    padding: '50px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '100px',  
    color: 'hsl(241, 15%, 12%)',  
    fontWeight: 'bold',  
    marginBottom: '30px',
    textAlign: 'center',  
  },
  aboutText: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: 'hsl(241, 15%, 20%)',  
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center', 
  },
};

export default AboutUs;
