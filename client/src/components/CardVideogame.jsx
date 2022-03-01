import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/CardVg.module.css'

export function CardVideogame({name, genres, imageUrl, id}){
    return(
        <div className={styles.card}>
            <h1 className={styles.title}>{name}</h1>
            <h3 className={styles.heading}>{genres.map((g, index)=><li key={index}>{g}</li>)}</h3>
            <img src={imageUrl} alt='videogame pic' width='350px' height='250px' className={styles.image}/>
            <Link to={`${id}`}><button className={styles.seeMore}>See more...</button></Link>
        </div>
    )
};
export default CardVideogame;