// Requiring modules
const express = require('express');
const app = express();
const mysql = require("mysql");
const path = require("path");
 
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/style.css', function(req, res){
    res.sendFile(path.join(__dirname+'/style.css'));
})

app.get('/index.js', function(req, res){
    res.sendFile(path.join(__dirname+'/index.js'));
})

// Get request
app.get('/api/map', function (req, res) {
    
    const id = req.query.id;

    // Config your database credential
    const config = {
        host: 'fimi-bd-srv1.insa-lyon.fr',
        user: 'G224_C',
        password: 'G224_C',
        database: 'G224_C_BD1'
    };
 
    const connection = mysql.createConnection({
        host: 'fimi-bd-srv1.insa-lyon.fr',
        user: 'G224_C',
        password: 'G224_C',
        database: 'G224_C_BD1'
      });
      connection.connect((err) => {
        if (err) throw err;
      });

    connection.query("SELECT coordX, coordY FROM Mesure WHERE idTrajet="+id,(err,rows)=>{
        if(err) throw err;
        res.json(rows);
    })
});
 
app.get('/map',function(req, res){
    res.render(path.join(__dirname+'/views/map.ejs'),{id:req.query.id});
})

var server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});