import styles from "./NavBar.module.css";

import { BsList, BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

import LinkButton from "../layout/LinkButton";
import CheckMobile from "../Funcoes/CheckMobile";

export default function NavBar() {
  const checkMobile = useCallback(CheckMobile, []);
  const isMobile = checkMobile();

  const sizeBtn = 36;
  const colorBtn = "white";

  const [iconMenu, setIconMenu] = useState();

  const [menuUp, setMenuUp] = useState(false);
  const [menuDown, setMenuDown] = useState(null);
  const [MenuOpen, setMenuOpen] = useState(false);
  const [linkActive, setlinkActive] = useState("inicio");

  function openMenu(linkActive) {
    // Inverte o valor de MenuOpen
    setMenuOpen((prevState) => !prevState);

    setMenuUp(!menuUp);

    if (menuDown !== null) {
      // Inverte o valor de menuDown
      setMenuDown((prevState) => !prevState);
    } else {
      setMenuDown(false);
    }

    setlinkActive(linkActive);
  }

  useEffect(() => {
    if (!MenuOpen) {
      setIconMenu(<BsList color={colorBtn} size={sizeBtn} />);
    } else {
      setIconMenu(<BsXLg color={colorBtn} size={sizeBtn} />);
    }
  }, [MenuOpen]);

  // Sempre que isMobile mudar, reajusta o estado
  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
      setMenuUp(null);
      setMenuDown(null);
    }
  }, [isMobile]);

  return (
    <div className={styles.div}>
      <main>
        <nav>
          <LinkButton
            to="/"
            onClick={() => openMenu("inicio")}
            text="BusinessHere"
            className={styles.logo}
          />

          {/*ativa o MenuMobile*/}
          {isMobile && (
            <button
              className={`${styles.MenuBtn}
               ${menuUp ? styles.actives : ""} 
               ${menuUp ? "" : styles.activesInverso}`}
              onClick={openMenu}
            >
              {iconMenu}
            </button>
          )}

          <ul
            className={`
               ${styles.menuH}
               ${menuUp ? styles.expandir : null}
               ${!menuDown ? null : styles.expandirInverso}
           `}
          >
            <Link
              style={linkActive === "inicio" ? { color: "#ff9900" } : {}}
              onClick={() => openMenu("inicio")}
              className="btn"
              to="/"
            >
              Inicio
            </Link>
            <Link
              style={linkActive === "visualizar" ? { color: "#ff9900" } : {}}
              onClick={() => openMenu("visualizar")}
              className="btn"
              to="/visualizar"
            >
              Empresas
            </Link>
            <Link
              style={linkActive === "cadastrar" ? { color: "#ff9900" } : {}}
              onClick={() => openMenu("cadastrar")}
              className="btn"
              to="/cadastrar"
            >
              Cadastrar
            </Link>
          </ul>
        </nav>
      </main>
    </div>
  );
}
