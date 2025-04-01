// src/pages/EditarEvento.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormularioEvento from '../components/FormularioEvento';
import data from '../data/data';

const EditarEvento = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const eventoAtual = data.lerEventos().find(e => e.id === parseInt(id));
  const [evento, setEvento] = useState(eventoAtual);

  useEffect(() => {
    if (eventoAtual) {
      setEvento(eventoAtual);
    }
  }, [eventoAtual]);

  const handleSubmit = (eventoAtualizado) => {
    data.atualizarEvento(parseInt(id), eventoAtualizado);
    navigate('/eventos');
  };

  return (
    <div>
      <h1>Editar Evento</h1>
      {evento ? (
        <FormularioEvento eventoInicial={evento} onSubmit={handleSubmit} />
      ) : (
        <p>Evento não encontrado!</p>
      )}
    </div>
  );
};

export default EditarEvento;
