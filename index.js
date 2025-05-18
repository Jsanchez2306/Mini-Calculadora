const enteros = require("./enteros");
const express = require('express'); 

let numeros = enteros.numerosEnteros

const app = express(); 

app.listen(3000, () => { 

  console.log('Servidor corriendo'); 

}); 

app.get('/', (req, res) => { 

    res.send(); 
  
  }); 