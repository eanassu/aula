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