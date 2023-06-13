import { useEffect, useRef } from "react";
import style from "./Form.module.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function Form({ getUsers, userEdit, setUserEdit }) {
  const ref = useRef();

  useEffect(() => {
    if (userEdit) {
      const user = ref.current;

      user.nome.value = userEdit.nome;
      user.email.value = userEdit.email;
      user.telefone.value = userEdit.telefone;
      user.data_nascimento.value = userEdit.data_nascimento;
    }
  }, [userEdit]);

  async function handleSubmit(e) {
    e.preventDefault();
    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.telefone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!!!");
    }

    if (userEdit) {
      await axios
        .put("http://localhost:8800/" + userEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.email.value = "";
    user.telefone.value = "";
    user.data_nascimento.value = "";

    setUserEdit(null);
    getUsers();
  }

  return (
    <form ref={ref} className={style.Form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">nome</label>
        <input type="text" id="nome" name="nome" />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="telefone">telefone</label>
        <input type="text" id="telefone" name="telefone" />
      </div>
      <div>
        <label htmlFor="data_nascimento">data nascimento</label>
        <input type="date" id="data_nascimento" name="data_nascimento" />
      </div>

      <button typeof="submit">Salvar</button>
    </form>
  );
}
