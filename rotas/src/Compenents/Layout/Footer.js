import { FaGithub, FaLinkedin, FaPortrait } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Criado e desenvolvido por Célio</h2>

      <ul className="social_list">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaPortrait />
        </li>
      </ul>
      <p>
        todos os direitos reservados <span>Celio</span>
      </p>
    </footer>
  );
}
