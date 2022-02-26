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
  return gamesDb;
}

const getAllVideogames = async () => {
  const apiInfo = await getApiVideogames();
  const dbInfo = await getDbVideogames();
  const format = dbInfo.map((el) => {
    return {
      id: el.id,
      name: el.name,
      releaseDate: el.releaseDate,
      rating: el.rating,
      platforms: el.platforms,
      imageUrl: el.imageUrl,
      genres: el.genres.map((genre) => genre.name),
      createdInDb: true,
    };
  });
  const result = apiInfo.concat(format);
  return result;
};

const getApiDetails = async (gameId) => {
  const api = await axios.get(
    `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
  );
  const apiDetails = await api.data;
  return {
    id: apiDetails.id,
    name: apiDetails.name,
    description: apiDetails.description_raw,
    image: apiDetails.background_image,
    releaseDate: apiDetails.released,
    rating: apiDetails.rating,
    platforms: apiDetails.platforms.map((p) => p.platform.name),
    genres: apiDetails.genres.map((g) => g.name),
  };
  //return apiDetails
};

module.exports = {
  getAllVideogames,
  getApiDetails,
};
