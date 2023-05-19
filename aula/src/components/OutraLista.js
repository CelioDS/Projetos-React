import PropTypes from "prop-types";

export default function OutraLista({ lista }) {
  return (
    <div>
      <h1>Lista em map</h1>

      {/* Verifica se a lista não está vazia */}
      {lista.length > 0 ? (
        // Se a lista não estiver vazia, renderiza cada item usando a função map
        lista.map(
          (
            item,
            index // Resolver o problema key: usar o índice como key
          ) => <p key={index}>{`${index} ${item}`}</p>
        )
      ) : (
        // Se a lista estiver vazia, exibe uma mensagem de aviso
        <p>Sem itens na lista</p>
      )}
    </div>
  );
}

OutraLista.propTypes = {
  // Define o tipo de dados esperado para a prop "lista"
  lista: PropTypes.array,
};

OutraLista.defaultProps = {
  // Define um valor padrão para a prop "lista" caso não seja fornecida
  lista: ["html", "js", "react"],
};
