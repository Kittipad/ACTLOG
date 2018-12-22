const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');    
        next();
    });

app.use(express.static(path.join(__dirname, './uploaded')));
app.use(express.static(path.join(__dirname, './../dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/v1', require('./api.js'));


app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './../dist/index.html'));
});

const server = app.listen(8082, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Running ... http://localhost%s', host, port);
})

