// Stile.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './style/Stile.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
                    Narrow
                </button>
                <button className="btn" onClick={handleButtonClickWide}>
                    Wide
                </button>
            </div>
            <Footer />
        </>
    );
}

export default Stile;
