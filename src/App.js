// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductLine from './components/ProductLine';
import Stile from './components/Stile.js';
import Narrow from './components/NarrowExits.js';
import Wide from './components/WideExits.js';
import DisplayTemplates from './components/DsiplayTemplates.js'; // Import DisplayTemplates component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/display-templates" element={<DisplayTemplates />} />
        <Route path="/" element={<ProductLine />} />
        <Route path="/stile" element={<Stile />} />
        <Route path="/narrow" element={<Narrow />} />
        <Route path="/wide" element={<Wide />} />
      </Routes>
    </Router>
  );
}

export default App;
