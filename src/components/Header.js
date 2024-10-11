import React, { useState } from 'react';
import './style/HeaderFooter.css';
import logo from '../images/Sargent Logo.jpg';
import { useNavigate } from 'react-router-dom';
import { ExitDevices } from '../data/ExitDeviceData';
import { MortiseLocks } from '../data/MortiseLocksData';
import { BoredLocks } from '../data/BoredLocksData'

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleButtonClickBack = () => {
    navigate(-1);
  };

  const handleButtonClickHome = () => {
    navigate('/');
  };

  const handleButtonClickLogo = () => {
    window.open('https://www.sargentlock.com/en', '_blank');
  };

  const handleSearchClick = () => {
    if (!searchQuery) return;

    let productData = [];

    if (searchQuery.includes('82')) {
      productData = Object.values(MortiseLocks).flat();
    } else if (
      searchQuery.includes('83') ||
      searchQuery.includes('84') ||
      searchQuery.includes('85') ||
      searchQuery.includes('86') ||
      searchQuery.includes('87') ||
      searchQuery.includes('88') ||
      searchQuery.includes('89')
    ) {
      productData = [
        ...ExitDevices.Narrow80,
        ...ExitDevices.Wide80,
        ...ExitDevices.NarrowPE,
        ...ExitDevices.WidePE,
        ...ExitDevices.Narrow90,
        ...ExitDevices.Wide90,
        ...ExitDevices.Wide20,
        ...ExitDevices.Wide30,
        ...ExitDevices['Fire Rated Hardware'],
      ];
    } else {
      productData = [
        ...Object.values(MortiseLocks).flat(),
        ...ExitDevices.Narrow80,
        ...ExitDevices.Wide80,
        ...ExitDevices.NarrowPE,
        ...ExitDevices.WidePE,
        ...ExitDevices.Narrow90,
        ...ExitDevices.Wide90,
        ...ExitDevices.Wide20,
        ...ExitDevices.Wide30,
        ...ExitDevices['Fire Rated Hardware'],
      ];
    }

    const results = productData.filter((product) =>
      product.device.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.functions?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(results);
    setIsModalOpen(true);
  };

  const handleClear = () => {
    setSearchQuery('');
    setFilteredProducts([]);
  };

  const handleCloseModal = () => {
    handleClear(); // Clear the search input and results when closing the modal
    setIsModalOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(filteredProducts.length / 2) - 1)
    );
  };

  return (
    <header className='header'>
      <img
        src={logo}
        alt='Sargent Logo'
        className='SargentLogo'
        onClick={handleButtonClickLogo}
      />
      <button className='Home' onClick={handleButtonClickHome}>
        Templates Home Page
      </button>
      <button className='Home' onClick={handleButtonClickBack}>
        Previous Page
      </button>
      <button onClick={() => setIsModalOpen(true)} className='Home'>
        - Search -<br /> Under Construction
      </button>

      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <input
              type='text'
              placeholder='Search for device... (8238, 8613)'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='search-bar'
            />
            <div className='modal-buttons'>
              <button onClick={handleSearchClick} className='search-button'>
                Search
              </button>
              <button onClick={handleClear} className='clear-button'>
                Clear
              </button>
              <button onClick={handleCloseModal} className='close-button'>
                Close
              </button>
            </div>

            {filteredProducts.length > 0 && (
              <div className='carousel-controls'>
                <button className='carousel-button left' onClick={handlePrev}>
                  &#8249;
                </button>
                <div className='carousel-container'>
                  <div
                    className='carousel-inner'
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {filteredProducts.map((product, index) => (
                      <div className='carousel-item' key={index}>
                        <img src={product.image} alt={product.title} />
                        <p>{product.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <button className='carousel-button right' onClick={handleNext}>
                  &#8250;
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
