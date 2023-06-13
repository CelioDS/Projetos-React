import style from "./Cadastrar.module.css";
//import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
import Input from "../layout/Input";
import { useState, useEffect, useRef } from "react";

import LinkButton from "../layout/LinkButton";
import { toast } from "react-toastify";
import axios from "axios";

export default function Cadastrar({ database }) {
  const ref = useRef();

  //const navigate = useNavigate();

  const [showText, setShowText] = useState(false);

  const [btnText, setBtnTexto] = useState("Enviar");
  useEffect(() => {
    document.title = "Cadastrar - BusinessHere";
  }, []);

  function toogleText() {
    setShowText((prevState) => !prevState);
  }

  useEffect(() => {
    const user = ref.current;
    if (database) {
      user.nome.value = database[0].nome;
      user.localidade.value = database[0].localidade;
      user.site.value = database[0].site;
      user.setor.value = database[0].setor;
      user.visao.value = database[0].visao;
      user.fundador.value = database[0].fundador;
      user.anofundacao.value = database[0].anofundacao;
      user.imagem.value = database[0].imagem;
      user.valores.value = database[0].valores;
      user.produtos.value = database[0].produtos;
    }
  }, [database]);

  // Manipula o envio do formulário
  async function handleSubmitForm(event) {
    event.preventDefault();

    const user = ref.current;

    if (!user.nome.value || !user.localidade.value) {
      return toast.warn("Preencha todos os campos!!!");
    }

    if (database) {
      await axios
        .put("http://localhost:8800/" + database[0].id, {
          nome: user.nome.value,
          localidade: user.localidade.value,
          site: user.site.value,
          setor: user.setor.value,
          visao: user.visao.value,
          fundador: user.fundador.value,
          anofundacao: user.anofundacao.value,
          imagem: user.imagem.value,
          valores: user.valores.value,
          produtos: user.produtos.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          localidade: user.localidade.value,
          site: user.site.value,
          setor: user.setor.value,
          visao: user.visao.value,
          fundador: user.fundador.value,
          anofundacao: user.anofundacao.value,
          imagem: user.imagem.value,
          valores: user.valores.value,
          produtos: user.produtos.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.localidade.value = "";
    user.site.value = "";
    user.setor.value = "";
    user.visao.value = "";
    user.fundador.value = "";
    user.anofundacao.value = "";
    user.imagem.value = "";
    user.valores.value = "";
    user.produtos.value = "";
    setBtnTexto("Enviando...");
    database = null;
  }

  /**Atualizar  dados*/ // SHIFT + ALT + A
  /* 
  useEffect(() => {
    if (database) {
      fetch(`http://localhost:5000/empresas/${database}`, {
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
  }, [database]);

  function editarApi(e) {
    fetch(`http://localhost:5000/empresas/${database}`, {
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
  } */

  return (
    <Container>
      <div className={style.father}>
        {!database && (
          <section className={style.header}>
            <div>
              <h1>Cadastre empresas.</h1>
              <p>preenchar com todas informações completas.</p>
            </div>
            <div>
              <LinkButton
                to="/visualizar"
                text="Empresas"
                className={style.btnshow}
              />
            </div>
          </section>
        )}

        <form
          ref={ref}
          onSubmit={!database ? handleSubmitForm : undefined}
          className={style.form}
        >
          {/* Componente de entrada de texto para o nome da empresa */}
          <Input
            text="Nome da empresa:"
            placeholder="Digite o nome da empresa..."
            id="nome"
            type="text"
            name="nome"
          />
          {/* Componente de entrada de texto para os site */}
          <Input
            text="site:"
            placeholder="Digite os site "
            type="text"
            id="site"
            name="site"
          />
          {/* Componente de entrada de texto para o local */}
          <Input
            text="Local:"
            placeholder="Digite o local..."
            type="text"
            id="localidade"
            name="localidade"
          />
          {/* Componente de entrada de texto para o setor */}
          <Input
            text="Setor:"
            type="text"
            placeholder="Digite o setor..."
            id="setor"
            name="setor"
          />
          {/* Componente de entrada de texto para a visão */}
          <Input
            text="Visão:"
            type="text"
            placeholder="Digite a visão..."
            id="visao"
            name="visao"
          />

          <Input
            text="fundador:"
            type="text"
            placeholder="Digite o ano da fundação..."
            id="fundador"
            name="fundador"
          />
          <Input
            text="anofundacao"
            type="date"
            placeholder="Digite o ano da fundação..."
            id="anofundacao"
            name="anofundacao"
            className={style.data}
          />
          <Input
            text="valores:"
            type="text"
            placeholder="Digite os valores..."
            id="valores"
            name="valores"
          />
          <Input
            text="produtos:"
            type="text"
            placeholder="Digite os produtos..."
            id="produtos"
            name="produtos"
          />
          <Input
            text="url de imagem:"
            type="text"
            placeholder="Digite os imagem..."
            id="imagem"
            name="imagem"
          />
          {/* Botão de envio do formulário */}
          {database && (
            <button
              onClick={(e) => {
                e.preventDefault();
                toogleText();
                // editarApi();

                // setTimeout(() => {

                // navigate(
                //   `/visualizar/${database}/${formData.nome || dataApi.nome}`
                // );
                // setShowText(false); // Navega para a página anterior
                // }, 1000);
              }}
              className={style.btn}
            >
              {showText ? "Salvando..." : "Salvar"}
            </button>
          )}
          {!database && <button className={style.btn}>{btnText}</button>}
        </form>
      </div>
    </Container>
  );
}
