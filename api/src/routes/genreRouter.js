const { Router } = require('express');
const { getGenres, getByGenre } = require('../controllers/genreControllers');

const genreRouter = Router();

genreRouter.get("/", getGenres);

genreRouter.get("/:name", getByGenre);

module.exports = genreRouter;