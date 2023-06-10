import { useRef } from "react";
import style from "./Form.module.css";

export default function Form({ onEdit }) {
  const ref = useRef();

  return (
    <form ref={ref} className={style.Form}>
      <div>
        <label htmlFor="nome">nome</label>
        <input type="text" id="nome" name="nome" />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="text" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="telefone">telefone</label>
        <input type="text" id="telefone" name="telefone" />
      </div>

      <button typeof="submit">Salvar</button>
    </form>
  );
}
