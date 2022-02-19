const { Genre } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");

const getGenres = async (req, res) => {
  try {
    const apiGenres = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const apiResponse = apiGenres.data.results.map((genre) => {
      return {
        id: genre.id,
        name: genre.name,
      };
    });
    apiResponse.forEach(async (genre) => {
      await Genre.findOrCreate({
        where: {
          id: genre.id,
          name: genre.name,
        },
      });
    });
    return res.send(apiResponse);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  getGenres,
};
