import { useParams } from "react-router-dom";
import style from "./VisualizarDB.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ContatosMascara from "../mascara/ContatosMascara";
import { useEffect, useState } from "react";
import databaseLocal from "../bd/databaseLocal.json";

const VisualizarDB = () => {
  const { id, nome } = useParams(); // Obtém o parâmetro de rota 'id' usando o hook useParams()
  const idNumber = parseInt(id); // Converte o 'id' para um número inteiro
  const [database, setDatabase] = useState(); // Estado para armazenar os dados do banco de dados

  useEffect(() => {
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
        const data = await response.json(); // Converte a resposta em formato JSON
        setDatabase(data); // Atualiza o estado 'database' com os dados recebidos
        console.log(data);
      } catch (error) {
        console.log("Erro ao obter os dados", error);
      }
    };
    setDatabase(databaseLocal.usuarios);
    fetchData(); // Chama a função fetchData() quando o componente é montado
  }, []);

  return (
    <Container key={id}>
      <div className={style.father} key={id}>
        <LinkButton to="/visualizar" text="Voltar" className={style.btn} />
        <h1>
          Informações completas:
          <br />
          <span>
            {` ${nome}`}-{id}
          </span>
        </h1>

        {database &&
          database.map(
            ({
              id,
              nome,
              contatos,
              localidade,
              setor,
              visao,
              fundada,
              imagem,
            }) => {
              if (id === idNumber) {
                return (
                  <section>
                    <div key={id} className={style.info}>
                      <p>
                        <span>name:</span> {nome}
                      </p>
                      <p>
                        <span>Contatos:</span> {ContatosMascara(contatos)}
                      </p>
                      <p>
                        <span>localidade:</span> {localidade}
                      </p>
                      <p>
                        <span>setor:</span> {setor}
                      </p>
                      <p>
                        <span>visao:</span> {visao}
                      </p>
                      <p>
                        <span>fundada:</span> {fundada}
                      </p>
                    </div>
                    <section className={style.imagem}>
                      <figure>
                        <img src={imagem} alt={imagem} />
                        <figcaption>{nome}</figcaption>
                      </figure>
                    </section>
                  </section>
                );
              }
              return null;
            }
          )}
      </div>
    </Container>
  );
};

export default VisualizarDB;
