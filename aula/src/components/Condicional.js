import { useState } from "react";

export default function Condicional() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function EnviarEmail(e) {
    e.preventDefault();
    console.log(`Seu email ${email}`);
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail("");
  }

  return (
    <div>
      <h1>Cadastre seu Email</h1>
      <form>
        <input
          type="emaisl"
          placeholder="Digite seu email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={EnviarEmail}>
          Enviar email
        </button>

        {userEmail && (
          <>
            <p>O email do usuario e: {userEmail}</p>
            <button onClick={limparEmail}>Limpar email</button>
          </>
        )}
      </form>
    </div>
  );
}
