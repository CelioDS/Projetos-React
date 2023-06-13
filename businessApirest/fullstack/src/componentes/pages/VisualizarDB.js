import { useParams, useNavigate } from "react-router-dom";
import style from "./VisualizarDB.module.css";
import Container from "../layout/Container";
import Cadastrar from "../routes/Cadastrar";
import { BsClipboardCheck } from "react-icons/bs";

import LinkButton from "../layout/LinkButton";
import { useEffect, useState, useCallback } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CheckMobile from "../Funcoes/CheckMobile";

export default function VisualizarDB() {
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
  const [database, setDatabase] = useState([]); // Estado para armazenar os dados do banco de dados

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopy("Copiando...");
    setTimeout(() => {
      setCopy(textCopy);
    }, 500);
  };

  async function getUsers() {
    try {
      const res = await axios.get("http://localhost:8800");
      const data = res.data.filter((item) => item.id === idNumber);

      setDatabase(data);
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function removeEmpresa(id) {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newBD = database.filter((empresa) => empresa.id !== id);
        setDatabase(newBD);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
  }

  const remove = () => {
    removeEmpresa(id);
    setTimeout(() => {
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
              anofundacao,
              imagem,
            }) => {
              if (id === idNumber) {
                let ano;
                if (anofundacao) {
                  ano = anofundacao.split("-")[0];
                }

                return (
                  <section key={id}>
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
                              {` ${anofundacao}`} (
                              <span className={style.idade}>
                                {anoAtual - ano} anos
                              </span>{" "}
                              )
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
                      <Cadastrar getDataBase={database} />
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
