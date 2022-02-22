const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;
const axios = require("axios");

const getApiVideogames = async () => {
  const api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const apiVideogames = await api.data.results.map((game) => {
    return {
      id: game.id,
      name: game.name,
      releaseDate: game.released,
      rating: game.rating,
      platforms: game.platforms.map((game) => game.platform.name),
      imageUrl: game.background_image,
      genres: game.genres.map((genre) => genre.name),
    };
  });
  return apiVideogames;
};

async function getDbVideogames() {
  const gamesDb = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return gamesDb
}


// const getDescription = async (gameId) => {
//   api = await axios.get(
//     `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
//   );
//   console.log("######",api.data.description);
// };

const getAllVideogames = async () => {
  const apiInfo = await getApiVideogames();
  const dbInfo = await getDbVideogames();
  const format = dbInfo.map((el) => {
    return {
      name: el.name,
      id: el.id,
      releaseDate: el.released,
      rating: el.rating,
      platforms: el.platforms,
      imageUrl: el.background_image,
      genres: el.genres.map((genre) => genre.name),
    };
  });
  const result = apiInfo.concat(format);
  return result;
};

module.exports = {
  getAllVideogames,
};
