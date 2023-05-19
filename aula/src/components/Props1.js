import Style from './Style.module.css'

export default function Props1({ nome, idade, profissao }) {
  return (
    <div className={Style}>
      <h1>Props intermediria com referencia </h1>
      <p>nome:{nome}</p>
      <p>idade:{idade}</p>
      <p>profissao:{profissao}</p>
    </div>
  );
}
