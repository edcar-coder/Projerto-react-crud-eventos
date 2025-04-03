import React from "react";
function CardEventos({ evento }) {
    <div>
        <img
            src={evento.imagem}
            alt={evento.nome}
        />
        <h3>{evento.nome}</h3>
        <p>{new Date(evento.data).toLocaleString("pt-BR")}</p>
        <p>{evento.local}</p>
    </div>


}

export default CardEventos;