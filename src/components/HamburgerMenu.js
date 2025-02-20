import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    document.body.classList.toggle("menu-open", newState);
    if (!newState) {
      setActiveMenu(null);
      setActiveSubMenu(null);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    setActiveSubMenu(null);
  };

  const handleSubMenuClick = (submenu) => {
    // Toggle the nested submenu for the clicked parent button
    setActiveSubMenu((prevSubMenu) =>
      prevSubMenu === submenu ? null : submenu
    );
  };

  const handleNavigation = () => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubMenu(null);
    document.body.classList.remove("menu-open");
  };

  const handleClickOutside = (event) => {
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

  // Navigation handlers for internal routes
  const handleButtonClickNarrow = (series) => {
    navigate("/narrow", { state: { series } });
    handleNavigation();
  };

  const handleButtonClickWide = (series) => {
    navigate("/wide", { state: { series } });
    handleNavigation();
  };

  const handleButtonClickEMProducts = (series) => {
    navigate("/em-products", { state: { series } });
    handleNavigation();
  };

  const handleButtonClickMultipoints = (series) => {
    navigate("/display-templates", { state: { category: "Multi Points", series } });
    handleNavigation();
  };

  const handleButtonClickMortise = (series) => {
    navigate("/display-templates", { state: { category: "Mortise Locks", series } });
    handleNavigation();
  };

  const handleButtonClickBored = (series) => {
    navigate("/display-templates", { state: { category: "Bored Locks", series } });
    handleNavigation();
  };

  // Handler for external link
  const handleExternalLink = () => {
    window.open("https://sargent-parts.netlify.app", "_blank");
    handleNavigation();
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button className="hamburger-icon" onClick={toggleMenu} ref={buttonRef}>
        ☰
      </button>

      {/* Sliding Menu Pane */}
      {isOpen && (
        <div className="side-pane open" ref={menuRef}>
          <div className="menu-top">
            <nav className="menu">
              <Link to="/" onClick={handleNavigation}>
                Home 🏠
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
                  <div className="submenu open">
                    {/* 80 Series */}
                    <button
                      className="exitSeries"
                      onClick={() => handleSubMenuClick("80")}
                    >
                      80 Series
                    </button>
                    {activeSubMenu === "80" && (
                      <div className="nested-submenu open">
                        <button
                          className="narrowMenu"
                          onClick={() => handleButtonClickNarrow("80")}
                        >
                          Narrow <br /> (8300, 8400, 8500)
                        </button>
                        <button
                          className="wideMenu"
                          onClick={() => handleButtonClickWide("80")}
                        >
                          Wide <br /> (8600, 8700, 8800, 8900)
                        </button>
                        <button
                          className="EM-Menu"
                          onClick={() => handleButtonClickEMProducts("80")}
                        >
                          Access Control Products <br /> (KP, IN, SN)
                        </button>
                      </div>
                    )}

                    {/* PE80 Series */}
                    <button
                      className="exitSeries"
                      onClick={() => handleSubMenuClick("PE80")}
                    >
                      PE80 Series
                    </button>
                    {activeSubMenu === "PE80" && (
                      <div className="nested-submenu open">
                        <button
                          className="narrowMenu"
                          onClick={() => handleButtonClickNarrow("PE80")}
                        >
                          Narrow <br /> (PE8300, PE8400, PE8500)
                        </button>
                        <button
                          className="wideMenu"
                          onClick={() => handleButtonClickWide("PE80")}
                        >
                          Wide <br /> (PE8600, PE8700, PE8800, PE8900)
                        </button>
                        <button
                          className="EM-Menu"
                          onClick={() => handleButtonClickEMProducts("PE80")}
                        >
                          Access Control Products <br /> (KP, IN, SN)
                        </button>
                      </div>
                    )}

                    {/* 90 Series */}
                    <button
                      className="exitSeries"
                      onClick={() => handleSubMenuClick("90")}
                    >
                      90 Series
                    </button>
                    {activeSubMenu === "90" && (
                      <div className="nested-submenu open">
                        <button
                          className="narrowMenu"
                          onClick={() => handleButtonClickNarrow("90")}
                        >
                          Narrow <br /> (9400)
                        </button>
                        <button
                          className="wideMenu"
                          onClick={() => handleButtonClickWide("90")}
                        >
                          Wide <br /> (9700, 9800, 9900)
                        </button>
                      </div>
                    )}

                    {/* Additional series buttons that do not have nested submenu */}
                    <button
                      className="exitSeries"
                      onClick={() => handleButtonClickWide("30")}
                    >
                      30 Series
                    </button>
                    <button
                      className="exitSeries"
                      onClick={() => handleButtonClickWide("20")}
                    >
                      20 Series
                    </button>
                  </div>
                )}
              </div>

              {/* Multipoints Menu with Submenu */}
              <div className="menu-item">
                <button
                  className="Multipoints"
                  onClick={() => handleMenuClick("multipoints")}
                >
                  Multipoints
                </button>
                {activeMenu === "multipoints" && (
                  <div className="submenu open">
                    <button
                      className="exitSeries"
                      onClick={() => handleButtonClickMultipoints("7000")}
                    >
                      7000 Series
                    </button>
                    <button
                      className="exitSeries"
                      onClick={() => handleButtonClickMultipoints("6100")}
                    >
                      6100 Series
                    </button>
                    <button
                      className="exitSeries"
                      onClick={() => handleButtonClickMultipoints("7300")}
                    >
                      7300 Series
                    </button>
                  </div>
                )}
              </div>

              {/* Mortise Menu with Submenu */}
              <div className="menu-item">
                <button
                  className="Mortise"
                  onClick={() => handleMenuClick("Mortise")}
                >
                  Mortise
                </button>
                {activeMenu === "Mortise" && (
                  <div className="submenu open">
                    <button
                      className="mortiseSeries"
                      onClick={() => handleSubMenuClick("7800")}
                    >
                      7800 Series
                    </button>
                    {activeSubMenu === "7800" && (
                      <div className="nested-submenu open">
                        <button
                          className="7800"
                          onClick={() => handleButtonClickMortise("7800")}
                        >
                          Standard/Electrified 7800 Series
                        </button>
                        <button
                          className="IN7900"
                          onClick={() => handleButtonClickMortise("IN7900")}
                        >
                          IN 7900 Series
                        </button>
                      </div>
                    )}
                    <button
                      className="exitSeries"
                      onClick={() => handleSubMenuClick("8200")}
                    >
                      8200 Series
                    </button>
                    {activeSubMenu === "8200" && (
                      <div className="nested-submenu open">
                        <button
                          className="8200"
                          onClick={() => handleButtonClickMortise("8200")}
                        >
                          Standard/Electrified 8200 Series
                        </button>
                        <button
                          className="wideMenu"
                          onClick={() => handleButtonClickMortise("KP8200")}
                        >
                          KP 8200 Series
                        </button>
                        <button
                          className="EM-Menu"
                          onClick={() => handleButtonClickMortise("IN8200")}
                        >
                          IN 8200 Series
                        </button>
                        <button
                          className="EM-Menu"
                          onClick={() => handleButtonClickMortise("SN8200")}
                        >
                          SN 8200 Series
                        </button>
                      </div>
                    )}
                    <button
                      className="exitSeries"
                      onClick={() => handleSubMenuClick("9200")}
                    >
                      9200 Series
                    </button>
                    {activeSubMenu === "9200" && (
                      <div className="nested-submenu open">
                        <button
                          className="narrowMenu"
                          onClick={() => handleButtonClickMortise("9200")}
                        >
                          9200 Series
                        </button>
                        <button
                          className="wideMenu"
                          onClick={() => handleButtonClickMortise("M9200")}
                        >
                          M-9200 Series
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bored Locks Menu with Submenu */}
              <div className="menu-item">
                <button
                  className="Bored"
                  onClick={() => handleMenuClick("Bored")}
                >
                  Bored Locks
                </button>
                {activeMenu === "Bored" && (
                  <div className="submenu open">
                    <button
                      className="mortiseSeries"
                      onClick={() => handleButtonClickBored("11 Line")}
                    >
                      11 Line
                    </button>
                    <button
                      className="exitSeries"
                      onClick={() => handleSubMenuClick("10X Line")}
                    >
                      10X Line
                    </button>
                    {activeSubMenu === "10X Line" && (
                      <div className="nested-submenu open">
                        <button
                          className="10X"
                          onClick={() => handleButtonClickBored("10X Line")}
                        >
                          Standard/Electrified 10X Line
                        </button>
                        <button
                          className="KP 10X"
                          onClick={() => handleButtonClickBored("KP 10X")}
                        >
                          KP 10X Line
                        </button>
                        <button
                          className="IN 10X"
                          onClick={() => handleButtonClickBored("IN 10X")}
                        >
                          IN 10X Line
                        </button>
                        <button
                          className="SN 10X"
                          onClick={() => handleButtonClickBored("SN 10X")}
                        >
                          SN 10X Line
                        </button>
                      </div>
                    )}
                    <button
                      className="exitSeries"
                      onClick={() => handleButtonClickBored("8X Line")}
                    >
                      8X Line
                    </button>
                    <button
                      className="exitSeries"
                      onClick={() => handleButtonClickBored("7 Line")}
                    >
                      7 Line
                    </button>
                    <button
                      className="exitSeries"
                      onClick={() => handleButtonClickBored("6500 Series")}
                    >
                      6500 Series
                    </button>
                    <button
                      className="exitSeries"
                      onClick={() => handleButtonClickBored("6 Line")}
                    >
                      6 Line
                    </button>
                    <button
                      className="exitSeries"
                      onClick={() => handleButtonClickBored("DL Series")}
                    >
                      DL Series
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
          {/* Bottom section with the external link button */}
          <div className="menu-bottom">
            <button className="bottom-button" onClick={handleExternalLink}>
              Go to My Tool
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
