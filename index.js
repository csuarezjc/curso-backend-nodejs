const express = require('express');
const app = express();
const port = 3000;

const routeApi = require('./routes');

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routeApi(app);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
