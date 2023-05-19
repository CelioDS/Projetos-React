export default function Aula03() {
  const nome = "Célio";
  const newNome = nome.toUpperCase();

  const url = "https://via.placeholder.com/150/40dsff";

  return (
    // nao é necessario passar um pai
    <>
      <h1>Compenente </h1>
      <h2> Olá {newNome} </h2>
      <img src={url} alt="Minha imagem" />
    </>
  );
}
