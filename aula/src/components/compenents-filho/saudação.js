export default function Saudação({ name }) {
  function MsgSaudacao(nome) {
    return name && <p>OLÁ: {nome}, Saudação!!! </p>;
  }
  return <>{MsgSaudacao(name)}</>;
}
