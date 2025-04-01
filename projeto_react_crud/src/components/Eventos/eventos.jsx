// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Data/data';

const Home = () => {
  const eventos = data.lerEventos();

  return (
    <div>
      <h1>Lista de Eventos</h1>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            <h2>{evento.nome}</h2>
            <p>{evento.descricao}</p>
            <p>{evento.data} - {evento.local}</p>
            <Link to={`/editar/${evento.id}`}>Editar</Link>
            <button onClick={() => data.removerEvento(evento.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
