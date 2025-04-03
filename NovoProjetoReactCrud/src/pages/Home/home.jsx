import CarEvento from "../../components/CarEvento/CardEvento";
import dataBase from"../../data/dataBase";

function Home () {
  const eventos = dataBase.listarEventos();
  return (
    <>
    <h1>pagina dos Eventos mais Legais do RN </h1>
  {
    eventos.map((evento) => (
      <div>
    <CardEvento key={evento.id} evento={evento} />
    </div>
    ))
  }
    <h2>eventos</h2>
    </>
  )
}
export default Home;
