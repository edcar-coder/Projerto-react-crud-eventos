// data.js
import { v4 as uuidv4 } from "uuid";

const eventos = [
  {
    id: uuidv4(),
    local: 'conferência Teste',
    descricao: "Evento sobre tecnologia a games",
    data: "2025-06-28",
    imagem: "https://cdn-icons-png.flaticon.com/512/6078/6078414.png",
  }
];

function criarEvento(evento) {
  evento.id = eventos.length + 1;
  eventos.imagem = evento.imagem || "https://cdn-icons-png.flaticon.com/512/6078/6078414.png",
    eventos.push(evento);
};

function listarEventos() {
  return eventos;
}
function editarEvento(id, eventoAtualizado) {
  const index = eventos.findIndex(evento => evento.id == id);
  if (index !== -1) {
    eventos[index] = { ...eventos[index], ...eventoAtualizado }
    eventos[index].imagem = eventoAtualizado.imagem || "https://cdn-icons-png.flaticon.com/512/6078/6078414.png",
   eventos[index.id = uuidv4()]} 
};
function buscarEventoId(id) {
  return eventos.find(evento => eventos.id === id);
};

function atualizarEvento(id, eventoAtualizado) {
  eventos = eventos.map(evento => evento.id === id ? { ...evento, ...eventoAtualizado } : evento);
};

function deletarEvento(id) {
  const index = eventos.findIndex(evento => evento.id == id);
  if (index !== -1) {
    eventos.slice(index, 1);
  }
};

export default {
  criarEvento,
  listarEventos,
  editarEvento,
  buscarEventoId,
  atualizarEvento,
  deletarEvento
};



