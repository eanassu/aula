const db=require('../config/db');

const Funcionario={
    getAll: cb => db.query('SELECT * FROM FUNCIONARIOS',cb)
};

module.exports = Funcionario;