import style from "./Home.module.css";
import axios from "axios";
import { toast } from "react-toastify";

import ImgE from "../img/empresas.png";
import Astronaut from "../img/astronaut.svg";

import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [bussinessRandom, setBussinessRandom] = useState();

  const cumprimentoSession = Boolean(sessionStorage.getItem("cumprimento"));

  useEffect(() => {
    document.title = "Inicio - BusinessHere";

    if (!cumprimentoSession) {
      sessionStorage.setItem("cumprimento", true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUsers() {
    try {
      const res = await axios.get("http://localhost:8800");

      const data = res.data;
      const randomNum = Math.floor(Math.random() * data.length);

      const bussinessRandom = res.data[randomNum];

      setBussinessRandom(bussinessRandom);
    } catch (error) {
      toast.error("Erro ao obter usuários: " + error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <div className={style.father}>
        <h1>{!cumprimentoSession && "Bem vindo"}</h1>

        <section className={style.header}>
          <div>
            <p>
              Conheça as empresas cadastradas e descubrar mais sobre elas e seus
              negocios.
              <br />
              Aqui voce consegue descobrir, um pouco das grandezas das empresas e
              suas importancia para tudo que temos hoje.
              <br />
              <LinkButton
                text="Clique aqui"
                className={style.btn}
                to="/visualizar"
              />
            </p>
          </div>

          <div>
            <img src={ImgE} alt="imagem de empresas" />
          </div>

          <h2>O que é a Meta de uma empresa?</h2>
          <p>
            A Meta de uma empresa é uma declaração que define seu propósito
            principal, o que ela faz e quem ela atende. Ela resume o motivo pelo
            qual a empresa existe e o valor que ela busca entregar aos seus
            clientes. A Meta pode descrever os produtos ou serviços oferecidos,
            o público-alvo e os objetivos a serem alcançados.
          </p>

          <h2>O que é a Visão de uma empresa?</h2>
          <p>
            A Visão de uma empresa é uma declaração que descreve a imagem de
            longo prazo que a empresa deseja alcançar. Ela representa o estado
            futuro desejado da empresa e os objetivos de longo prazo que ela
            busca alcançar. A Visão é inspiradora e reflete os valores, a
            cultura e os ideais pelos quais a empresa se esforça. Ela orienta a
            direção estratégica da empresa e fornece um senso de propósito e
            direção.
          </p>
        </section>

        {bussinessRandom && (
          <>
            <h3 className={style.nome}>Sugestao de empresa para conhecer</h3>

            <div
              className={style.bussinessRandom}
              style={{
                backgroundImage: `url(${bussinessRandom.imagem})`,
                backgroundAttachment: "fixed",
                backgroundSize: "100%", // Porcentagem ou outro valor válido
              }}
            >
              <p>
                <span>{bussinessRandom.nome}</span>
              </p>

              <p>
                <span> {bussinessRandom.setor}</span>
              </p>

              <p>
                fundada por: <span> {bussinessRandom.fundador}</span>
              </p>

              <p>
                <span>{bussinessRandom.valores}</span>
              </p>

              <p>
                <span>{bussinessRandom.produtos}</span>
              </p>
            </div>
          </>
        )}

        <p className={style.text}>
         
        </p>

        {!cumprimentoSession && (
          <img
            src={Astronaut}
            className={style.logo}
            alt="imagem de empresas"
          />
        )}
      </div>
    </Container>
  );
}
