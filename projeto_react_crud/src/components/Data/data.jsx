// src/data/data.js
let eventos = [
    { id: 1, nome: 'Evento A', descricao: 'Descrição do Evento A', data: '2025-04-02', local: 'Local A' },
    { id: 2, nome: 'Evento B', descricao: 'Descrição do Evento B', data: '2025-04-03', local: 'Local B' },
  ];
  
  const criarEvento = (evento) => {
    evento.id = eventos.length + 1;
    eventos.push(evento);
  };
  
  const lerEventos = () => eventos;
  
  const atualizarEvento = (id, eventoAtualizado) => {
    eventos = eventos.map(evento => evento.id === id ? { ...evento, ...eventoAtualizado } : evento);
  };
  
  const removerEvento = (id) => {
    eventos = eventos.filter(evento => evento.id !== id);
  };
  
  export default {
    criarEvento,
    lerEventos,
    atualizarEvento,
    removerEvento
  };
  