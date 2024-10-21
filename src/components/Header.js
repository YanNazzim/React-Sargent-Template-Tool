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
        functions,
        MechOptions,
        ElecOptions,
        CylOptions,
        railSizes,
        trims,
        finishes,
        handing,
        voltage,
      } = product;
      const allOptions = [
        ...(functions ? functions.toLowerCase().split(/,\s*/) : []),
        ...(MechOptions ? MechOptions.toLowerCase().split(/,\s*/) : []),
        ...(ElecOptions ? ElecOptions.toLowerCase().split(/,\s*/) : []),
        ...(CylOptions ? CylOptions.toLowerCase().split(/,\s*/) : []),
        ...(railSizes ? railSizes.toLowerCase().split(/,\s*/) : []),
        ...(finishes ? finishes.toLowerCase().split(/,\s*/) : []),
        ...(trims ? trims.toLowerCase().split(/,\s*/) : []),
        ...(handing ? handing.toLowerCase().split(/,\s*/) : []),
        ...(voltage ? voltage.toLowerCase().split(/,\s*/) : []),
      ];
      return terms.every((term) => allOptions.includes(term));
    };

    // Include Mortise Locks data
    if (MortiseLocks && Object.keys(MortiseLocks).length > 0) {
      productData = Object.entries(MortiseLocks).flatMap(([series, items]) =>
        items.map((item) => ({
          ...item,
          category: "Mortise Locks",
          series,
          device: item.device || "Unknown Device",
          functions: item.functions || "", // Ensure functions field is included
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
        functions: item.functions || "",
        MechOptions: item.MechOptions || "",
        ElecOptions: item.ElecOptions || "",
        CylOptions: item.CylOptions || "",
        railSizes: item.railSizes || "",
        finishes: item.finishes || "",
        trims: item.trims || "",
        handing: item.handing || "",
        voltage: item.voltage || "",
      })),
      ...ExitDevices.Wide80.map((item) => ({
        ...item,
        category: "Exit Devices",
        series: "Wide80",
        device: item.device || "Unknown Device",
        functions: item.functions || "",
        MechOptions: item.MechOptions || "",
        ElecOptions: item.ElecOptions || "",
        CylOptions: item.CylOptions || "",
        railSizes: item.railSizes || "",
        finishes: item.finishes || "",
        trims: item.trims || "",
        handing: item.handing || "",
        voltage: item.voltage || "",
      })),
      ...ExitDevices.NarrowPE.map((item) => ({
        ...item,
        category: "Exit Devices",
        series: "NarrowPE",
        device: item.device || "Unknown Device",
        functions: item.functions || "",
        MechOptions: item.MechOptions || "",
        ElecOptions: item.ElecOptions || "",
        CylOptions: item.CylOptions || "",
        railSizes: item.railSizes || "",
        finishes: item.finishes || "",
        trims: item.trims || "",
        handing: item.handing || "",
        voltage: item.voltage || "",
      })),
      ...ExitDevices.WidePE.map((item) => ({
        ...item,
        category: "Exit Devices",
        series: "WidePE",
        device: item.device || "Unknown Device",
        functions: item.functions || "",
        MechOptions: item.MechOptions || "",
        ElecOptions: item.ElecOptions || "",
        CylOptions: item.CylOptions || "",
        railSizes: item.railSizes || "",
        finishes: item.finishes || "",
        trims: item.trims || "",
        handing: item.handing || "",
        voltage: item.voltage || "",
      })),
      ...ExitDevices.Narrow90.map((item) => ({
        ...item,
        category: "Exit Devices",
        series: "Narrow90",
        device: item.device || "Unknown Device",
        functions: item.functions || "",
        MechOptions: item.MechOptions || "",
        ElecOptions: item.ElecOptions || "",
        CylOptions: item.CylOptions || "",
        railSizes: item.railSizes || "",
        finishes: item.finishes || "",
        trims: item.trims || "",
        handing: item.handing || "",
        voltage: item.voltage || "",
      })),
      ...ExitDevices.Wide90.map((item) => ({
        ...item,
        category: "Exit Devices",
        series: "Wide90",
        device: item.device || "Unknown Device",
        functions: item.functions || "",
        MechOptions: item.MechOptions || "",
        ElecOptions: item.ElecOptions || "",
        CylOptions: item.CylOptions || "",
        railSizes: item.railSizes || "",
        finishes: item.finishes || "",
        trims: item.trims || "",
        handing: item.handing || "",
        voltage: item.voltage || "",
      })),
      ...ExitDevices.Wide20.map((item) => ({
        ...item,
        category: "Exit Devices",
        series: "Wide20",
        device: item.device || "Unknown Device",
        functions: item.functions || "",
        MechOptions: item.MechOptions || "",
        ElecOptions: item.ElecOptions || "",
        CylOptions: item.CylOptions || "",
        railSizes: item.railSizes || "",
        finishes: item.finishes || "",
        trims: item.trims || "",
        handing: item.handing || "",
        voltage: item.voltage || "",
      })),
      ...ExitDevices.Wide30.map((item) => ({
        ...item,
        category: "Exit Devices",
        series: "Wide30",
        device: item.device || "Unknown Device",
        functions: item.functions || "",
        MechOptions: item.MechOptions || "",
        ElecOptions: item.ElecOptions || "",
        CylOptions: item.CylOptions || "",
        railSizes: item.railSizes || "",
        finishes: item.finishes || "",
        trims: item.trims || "",
        handing: item.handing || "",
        voltage: item.voltage || "",
      }))
    );

    // Include Bored Locks data
    if (BoredLocks && Object.keys(BoredLocks).length > 0) {
      productData.push(
        ...Object.entries(BoredLocks).flatMap(([series, items]) =>
          items.map((item) => ({
            ...item,
            category: "Bored Locks",
            series,
            device: item.device || "Unknown Device",
            functions: item.functions || "", // Ensure functions field is included
          }))
        )
      );
    }

    // Include Aux Locks data
    if (AuxLocks && Object.keys(AuxLocks).length > 0) {
      productData.push(
        ...Object.entries(AuxLocks).flatMap(([series, items]) =>
          items.map((item) => ({
            ...item,
            category: "Auxiliary Locks",
            series,
            device: item.device || "Unknown Device",
            functions: item.functions || "", // Ensure functions field is included
          }))
        )
      );
    }

    // Include MultiPoints data
    if (MultiPoints && Object.keys(MultiPoints).length > 0) {
      productData.push(
        ...Object.entries(MultiPoints).flatMap(([series, items]) =>
          items.map((item) => ({
            ...item,
            category: "Multi Points",
            series,
            device: item.device || "Unknown Device",
            functions: item.functions || "", // Ensure functions field is included
          }))
        )
      );
    }

    // Include Thermal Pin data
    if (ThermalPin && Object.keys(ThermalPin).length > 0) {
      productData.push(
        ...Object.entries(ThermalPin).flatMap(([series, items]) =>
          items.map((item) => ({
            ...item,
            category: "Thermal",
            series,
            device: item.device || "Unknown Device",
            functions: item.functions || "", // Ensure functions field is included
          }))
        )
      );
    }

    // Include Cylinders data
    if (CylindersData && Object.keys(CylindersData).length > 0) {
      productData.push(
        ...Object.entries(CylindersData).flatMap(([type, data]) =>
          data.sections.map((section) => ({
            category: "Cylinders",
            type, // Pass the type for navigation
            device: section.heading,
            title: data.title, // Title of the cylinder type
            texts: section.texts || [],
          }))
        )
      );
    }

    // Filter results based on search query matching product options
    const results = productData.filter((product) => {
      return matchesOptions(product, searchTerms);
    });

    setFilteredProducts(results);
    setIsModalOpen(true);
    setCurrentIndex(0);
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
    const { device, category, series, type } = product;

    // Special handling for Cylinders to route them to CylindersInfo page
    if (category === "Cylinders") {
      navigate(`/cylinders-info/${type}`);
    } else {
      // Navigate to display-templates for other categories
      navigate("/display-templates", {
        state: {
          category,
          series,
          device,
        },
      });
    }

    handleCloseModal();
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
              placeholder="Search by Function or Options... (12-55-56-43-8313)"
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
