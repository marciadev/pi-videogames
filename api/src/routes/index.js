const { Router } = require("express");
const videogames = require('./videogamesRouter')
const videogame = require('./videogameRouter');
const genre = require('./genreRouter')
const pages = require("./paginationRouter")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogames);
router.use('/videogame', videogame)
router.use('/genres', genre);
router.use('/pages', pages)

module.exports = router;
