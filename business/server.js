const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 5000; // Porta que a API vai utilizar

server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});
