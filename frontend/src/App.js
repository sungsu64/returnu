import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LostRegister from './pages/LostRegister';
import FoundList from './pages/FoundList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lost/register" element={<LostRegister />} />
        <Route path="/found/list" element={<FoundList />} />
      </Routes>
    </Router>
  );
}

export default App;
