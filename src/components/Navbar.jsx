import React from 'react';
import { useNavigate } from 'react-router-dom';
import login2 from '../assets/Screenshot 2024-11-10 132739.png'
import cart2 from '../assets/360_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg'
import '../index.css';
const Navbar = () => {
    const navigate = useNavigate();

    function navi(c) {
        navigate(c)
    }

    function mover() {
        let bar = document.getElementById("bar");
        bar.style.transform = "translateX(180px)";
    }

    return (
        <div className="Navbar">
            <div className="divnavbar">
                <div id="bar"></div>
                <h1
                    className="h2nav"
                    onMouseEnter={mover}
                    onMouseLeave={() => {
                        const bar = document.getElementById('bar');
                        bar.style.transform = "translateX(0px)";
                    }}
                    onClick={() => { navi('/') }}
                >
                    HEFO Shop
                </h1>
                <h3 className="h5nav" onClick={() => { navi('/') }}>Home</h3>
                <h3 className="h5nav" onClick={() => { navi('/Contact') }}>Contact</h3>
                <h3 className="h5nav" onClick={() => { navi('/Aboutus') }}>About us</h3>
                <h3 className="h5nav" onClick={() => { navi('/Login')}}>Login</h3>
                <h3 className="h5nav" onClick={() => { navi('/Cart')} }>Cart</h3>
            </div>

            <h2 className="button">
                <img className='imgcart'
                    onClick={() => { navi('/Cart') }}
                    src={cart2}
                    alt="Cart"
                    style={{ height: "40px" }}
                />
            </h2>
    
        </div>
    );
};

export default Navbar;
