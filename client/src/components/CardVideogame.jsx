import React from "react";

export function CardVideogame({name, genres, image}){
    return(
        <div>
            <h1>{name}</h1>
            <h3> Genres: {genres.map((g, index)=><div key={index}>{g}</div>)}</h3>
            <img src={image} alt='videogame pic' width='500px' height='350px'/>
        </div>
    )
};
export default CardVideogame;