import Button from "./compenents-filho/Button";

export default function Evento({ numero }) {
  function Evento() {
    console.log(`ativou ${numero}`);
  }
  function Eventos() {
    console.log(`Primeiro evento \nAtivou ${numero}`);
  }

  function segundoEventos() {
    console.log(`Segundo Evento \nAtivou ${numero}`);
  }
  return (
    <div>
      <h1>Evento</h1>
      <p>Clique para disparar um evento</p>
      <Button text="BTNCompenetsFilho" event={Eventos} />
      <Button text="BTNCompenetsFilho 2 " event={segundoEventos} />
      <button className="btn" onClick={Evento}>
        click here
      </button>
    </div>
  );
}
