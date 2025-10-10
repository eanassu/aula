mysql = require('mysql');

conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'eugenio'
});
conn.connect( function(err) {
    if(err) throw err;
    conn.query("SELECT * FROM FUNCIONARIOS",
    function(err,result,fields) {
      if(err) throw err;
      console.log(result);        
    });

    conn.query(
      "INSERT INTO FUNCIONARIOS VALUES(9,'teste',null,0)",
      function(err,result) {
        if(err) throw err;
        console.log(result);        
      }); 
});