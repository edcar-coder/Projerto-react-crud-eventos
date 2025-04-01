// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Eventos from './pages/Eventos';
import CadastrarEvento from './pages/CadastrarEvento';
import EditarEvento from './pages/EditarEvento';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/cadastrar" element={<CadastrarEvento />} />
        <Route path="/editar/:id" element={<EditarEvento />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
