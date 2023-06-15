import { Link } from "react-router-dom";
import style from "./Visualizar.module.css";

import { BsLink } from "react-icons/bs";

import { useEffect, useState, useCallback } from "react";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import Astronaut from "../img/astronaut.svg";
import CheckMobile from "../Funcoes/CheckMobile";
import databaseLocal from "../bd/db.json";

import Container from "../layout/Container";

export default function Visualizar() {
  const checkMobile = useCallback(CheckMobile, []);
  const isMobile = checkMobile();
  const [database, setDatabase] = useState(null); // Estado para armazenar os dados

  useEffect(() => {
    document.title = "Visualizar - BusinessHere";
  }, []);

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

      const data = await response.json();
      setDatabase(data);
    } catch (error) {
      //console.log("Erro ao obter os dados", error);
      setDatabase(databaseLocal.empresas);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

        {database ? ( // Se os dados foram obtidos com sucesso
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
                {database.map(({ id, nome, localidade, setor }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      <Link
                        className={style.linkName}
                        to={`/visualizar/${id}/${nome}`}
                        key={id}
                        title="Acesse aqui"
                        aria-label={`Acesse ${nome}`}
                      >
                        <BsLink className={style.icon} title="Acesse aqui" />
                        {nome}
                      </Link>
                    </td>
                    {!isMobile && <td>{localidade}</td>}

                    <td>{setor}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {database.length === 0 && (
              <>
                <h1>
                  <img src={Astronaut} alt="figurinha" />
                </h1>
                <p>Sem cadastros...</p> <Loading />
              </>
            )}
          </div>
        ) : (
          <>
            <p>Carregando dados...</p>
            <Loading />
          </>
        )}
      </div>
    </Container>
  );
}
