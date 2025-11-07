const db=require('../config/db');

const Funcionario={
  getAll: cb => db.query('SELECT * FROM FUNCIONARIOS',cb),
  create: (data,cb)=>
    db.query('INSERT INTO Funcionarios SET ?', data,cb),
};

module.exports = Funcionario;