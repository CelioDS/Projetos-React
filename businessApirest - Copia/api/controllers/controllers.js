import { db } from "../db.js";

export const getDB = (_, res) => {
  const query = "SELECT * FROM usuarios";

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addDB = (req, res) => {
  const query =
    "INSERT INTO usuarios(`nome`,`localidade`,`site`,`setor`,`visao`,`fundador`,`anofundacao`,`imagem`,`valores`,`produtos`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.localidade,
    req.body.site,
    req.body.setor,
    req.body.visao,
    req.body.fundador,
    req.body.anofundacao,
    req.body.imagem,
    req.body.valores,
    req.body.produtos,
  ];

  db.query(query, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa criada com Sucesso...");
  });
};

export const updateDB = (req, res) => {
  const query =
    "UPDATE usuarios SET `nome` = ?,`localidade` = ?,`site` = ?,`setor` = ?,`visao` = ?,`fundador` = ?,`anofundacao` = ?,`imagem` = ?,`valores` = ?,`produtos` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.localidade,
    req.body.site,
    req.body.setor,
    req.body.visao,
    req.body.fundador,
    req.body.anofundacao,
    req.body.imagem,
    req.body.valores,
    req.body.produtos,
  ];

  db.query(query, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa atualizada com Sucesso...");
  });
};

export const deleteDB = (req, res) => {
  const query = "DELETE FROM usuarios WHERE `id` = ? ";

  db.query(query, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa deletada com Sucesso...");
  });
};
