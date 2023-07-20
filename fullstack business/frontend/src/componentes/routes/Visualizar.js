import { Link } from "react-router-dom";
import style from "./Visualizar.module.css";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsLink } from "react-icons/bs";

import { useEffect, useState, useCallback } from "react";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import Astronaut from "../img/astronaut.svg";
import CheckMobile from "../Funcoes/CheckMobile";

import Container from "../layout/Container";

export default function Visualizar() {
  const checkMobile = useCallback(CheckMobile, []);
  const isMobile = checkMobile();

  const [arrayBd, setArrayBd] = useState([]);
  const [text, setText] = useState("Carregando....");

  useEffect(() => {
    document.title = "Visualizar - BusinessHere";
  }, []);

  async function getUsers() {
    try {
      const res = await axios.get("http://localhost:8800");
      setArrayBd(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      toast.success("Api funcionando!", {
        position: "bottom-right", // Define a posição do toast (por exemplo, no canto superior direito)
        autoClose: 5, // Define a duração do toast em milissegundos (por exemplo, 3000 = 3 segundos)
        hideProgressBar: false, // Define se a barra de progresso deve ser ocultada
        closeOnClick: true, // Define se o toast deve ser fechado ao clicar nele
        pauseOnHover: false, // Define se a contagem regressiva do tempo deve ser pausada ao passar o mouse sobre o toast
        draggable: true, // Define se o toast pode ser arrastado
        progress: undefined, // Permite personalizar a barra de progresso
      });
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getUsers();
      setText("Sem cadastros...");
    }, 300);
  }, [setArrayBd]);

  return (
    <Container>
      <div className={style.father}>
        <section className={style.header}>
          <div>
            <h1>Empresas cadastradas.</h1>
            <p>Acesse o link abaixo para ter informações completas.</p>
          </div>
          <div>
            <LinkButton
              to="/cadastrar"
              text="Cadastrar"
              className={style.btnshow}
            />
          </div>
        </section>

        {arrayBd && ( // Se os dados foram obtidos com sucesso
          <div className={style.tablediv}>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nomes</th>
                  {!isMobile && <th>Localidade</th>}
                  <th>Setor</th>
                </tr>
              </thead>
              <tbody>
                {arrayBd.map((empresa, index) => (
                  <tr key={empresa.id}>
                    <td className={style.id}>{index}</td>
                    <td>
                      <Link
                        className={style.linkName}
                        to={`/visualizar/${empresa.id}/${empresa.nome}`}
                        key={empresa.id}
                        title="Acesse aqui"
                        aria-label={`Acesse ${empresa.nome}`}
                      >
                        <BsLink className={style.icon} title="Acesse aqui" />
                        {empresa.nome.split(" ")[0]}
                      </Link>
                    </td>
                    {!isMobile && <td>{empresa.localidade}</td>}

                    <td>{empresa.setor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {arrayBd.length === 0 && (
          <>
            <h1>
              <img
                className={style.Astronaut}
                src={Astronaut}
                alt="figurinha"
              />
            </h1>
            <p> {text}...</p> <Loading />
          </>
        )}
      </div>
    </Container>
  );
}
