import React, { useState, useEffect, useCallback } from "react";
import "./style/HeaderFooter.css";
import logo from "../images/Sargent Logo.jpg";
import { useNavigate } from "react-router-dom";
import { ExitDevices } from "../data/ExitDeviceData";
import { MortiseLocks } from "../data/MortiseLocksData";
import { BoredLocks } from "../data/BoredLocksData";
import { AuxLocks } from "../data/AuxLocksData";
import { MultiPoints } from "../data/MultiPointsData";
import { CylindersData } from "../data/CylindersData";
import { ThermalPin } from "../data/ThermalPinData";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null); // To store the selected product

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

  // Split query by dashes or spaces and return an array of terms
  const splitSearchQuery = (query) => query.split(/[-\s]+/).filter(Boolean);

  // Search logic
  const handleSearchClick = useCallback(() => {
    if (!searchQuery) return;

    let productData = [];
    const searchTerms = splitSearchQuery(searchQuery.toLowerCase());

    // Function to match search terms against a product's options
    const matchesOptions = (product, terms) => {
      const {
        device,
        title,
        functions,
        MechOptions,
        ElecOptions,
        CylOptions,
        railSizes,
        trims,
        finishes,
        handing,
        voltage,
        metadata,
        thumbturns,
      } = product;

      // Gather all text keys dynamically
      const textFields = Object.keys(product)
        .filter((key) => key.startsWith("text") && product[key])
        .map((key) => product[key].toLowerCase());

      const allOptions = [
        ...(title ? [title.toLowerCase()] : []), // Keep title as a full term for exact matches
        ...(device ? [device.toLowerCase()] : []), // Keep device as a full term for exact matches
        ...(functions ? functions.toLowerCase().split(/,\s*/) : []),
        ...(MechOptions ? MechOptions.toLowerCase().split(/,\s*/) : []),
        ...(ElecOptions ? ElecOptions.toLowerCase().split(/,\s*/) : []),
        ...(CylOptions ? CylOptions.toLowerCase().split(/,\s*/) : []),
        ...(railSizes ? railSizes.toLowerCase().split(/,\s*/) : []),
        ...(finishes ? finishes.toLowerCase().split(/,\s*/) : []),
        ...(trims ? trims.toLowerCase().split(/,\s*/) : []),
        ...(handing ? handing.toLowerCase().split(/,\s*/) : []),
        ...(voltage ? voltage.toLowerCase().split(/,\s*/) : []),
        ...(metadata ? metadata.toLowerCase().split(/,\s*/) : []),
        ...(thumbturns ? thumbturns.toLowerCase().split(/,\s*/) : []),
        ...textFields, // Include all dynamically gathered text fields
      ];

      // Check if every term matches an entry in allOptions
      return terms.every((term) =>
        allOptions.some((option) => option.includes(term))
      );
    };

    // Include all data sources into productData
    const dataSources = [
      { data: MortiseLocks, category: "Mortise Locks" },
      { data: ExitDevices, category: "Exit Devices" },
      { data: BoredLocks, category: "Bored Locks" },
      { data: AuxLocks, category: "Auxiliary Locks" },
      { data: MultiPoints, category: "Multi Points" },
      { data: ThermalPin, category: "Thermal" },
    ];

    // Process each data source
    dataSources.forEach(({ data, category }) => {
      if (data && Object.keys(data).length > 0) {
        productData.push(
          ...Object.entries(data).flatMap(([series, items]) =>
            items.map((item) => ({
              ...item,
              category,
              series,
              device: item.device || "Unknown Device",
              title: item.title || "Unknown Device",
              functions: item.functions || "",
              MechOptions: item.MechOptions || "",
              ElecOptions: item.ElecOptions || "",
              CylOptions: item.CylOptions || "",
              railSizes: item.railSizes || "",
              handing: item.handing || "",
              voltage: item.voltage || "",
              finishes: item.finishes || "",
              trims: item.trims || "",
              metadata: item.metadata || "",
              text: item.text || "",
              thumbturns: item.thumbturns || "",
            }))
          )
        );
      }
    });

    // Include Cylinders data
    if (CylindersData && Object.keys(CylindersData).length > 0) {
      productData.push(
        ...Object.entries(CylindersData).flatMap(([type, data]) =>
          data.sections.map((section) => ({
            category: "Cylinders",
            type, // Pass the type for navigation
            device: section.heading,
            title: data.title,
            functions: section.texts ? section.texts.join(", ") : "",
            metadata: section.metadata || "",
            image: section.image || "", // Include image if available
          }))
        )
      );
    }

    // Filter results based on search query matching product options
    const results = productData.filter((product) =>
      matchesOptions(product, searchTerms)
    );

    setFilteredProducts(results);
    setIsModalOpen(true);
    setCurrentIndex(0);
    setSelectedProduct(null); // Reset selected product when searching
  }, [searchQuery]);

  // Listen for "Enter" key press when modal is open
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && isModalOpen) {
        handleSearchClick(); // Trigger search when "Enter" is pressed
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handleSearchClick]);

  const handleClear = () => {
    setSearchQuery("");
    setCurrentIndex(0);
    setFilteredProducts([]);
    setSelectedProduct(null);
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
    setSelectedProduct(product);
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
        Home
      </button>
      <button className="Home" onClick={handleButtonClickBack}>
        Back
      </button>
      <button onClick={() => setIsModalOpen(true)} className="Home">
        Search
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <input
              type="text"
              placeholder="Search Sargent Devices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar"
              id="search-bar"
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

            {selectedProduct ? (
              <div className="selected-product">
                <button
                  className="view-templates-button"
                  onClick={() => {
                    navigate("/display-templates", {
                      state: {
                        category: selectedProduct.category,
                        series: selectedProduct.series,
                        device: selectedProduct.device,
                      },
                    });
                    handleCloseModal();
                  }}
                >
                  View more templates for this device
                </button>
                <h2>{selectedProduct.title}</h2>
                <a
                  href={selectedProduct.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  />
                </a>
                <p>Category: {selectedProduct.category}</p>
                <p>Device: {selectedProduct.device}</p>
                {selectedProduct.warning && <p>{selectedProduct.warning}</p>}
                {/* Dynamically render all links and their associated text */}
                {Object.keys(selectedProduct).map((key, index) => {
                  if (key.startsWith("link") && selectedProduct[key]) {
                    const textKey = `text${key.slice(4)}`;
                    return (
                      <a
                        key={index}
                        href={selectedProduct[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-link"
                      >
                        {selectedProduct[textKey] || "View Document"}
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
            ) : (
              filteredProducts.length > 0 && (
                <div className="carousel-controls">
                  <button className="carousel-button left" onClick={handlePrev}>
                    &#8249;
                  </button>
                  <div className="carousel-container">
                    <div
                      className="carousel-inner"
                      style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                      }}
                    >
                      {filteredProducts.map((product, index) => (
                        <div
                          className="carousel-item"
                          key={index}
                          onClick={() => handleItemClick(product)}
                        >
                          <img
                            src={
                              product.category === "Cylinders"
                                ? CylindersData[product.type]?.sections.find(
                                    (section) =>
                                      section.heading === product.device
                                  )?.image
                                : product.image
                            }
                            alt={product.title}
                          />
                          <p>
                            {product.title}{" "}
                            {product.device ? `(${product.device})` : ""}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className="carousel-button right"
                    onClick={handleNext}
                  >
                    &#8250;
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
