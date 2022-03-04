import React from "react";
import { Link } from 'react-router-dom';
import styles from '../styles/Landing.module.css'
import img from '../resources/images/character.png'

export function LandingPage () {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to the Videogames' Cave!</h1>
            <div className={styles.description}>In this App you will find a wide variety of videogames!</div>
            <div className={styles.description}>You will be able to filter them by genres, sort them by ratings and even create your own videogame choosing different platforms.</div>
            <h2 className={styles.subtitle}>Who's ready for this adventure?</h2>
            <img src={img} alt="presentation pic"/>
            <div>
            <Link to='/home'>
                <button className={styles.buttonPlay}>PLAY</button>
            </Link>
            </div>
        </div>
    )
};

export default LandingPage;