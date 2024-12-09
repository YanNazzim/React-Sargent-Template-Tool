// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductLine from "./components/ProductLine";
import ScrollToTop from "./components/scrollToTop.js";
import Stile from "./components/Stile.js";
import Narrow from "./components/NarrowExits.js";
import Wide from "./components/WideExits.js";
import ExitSeries from "./components/ExitSeries.js";
import DisplayTemplates from "./components/DsiplayTemplates.js";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer.js";
import MortiseSeries from "./components/MortiseSeries.js";
import BoredSeries from './components/BoredSeries.js'
import AuxLockSeries from './components/AuxLockSeries.js'
import Cylinders from './components/Cylinders.js'
import CylindersInfo from "./components/CylindersInfo.js";
import MultiPointSeries from'./components/MultiPointSeries.js';
import EMProducts from './components/EMProducts.js'
import HamburgerMenu from "./components/HamburgerMenu"; // Import the menu

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HamburgerMenu /> {/* Add the hamburger menu */}
      <Header /> {/* Ensure Header is part of every page */}
      <Routes>
        <Route path="/" element={<ProductLine />} />
        <Route path="/display-templates" element={<DisplayTemplates />} />
        <Route path="/stile" element={<Stile />} />
        <Route path="/narrow" element={<Narrow />} />
        <Route path="/wide" element={<Wide />} />
        <Route path="/exitSeries" element={<ExitSeries />} />
        <Route path="/multiPointSeries" element={<MultiPointSeries />} />
        <Route path="/mortiseSeries" element={<MortiseSeries />} />
        <Route path="/boredSeries" element={<BoredSeries />} />
        <Route path="/auxiliaryLocksSeries" element={<AuxLockSeries />} />
        <Route path="/Cylinders" element={<Cylinders />} />
        <Route path="/cylinders-info/:type" element={<CylindersInfo />} />
        <Route path="/em-products" element={<EMProducts />} />

      </Routes>
      <Footer /> {/* Ensure Footer is part of every page */}
    </Router>
  );
}

export default App;
