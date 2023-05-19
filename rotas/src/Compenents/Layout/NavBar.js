import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "../../pages/Home"; // shift + alt copia
import Contatos from "../../pages/Contato";
import Empresa from "../../pages/Empresa";
import Footer from "./Footer";
import Style from './NavBar.module.css'

export default function NavBar() {
  return (
    <div>
      <Router>
        <ul className={Style.list}>
          <li className={Style.item} >
            <Link to="/">Home</Link>
          </li>
          <li className={Style.item} >
            <Link to="/Empresa">Empresa</Link>
          </li>
          <li className={Style.item} >
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Empresa" element={<Empresa />}></Route>
          <Route path="/Contato" element={<Contatos />}></Route>
        </Routes>
        <Footer /> {/* fica fixo*/}
      </Router>
    </div>
  );
}
