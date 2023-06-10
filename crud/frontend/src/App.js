import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../src/components/Form.js";

function App() {
  return (
    <div className="App">
      <h1>usuarios</h1>
      <Form></Form>
      <ToastContainer
        autoClose={3000}
        position={toast.POSITION.BOTTOM_LEFT}
      ></ToastContainer>
    </div>
  );
}

export default App;
