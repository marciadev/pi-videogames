import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions";

export function DetailsVideogames(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const gameDetails = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(id));
  }, []);


  return (
    <div>
      <h1>Details</h1>
      {gameDetails ? 
        <div>
          <h3>This is {gameDetails.name}</h3>
          <img src={gameDetails.imageUrl} alt="pic detail" width='500px' height='350px'/>
          <h3>Released: {gameDetails.releaseDate}</h3>
          <h3>Rating: {gameDetails.rating}</h3>
          <h3>Genres: {gameDetails.genres}</h3>
          <h3>Platforms: {gameDetails.platforms}</h3>
          <h3>Description: </h3><p>{gameDetails.description}</p>
        </div>
      : (
        <p>Loading...</p>
      )}
      <Link to="/home">
        <button>Back</button>
      </Link>
      <script>{console.log("GameDetails " + gameDetails.genres)}</script>
    </div>
  );
}

export default DetailsVideogames;
