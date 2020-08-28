let express = require('express');
let router = express.Router();
let heroesController = require('../controllers/heroesController');

router.get('/', heroesController.listarJson);
router.get('/prueba', heroesController.listarHeroesBien);

module.exports = router;