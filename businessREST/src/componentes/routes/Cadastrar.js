import style from "./Cadastrar.module.css";
import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
import Input from "../layout/Input";
import dblocal from "../bd/db.json";
import { useState, useEffect } from "react";
import Message from "../layout/Message";

export default function Cadastrar({ dataId }) {
  const [mensagem, setMensagem] = useState();
  const [type, setType] = useState();
  const navigate = useNavigate();

  const [showText, setShowText] = useState(false);

  const [btnText, setBtnTexto] = useState("Enviar");

  function toogleText() {
    setShowText((prevState) => !prevState);
  }
  const [dataApi, setdataApi] = useState({});
  // Define o estado inicial do formulário
  const [formData, setFormData] = useState({
    id: dataId ? dataApi.id : "",
    nome: dataId ? dataApi.nome : "",
    localidade: dataId ? dataApi.localidade : "",
    site: dataId ? dataApi.site : "",
    setor: dataId ? dataApi.setor : "",
    visao: dataId ? dataApi.visao : "",
    fundador: dataId ? dataApi.fundador : "",
    anofundação: dataId ? dataApi.anofundação : "",
    imagem: dataId ? dataApi.imagem : "",
    valores: dataId ? dataApi.valores : "",
    produtos: dataId ? dataApi.produtos : "",
  });

  // Atualiza o estado do formulário quando um campo é alterado
  function handleChange(event) {
    if (event.target.value === "site") {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    } else {
      const capitalizedValue =
        event.target.value.charAt(0).toUpperCase() +
        event.target.value.slice(1);
      setFormData({ ...formData, [event.target.name]: capitalizedValue });
    }
  }

  // Manipula o envio do formulário
  async function handleSubmitForm(event) {
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
  }

  /**Atualizar  dados*/

  useEffect(() => {
    if (dataId) {
      fetch(`http://localhost:5000/empresas/${dataId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((dataReponse) => {
          setdataApi(dataReponse);
        })
        .catch((err) => console.log(err));
    }
  }, [dataId]);

  function editarApi(e) {
    fetch(`http://localhost:5000/empresas/${dataId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((err) => console.log(err));
  }

  /*
arrumar as  variaveis com os campo e valores
mostra os valores no input
mostra se os botao estiver

*/

  return (
    <Container>
      {mensagem && <Message type={type} msg={mensagem} />}
      <div className={style.father}>
        {!dataId && <h1>Cadastre novas empresas</h1>}

        <form
          onSubmit={!dataId ? handleSubmitForm : undefined}
          className={style.form}
        >
          {/* Componente de entrada de texto para o nome da empresa */}
          <Input
            text="Nome da empresa:"
            placeholder="Digite o nome da empresa..."
            id="nome"
            type="text"
            name="nome"
            value={formData.nome || dataApi.nome}
            handleChange={handleChange}
          />
          {/* Componente de entrada de texto para os site */}
          <Input
            text="site:"
            placeholder="Digite os site "
            type="text"
            id="site"
            name="site"
            value={formData.site || dataApi.site}
            handleChange={handleChange}
          />
          {/* Componente de entrada de texto para o local */}
          <Input
            text="Local:"
            placeholder="Digite o local..."
            type="text"
            id="localidade"
            name="localidade"
            value={formData.localidade || dataApi.localidade}
            handleChange={handleChange}
          />
          {/* Componente de entrada de texto para o setor */}
          <Input
            text="Setor:"
            type="text"
            placeholder="Digite o setor..."
            id="setor"
            name="setor"
            value={formData.setor || dataApi.setor}
            handleChange={handleChange}
          />
          {/* Componente de entrada de texto para a visão */}
          <Input
            text="Visão:"
            type="text"
            placeholder="Digite a visão..."
            id="visao"
            name="visao"
            value={formData.visao || dataApi.visao}
            handleChange={handleChange}
          />

          <Input
            text="fundador:"
            type="text"
            placeholder="Digite o ano da fundação..."
            id="fundador"
            name="fundador"
            value={formData.fundador || dataApi.fundador}
            handleChange={handleChange}
          />
          <Input
            text="data de  fundação"
            type="date"
            placeholder="Digite o ano da fundação..."
            id="anofundação"
            name="anofundação"
            value={formData.anofundação || dataApi.anofundação}
            handleChange={handleChange}
            className={style.data}
          />
          <Input
            text="valores:"
            type="text"
            placeholder="Digite os valores..."
            id="valores"
            name="valores"
            value={formData.valores || dataApi.valores}
            handleChange={handleChange}
          />
          <Input
            text="produtos:"
            type="text"
            placeholder="Digite os produtos..."
            id="produtos"
            name="produtos"
            value={formData.produtos || dataApi.produtos}
            handleChange={handleChange}
          />
          <Input
            text="url de imagem:"
            type="text"
            placeholder="Digite os imagem..."
            id="imagem"
            name="imagem"
            value={formData.imagem || dataApi.imagem}
            handleChange={handleChange}
          />
          {/* Botão de envio do formulário */}
          {dataId && (
            <button
              onClick={(e) => {
                e.preventDefault();
                toogleText();
                editarApi();
                setMensagem("Empresa editada");
                setType("success");
                setTimeout(() => {
                  setMensagem("");
                  setType("");
                  navigate(
                    `/visualizar/${dataId}/${formData.nome || dataApi.nome}`
                  );
                  setShowText(false); // Navega para a página anterior
                }, 1000);
              }}
              className={style.btn}
            >
              {showText ? "Salvando..." : "Salvar"}
            </button>
          )}
          {!dataId && <button className={style.btn}>{btnText}</button>}
        </form>
      </div>
    </Container>
  );
}
