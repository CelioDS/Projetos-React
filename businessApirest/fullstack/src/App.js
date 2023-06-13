import "./App.css";
// 2 reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

// 4 - navegando entre paginas
import NavBar from "./componentes/layout/NavBar";
import Footer from "./componentes/layout/Footer";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Outlet />
      <ToastContainer pauseOnHover={false} autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
      <Footer />
    </div>
  );
}

export default App;
