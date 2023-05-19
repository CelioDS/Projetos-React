import { useState } from "react";
import "./App.css";
import Aula03 from "./components/aula03";
import Props from "./components/Props";
import Props1 from "./components/Props1";
import PropsTypes from "./components/PropsTypes";
import Evento from "./components/Evento";
import Form from "./components/Form-useState";
import Condicional from "./components/Condicional";
import OutraLista from "./components/OutraLista";
import StateLift from "./components/StateLift";

function App() {
  const lista = ["sql", "python", "php"];
  const lista2 = [];
  const [name, setName] = useState();

  return (
    <main className="App">
      <StateLift setName={setName} name={name}></StateLift>

      <OutraLista lista={lista} />
      <OutraLista lista={lista2} />
      <OutraLista />
      <Condicional></Condicional>
      <Form />
      <Evento numero="1"></Evento>
      <Evento numero="2"></Evento>

      <Aula03></Aula03>
      <Props nome="celio" idade="24" />
      <Props1 nome="celio" idade="24" profissao="programador" />
      <PropsTypes marca={"Gol"} lancamento={1998} />
      <PropsTypes marca={"Gol"} lancamento={1998} />
      <PropsTypes />
    </main>
  );
}

export default App;
