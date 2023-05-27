import style from "./Cadastrar.module.css";
import Container from "../layout/Container";
import Input from "../layout/Input";
import { useState } from "react";

export default function Cadastrar() {
  // Define o estado inicial do formulário
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    localidade: "",
    contatos: "",
    setor: "",
    visao: "",
    fundada: "",
  });

  const [btnText, setBtnTexto] = useState("Enviar");

  // Atualiza o estado do formulário quando um campo é alterado
  const handleChange = (event) => {
    if (event.target.value === "contatos") {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    } else {
      const capitalizedValue =
        event.target.value.charAt(0).toUpperCase() +
        event.target.value.slice(1);
      setFormData({ ...formData, [event.target.name]: capitalizedValue });
    }
  };

  // Manipula o envio do formulário
  const handleSubmitForm = async (event) => {
    try {
      setBtnTexto("Enviando...");
      // Envia uma requisição POST para a URL especificada
      const response = await fetch("http://localhost:5000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Trata a resposta da requisição (pode ser necessário ajustar de acordo com a API)
      const data = await response.json();

      // Atualiza o estado do formulário com os dados recebidos
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className={style.father}>
        <h1>Cadastre novas empresas</h1>
        <form onSubmit={handleSubmitForm}>
          {/* Componente de entrada de texto para o nome da empresa */}
          <Input
            text="Nome da empresa:"
            placeholder="Digite o nome da empresa..."
            id="nome"
            type="text"
            name="nome"
            value={formData.nome}
            handleChange={handleChange}
          />

          {/* Componente de entrada de texto para os contatos */}
          <Input
            text="Contatos:"
            placeholder="Digite os contatos (00) 12345 6789"
            type="number"
            id="contatos"
            name="contatos"
            value={formData.contatos}
            handleChange={handleChange}
          />

          {/* Componente de entrada de texto para o local */}
          <Input
            text="Local:"
            placeholder="Digite o local..."
            type="text"
            id="localidade"
            name="localidade"
            value={formData.localidade}
            handleChange={handleChange}
          />

          {/* Componente de entrada de texto para o setor */}
          <Input
            text="Setor:"
            type="text"
            placeholder="Digite o setor..."
            id="setor"
            name="setor"
            value={formData.setor}
            handleChange={handleChange}
          />

          {/* Componente de entrada de texto para a visão */}
          <Input
            text="Visão:"
            type="text"
            placeholder="Digite a visão..."
            id="visao"
            name="visao"
            value={formData.visao}
            handleChange={handleChange}
          />

          {/* Componente de entrada de texto para a data de fundação */}
          <Input
            text="Fundação:"
            type="number"
            placeholder="Digite o ano da fundação..."
            id="fundada"
            name="fundada"
            value={formData.fundada}
            handleChange={handleChange}
          />

          {/* Botão de envio do formulário */}
          <button className={style.btn}>{btnText}</button>
        </form>
      </div>
    </Container>
  );
}
