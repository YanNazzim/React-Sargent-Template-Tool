// ExitSeries.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style/Stile.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import crossWideRim from '../images/crossWideRim.png';
import wideStileRim from '../images/Wide Rim Exit (8800).png';
import PEwideRim from '../images/PE80 Wide Rim Exit.png';

function ExitSeries() {
    const navigate = useNavigate();

    const handleButtonClick80Series = () => {
        navigate('/stile', { state: { series: '80' } }); // Pass series '80'
    };

    const handleButtonClickPE80Series = () => {
        navigate('/stile', { state: { series: 'PE' } }); // Pass series 'PE80'
    };

    const handleButtonClick90Series = () => {
        navigate('/stile', { state: { series: '90' } }); // Pass series '90'
    };

    return (
        <>
            <Header />
            <div className="stile-page">
                <button className="btn" onClick={handleButtonClick80Series}>
                    <img src={wideStileRim} alt="Wide Rim Exit 8800" className="btn-image" />
                    80 Series
                </button>
                <button className="btn" onClick={handleButtonClickPE80Series}>
                    <img src={PEwideRim} alt="PE Wide Rim Exit" className="btn-image" />
                    PE80 Series
                </button>
                <button className="btn" onClick={handleButtonClick90Series}>
                    <img src={crossWideRim} alt="Cross Wide Rim Exit" className="btn-image" />
                    90 Series
                </button>
            </div>
            <Footer />
        </>
    );
}

export default ExitSeries;
