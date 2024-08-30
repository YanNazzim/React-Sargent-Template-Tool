// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductLine from './components/ProductLine';
import Stile from './components/Stile.js'; // Import your Stile component
import Narrow from './components/NarrowExits.js';
import Wide from './components/WideExits.js'
import Narrow8300 from './components/8300Functions.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductLine />} />
        <Route path="/stile" element={<Stile />} />
        <Route path="/narrow" element={<Narrow />} />
        <Route path="/wide" element={<Wide />} />
        <Route path="/Narrow8300" element={<Narrow8300 />} />
      </Routes>
    </Router>
  );
}

export default App;
