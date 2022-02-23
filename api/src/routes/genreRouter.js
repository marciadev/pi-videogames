const { Router } = require('express');
const { getGenres } = require('../controllers/genreControllers');

const genreRouter = Router();

genreRouter.get("/", getGenres);

module.exports = genreRouter;