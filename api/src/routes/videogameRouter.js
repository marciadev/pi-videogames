const { Router } = require("express");
const { Videogame, Genre } = require("../db.js");

//const { postVideogame } = require('../controllers/videogameControllers');

const videogameRouter = Router();

//todas las requests que llegan a este archivo(que son redirigidas desde el archivo index), es porque comienzan en:
//http://localhost:3001/videogames.

//videogameRouter.post("/create", postVideogame)
videogameRouter.post("/create", async (req, res) => {
  try {
    const {
        name,
        releaseDate,
        rating,
        imageUrl,
        description,
        platforms,
        genres,
    } = req.body;
    
    const videogameCreated = await Videogame.create({
      
        name: name,
        releaseDate: releaseDate,
        imageUrl: imageUrl,
        description: description,
        rating: rating,
        platforms: platforms,
        createdInDb: true,
    
    });
    

    genres.map(async(genero)=>{
        const generoDb = await Genre.findOne({
            where: {
                id:genero
            }
        })
        await videogameCreated.addGenre(generoDb)
    })
    
    return res.send(videogameCreated);

    } catch (e) {
        console.log(e)
        return res.status(404).send(e);
    }
});

module.exports = videogameRouter;
