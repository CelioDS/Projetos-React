import { useParams, useNavigate } from "react-router-dom";
import style from "./VisualizarDB.module.css";
import Container from "../layout/Container";
import Cadastrar from "../routes/Cadastrar";
import { BsClipboardCheck } from "react-icons/bs";
import Message from "../layout/Message";

import LinkButton from "../layout/LinkButton";
import { useEffect, useState, useCallback } from "react";
import databaseLocal from "../bd/db.json";

import CheckMobile from "../Funcoes/CheckMobile";

export default function VisualizarDB() {
  const [mensagem, setMensagem] = useState();
  const [type, setType] = useState();
  const navigate = useNavigate();
  const checkMobile = useCallback(CheckMobile, []);
  const isMobile = checkMobile();

  // estado que controla a exibição do formulário de edição do projeto
  const [editShow, setEditShow] = useState(false);
  function toogleMessage(id, nome) {
    setEditShow((prevState) => !prevState);
  }

  const anoAtual = new Date().getFullYear();

  const textCopy = isMobile ? "Copiou" : "Copiar";
  const [copy, setCopy] = useState(textCopy);

  const { id, nome } = useParams(); // Obtém o parâmetro de rota 'id' usando o hook useParams()
  const idNumber = parseInt(id); // Converte o 'id' para um número inteiro
  const [database, setDatabase] = useState(); // Estado para armazenar os dados do banco de dados

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopy("Copiando...");
    setTimeout(() => {
      setCopy(textCopy);
    }, 500);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          process.env.REACT_APP_API_URL || "http://localhost:5000/empresas";

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json(); // Converte a resposta em formato JSON
        setDatabase(data); // Atualiza o estado 'database' com os dados recebidos
      } catch (error) {
        console.log("Erro ao obter os dados", error);
      }
    };
    setDatabase(databaseLocal.empresas);
    fetchData(); // Chama a função fetchData() quando o componente é montado
  }, [editShow]);

  function removeEmpresa(id) {
    setMensagem("Empresa apagada");
    setType("error");

    fetch(`http://localhost:5000/empresas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setDatabase(database.filter((projetct) => projetct.id !== id));
      })
      .catch((err) => console.log(err));
  }

  const remove = (e) => {
    removeEmpresa(id);
    setTimeout(() => {
      setMensagem("");
      setType("");
      navigate(`/visualizar`);
    }, 1000);
    // navigate(-1); // Navega para a página anterior
  };

  return (
    <Container key={id}>
      <div className={style.father} key={id}>
        <LinkButton to="/visualizar" text="Voltar" className={style.btn} />
        <h1>
          Informações completas:
          <br />
          <span>{` ${nome}`}</span>
        </h1>

        {database &&
          database.map(
            ({
              id,
              nome,
              site,
              valores,
              produtos,
              localidade,
              setor,
              visao,
              fundador,
              anofundação,
              imagem,
            }) => {
              if (id === idNumber) {
                let ano;
                if (anofundação) {
                  ano = anofundação.split("-")[0];
                }

                return (
                  <section key={id}>
                    {<Message type={type} msg={mensagem} />}
                    <div className={style.btnCrud}>
                      <button
                        onClick={() => {
                          toogleMessage(id, nome);
                        }}
                      >
                        {!editShow ? "Editar" : "cancelar"}
                      </button>

                      <button onClick={remove}>remover</button>
                    </div>

                    {!editShow ? (
                      <main>
                        <div key={id} className={style.info}>
                          <p>
                            <span>fundada:</span>
                            <li>
                              por
                              <span className={style.fundador}>
                                {` ${fundador} `}
                              </span>
                              em
                              {` ${anofundação}`}
                              <span className={style.idade}>
                                ({anoAtual - ano} anos)
                              </span>
                            </li>
                          </p>

                          <p className={style.site}>
                            <span>site:</span>
                            <li>
                              {
                                <a
                                  href={site}
                                  target="_blank"
                                  rel="noopener nofollow noreferrer"
                                >
                                  {site.replace("Https://", " ")}
                                </a>
                              }
                              <button
                                className={style.btnCopy}
                                onClick={() => handleCopy(site)}
                              >
                                <p className={style.copy}>{copy}</p>
                                <BsClipboardCheck />
                              </button>
                            </li>
                          </p>
                          <p>
                            <span>localidade:</span>
                            <li>{localidade}</li>
                          </p>
                          <p>
                            <span>setor:</span>
                            <li>{setor}</li>
                          </p>

                          <p>
                            <span>visao:</span>
                            <li>{visao}</li>
                          </p>

                          <p>
                            <span>Valores:</span>
                            <li>{valores}</li>
                          </p>
                          <p>
                            <span>Principais Produtos:</span>
                            <li> {` ${produtos} `}</li>
                          </p>
                        </div>

                        <section className={style.imagem}>
                          <figure>
                            <img src={imagem} alt={imagem} />
                            <figcaption>{nome.split(" ")[0]}</figcaption>
                          </figure>
                        </section>
                      </main>
                    ) : (
                      <Cadastrar dataId={id} />
                    )}
                  </section>
                );
              }
              return null;
            }
          )}
      </div>
    </Container>
  );
}
