mysql = require('mysql2');
conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'eugenio'
});
conn.connect(err=>{
    if(err) throw err;
    console.log('conectado');
});