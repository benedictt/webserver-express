const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers.js');

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('Hello World')
    
    res.render('home',{
        nombre: 'Benedictt',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    //res.send('Hello World')
    
    res.render('about',{
        anio: new Date().getFullYear()
    });
});


app.get('/data', (req, res) => {
    res.send('Hola Data')
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});