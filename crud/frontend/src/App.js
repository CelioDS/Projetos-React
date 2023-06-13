import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../src/components/Form.js";
import Grid from "./components/Grid";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [arrayBd, setArrayBd] = useState([]);
  const [userEdit, setUserEdit] = useState(null);

  async function getUsers() {
    try {
      const res = await axios.get("http://localhost:8800");
      setArrayBd(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [setArrayBd]);

  return (
    <div className="App">
      <Form getUsers={getUsers} userEdit={userEdit} setUserEdit={setUserEdit} />

      <Grid
        arrayBd={arrayBd}
        setArrayBd={setArrayBd}
        setUserEdit={setUserEdit}
      />

      <ToastContainer
        autoClose={1000}
        position={toast.POSITION.BOTTOM_LEFT}
      ></ToastContainer>
    </div>
  );
}

export default App;
