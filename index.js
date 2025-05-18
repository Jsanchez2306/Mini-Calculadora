const enteros = require("./enteros");
const express = require('express');
const inventario = require("./inventario");

let numeros = enteros.numerosEnteros

const app = express();

app.listen(3000, () => {

  console.log('Servidor corriendo');

});

app.get('/Sumar', (req, res) => {

  res.send("<h1>La suma es:</h1>" + enteros.suma(numeros[0], numeros[1]));
  
});

app.get('/CargarDatos', (req, res) => {
  inventario.cargarDatos();
  res.send("<h1>Datos cargados</h1>");
});

