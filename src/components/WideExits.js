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

function Wide() {
    const navigate = useNavigate();

    const handleButtonClickNarrow = () => {
      navigate('/NarrowExits'); // Navigate to component
    };
    
    const handleButtonClickWide = () => {
        navigate('/WideExits'); // Navigate to component
      };
  return (
    <>
      <Header />
      <div className="stile-page">
        <button className="btn">
            <img src={wideCVR} alt='Narrow Rim Exit 8500' className='btn-image' onClick={handleButtonClickNarrow}/>
            8600 CVR Exit
        </button>
        <button className="btn">
            <img src={wideSVR} alt='Wide Rim Exit 8500' className='btn-image' onClick={handleButtonClickWide}/>
            8700 SVR Exit
            </button>
            <button className="btn">
            <img src={wideNBSVR} alt='Wide Rim Exit 8500' className='btn-image' onClick={handleButtonClickWide}/>
            NB-8700 SVR Exit
            </button>
            <button className="btn">
            <img src={wideStileRim} alt='Wide Rim Exit 8500' className='btn-image' onClick={handleButtonClickWide}/>
            8800 Rim Exit
            </button>
            <button className="btn">
            <img src={wideMortise} alt='Wide Rim Exit 8500' className='btn-image' onClick={handleButtonClickWide}/>
            8900 Mortise Exit
            </button>
            <button className="btn">
            <img src={crossWideSVR} alt='Wide Rim Exit 8500' className='btn-image' onClick={handleButtonClickWide}/>
            9700 SVR Exit
            </button>
            <button className="btn">
            <img src={crossWideRim} alt='Wide Rim Exit 8500' className='btn-image' onClick={handleButtonClickWide}/>
            9800 Rim Exit
            </button>
            <button className="btn">
            <img src={crossWideRim} alt='Wide Rim Exit 8500' className='btn-image' onClick={handleButtonClickWide}/>
            9898 Reversible Exit
            </button>
            <button className="btn">
            <img src={crossWideMortise} alt='Wide Rim Exit 8500' className='btn-image' onClick={handleButtonClickWide}/>
            9900 Mortise Exit
            </button>
      </div>
      <Footer />
    </>
  );
}

export default Wide;
