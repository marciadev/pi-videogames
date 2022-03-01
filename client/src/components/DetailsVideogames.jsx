import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions";
import styles from '../styles/Details.module.css'
import Loader from "./Loader";


export function DetailsVideogames(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const gameDetails = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  return (
    <div className={styles.container}>
      {gameDetails ? 
        <div>
          <h1>{gameDetails.name}</h1>
          <img src={gameDetails.imageUrl} alt="pic detail"  width='350px' height='250px' className={styles.image}/>
          <h3>Released: {gameDetails.releaseDate}</h3>
          <h3>Rating: {gameDetails.rating}</h3>
          <h3>Genres: {gameDetails.genres}</h3>
          <h3>Platforms: {gameDetails.platforms}</h3>
          <h3>Description:</h3><span>{gameDetails.description}</span>
        </div>
      : (
        <Loader/>
      )}
      <Link to="/home">
        <button className={styles.buttonBack}>Back</button>
      </Link>
    </div>
  );
}

export default DetailsVideogames;
