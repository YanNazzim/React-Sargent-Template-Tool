import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style/Stile.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import narrowMortise from '../images/NarrowMortiseExit (8300).png'
import narrowCVR from '../images/NarrowCVR.png'
import narrowRim from '../images/Narrow Rim Exit (8500).png'
import narrowCVR9400 from '../images/narrowCVR 9400.png'

function Narrow() {
    const navigate = useNavigate();

    const handleButtonClickNarrow = () => {
      navigate('/'); // Navigate to component
    };
    
    const handleButtonClickWide = () => {
        navigate('/'); // Navigate to component
      };
  return (
    <>
      <Header />
      <div className="stile-page">
        <button className="btn">
            <img src={narrowMortise} alt='Narrow Rim Exit 8300' className='btn-image' onClick={handleButtonClickNarrow}/>
            8300 Mortise Exit
        </button>
        <button className="btn">
            <img src={narrowCVR} alt='Narrow Rim Exit 8400' className='btn-image' onClick={handleButtonClickWide}/>
            8400 CVR Exit
            </button>
            <button className="btn">
            <img src={narrowRim} alt='Narrow Rim Exit 8300' className='btn-image' onClick={handleButtonClickNarrow}/>
            8500 Rim Exit
            </button>
            <button className="btn">
            <img src={narrowCVR9400} alt='Narrow Rim Exit 8300' className='btn-image' onClick={handleButtonClickNarrow}/>
            9400 Surface Exit
            </button>
      </div>
      <Footer />
    </>
  );
}

export default Narrow;
