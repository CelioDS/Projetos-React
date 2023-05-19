import Saudação from "./compenents-filho/saudação";

export default function StateLift({ setName, name }) {
  return (
    <div>
      <h1>stateLift</h1>
      <input
        type="text"
        placeholder="Digite seu nome.."
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Saudação name={name} />
    </div>
  );
}
