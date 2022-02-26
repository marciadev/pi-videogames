import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions";

export function DetailsVideogames(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const gameDetails = useSelector((state) => state.details);

  const setPlatforms = () =>{
    let pf = '';
    gameDetails.platforms.map(p=>{
      pf.length === 0 ? pf += p : pf += ', ' + p 
    })
    return pf
  }

  useEffect(() => {
    dispatch(getDetails(id));
  }, []);


  return (
    <div>
      <h1>Details</h1>
      <script>{console.log(gameDetails)}</script>
      {gameDetails ? 
        <div>
          <h3>This is {gameDetails.name}</h3>
          <img src={gameDetails.createdInDb ? gameDetails.imageUrl : gameDetails.image} alt="pic detail" width='500px' height='350px'/>
          <h3>Released: {gameDetails.releaseDate}</h3>
          <h3>Rating: {gameDetails.rating}</h3>
          {/* <h3>Genres: {gameDetails.genres.map((g, i)=><li key={i}>{g}</li>)}</h3> */}
          {/* <h3>Platforms: {gameDetails.createdInDb ? gameDetails.platforms : setPlatforms()} </h3> */}
          {/* <h3>Platforms: {setPlatforms()} </h3> */}
          <p>Description: {gameDetails.description}</p>
        </div>
      : (
        <p>Loading...</p>
      )}
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default DetailsVideogames;
