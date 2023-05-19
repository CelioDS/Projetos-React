import { useState } from "react";

export default function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuario:${name} \nSenha:${senha} `);
    console.log("cadastrou usuário");
  }

  const [name, setName] = useState(""); //set nome
  const [senha, setSenha] = useState("");

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={cadastrarUsuario}>
        <section>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="senha"></label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite a sua senha"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </section>
        <section>
          <input type="submit" value="Cadastrar" />
        </section>
      </form>
    </div>
  );
}
