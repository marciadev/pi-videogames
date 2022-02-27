const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;
const axios = require("axios");

const getApiVideogames = async() => {
  
  let apiVideogames = [];
  
  for (let i = 1; i <= 5; i++) {
    let api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
    api.data.results.map((game) => {
      apiVideogames.push({
        id: game.id,
        name: game.name,
        releaseDate: game.released,
        rating: game.rating,
        platforms: game.platforms.map((game) => game.platform.name),
        imageUrl: game.background_image,
        genres: game.genres.map((genre) => genre.name),
      });
    })
  }
  return apiVideogames;  
}

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
    imageUrl: apiDetails.background_image,
    releaseDate: apiDetails.released,
    rating: apiDetails.rating,
    platforms: toString(apiDetails.platforms.map((p) => p.platform.name)),
    genres: toString(apiDetails.genres.map((g) => g.name)),
  };
};

async function getDbDetails(idVg) {
  const gamesDbDetails = await Videogame.findAll({
    where: { id: idVg },
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return {
    id: gamesDbDetails[0].id,
    name: gamesDbDetails[0].name,
    description: gamesDbDetails[0].description,
    imageUrl: gamesDbDetails[0].imageUrl,
    releaseDate: gamesDbDetails[0].releaseDate,
    rating: gamesDbDetails[0].rating,
    platforms: gamesDbDetails[0].platforms,
    genres: toString(gamesDbDetails[0].genres.map((g) => g.name)),
    createdInDb: true,
  };
}

const toString = (array) => {
  let st = "";
  array.map((e) => {
    st.length === 0 ? (st += e) : (st += ", " + e);
  });
  return st;
};

module.exports = {
  getAllVideogames,
  getApiDetails,
  getDbDetails,
};
