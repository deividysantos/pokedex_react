import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from 'react';

import Home from './Views/home/home';
import Pokemon from './Views/pokemon/pokemon';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />}></Route>
      <Route path="/pokemon/:pokemonName" element={<Pokemon />}></Route>
    </Routes>
  </BrowserRouter>
);

