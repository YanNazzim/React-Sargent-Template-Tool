// Stile.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './style/Stile.css';
import WideExit from '../images/Rim Exit (8800).png'
import NarrowExit from '../images/Narrow Rim Exit (8500).png'
import crossWideRim from '../images/crossWideRim.png';
import PEwideRim from '../images/PE80 Wide Rim Exit.png';
import PEnarrowRim from '../images/narrowPERim (PE8500).png'
import crossNarrowRim from '../images/narrowCVR 9400.png';

function Stile() {
    const navigate = useNavigate();
    const location = useLocation(); // Get state from the previous page (ExitSeries.js)
    const { series } = location.state || {}; // Destructure series from state
    var deviceListNarrow = ""
    var deviceListWide = ""
    var deviceImageNarrow = ""
    var deviceImageWide = ""
    const deviceListN80 = ["(8300, 8400, 8500)"];
    const deviceListW80 = ["(8600, 8700, 8800, 8900)"];
    const deviceListPEN80 = ["(PE8300, PE8400, PE8500)"];
    const deviceListPEW80 = ["(PE8600, PE8700, PE8800, PE8900)"];
    const deviceListN90 = ["(9400)"];
    const deviceListW90 = ["(9700, 9800, 9900)"];




    if(series === "80") {
        deviceListNarrow = deviceListN80
        deviceListWide = deviceListW80
        deviceImageNarrow = NarrowExit
        deviceImageWide = WideExit
    }
    if(series === "PE") {
        deviceListNarrow = deviceListPEN80
        deviceListWide = deviceListPEW80
        deviceImageNarrow = PEnarrowRim
        deviceImageWide = PEwideRim
    }
    if(series === "90") {
        deviceListNarrow = deviceListN90
        deviceListWide = deviceListW90
        deviceImageNarrow = crossNarrowRim
        deviceImageWide = crossWideRim
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
                <button className="btn" onClick={handleButtonClickNarrow}>
                    <img src={deviceImageNarrow} className='btn-image' alt='NarrowExits'/>
                    Narrow {series} Series {deviceListNarrow}
                </button>
                <button className="btn" onClick={handleButtonClickWide}>
                <img src={deviceImageWide} className='btn-image' alt='WideExits'/>
                    Wide {series} Series {deviceListWide}
                </button>
            </div>
        </>
    );
}

export default Stile;
