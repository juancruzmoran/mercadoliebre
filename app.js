const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

//recurso estaticos
app.use(express.static('public'));
//rutas
app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/register', (req,res) => res.sendFile(path.join(__dirname,'views','register.html')))
//servidorAA
app.listen(port, () => console.log('Server running in http://localhost:' + port));