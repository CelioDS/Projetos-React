import style from "./Footer.module.css";
import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={style}>
      <div>
        <a href="mailto:celio01t@gmail.com">
          <BsEnvelope />
          <p>Email</p>
        </a>
        <a
          href="https://github.com/CelioDS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
          <p>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/c%C3%A9lio-da-silva-3b20131b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
          <p>Linkedin</p>
        </a>
      </div>
      <div>
        <p>
          Copyright © <span></span> <span id="ano">{anoAtual}</span> - Todos os
          direitos reservados
        </p>
        <a
          href="https://multiversion.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Criado e desenvolvido por <span>Célio</span>
        </a>
      </div>
    </footer>
  );
}
