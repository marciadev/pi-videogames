import React from "react";
import { Link } from "react-router-dom";

export function CardVideogame({name, genres, imageUrl, id}){
    return(
        <div>
            <Link to={`${id}`}>
            <h1>{name}</h1>
            </Link>
            <h3> Genres: {genres.map((g, index)=><div key={index}>{g}</div>)}</h3>
            <img src={imageUrl} alt='videogame pic' width='500px' height='350px'/>
        </div>
    )
};
export default CardVideogame;