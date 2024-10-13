import React, { useState } from "react";
import "./style/HeaderFooter.css";
import logo from "../images/Sargent Logo.jpg";
import { useNavigate } from "react-router-dom";
import { ExitDevices } from "../data/ExitDeviceData";
import { MortiseLocks } from "../data/MortiseLocksData";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleButtonClickBack = () => {
    navigate(-1);
  };

  const handleButtonClickHome = () => {
    navigate("/");
  };

  const handleButtonClickLogo = () => {
    window.open("https://www.sargentlock.com/en", "_blank");
  };

  const handleSearchClick = () => {
    if (!searchQuery) return;

    let productData = [];

    // Include Mortise Locks data
    if (MortiseLocks && Object.keys(MortiseLocks).length > 0) {
      productData = Object.entries(MortiseLocks).flatMap(([series, items]) =>
        items.map((item) => ({
          ...item,
          category: "Mortise Locks",
          series,
          device: item.device || "Unknown Device",
        }))
      );
    }

    // Include Exit Devices data
    productData.push(
      ...ExitDevices.Narrow80.map((item) => ({
        ...item,
        category: "Exit Devices",
        series: "Narrow80",
        device: item.device || "Unknown Device",
      })),
      ...ExitDevices.Wide80.map((item) => ({
        ...item,
        category: "Exit Devices",
        series: "Wide80",
        device: item.device || "Unknown Device",
      }))
    );

    // Filter results based on searchQuery
    const results = productData.filter(
      (product) =>
        product.device.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.functions?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(results);
    setIsModalOpen(true);

    console.log("Search Results:", results); // Log search results for debugging
  };

  const handleClear = () => {
    setSearchQuery("");
    setFilteredProducts([]);
  };

  const handleCloseModal = () => {
    handleClear();
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

  const handleItemClick = (product) => {
    const { device, category, series } = product;

    console.log(
      `Navigating to: Category: ${category}, Series: ${series}, Device: ${device}`
    );

    // Navigate to display-templates with the determined category, series, and device
    navigate("/display-templates", {
      state: {
        category,
        series,
        device,
      },
    });

    handleCloseModal(); // Close the modal and clear the search when an item is clicked
  };

  return (
    <header className="header">
      <img
        src={logo}
        alt="Sargent Logo"
        className="SargentLogo"
        onClick={handleButtonClickLogo}
      />
      <button className="Home" onClick={handleButtonClickHome}>
        Templates Home Page
      </button>
      <button className="Home" onClick={handleButtonClickBack}>
        Previous Page
      </button>
      <button onClick={() => setIsModalOpen(true)} className="Home">
        - Search -
        <br />
        Coming Soon
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <input
              type="text"
              placeholder="Search for device... (8238, 8613)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar"
            />
            <div className="modal-buttons">
              <button onClick={handleSearchClick} className="search-button">
                Search
              </button>
              <button onClick={handleClear} className="clear-button">
                Clear
              </button>
              <button onClick={handleCloseModal} className="close-button">
                Close
              </button>
            </div>

            {filteredProducts.length > 0 && (
              <div className="carousel-controls">
                <button className="carousel-button left" onClick={handlePrev}>
                  &#8249;
                </button>
                <div className="carousel-container">
                  <div
                    className="carousel-inner"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {filteredProducts.map((product, index) => (
                      <div
                        className="carousel-item"
                        key={index}
                        onClick={() => handleItemClick(product)}
                      >
                        <img src={product.image} alt={product.title} />
                        <p>{product.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="carousel-button right" onClick={handleNext}>
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
