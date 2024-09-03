import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style/Stile.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import narrowStileRim from '../images/Narrow Rim Exit (8500).png';
import wideStileRim from '../images/Wide Rim Exit (8800).png';

function Stile() {
    const navigate = useNavigate();

    const handleButtonClickNarrow = () => {
        navigate('/narrow'); // Navigate to Narrow component route
    };

    const handleButtonClickWide = () => {
        navigate('/wide'); // Navigate to Wide component route
    };

    return (
        <>
            <Header />
            <div className="stile-page">
                <button className="btn" onClick={handleButtonClickNarrow}>
                    <img src={narrowStileRim} alt='Narrow Rim Exit 8500' className='btn-image' />
                    Narrow
                </button>
                <button className="btn" onClick={handleButtonClickWide}>
                    <img src={wideStileRim} alt='Wide Rim Exit 8800' className='btn-image' />
                    Wide
                </button>
            <Footer />
            </div>
        </>
    );
}

export default Stile;
