import React, { useState, useEffect } from "react"; 
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
    // Click outside handler for dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            // Check if the click is outside the dropdown container
            const dropdownContainer = document.querySelector('.products-dropdown-container');
            // Check if the click is outside the container, but only run if dropdown is open
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


  // Helper functions used in search logic
  const splitSearchQuery = (query) => query.split(/[-\s]+/).filter(Boolean);

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

      // Check if every term matches an entry in allOptions
      return terms.every((term) =>
        allOptions.some((option) => option.includes(term))
      );
  };
  
  // Core search logic function
  const runSearchLogic = (query) => {
    if (!query) {
        setFilteredProducts([]);
        return;
    }

    let productData = [];
    const searchTerms = splitSearchQuery(query.toLowerCase());

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
            series: type, // Use type as series for navigation to CylindersInfo
            device: section.heading,
            title: section.heading, // Use section heading as title for matching auto-expand later
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
  };
  
  // NEW: Debounce search effect (300ms)
  useEffect(() => {
    if (!isModalOpen) {
        setFilteredProducts([]);
        return;
    }
    
    // Debounce logic
    const handler = setTimeout(() => {
      runSearchLogic(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, isModalOpen]);


  const handleClear = () => {
    setSearchQuery("");
    setFilteredProducts([]);
  };

  const handleCloseModal = () => {
    handleClear();
    setIsModalOpen(false);
  };


  const handleItemClick = (product) => {
    // Determine the series for navigation
    if (product.category === "Cylinders") {
        // Navigate directly to the cylinders info page using the series (type) as a param
        // Use replace: true to ensure the navigation fires even if the page is the same
        navigate(`/cylinders-info/${product.series}`, { replace: true });
    } else {
        // For all other product types, navigate to the display templates page
        // Use a time-based key (new Date().getTime()) in the state to force a re-render/re-navigation 
        // when the user searches for an item on the current page.
        navigate("/display-templates", {
            state: {
                category: product.category,
                series: product.series,
                device: product.device,
                initialTemplateTitle: product.title,
                // Add a unique key to force state update even if path/params are identical
                key: new Date().getTime(), 
            },
            // Also use replace: true to ensure the navigation command fires
            replace: true
        });
    }

    // Always close the modal immediately after navigation
    handleCloseModal();
  };
  
  const handleOpenSearchModal = () => {
      setIsModalOpen(true);
      // Immediately run search once when the modal opens if there is an existing query
      if (searchQuery) {
          runSearchLogic(searchQuery);
      }
  }


  return (
    <header className="header">
      <div className="header-top">
        <img
          src={logo}
          alt="Sargent Logo"
          className="SargentLogo"
          onClick={() => window.open("https://www.sargentlock.com/en", "_blank")}
        />
        <nav className="navbar-main">
          {/* Home Button */}
          <button className="nav-item" onClick={handleButtonClickHome}>
            Home
          </button>
          
          {/* Products Dropdown */}
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

          {/* Search Button (now only opens the modal) */}
          <button className="nav-item" onClick={handleOpenSearchModal}>
            Search
          </button>
        </nav>
      </div>

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
              {/* HIDDEN: The Search button is now redundant, removing it visually for a cleaner look */}
              {/* <button onClick={handleSearchClick} className="search-button"> Search </button> */}
              <button onClick={handleClear} className="clear-button">
                Clear
              </button>
              <button onClick={handleCloseModal} className="close-button">
                Close
              </button>
            </div>

            {/* Display search results live */}
            {filteredProducts.length > 0 ? (
              <div className="search-results-list">
                {filteredProducts.map((product, index) => (
                  <div
                    className="carousel-item"
                    key={index}
                    onClick={() => handleItemClick(product)}
                  >
                    <img
                      src={
                        product.category === "Cylinders"
                          ? CylindersData[product.series]?.sections.find(
                              (section) =>
                                section.heading === product.device
                            )?.image
                          : product.image
                      }
                      alt={product.title}
                    />
                    <p>
                      {product.title}{" "}
                      {product.device ? `(${product.device})` : ""} - {product.category}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
                // Only show "No results found" if the user has actually typed something
                filteredProducts.length === 0 && searchQuery && (
                    <p>No results found for "{searchQuery}"</p>
                )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;