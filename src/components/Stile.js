// Stile.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './style/Stile.css';
import { Images } from '../images/images'; // Import the Images object

function Stile() {
    const navigate = useNavigate();
    const location = useLocation(); // Get state from the previous page (ExitSeries.js)
    const { series } = location.state || {}; // Destructure series from state
    var deviceListNarrow = "";
    var deviceListWide = "";
    var deviceImageNarrow = "";
    var deviceImageWide = "";
    
    const deviceListN80 = ["(8300, 8400, 8500)"];
    const deviceListW80 = ["(8600, 8700, 8800, 8900)"];
    const deviceListPEN80 = ["(PE8300, PE8400, PE8500)"];
    const deviceListPEW80 = ["(PE8600, PE8700, PE8800, PE8900)"];
    const deviceListN90 = ["(9400)"];
    const deviceListW90 = ["(9700, 9800, 9900)"];

    // Assign device lists and images based on the series
    if (series === "80") {
        deviceListNarrow = deviceListN80;
        deviceListWide = deviceListW80;
        deviceImageNarrow = Images.narrowRimExit8500;
        deviceImageWide = Images.wideStileRim;
    }
    if (series === "PE") {
        deviceListNarrow = deviceListPEN80;
        deviceListWide = deviceListPEW80;
        deviceImageNarrow = Images.narrowPE8500;
        deviceImageWide = Images.widePERim;
    }
    if (series === "90") {
        deviceListNarrow = deviceListN90;
        deviceListWide = deviceListW90;
        deviceImageNarrow = Images.narrowCVR9400;
        deviceImageWide = Images.crossWideRim;
    }

    // Handle navigation to Narrow or Wide exits with the series
    const handleButtonClickNarrow = () => {
        navigate('/narrow', { state: { series } }); // Pass series to Narrow page
    };

    const handleButtonClickWide = () => {
        navigate('/wide', { state: { series } }); // Pass series to Wide page
    };

    return (
        <>
            <div className="stile-page">
                <button id="Narrow" className="btn" onClick={handleButtonClickNarrow}>
                    <img src={deviceImageNarrow} className='btn-image' alt='NarrowExits' />
                    Narrow {series} Series <br></br> {deviceListNarrow}
                </button>
                <button id="Wide" className="btn" onClick={handleButtonClickWide}>
                    <img src={deviceImageWide} className='btn-image' alt='WideExits' />
                    Wide {series} Series <br></br> {deviceListWide}
                </button>
            </div>
        </>
    );
}

export default Stile;
