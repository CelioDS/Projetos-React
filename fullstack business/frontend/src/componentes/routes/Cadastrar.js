import style from "./Cadastrar.module.css";
import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
import Input from "../layout/Input";
import { useState, useEffect, useRef } from "react";

import LinkButton from "../layout/LinkButton";
import { toast } from "react-toastify";
import axios from "axios";

export default function Cadastrar({ getDataBase }) {
  const ref = useRef();
  const navigate = useNavigate();
  const [nomeDB, setNomeDB] = useState(getDataBase && getDataBase[0].nome);
  const [showText, setShowText] = useState(false);
  const [btnText, setBtnText] = useState("Enviar");

  useEffect(() => {
    document.title = "Cadastrar - BusinessHere";
  }, []);

  useEffect(() => {
    const user = ref.current;
    if (getDataBase) {
      user.nome.value = getDataBase[0].nome;
      user.localidade.value = getDataBase[0].localidade;
      user.site.value = getDataBase[0].site;
      user.setor.value = getDataBase[0].setor;
      user.visao.value = getDataBase[0].visao;
      user.fundador.value = getDataBase[0].fundador;
      user.anofundacao.value = getDataBase[0].anofundacao;
      user.imagem.value = getDataBase[0].imagem;
      user.valores.value = getDataBase[0].valores;
      user.produtos.value = getDataBase[0].produtos;
    }
  }, [getDataBase]);

  function toogleText() {
    setShowText((prevState) => !prevState);
  }

  // Manipula o envio do formulário
  async function handleSubmitForm(event) {
    event.preventDefault();

    const user = ref.current;

    if (!user.nome.value || !user.localidade.value) {
      return toast.warn("Preencha todos os campos!!!");
    }

    if (getDataBase) {
      await axios
        .put("http://localhost:8800/" + getDataBase[0].id, {
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
    setBtnText("Enviando...");
    getDataBase = null;
  }

  async function editarApi(e) {
    const user = ref.current;
    await axios
      .put("http://localhost:8800/" + getDataBase[0].id, {
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

  function handleChange(e) {
    setNomeDB(e.target.value);
  }

  return (
    <Container>
      <div className={style.father}>
        {!getDataBase && (
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
          onSubmit={!getDataBase ? handleSubmitForm : undefined}
          className={style.form}
        >
          {/* Componente de entrada de texto para o nome da empresa */}
          <Input
            text="Nome da empresa:"
            placeholder="Digite o nome da empresa..."
            id="nome"
            type="text"
            name="nome"
            value={getDataBase && nomeDB}
            onChange={handleChange}
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
          {getDataBase && (
            <button
              onClick={(e) => {
                e.preventDefault();
                toogleText();
                editarApi();
                navigate(`/visualizar/${getDataBase[0].id}/${nomeDB}`);
                setTimeout(() => {
                  setShowText(false); // Navega para a página anterior
                  window.location.reload();
                }, 1500);
              }}
              className={style.btn}
            >
              {showText ? "Salvando..." : "Salvar"}
            </button>
          )}
          {!getDataBase && <button className={style.btn}>{btnText}</button>}
        </form>
      </div>
    </Container>
  );
}
