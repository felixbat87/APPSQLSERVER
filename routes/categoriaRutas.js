const express=require('express');
const dbCategoria = require('../controller/categoriaController');
const router = express.Router();

router.route('/categoria').get(dbCategoria.getCategoria).post(dbCategoria.postCreateCategoria).delete().put().patch()
router.route('/categoria/:id').get(dbCategoria.getCategoriaById).post().delete().put(dbCategoria.updateCategoria).patch()


module.exports = router;