const express = require('express');
const app = express();
const path = require('path');
const routes = express.Router();

routes.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});




app.use('/', routes);
app.listen(process.env.port || 3000);

console.log('Server en puerto 3000');