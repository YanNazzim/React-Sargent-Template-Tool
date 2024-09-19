// ExitSeries.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style/Stile.css'
import crossWideRim from '../images/crossWideRim.png';
import wideStileRim from '../images/Wide Rim Exit (8800).png';
import PEwideRim from '../images/PE80 Wide Rim Exit.png';
import Series30Rim from '../images/30 Series Rim (3828).png'
import Series20Rim from '../images/20 Series Rim (2828).png'

function ExitSeries() {
    const navigate = useNavigate();

    const handleButtonClick80Series = () => {
        navigate('/stile', { state: { series: '80' } }); // Pass series '80'
    };

    const handleButtonClickPE80Series = () => {
        navigate('/stile', { state: { series: 'PE' } }); // Pass series 'PE'
    };

    const handleButtonClick90Series = () => {
        navigate('/stile', { state: { series: '90' } }); // Pass series '90'
    };

    const handleButtonClick20Series = () => {
        navigate('/wide', { state: { series: '20' } }); // Pass series '90'
    };
    const handleButtonClick30Series = () => {
        navigate('/wide', { state: { series: '30' } }); // Pass series '90'
    };
    return (
        <>
            <div className="stile-page">
                <button className="btn" onClick={handleButtonClick80Series}>
                    <img src={wideStileRim} alt="80 Series Devices" className="btn-image" />
                    80 Series
                </button>
                <button className="btn" onClick={handleButtonClickPE80Series}>
                    <img src={PEwideRim} alt="PE Series Devices" className="btn-image" />
                    PE80 Series
                </button>
                <button className="btn" onClick={handleButtonClick90Series}>
                    <img src={crossWideRim} alt="90 Series Devices" className="btn-image" />
                    90 Series
                </button>
                <button className="btn" onClick={handleButtonClick30Series}>
                    <img src={Series30Rim} alt="30 Series Devices" className="btn-image" />
                    30 Series
                </button>
                <button className="btn" onClick={handleButtonClick20Series}>
                    <img src={Series20Rim} alt="20 Series Device" className="btn-image" />
                    20 Series
                </button>
            </div>
        </>
    );
}

export default ExitSeries;
