import express from "express";
import { getUsers } from "../controllers/user.js";

const router = express.Router();

// Cria um objeto `router` utilizando o módulo "express" para gerenciar as rotas.
// O objeto `router` é responsável por definir as rotas do aplicativo.

// Define uma rota GET ("/") que chama a função `getUsers` como controlador de rota.
// Quando essa rota for acessada com o método GET, a função `getUsers` será executada para obter os usuários.

router.get("/", getUsers);

export default router;
