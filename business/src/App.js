import "./App.css";
// 2 reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

// 4 - navegando entre paginas
import NavBar from "./componentes/layout/NavBar";

import Footer from "./componentes/layout/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
