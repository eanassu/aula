const Funcionario=require('../models/funcionarioModel');

exports.inicio = (req,res) => res.render('funcionarios/index');

exports.cadastro = (req,res) => res.render('funcionarios/cadastro');

exports.exclusao = (req,res) => res.render('funcionarios/exclusao');

exports.busca = (req,res) => res.render('funcionarios/busca');

exports.lista = (req,res) => {
    Funcionario.getAll((err,results) => {
        if (err) 
            return res.status(500).send('Erro ao buscar Funcionários');
        res.render('funcionarios/lista',{funcionarios:results});
    });
};

function formatDateToMySQL(dateStr) {
    if (!dateStr) return null;
    const [dia,mes,ano] = dateStr.split('/');
    return ano+'-'+mes.padStart(2,'0')+'-'+dia.padStart(2,'0');
}

exports.createFuncionario = (req,res) => {
    req.body.dataAdmissao = formatDateToMySQL(req.body.dataAdmissao);
    const {re,nome,dataAdmissao,salario} = req.body;
    Funcionario.create({re,nome,dataAdmissao,salario}, err => {
        if(err) return res.status(500).send('erro no cadastro');
        res.redirect('/funcionarios')
    });
};