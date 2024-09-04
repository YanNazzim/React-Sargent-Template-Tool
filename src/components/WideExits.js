import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style/Stile.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import wideCVR from '../images/WideCVR.png'
import wideStileRim from '../images/Wide Rim Exit (8800).png'
import wideSVR from '../images/WideSVR.png'
import wideNBSVR from '../images/WideNBSVR.png'
import wideMortise from '../images/WideMortise.png'
import crossWideRim from '../images/crossWideRim.png'
import crossWideSVR from '../images/crossWideSVR.png'
import crossWideMortise from '../images/crossWideMortise.png'
import { exitDeviceTemplates } from '../data/templateData';


function Wide() {
    const navigate = useNavigate();

    const handleButtonClick = (series) => {
      navigate('/display-templates', { state: { category: 'Exit Devices', series, templates: exitDeviceTemplates[series] } });
  };
  return (
    <>
      <Header />
      <div className="stile-page">
        <button className="btn" onClick={() => handleButtonClick("8600")}>
            <img src={wideCVR} alt='Narrow Rim Exit 8500' className='btn-image' />
            8600 W CVR Exit
        </button>
        <button className="btn" onClick={() => handleButtonClick("8700")}>
        <img src={wideSVR} alt='Wide Rim Exit 8500' className='btn-image' />
            8700 W SVR Exit
            </button>
            <button className="btn" onClick={() => handleButtonClick("8300")}>
            <img src={wideNBSVR} alt='Wide Rim Exit 8500' className='btn-image' />
            NB-8700 W SVR Exit
            </button>
            <button className="btn" onClick={() => handleButtonClick("8300")}>
            <img src={wideStileRim} alt='Wide Rim Exit 8500' className='btn-image' />
            8800 W Rim Exit
            </button>
            <button className="btn" onClick={() => handleButtonClick("8300")}>
            <img src={wideMortise} alt='Wide Rim Exit 8500' className='btn-image' />
            8900 W Mortise Exit
            </button>
            <button className="btn" onClick={() => handleButtonClick("8300")}>
            <img src={crossWideSVR} alt='Wide Rim Exit 8500' className='btn-image' />
            9700 W SVR Exit
            </button>
            <button className="btn" onClick={() => handleButtonClick("8300")}>
            <img src={crossWideRim} alt='Wide Rim Exit 8500' className='btn-image' />
            9800 W Rim Exit
            </button>
            <button className="btn" onClick={() => handleButtonClick("8300")}>
            <img src={crossWideRim} alt='Wide Rim Exit 8500' className='btn-image' />
            9898 W Reversible Exit
            </button>
            <button className="btn" onClick={() => handleButtonClick("8300")}>
            <img src={crossWideMortise} alt='Wide Rim Exit 8500' className='btn-image' />
            9900 W Mortise Exit
            </button>
      </div>
      <Footer />
    </>
  );
}

export default Wide;
