import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//1 - configurando router

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastrar from "./componentes/routes/Cadastrar";
import Visualizar from "./componentes/routes/Visualizar";
import Error from "./componentes/routes/Error";
import VisualizarDB from "./componentes/pages/VisualizarDB";
import Home from "./componentes/routes/Home";
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Cadastrar",
    element: <Cadastrar/>,
  }, 
  {
    path: "/Visualizar",
    lement: <Visualizar/>
  },
])
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //3- pagina de erro
    errorElement: <Error />,
    children: [
      {
        path: "/Cadastrar",
        element: <Cadastrar />,
      },
      {
        path: "/Visualizar",
        element: <Visualizar />,
      },
      {
        path: "/visualizar/:id/:nome",
        element: <VisualizarDB />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // nested routes
  // utilizado para acesar banco indentificador unico
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
