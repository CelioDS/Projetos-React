import { db } from "../db.js";

// Controlador de rota para obter os usuários do banco de dados
export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios"; // Consulta SQL para selecionar todos os registros da tabela

  // Executa a consulta SQL
  db.query(q, (err, data) => {
    if (err) {
      // Em caso de erro, retorna o erro como uma resposta JSON
      return res.json(err);
    }

    // Caso contrário, se a consulta for bem-sucedida
    // Retorna os dados do resultado como uma resposta JSON com status HTTP 200
    return res.status(200).json(data);
  });
};
 

