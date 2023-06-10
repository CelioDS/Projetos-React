import style from "./Home.module.css";

import ImgE from "../img/empresas.png";
import Astronaut from "../img/astronaut.svg";

import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import { useEffect } from "react";

export default function Home() {
  const cumprimentoSession = Boolean(sessionStorage.getItem("cumprimento"));

  useEffect(() => {
    document.title = "Inicio - BusinessHere";

    if (!cumprimentoSession) {
      sessionStorage.setItem("cumprimento", true);
    }
  });

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
              Aqui voce consegue descobrir, um pouco das grandeza das empresas e
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
        </section>

        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          doloribus impedit dicta deleniti similique officia odio ratione, illo
          voluptatum? Blanditiis eaque at sequi voluptas, minima ducimus itaque
          soluta ex nisi alias id fugit dignissimos! Nulla saepe, maiores esse
          molestias quo commodi porro? Neque fugit, tempore omnis necessitatibus
          eaque molestias aut.
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
