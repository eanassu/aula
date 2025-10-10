const express=require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

router.get('/', funcionarioController.inicio);
router.get('/cadastro',funcionarioController.cadastro);
router.get('/exclusao',funcionarioController.exclusao);
router.get('/busca',funcionarioController.busca);
router.get('/lista',funcionarioController.lista);

module.exports = router;