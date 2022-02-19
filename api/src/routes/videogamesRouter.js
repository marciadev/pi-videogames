const { Router } = require("express");
const { getAllVideogames } = require("../controllers/videogamesControllers");


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
