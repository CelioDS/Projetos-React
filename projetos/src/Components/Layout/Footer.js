import { FaLinkedin, FaGithub, FaRegUser } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function NavBar() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaRegUser />
        </li>
      </ul>
      <p>
        <span>Const</span> &copy; 2023
      </p>
    </footer>
  );
}
