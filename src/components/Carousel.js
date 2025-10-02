import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/style/HamburgerMenu.css"; // Reuse styling logic

// The component name must remain Carousel for the file system
function Carousel({ handleClose }) { // Receive handleClose from Header.js
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Replicate Menu logic
  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    setActiveSubMenu(null);
  };

  const handleSubMenuClick = (submenu) => {
    setActiveSubMenu((prevSubMenu) =>
      prevSubMenu === submenu ? null : submenu
    );
  };

  const navigateAndClose = (path, state) => {
    navigate(path, { state });
    handleClose(); // Close the dropdown/menu via the prop
  };

  const handleButtonClickNarrow = (series) => {
    navigateAndClose("/narrow", { series });
  };

  const handleButtonClickWide = (series) => {
    navigateAndClose("/wide", { series });
  };

  const handleButtonClickEMProducts = (series) => {
    navigateAndClose("/em-products", { series });
  };

  const handleButtonClickMultipoints = (series) => {
    navigateAndClose("/display-templates", { category: "Multi Points", series });
  };

  const handleButtonClickMortise = (series) => {
    navigateAndClose("/display-templates", { category: "Mortise Locks", series });
  };

  const handleButtonClickBored = (series) => {
    navigateAndClose("/display-templates", { category: "Bored Locks", series });
  };

  return (
    <div className="product-dropdown-content">
      {/* Exits Menu with Submenu */}
      <div className="menu-item dropdown-item">
        <button
          className="product-menu-item"
          onClick={() => handleMenuClick("exits")}
        >
          Exit Devices
          <span className="arrow">{activeMenu === "exits" ? "▲" : "▼"}</span>
        </button>
        {activeMenu === "exits" && (
          <div className="dropdown-submenu">
            {/* 80 Series */}
            <button
              className="product-submenu-item"
              onClick={() => handleSubMenuClick("80")}
            >
              80 Series
              <span className="arrow">{activeSubMenu === "80" ? "▲" : "▼"}</span>
            </button>
            {activeSubMenu === "80" && (
              <div className="dropdown-nested-submenu">
                <button onClick={() => handleButtonClickNarrow("80")}>
                  Narrow (8300, 8400, 8500)
                </button>
                <button onClick={() => handleButtonClickWide("80")}>
                  Wide (8600, 8700, 8800, 8900)
                </button>
                <button onClick={() => handleButtonClickEMProducts("80")}>
                  Access Control (KP, IN, SN)
                </button>
              </div>
            )}

            {/* PE80 Series */}
            <button
              className="product-submenu-item"
              onClick={() => handleSubMenuClick("PE80")}
            >
              PE80 Series
              <span className="arrow">{activeSubMenu === "PE80" ? "▲" : "▼"}</span>
            </button>
            {activeSubMenu === "PE80" && (
              <div className="dropdown-nested-submenu">
                <button onClick={() => handleButtonClickNarrow("PE80")}>
                  Narrow (PE8300, PE8400, PE8500)
                </button>
                <button onClick={() => handleButtonClickWide("PE80")}>
                  Wide (PE8600, PE8700, PE8800, PE8900)
                </button>
                <button onClick={() => handleButtonClickEMProducts("PE80")}>
                  Access Control (KP, IN, SN)
                </button>
              </div>
            )}

            {/* 90 Series */}
            <button
              className="product-submenu-item"
              onClick={() => handleSubMenuClick("90")}
            >
              90 Series
              <span className="arrow">{activeSubMenu === "90" ? "▲" : "▼"}</span>
            </button>
            {activeSubMenu === "90" && (
              <div className="dropdown-nested-submenu">
                <button onClick={() => handleButtonClickNarrow("90")}>
                  Narrow (9400)
                </button>
                <button onClick={() => handleButtonClickWide("90")}>
                  Wide (9700, 9800, 9900)
                </button>
              </div>
            )}

            {/* 30 Series */}
            <button
              className="product-menu-item-nested"
              onClick={() => navigateAndClose("/display-templates", { category: "Exit Devices", series: "Wide30" })}
            >
              30 Series
            </button>
            {/* 20 Series */}
            <button
              className="product-menu-item-nested"
              onClick={() => navigateAndClose("/display-templates", { category: "Exit Devices", series: "Wide20" })}
            >
              20 Series
            </button>
          </div>
        )}
      </div>
      
      {/* Other Product Lines (Multipoints, Mortise, Bored) */}
      <div className="menu-item dropdown-item">
        <button
          className="product-menu-item"
          onClick={() => handleMenuClick("multipoints")}
        >
          Multipoints
          <span className="arrow">{activeMenu === "multipoints" ? "▲" : "▼"}</span>
        </button>
        {activeMenu === "multipoints" && (
          <div className="dropdown-submenu">
            <button onClick={() => handleButtonClickMultipoints("7000")}>
              7000 Series
            </button>
            <button onClick={() => handleButtonClickMultipoints("6100")}>
              6100 Series
            </button>
            <button onClick={() => handleButtonClickMultipoints("7300")}>
              7300 Series
            </button>
          </div>
        )}
      </div>

      <div className="menu-item dropdown-item">
        <button
          className="product-menu-item"
          onClick={() => handleMenuClick("Mortise")}
        >
          Mortise
          <span className="arrow">{activeMenu === "Mortise" ? "▲" : "▼"}</span>
        </button>
        {activeMenu === "Mortise" && (
          <div className="dropdown-submenu">
            <button className="product-submenu-item" onClick={() => handleSubMenuClick("7800M")}>
              7800 Series
              <span className="arrow">{activeSubMenu === "7800M" ? "▲" : "▼"}</span>
            </button>
            {activeSubMenu === "7800M" && (
              <div className="dropdown-nested-submenu">
                <button onClick={() => handleButtonClickMortise("7800")}>
                  Standard/Electrified
                </button>
                <button onClick={() => handleButtonClickMortise("IN7900")}>
                  IN 7900 Series
                </button>
              </div>
            )}
            
            <button className="product-submenu-item" onClick={() => handleSubMenuClick("8200M")}>
              8200 Series
              <span className="arrow">{activeSubMenu === "8200M" ? "▲" : "▼"}</span>
            </button>
            {activeSubMenu === "8200M" && (
              <div className="dropdown-nested-submenu">
                <button onClick={() => handleButtonClickMortise("8200")}>
                  Standard/Electrified
                </button>
                <button onClick={() => handleButtonClickMortise("KP8200")}>
                  KP 8200 Series
                </button>
                <button onClick={() => handleButtonClickMortise("IN8200")}>
                  IN 8200 Series
                </button>
                <button onClick={() => handleButtonClickMortise("SN8200")}>
                  SN 8200 Series
                </button>
              </div>
            )}
            
            <button className="product-submenu-item" onClick={() => handleSubMenuClick("9200M")}>
              9200 Series
              <span className="arrow">{activeSubMenu === "9200M" ? "▲" : "▼"}</span>
            </button>
            {activeSubMenu === "9200M" && (
              <div className="dropdown-nested-submenu">
                <button onClick={() => handleButtonClickMortise("9200")}>
                  9200 Series
                </button>
                <button onClick={() => handleButtonClickMortise("M9200")}>
                  M-9200 Series
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="menu-item dropdown-item">
        <button
          className="product-menu-item"
          onClick={() => handleMenuClick("Bored")}
        >
          Bored Locks
          <span className="arrow">{activeMenu === "Bored" ? "▲" : "▼"}</span>
        </button>
        {activeMenu === "Bored" && (
          <div className="dropdown-submenu">
            <button onClick={() => handleButtonClickBored("11 Line")}>
              11 Line
            </button>
            <button className="product-submenu-item" onClick={() => handleSubMenuClick("10X LineB")}>
              10X Line
              <span className="arrow">{activeSubMenu === "10X LineB" ? "▲" : "▼"}</span>
            </button>
            {activeSubMenu === "10X LineB" && (
              <div className="dropdown-nested-submenu">
                <button onClick={() => handleButtonClickBored("10X Line")}>
                  Standard/Electrified 10X Line
                </button>
                <button onClick={() => handleButtonClickBored("KP 10X")}>
                  KP 10X Line
                </button>
                <button onClick={() => handleButtonClickBored("IN 10X")}>
                  IN 10X Line
                </button>
                <button onClick={() => handleButtonClickBored("SN 10X")}>
                  SN 10X Line
                </button>
              </div>
            )}
            <button onClick={() => handleButtonClickBored("8X Line")}>
              8X Line
            </button>
            <button onClick={() => handleButtonClickBored("7 Line")}>
              7 Line
            </button>
            <button onClick={() => handleButtonClickBored("6500 Series")}>
              6500 Series
            </button>
            <button onClick={() => handleButtonClickBored("6 Line")}>
              6 Line
            </button>
            <button onClick={() => handleButtonClickBored("DL Series")}>
              DL Series
            </button>
          </div>
        )}
      </div>
      
      {/* Other single-level nav items */}
      <button
        className="product-menu-item single-item"
        onClick={() => navigateAndClose('/auxiliaryLocksSeries')}
      >
        Auxiliary Locks
      </button>
      <button
        className="product-menu-item single-item"
        onClick={() => navigateAndClose('/cylinders')}
      >
        Cylinders Info
      </button>
      <button
        className="product-menu-item single-item external-link"
        onClick={() => {window.open("https://sargent-parts.netlify.app", "_blank"); handleClose();}}
      >
        Sargent Part Number Lookup Tool (External)
      </button>
    </div>
  );
}

export default Carousel;