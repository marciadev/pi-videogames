const { default: axios } = require('axios')
const { Router } = require('express')
const { API_KEY } = process.env

const paginationRouter = Router();

paginationRouter.get("/", async(req, res)=>{
    const from = Number(req.query.from) || 0;
    const gamesPerPage = 15;

    // const [apiGames, games] = await Promise.all([
    //     await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${from}`),
    //     await apiGames.skip(from).limit(gamesPerPage)
    // ])

     const apiGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${from}`);
     const games = await apiGames.skip(from).limit(gamesPerPage);

    res.json({
        ok: true,
        msg: 'First Pages',
        pages: {
            from,
            gamesPerPage,
            games
        }
    })
}) 

//const getGamesByPages = async (req, res) => {
    

// paginationRouter.get("/", async (req, res)=>{

//     const { page } = req.body;

//     const pagination = async () => {
//     const apiGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`);

//     if(page) {
//       const gamesPages =  apiGames.data.next
//     }


//      await apiGames.data.next;
//     return gamesPages;
// }
// })

module.exports = paginationRouter;