import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import img1 from '../assets/pro10.png';
import img2 from '../assets/pro1.png';
import img3 from '../assets/pro14.png';
import img4 from '../assets/pro15.png';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png'; 
import bg3 from '../assets/bg3.png'; 
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const MainHome = () => {
    const [bgImage, setBgImage] = useState(bg1);
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (location.state && location.state.message) {
            setMessage(location.state.message);
        }
    }, [location]);

 
    const handleExploreClick = () => {
        navigate('/data');
    };

    const handleShopNowClick = () => {
        navigate('/data');
    };

    const style = {

            general: {
                padding: "0",
                margin: "0",
                boxSizing: "border-box",
            },
            main: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                fontSize: "2rem",
                textAlign: "center",
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: "100vh",
                color: "hsl(240,0%,92%)",
                padding: "0 10%",
                marginTop: "50px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: "background-image 1s ease-in-out", 
            },
            exploreButton: {
                backgroundColor: "hsl(241, 15%, 20%)",
                color: "hsl(240, 0%, 92%)",
                padding: "10px 20px",
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                position: "absolute",
                right: "5%",
                bottom: "10%",
            },
            divMain1: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
                justifyItems: "center",
                padding: "40px 5%",
                marginTop: "100px",
            },
            divCard: {
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                width: "100%",
                maxWidth: "320px", 
            },
            cardContent: {
                padding: "15px",
                textAlign: "center",
                flexGrow: 1,
            },
            h2Card: {
                fontSize: "1.2rem",
                fontWeight: "600",
                marginBottom: "10px",
            },
            description: {
                fontSize: "0.9rem",
                color: "hsl(240, 0%, 60%)",
                marginTop: "10px",
                lineHeight: "1.5",
            },
            rating: {
                marginTop: "10px",
                color: "hsl(43, 100%, 60%)",
            },
            price: {
                fontSize: "1rem",
                marginTop: "10px",
                fontWeight: "bold",
                color: "hsl(241, 15%, 20%)",
            },
            buttonCard: {
                marginTop: "15px",
                padding: "10px",
                backgroundColor: "hsl(241, 15%, 20%)",
                borderRadius: "30px",
                border: "none",
                color: "hsl(240, 0%, 92%)",
                cursor: "pointer",
                width: "100%",
                fontSize: "1rem",
            },
            imgCard: {
                width: "100%",  
                height: "auto",  
                objectFit: "cover",  
            },
        
        
        
    };

    return (
        <>
            <Navbar />
            {message && <p style={{ color: 'green', fontSize: '20px' }}>{message}</p>}
            <div style={style.general} className='mainimg'> 
                <main style={style.main} >
                    <button onClick={handleExploreClick} style={style.exploreButton}>Explore Now</button>
                </main>

                <div style={style.divMain1}>
                    <div style={style.divCard} className="card">
                        <img alt="product" src={img2} style={style.imgCard} />
                        <div style={style.cardContent}>
                            <h2 style={style.h2Card}>Sony Headphone X43</h2>
                            <p style={style.description}>Immerse yourself in high-quality sound with these premium headphones, designed for comfort and performance.</p>
                            <p style={style.rating}>3.2⭐</p>
                            <p style={style.price}>$200</p>
                            <button onClick={handleShopNowClick} style={style.buttonCard}>Shop Now</button>
                        </div>
                    </div>

                    <div style={style.divCard} className="card">
                        <img alt="product" src={img1} style={style.imgCard} />
                        <div style={style.cardContent}>
                            <h2 style={style.h2Card}>Iphone 12</h2>
                            <p style={style.description}>Experience cutting-edge technology and sleek design with the latest iPhone 12, now available for purchase.</p>
                            <p style={style.rating}>4.2⭐</p>
                            <p style={style.price}>$999</p>
                            <button onClick={handleShopNowClick} style={style.buttonCard}>Shop Now</button>
                        </div>
                    </div>

                    <div style={style.divCard} className="card">
                        <img alt="product" src={img4} style={style.imgCard} />
                        <div style={style.cardContent}>
                            <h2 style={style.h2Card}>Camera 4K</h2>
                            <p style={style.description}>Capture breathtaking 4K videos with this powerful and easy-to-use camera. Perfect for creators on the go.</p>
                            <p style={style.rating}>5.0⭐</p>
                            <p style={style.price}>$400</p>
                            <button onClick={handleShopNowClick} style={style.buttonCard}>Shop Now</button>
                        </div>
                    </div>

                    <div style={style.divCard} className="card">
                        <img alt="product" src={img3} style={style.imgCard} />
                        <div style={style.cardContent}>
                            <h2 style={style.h2Card}>Running Tracker</h2>
                            <p style={style.description}>Stay on top of your fitness goals with this advanced running tracker, designed to optimize your workout.</p>
                            <p style={style.rating}>5.0⭐</p>
                            <p style={style.price}>$150</p>
                            <button onClick={handleShopNowClick} style={style.buttonCard}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default MainHome;
