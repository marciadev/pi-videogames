const { Router } = require('express');
const { postVideogame } = require('../controllers/videogameControllers');

const videogameRouter = Router();

//todas las requests que llegan a este archivo(que son redirigidas desde el archivo index), es porque comienzan en:
//http://localhost:3001/videogames.

videogameRouter.post("/create", postVideogame)

module.exports = videogameRouter;