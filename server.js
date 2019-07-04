const express = require('express')
const hbs = require('hbs');
require('./hbs/helpers');
const app = express()

//Setting port 
const port = process.env.PORT;

//middleware : reptor de todas las peticiones

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');



// express HBS Handlebars engine
app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    res.render("home", {
        nombre: 'mariano'
            //uso helpers
            //   ,anio: new Date().getFullYear()
    });
})
app.get('/about', function(req, res) {

    res.render("about", {
        //uso helpers
        //     anio: new Date().getFullYear()
    });
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port }`);
});