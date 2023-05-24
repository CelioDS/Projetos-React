const express = require('express');
const app = express();
const port = 5001;

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`A API está sendo executada em http://localhost:${port}`);
});
