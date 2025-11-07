const mysql=require('mysql2');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'eugenio'
});
connection.connect(err=>{
    if(err) throw err;
    console.log('conectado ao MySQL!');
});
module.exports = connection;