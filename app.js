const express = require('express');
const app = express();
const path = require('path');
const routes = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

routes.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public'));
});

app.use((req, res, next) => {
    //configurar cabecera
    //para permitir el acceso a nuestra api de todos los dominios
    res.header('Access-Control-Allow-Origin', '*');
    //cabeceras necesarias para AJAX
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    //para salir del flujo y seguir
    next();
});


app.use('/', routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});