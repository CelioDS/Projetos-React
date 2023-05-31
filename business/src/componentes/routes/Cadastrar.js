import style from "./Cadastrar.module.css";
import Container from "../layout/Container";
import Input from "../layout/Input";
import dblocal from "../bd/db.json";
import { useState } from "react";

export default function Cadastrar() {
  // Define o estado inicial do formulário
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    localidade: "",
    site: "",
    setor: "",
    visao: "",
    Fundador: "",
    anofundação: "",
    valores: "",
    produtos: "",
    imagem: "",
  });

  const [btnText, setBtnTexto] = useState("Enviar");

  // Atualiza o estado do formulário quando um campo é alterado
  const handleChange = (event) => {
    if (event.target.value === "site") {
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
      const response = await fetch("http://localhost:5000/empresas", {
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
      dblocal.append(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className={style.father}>
        <h1>Cadastre novas empresas</h1>
        <form onSubmit={handleSubmitForm} className={style.form}>
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

          {/* Componente de entrada de texto para os site */}
          <Input
            text="site:"
            placeholder="Digite os site "
            type="text"
            id="site"
            name="site"
            value={formData.site}
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
          {/* arruma esse campo de data e fundador*/}

          <Input
            text="Fundador:"
            type="text"
            placeholder="Digite o ano da fundação..."
            id="Fundador"
            name="Fundador"
            value={formData.fundada}
            handleChange={handleChange}
          />
          <Input
            text="data de  fundação"
            type="date"
            placeholder="Digite o ano da fundação..."
            id="anofundação"
            name="anofundação"
            value={formData.anofundação}
            handleChange={handleChange}
            className={style.data}
          />

          <Input
            text="valores:"
            type="text"
            placeholder="Digite os valores..."
            id="valores"
            name="valores"
            value={formData.valores}
            handleChange={handleChange}
          />
          <Input
            text="produtos:"
            type="text"
            placeholder="Digite os produtos..."
            id="produtos"
            name="produtos"
            value={formData.produtos}
            handleChange={handleChange}
          />

          {/* Botão de envio do formulário */}
          <button className={style.btn}>{btnText}</button>
        </form>
      </div>
    </Container>
  );
}
