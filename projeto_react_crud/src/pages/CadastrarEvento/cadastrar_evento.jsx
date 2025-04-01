// src/pages/CadastrarEvento.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormularioEvento from '../components/FormularioEvento';
import data from '../data/data';

const CadastrarEvento = () => {
  const navigate = useNavigate();

  const handleSubmit = (evento) => {
    data.criarEvento(evento);
    navigate('/eventos');
  };

  return (
    <div>
      <h1>Cadastrar Novo Evento</h1>
      <FormularioEvento onSubmit={handleSubmit} />
    </div>
  );
};

export default CadastrarEvento;
