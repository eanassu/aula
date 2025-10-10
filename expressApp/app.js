var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const funcionarioRoutes=require('./routes/funcionarioRoutes');

var app = express();

app.use(logger('dev'));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use('/funcionarios',funcionarioRoutes);

app.set('view engine', 'ejs');
app.set('views','./views');

module.exports = app;

app.get('/',(req,res)=>{res.redirect('/funcionarios')});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
