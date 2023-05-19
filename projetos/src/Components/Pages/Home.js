import style from "./home.module.css";
import saving from "../../img/savings.svg";

import LinkButton from "../Layout/LinkButton";

export default function Home() {
  return (
    <section className={style.home_container}>
      <h1>
        Bem vindo <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!!</p>
      <LinkButton to="/NewProject" text="Criar Projeto"></LinkButton>
      <img src={saving} alt="costs" />
    </section>
  );
}
