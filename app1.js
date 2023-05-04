require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');

const PORT = process.env.PORT;

hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine', 'hbs');



app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
})

app.get('/prueba', function (req, res) {
    const cdx = {
        'nombre': 'pepe',
        'apellido': 'Guanajuato'
    }
    res.render('prueba',cdx);
})

app.get('/miau', function (req, res) {
    res.send('Hello World :VVV');
})

app.get('*', function (req, res) {
    res.send('Página no encontrada');
})

app.listen(PORT);
console.log('Escuchando el puerto 8080')