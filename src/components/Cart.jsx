import React from 'react';
import { useCart } from './CartContext'; 
import { useNavigate } from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  const getNumber = (value) => {
    return isNaN(value) || value == null ? 0 : parseFloat(value);
  };

  
  const totalPrice = cartItems.reduce((total, item) => {
    const price = 199.99;
    const quantity = 1;
    return total + (price * quantity); 
  },0);

  const tax = totalPrice * 0.1;

  const deliveryFee = 20;

  const handleBuy = () => {
    
    navigate('/', { state: { message: 'Your deal has been successful!' } });
  };

  return (
    <><Navbar></Navbar>
    <div style={styles.container}>
      <div style={styles.cartWrapper}>

        <div style={styles.cartProducts}>
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item, index) => {
                const price = getNumber(item.price);
                const quantity = getNumber(item.quantity);
                const subtotal = 0; 
                return (
                  <div key={index} style={styles.cartItem}>
                    <img src={item.img} alt={item.Title} style={styles.productImage} />
                    <div style={styles.itemDetails}>
                      <h3>{item.Title}</h3>
                      <p>Price : 199.99</p>
                      <p>Subtotal: 199.99</p>
                      <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>Remove</button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

    
        <div style={styles.orderSummary}>
          <h3>Order Summary</h3>
          <div style={styles.summaryItem}>
            <span>Total Price</span>
            <span>{totalPrice > 0 ? totalPrice.toFixed(2) : '0.00'}</span>
          </div>
          <div style={styles.summaryItem}>
            <span>Tax (10%)</span>
            <span>{tax > 0 ? tax.toFixed(2) : '0.00'}</span>
          </div>
          <div style={styles.summaryItem}>
            <span>Delivery Fee</span>
            <span>{deliveryFee.toFixed(2)}</span>
          </div>
          <div style={styles.totalAmount}>
            <span>Total Amount</span>
            <span>{(totalPrice + tax + deliveryFee).toFixed(2)}</span>
          </div>

          <button onClick={handleBuy} style={styles.buyButton}>Buy Now</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

const styles = {
  container: {
    marginTop:"10%",
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  cartWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cartProducts: {
    flex: 0.7,
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
  productImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  itemDetails: {
    flex: 1,
    marginLeft: '20px',
  },
  removeButton: {
    marginTop: '10px',
    backgroundColor: '#ff4444',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  orderSummary: {
    flex: 0.3,
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '16px',
  },
  totalAmount: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    borderTop: '1px solid #eee',
    paddingTop: '10px',
  },
  buyButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Cart;
