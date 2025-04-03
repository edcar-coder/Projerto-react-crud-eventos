// src/components/FormularioEvento.js
import React, { useState, useEffect } from 'react';

const FormularioEvento = ({ eventoInicial, onSubmit }) => {
  const [evento, setEvento] = useState({
    nome: '',
    descricao: '',
    data: '',
    local: '',
    ...eventoInicial
  });

  useEffect(() => {
    setEvento({
      nome: eventoInicial?.nome || '',
      descricao: eventoInicial?.descricao || '',
      data: eventoInicial?.data || '',
      local: eventoInicial?.local || '',
    });
  }, [eventoInicial]);

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setEvento(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (evento) => {
    e.preventDefault();
    onSubmit(evento);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" value={evento.nome} onChange={handleChange} />
      </div>
      <div>
        <label>Descrição:</label>
        <input type="text" name="descricao" value={evento.descricao} onChange={handleChange} />
      </div>
      <div>
        <label>Data:</label>
        <input type="date" name="data" value={evento.data} onChange={handleChange} />
      </div>
      <div>
        <label>Local:</label>
        <input type="text" name="local" value={evento.local} onChange={handleChange} />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FormularioEvento;
