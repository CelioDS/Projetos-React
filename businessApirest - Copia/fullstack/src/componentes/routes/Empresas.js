import React, { useState, useEffect } from "react";

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetch("/api/empresas") // Faz uma solicitação GET para a rota /api/empresas no servidor Node.js
      .then((response) => response.json())
      .then((data) => setEmpresas(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Empresasaaa</h1>
      <ul>
        {empresas.map((empresa) => (
          <li key={empresa.id}>{empresa.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Empresas;
