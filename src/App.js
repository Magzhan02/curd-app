import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AddItems from './pages/AddItems';

import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addItems" element={<AddItems />} />
        <Route path="addItems/:id/edit" element={<AddItems />} />
      </Routes>
    </div>
  );
};

export default App;
