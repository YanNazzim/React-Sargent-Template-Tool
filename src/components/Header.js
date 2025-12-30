import React, { useState, useEffect, useRef, useCallback } from "react"; 
import "./style/HeaderFooter.css";
import logo from "../images/Sargent Logo.jpg";
import { useNavigate } from "react-router-dom";
import ProductDropdown from "./Carousel"; 
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
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClickHome = () => {
    navigate("/");
    setIsProductsDropdownOpen(false);
  };
  
  const handleToggleProductsDropdown = (event) => {
    event.stopPropagation();
    setIsProductsDropdownOpen((prev) => !prev);
  };

  const handleCloseProductsDropdown = () => {
    setIsProductsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
      function handleClickOutside(event) {
          const dropdownContainer = document.querySelector('.products-dropdown-container');
          if (isProductsDropdownOpen && dropdownContainer && !dropdownContainer.contains(event.target)) {
              handleCloseProductsDropdown();
          }
      }
      if (isProductsDropdownOpen) {
          document.addEventListener('click', handleClickOutside);
      } else {
          document.removeEventListener('click', handleClickOutside);
      }
      return () => {
          document.removeEventListener('click', handleClickOutside);
      };
  }, [isProductsDropdownOpen]);

  // Focus search input when modal opens
  useEffect(() => {
    if (isModalOpen && searchInputRef.current) {
        setTimeout(() => searchInputRef.current.focus(), 50);
    }
  }, [isModalOpen]);

  // --- Search Logic ---
  const splitSearchQuery = (query) => query.split(/[-\s]+/).filter(Boolean);

  // Memoized to prevent ESLint warning
  const matchesOptions = useCallback((product, terms) => {
      // Destructure all potential search fields
      const {
        device, title, functions, MechOptions, ElecOptions, CylOptions,
        railSizes, trims, finishes, handing, voltage, metadata, thumbturns,
      } = product;

      // Gather dynamic "text" fields
      const textFields = Object.keys(product)
        .filter((key) => key.startsWith("text") && product[key])
        .map((key) => product[key].toLowerCase());

      // Combine all searchable text into one array
      const allOptions = [
        ...(title ? [title.toLowerCase()] : []), 
        ...(device ? [device.toLowerCase()] : []), 
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
        ...textFields, 
      ];

      // Check if EVERY search term is present in AT LEAST ONE of the product's fields
      return terms.every((term) =>
        allOptions.some((option) => option.includes(term))
      );
  }, []);
  
  const runSearchLogic = useCallback((query) => {
    if (!query) {
        setFilteredProducts([]);
        return;
    }
    const searchTerms = splitSearchQuery(query.toLowerCase());
    let productData = [];

    // Aggregate Data
    const dataSources = [
      { data: MortiseLocks, category: "Mortise Locks" },
      { data: ExitDevices, category: "Exit Devices" },
      { data: BoredLocks, category: "Bored Locks" },
      { data: AuxLocks, category: "Auxiliary Locks" },
      { data: MultiPoints, category: "Multi Points" },
      { data: ThermalPin, category: "Thermal" },
    ];

    dataSources.forEach(({ data, category }) => {
      if (data) {
        productData.push(
          ...Object.entries(data).flatMap(([series, items]) =>
            items.map((item) => ({
              ...item,
              category,
              series,
              title: item.title || item.device || "Unknown",
            }))
          )
        );
      }
    });

    // Add Cylinders Data
    if (CylindersData) {
        Object.entries(CylindersData).forEach(([type, data]) => {
            if(data.sections) {
                productData.push(...data.sections.map(s => ({
                    category: "Cylinders",
                    series: type,
                    title: s.heading,
                    device: s.heading,
                    image: s.image,
                    // Map cylinder specific fields to generic ones for search
                    functions: s.texts ? s.texts.join(" ") : "", 
                    metadata: s.metadata || "",
                })));
            }
        });
    }

    const results = productData.filter((product) =>
      matchesOptions(product, searchTerms)
    );
    setFilteredProducts(results);
  }, [matchesOptions]); // Dependency ensures this logic updates if match logic changes
  
  // Debounced Search Trigger
  useEffect(() => {
    if (!isModalOpen) { setFilteredProducts([]); return; }
    const handler = setTimeout(() => runSearchLogic(searchQuery), 300);
    return () => clearTimeout(handler);
  }, [searchQuery, isModalOpen, runSearchLogic]);

  const handleClear = () => {
    setSearchQuery("");
    setFilteredProducts([]);
    if(searchInputRef.current) searchInputRef.current.focus();
  };

  const handleCloseModal = () => {
    handleClear();
    setIsModalOpen(false);
  };

  const handleItemClick = (product) => {
    if (product.category === "Cylinders") {
        navigate(`/cylinders-info/${product.series}`, { replace: true });
    } else {
        navigate("/display-templates", {
            state: {
                category: product.category,
                series: product.series,
                device: product.device,
                initialTemplateTitle: product.title,
                key: new Date().getTime(), 
            },
            replace: true
        });
    }
    handleCloseModal();
  };
  
  const handleOpenSearchModal = () => setIsModalOpen(true);

  return (
    <header className="header">
      <div className="header-top">
        {/* Spacer used for Centered Grid Layout */}
        <div className="header-left-spacer"></div>

        <img
          src={logo}
          alt="Sargent Logo"
          className="SargentLogo"
          onClick={() => window.open("https://www.sargentlock.com/en", "_blank")}
        />
        
        <nav className="navbar-main">
          <button className="nav-item" onClick={handleButtonClickHome}>
            Home
          </button>
          
          <div className="products-dropdown-container">
            <button 
              className={`nav-item products-dropdown-toggle ${isProductsDropdownOpen ? 'active' : ''}`}
              onClick={handleToggleProductsDropdown}
            >
              Products
            </button>
            {isProductsDropdownOpen && (
              <div className="dropdown-content-wrapper">
                <ProductDropdown handleClose={handleCloseProductsDropdown} />
              </div>
            )}
          </div>

          <button className="search-trigger" onClick={handleOpenSearchModal}>
            <span className="search-trigger-icon">🔍</span>
            <span className="search-trigger-text">Search...</span>
            <span className="search-trigger-shortcut">/</span> 
          </button>
        </nav>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content spotlight-modal" onClick={(e) => e.stopPropagation()}>
            
            <div className="search-input-header">
                <span className="search-modal-icon">🔍</span>
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search devices, series, or part numbers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-bar-spotlight"
                />
                
                {searchQuery && (
                    <button onClick={handleClear} className="clear-icon-btn desktop-only">✕</button>
                )}

                <button onClick={handleCloseModal} className="cancel-text-btn mobile-only">
                    Cancel
                </button>
            </div>

            <div className="search-results-container">
                {filteredProducts.length > 0 ? (
                    <div className="search-results-list">
                        {filteredProducts.map((product, index) => (
                        <div className="spotlight-item" key={index} onClick={() => handleItemClick(product)}>
                            <div className="spotlight-thumb">
                                <img src={product.image || logo} alt={product.title} />
                            </div>
                            <div className="spotlight-info">
                                <span className="spotlight-title">{product.title}</span>
                                <div className="spotlight-badges">
                                    <span className="badge-category">{product.category}</span>
                                    {product.series && <span className="badge-series">{product.series} Series</span>}
                                </div>
                            </div>
                            <span className="spotlight-arrow">›</span>
                        </div>
                        ))}
                    </div>
                ) : (
                    <div className="spotlight-empty">
                        {searchQuery ? (
                             <div className="empty-state-content">
                                <span className="empty-icon">😕</span>
                                <p>No matches for "{searchQuery}"</p>
                            </div>
                        ) : (
                            <div className="empty-state-content">
                                <span className="empty-icon">👋</span>
                                <p>Type to search...</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;