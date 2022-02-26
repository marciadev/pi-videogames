const { default: axios } = require("axios");
const { Router } = require("express");
const { getAllVideogames } = require("../controllers/videogamesControllers");
const { API_KEY} = process.env


const videogamesRouter = Router();

videogamesRouter.get("/", async (req, res) => {
      const { name } = req.query;
      const videogames = await getAllVideogames();
      if (name) {
        const videogameName = await videogames.filter((game) =>
          game.name.toLowerCase().includes(name.toLowerCase())
        );
        videogameName.length
          ? res.status(200).send(videogameName)
          : res.status(404).send("Videogame not found");
      } else {
        res.status(200).send(videogames);
      }
    });

    videogamesRouter.get("/", async (req, res) => {

      const { page, size } = req.query;

      const videogamesPages = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`);
      const result = await videogamesPages.data.results.map( game => {
        return {
          id: game.id,
          name: game.name,
          releaseDate: game.released,
          rating: game.rating,
          platforms: game.platforms.map((game) => game.platform.name),
          imageUrl: game.background_image,
          genres: game.genres.map((genre) => genre.name),
        }
      })
      if(page && size){
      const gamesByPage = await result({
        limit: size,
        offset: page * size,
      })
      res.send(gamesByPage);
      } else {
        res.status(404).send('Not found')
      }
    })
    
    videogamesRouter.get("/:id", async (req, res) => {
      const { id } = req.params;
      const videogames = await getAllVideogames();
      if (id) {
        let videogameId = await videogames.filter((game) => game.id == id);
        videogameId.length
          ? res.status(200).json(videogameId)
          : res.status(404).json("Videogame not found");
      }
    });


module.exports = videogamesRouter;
