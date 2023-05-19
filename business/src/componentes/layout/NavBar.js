import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function NavBar() {
  const sizeBtn = 36;
  const colorBtn = "white";
  const [isMobile, setIsMobile] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);

  function openMenu() {
    setCloseMenu(!closeMenu);
    
  }

  // Verificar se está em um dispositivo móvel
  const checkMobile = () => {
    setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    setCloseMenu(false);
  };

  // Verificar se a janela é alterada
  useEffect(() => {
    // Chamar a função checkMobile quando o componente é montado
    checkMobile();

    // Adicionar um listener para o evento "resize" da janela
    window.addEventListener("resize", checkMobile);

    // Remover o listener quando o componente é desmontado
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.div}>
      <main>
        <nav>
          <h1>BusinessHere</h1>
          {isMobile && (
            <button className={styles.MenuBtn} onClick={openMenu}>
              {closeMenu ? (
                <BsXLg color={colorBtn} size={sizeBtn} />
              ) : (
                <BsList color={colorBtn} size={sizeBtn} />
              )}
            </button>
          )}
          {isMobile && closeMenu && (
            <ul className={styles.menuH}>
              <Link onClick={openMenu} className="btn" to="/">
                Inicio
              </Link>
              <Link onClick={openMenu} className="btn" to="/cadastrar">
                Cadastrar
              </Link>
              <Link onClick={openMenu} className="btn" to="/visualizar">
                Visualizar
              </Link>
            </ul>
          )}
          {!isMobile && (
            <ul>
              <Link className="btn" to="/">
                Inicio
              </Link>
              <Link className="btn" to="/cadastrar">
                Cadastrar
              </Link>
              <Link className="btn" to="/visualizar">
                Visualizar
              </Link>
            </ul>
          )}
        </nav>
      </main>
    </div>
  );
}
