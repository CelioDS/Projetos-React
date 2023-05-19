import { Link } from "react-router-dom";
import style from "./Visualizar.module.css";
import { BsLink, BsClipboardCheck } from "react-icons/bs";
import { useEffect, useState } from "react";
import Loading from "../layout/Loading";
import ContatosMascara from "../mascara/ContatosMascara";
import databaseLocal from "../bd/databaseLocal.json";
import Container from "../layout/Container";

export default function Visualizar() {
  const [copy, setCopy] = useState("Copiar");
  const [database, setDatabase] = useState(null); // Estado para armazenar os dados

  const fetchData = async () => {
    try {
      const url =
        process.env.REACT_APP_API_URL || "http://localhost:5000/usuarios";

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
      setDatabase(databaseLocal.usuarios);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopy("Copiou");
    setTimeout(() => {
      setCopy("Copiar");
    }, 500);
  };

  return (
    <Container>
      <div className={style.father}>
        <div className={style.texto}>
          <h1>Empresas cadastradas.</h1>
          <p>Acesse o link abaixo para ter informações completas.</p>
          <p>Aqui estão as empresas cadastradas</p>
        </div>

        {database ? ( // Se os dados foram obtidos com sucesso
          <div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nomes</th>
                  <th>Localidade</th>
                  <th>Contatos</th>
                </tr>
              </thead>
              <tbody>
                {database.map(({ id, nome, localidade, contatos }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      <Link to={`/visualizar/${id}/${nome}`} key={id}>
                        <BsLink className={style.icon} />
                        {nome}
                      </Link>
                    </td>
                    <td>{localidade}</td>
                    <td className={style.contatos}>
                      {ContatosMascara(contatos)}
                      <button
                        className={style.btn}
                        onClick={() => handleCopy(contatos)}
                      >
                        <p className={style.copy}>{copy}</p>
                        <BsClipboardCheck />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
