const { Router } = require('express');
const { getGenres } = require('../controllers/genreControllers');
//const { getAllVideogames } = require('../controllers/videogamesControllers');

const genreRouter = Router();

genreRouter.get("/", getGenres);

// genreRouter.get("/", async (req, res) => {
//     const { name } = req.body;
//     const genres = await getGenres();
//     if (name) {
//       const genreVideogames = await genres.filter((genre) => getAllVideogames(name));
//       genreName.length
//         ? res.status(200).send(genreVideogames)
//         : res.status(404).send("Genres not found");
//     } else {
//       res.status(200).send(genreVideogames);
//     }
//   });


 module.exports = genreRouter;