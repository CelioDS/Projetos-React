import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import style from "./Grid.module.css";

export default function Grid({ arrayBd, setArrayBd, setUserEdit }) {
  async function handleEdite(usuario) {
    setUserEdit(usuario);
  }

  async function handleDelete(id) {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = arrayBd.filter((user) => user.id !== id);
        setArrayBd(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
    setUserEdit(null);
  }

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>nome</th>
          <th>email</th>
          <th>telefone</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {arrayBd.map((usuario, i) => (
          <tr key={i}>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
            <td>{usuario.telefone}</td>

            <td>
              <FaEdit onClick={() => handleEdite(usuario)} />
            </td>
            <td>
              <FaTrash onClick={() => handleDelete(usuario.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
