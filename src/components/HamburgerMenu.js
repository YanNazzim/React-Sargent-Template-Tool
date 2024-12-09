import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // For nested submenus

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
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

  return (
    <>
      {/* Hamburger Icon */}
      {/*  <button className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </button>
*/}
      {/* Sliding Menu Pane */}
      {isOpen && (
        <div className="side-pane open">
          <nav className="menu">
            <Link to="/" onClick={handleNavigation}>
              Home
            </Link>

            {/* Exits Menu with Submenu */}
            <div className="menu-item">
              <button
                className="menu-toggle"
                onClick={() => handleMenuClick("exits")}
              >
                Exits
              </button>
              {activeMenu === "exits" && (
                <div className="submenu">
                  <button
                    className="menu-toggle"
                    onClick={() => handleSubMenuClick("PE80")}
                  >
                    PE80 Series
                  </button>
                  {activeSubMenu === "PE80" && (
                    <div className="nested-submenu">
                      <Link
                        className="narrowMenu"
                        to="/pe80-template-1"
                        onClick={handleNavigation}
                      >
                        {"\t"}Narrow (PE8300, PE8400, PE8500)
                      </Link>
                      <br></br>
                      <Link
                        className="wideMenu"
                        to="/pe80-template-2"
                        onClick={handleNavigation}
                      >
                        Wide (PE8600, PE8700, PE8800, PE8900)
                      </Link>
                    </div>
                  )}

                  <button
                    className="menu-toggle"
                    onClick={() => handleSubMenuClick("80")}
                  >
                    80 Series
                  </button>
                  {activeSubMenu === "80" && (
                    <div className="nested-submenu">
                      <Link to="/80-template-1" onClick={handleNavigation}>
                        Template 1
                      </Link>
                      <Link to="/80-template-2" onClick={handleNavigation}>
                        Template 2
                      </Link>
                    </div>
                  )}

                  <button
                    className="menu-toggle"
                    onClick={() => handleSubMenuClick("90")}
                  >
                    90 Series
                  </button>
                  {activeSubMenu === "90" && (
                    <div className="nested-submenu">
                      <Link to="/90-template-1" onClick={handleNavigation}>
                        Template 1
                      </Link>
                      <Link to="/90-template-2" onClick={handleNavigation}>
                        Template 2
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Other Menus */}
            <Link to="/Cylinders" onClick={handleNavigation}>
              Cylinders
            </Link>
            <Link to="/em-products" onClick={handleNavigation}>
              Electro-Mechanical Products
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
