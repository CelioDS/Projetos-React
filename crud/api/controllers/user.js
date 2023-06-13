import { db } from "../db.js";

// Controlador de rota para obter os usuários do banco de dados
export const getUsers = (_, res) => {
  const query = "SELECT * FROM usuarios"; // Consulta SQL para selecionar todos os registros da tabela

  // Executa a consulta SQL
  db.query(query, (err, data) => {
    if (err) {
      // Em caso de erro, retorna o erro como uma resposta JSON
      return res.json(err);
    }

    // Caso contrário, se a consulta for bem-sucedida
    // Retorna os dados do resultado como uma resposta JSON com status HTTP 200
    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const query =
    "INSERT INTO usuarios(`nome`, `email`, `telefone`, `data_nascimento`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
  ];

  db.query(query, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const query =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `telefone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
  ];
  db.query(query, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("usuarios atualizados com sucesso");
  });
};

export const deleteUser = (req, res) => {
  const query = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(query, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario deletados com sucesso.");
  });
};
