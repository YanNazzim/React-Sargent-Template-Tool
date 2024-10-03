// MortiseSeries.js 
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style/Stile.css';
import MortiseLock8200 from '../images/MortiseLock.png'
import MortiseLock9200 from '../images/MortiseLock9200.png'
import MortiseLock7800 from '../images/MortiseLock7800.png'
import M9200 from '../images/MortiseM9200.png'

function MortiseSeries() {
    const navigate = useNavigate();

    // Define button click handlers for each series
    const handleButtonClick = (series) => {
        navigate('/mortiseTypes', { state: { series } }); // Pass the series dynamically
    };


    return (
        <>
            <div className="stile-page">
                {/* Button for 8200 series */}
                <button className="btn" onClick={() => handleButtonClick('8200')}>
                    <img className="btn-image" src={MortiseLock8200} alt="Mortise Lock"/>
                    8200
                </button>
                {/* Button for 9200 series */}
                <button className="btn" onClick={() => handleButtonClick('9200')}>
                <img className="btn-image" src={MortiseLock9200} alt="Mortise Lock"/>

                    9200
                </button>
                <button className="btn" onClick={() => handleButtonClick('M9200')}>
                <img className="btn-image" src={M9200} alt="Mortise Lock"/>

                    M-9200
                </button>
                {/* Button for 7800 series */}
                <button className="btn" onClick={() => handleButtonClick('7800')}>
                <img className="btn-image" src={MortiseLock7800} alt="Mortise Lock"/>

                    7800
                </button>
            </div>
        </>
    );
}

export default MortiseSeries;
