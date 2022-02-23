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
      <script>{console.log(id)}</script>
      <script>{console.log(gameDetails)}</script>
      {gameDetails.length > 0 ? 
        <div>
          <h3>This is {gameDetails[0].name}</h3>
          <img src={gameDetails[0].imageUrl} alt="pic detail" width='500px' height='350px'/>
          <h3>Released: {gameDetails[0].releaseDate}</h3>
          <h3>Rating: {gameDetails[0].rating}</h3>
          <h3>Genres: {gameDetails[0].genres.map((g, i)=><li key={i}>{g}</li>)}</h3>
          {/* <h3>Platforms: {gameDetails[0].platforms.map((p, i)=><li key={i}>{p}</li>)}</h3> */}
          <p>Description: {gameDetails[0].description}</p>
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
