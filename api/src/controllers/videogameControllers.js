//const { Videogame } = require("../db.js");

// const postVideogame = async(req, res)=>{
//     try {
//         const aVideogame = req.body;
//         let [newVideogame, vg] = await Videogame.findOrCreate({
//             where:{
//                 name: aVideogame.name,
//                 releaseDate:aVideogame.releaseDate,
//                 rating:aVideogame.rating,
//                 imageUrl: aVideogame.imageUrl,
//                 description:aVideogame.description,
//                 platforms:aVideogame.platforms,
//                 genres: aVideogame.genres,
//                 createdInDb:true
//             }
//             
        
//     })
//         //console.log("####newVideogame###", newVideogame)
//         //console.log("####vg###", vg)
//         await newVideogame.setGenres(aVideogame.genre)
//         return res.send(newVideogame, "created successfully!");

//     } catch (error) {
//         res.status(404).send(error)
//     }

// }

// router.post("/videogame", async (req, res) => {
//     const { name, id, description, releaseDate, rating, platforms, genre, createdInDb } = req.body;
//     const videogameCreated = await Videogame.create({
//       name,
//       id,
//       description,
//       releaseDate,
//       rating,
//       platforms,
//       createdInDb,
//     });
  
//     const genreDb = await Genre.findAll({
//       where: {
//         name: genre
//       }
//    });
//     videogameCreated.addGenres(genreDb);
//     res.send("Videogame created successfully!");
//   });

//   module.exports = {
//     postVideogame
//   }