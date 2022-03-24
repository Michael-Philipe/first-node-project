//importando express e atribuindo a uma constante
// const express = require('express');
import express from 'express';

// Instanciando um app do express
const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (request, response) => {
  response.status(201).json({ message: 'Hello World!' });
});

//Recebendo parametros na URL (Route Params)
app.get('/resources/:resource_id/subitens/:item_id', (req, res) => {
  const { resource_id, item_id } = req.params;

  res.json({ resource_id, item_id });
});

//Recebendo parametros na URL (Query Params)
// Os query parameters não precisam ser especificados, podem ser passados de modo livre pelo cliente e caso não sejam utilizados pelo backend são simplesmente ignorados.
app.get('/resources/query', (req, res) => {
  const queryParams = req.query;

  res.json(queryParams);
});

//acessando o corpo da reuisição
app.post('/resources', (req, res) => {
  const data = req.body;
  res.json(data);
});
//chamando a função do app que vai escutar requisições em uma determninada porta

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
