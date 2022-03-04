const { Router } = require("express");
const { getAllVideogames, getApiDetails, getDbDetails } = require("../controllers/videogamesControllers");

const videogamesRouter = Router();

videogamesRouter.get("/", async (req, res) => {
  const { name } = req.query;
  const videogames = await getAllVideogames();
  if (name) {
    const videogameName = videogames.filter((game) =>
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

  let vg 
  id.length > 6 ? vg = await getDbDetails(id) : vg = await getApiDetails(id)
  vg ? res.status(200).json(vg) : res.status(404).json("Videogame not found")

});


module.exports = videogamesRouter;
