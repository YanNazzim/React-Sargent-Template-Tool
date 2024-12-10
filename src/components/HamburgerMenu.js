import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const menuRef = useRef(null); // Reference to the side panel
  const buttonRef = useRef(null); // Reference to the hamburger button
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    document.body.classList.toggle("menu-open", newState);

    if (!newState) {
      // Reset menus if closing the menu
      setActiveMenu(null);
      setActiveSubMenu(null);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    setActiveSubMenu(null); // Reset submenus when switching main menus
  };

  const handleSubMenuClick = (submenu) => {
    setActiveSubMenu((prevSubMenu) =>
      prevSubMenu === submenu ? null : submenu
    );
  };

  const handleNavigation = () => {
    setIsOpen(false); // Close the menu
    setActiveMenu(null); // Reset main menu
    setActiveSubMenu(null); // Reset submenus
    document.body.classList.remove("menu-open");
  };

  const handleClickOutside = (event) => {
    // Ensure the click is outside both the menu and the hamburger button
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      setActiveMenu(null);
      setActiveSubMenu(null);
      document.body.classList.remove("menu-open");
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Function to handle navigation with state
  const handleButtonClickNarrow = (series) => {
    navigate("/narrow", { state: { series } }); // Pass the series to Narrow page
    handleNavigation(); // Close the menu after navigating
  };
  // Function to handle navigation with state
  const handleButtonClickWide = (series) => {
    navigate("/wide", { state: { series } }); // Pass the series to Narrow page
    handleNavigation(); // Close the menu after navigating
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="hamburger-icon"
        onClick={toggleMenu}
        ref={buttonRef} // Reference for excluding clicks
      >
        ☰
      </button>

      {/* Sliding Menu Pane */}
      {isOpen && (
        <div className="side-pane open" ref={menuRef}>
          <nav className="menu">
            <Link to="/" onClick={handleNavigation}>
              Home
            </Link>

            {/* Exits Menu with Submenu */}
            <div className="menu-item">
              <button
                className="exits"
                onClick={() => handleMenuClick("exits")}
              >
                Exit Devices
              </button>
              {activeMenu === "exits" && (
                <div
                  className={`submenu ${activeMenu === "exits" ? "open" : ""}`}
                >
                  <button
                    className="exitSeries"
                    onClick={() => handleSubMenuClick("80")}
                  >
                    80 Series
                  </button>
                  <button
                    className="exitSeries"
                    onClick={() => handleSubMenuClick("PE80")}
                  >
                    PE80 Series
                  </button>
                  <button
                    className="exitSeries"
                    onClick={() => handleSubMenuClick("90")}
                  >
                    90 Series
                  </button>
                  {activeSubMenu === "PE80" && (
                    <div
                      className={`nested-submenu ${
                        activeSubMenu === "PE80" ? "open" : ""
                      }`}
                    >
                      <button
                        className="narrowMenu"
                        onClick={() => handleButtonClickNarrow("PE")}
                      >
                        Narrow <br></br> (PE8300, PE8400, PE8500)
                      </button>
                      <br />
                      <button
                        className="wideMenu"
                        onClick={() => handleButtonClickWide("PE")}
                      >
                        Wide <br></br> (PE8600, PE8700, PE8800, PE8900)
                      </button>
                    </div>
                  )}
                  {activeSubMenu === "80" && (
                    <div
                      className={`nested-submenu ${
                        activeSubMenu === "80" ? "open" : ""
                      }`}
                    >
                      <button
                        className="narrowMenu"
                        onClick={() => handleButtonClickNarrow("80")}
                      >
                        Narrow <br></br> (8300, 8400, 8500)
                      </button>
                      <br />
                      <button
                        className="wideMenu"
                        onClick={() => handleButtonClickWide("80")}
                      >
                        Wide <br></br> (8600, 8700, 8800, 8900)
                      </button>
                    </div>
                  )}
                  {activeSubMenu === "90" && (
                    <div
                      className={`nested-submenu ${
                        activeSubMenu === "90" ? "open" : ""
                      }`}
                    >
                      <button
                        className="narrowMenu"
                        onClick={() => handleButtonClickNarrow("90")}
                      >
                        Narrow <br></br> (9400)
                      </button>
                      <br />
                      <button
                        className="wideMenu"
                        onClick={() => handleButtonClickWide("90")}
                      >
                        Wide <br></br> (9700, 9800, 9900)
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
