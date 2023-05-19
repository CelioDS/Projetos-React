import PropsType from "prop-types";

export default function PropsTypes({ marca, lancamento }) {
  return (
    <div>
      <h1>props com tipo</h1>
      <ul>
        <li>
          {" "}
          marca:{marca} / lançamento: {lancamento}{" "}
        </li>
      </ul>
    </div>
  );
}

//definindo o tipo
PropsTypes.propTypes = {
  marca: PropsType.string.isRequired, //obrigado required
  lancamento: PropsType.number,
};

PropsTypes.defaultProps = {
  // valores padrao
  marca: "sem marca",
};
