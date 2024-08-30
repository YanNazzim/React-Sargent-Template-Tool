// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductLine from './components/ProductLine';
import Stile from './components/Stile.js'; // Import your Stile component
import Narrow from './components/NarrowExits.js';
import Wide from './components/WideExits.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductLine />} />
        <Route path="/stile" element={<Stile />} />
        <Route path="/narrow" element={<Narrow />} />
        <Route path="/wide" element={<Wide />} />
      </Routes>
    </Router>
  );
}

export default App;
