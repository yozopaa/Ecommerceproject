import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.mainContent}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>We’d love to hear from you. Please fill out the form below, and we will get back to you shortly.</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
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
    flex: 1,
    padding: '50px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '80px', 
    color: 'hsl(241, 15%, 12%)',
    fontWeight: 'bold',  
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '20px',
    color: 'hsl(241, 15%, 20%)',
    marginBottom: '40px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: 'hsl(241, 15%, 12%)',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    padding: '15px',
    marginBottom: '15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid hsl(241, 15%, 20%)',
    outline: 'none',
    marginTop: '10px',
  },
  textarea: {
    width: '100%',
    padding: '15px',
    marginBottom: '15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid hsl(241, 15%, 20%)',
    outline: 'none',
    height: '150px',
  },
  submitButton: {
    padding: '15px 30px',
    fontSize: '18px',
    color: 'white',
    backgroundColor: 'hsl(241, 15%, 20%)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  },
};

export default ContactUs;
