import { Link } from "react-router-dom";
import style from "./Visualizar.module.css";
import { BsLink } from "react-icons/bs";
import { useEffect, useState, useCallback } from "react";
import Loading from "../layout/Loading";
import Astronaut from "../img/astronaut.svg";
import CheckMobile from "../Funcoes/CheckMobile";
import databaseLocal from "../bd/db.json";

import Container from "../layout/Container";

export default function Visualizar() {
  const checkMobile = useCallback(CheckMobile, []);
  const isMobile = checkMobile();
  const [database, setDatabase] = useState(null); // Estado para armazenar os dados

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
        <div className={style.texto}>
          <h1>Empresas cadastradas.</h1>
          <p>Acesse o link abaixo para ter informações completas.</p>
          <p>Aqui estão as empresas cadastradas</p>
        </div>

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
                        to={`/visualizar/${id}/${nome}`}
                        key={id}
                        title="Acesse aqui"
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

            <h1>
              <img src={Astronaut} alt="figurinha" />
            </h1>
            {database.length === 0 && (
              <>
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
