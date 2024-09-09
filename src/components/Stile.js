// Stile.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './style/Stile.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WideExit from '../images/Rim Exit (8800).png'
import NarrowExit from '../images/Narrow Rim Exit (8500).png'

function Stile() {
    const navigate = useNavigate();
    const location = useLocation(); // Get state from the previous page (ExitSeries.js)
    const { series } = location.state || {}; // Destructure series from state

    // Handle navigation to Narrow or Wide exits with the series
    const handleButtonClickNarrow = () => {
        navigate('/narrow', { state: { series } }); // Pass series to Narrow page
    };

    const handleButtonClickWide = () => {
        navigate('/wide', { state: { series } }); // Pass series to Wide page
    };

    return (
        <>
            <Header />
            <div className="stile-page">
                <button className="btn" onClick={handleButtonClickNarrow}>
                    <img src={NarrowExit} className='btn-image' alt='NarrowExits'/>
                    Narrow (8300, 8400, 8500, 9400)
                </button>
                <button className="btn" onClick={handleButtonClickWide}>
                <img src={WideExit} className='btn-image' alt='WideExits'/>
                    Wide (8600, 8700, 8800, 8900, 9700, 9800)
                </button>
            </div>
            <Footer />
        </>
    );
}

export default Stile;
